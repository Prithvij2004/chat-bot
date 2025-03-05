import { db } from ".";

async function createChat(chatId, title) {
  const chat = await db.Chat.create({ id: chatId, name: title });
  return chat.toJSON()
}

async function getChats() {
  return await db.Chat.findAll({ raw: true });
}

async function createMessage(chatId, content, role) {
  const message = await db.Message.create({ chatId: chatId, content: content, role: role })
  return message.toJSON()
}

async function getChatbyId(id) {
  const chat = await db.Chat.findByPk(id, { raw: true });
  return chat;
}

async function getMessagesByChatId(id) {
  const messages = await db.Message.findAll({
    where: { chatId: id },
    raw: true
  });
  return messages;
}

export {
  createChat,
  getChats,
  createMessage,
  getChatbyId,
  getMessagesByChatId
}
