import { db } from ".";

async function createChat(title) {
  const chat = await db.Chat.create({ name: title });
  return chat.toJSON()
}

async function getChats() {
  return await db.Chat.findAll({ raw: true });
}

async function createMessage(chatId, content, sender) {
  const message = await db.Message.create({ chatId: chatId, content: content, sender: sender })
  return message.toJSON()
}

async function getChatbyId(id) {

  return await db.Message.findAll(
    { where: { chatId: id }, order: [['createdAt', 'ASC']] },
    { raw: true }
  );
}

export {
  createChat,
  getChats,
  createMessage,
  getChatbyId
}
