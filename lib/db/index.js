import Sequelize from 'sequelize';
import pg from 'pg';

import { messages } from './Message.model.js';
import { chats } from './Chat.model.js';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: pg,
  logging: false,
});

const models = {
  Chat: chats(sequelize),
  Message: messages(sequelize),
}

models.Chat.hasMany(models.Message, { foreignKey: 'chatId', onDelete: 'CASCADE' });
models.Message.belongsTo(models.Chat, { foreignKey: 'chatId' });

// This will create the tables in the DATABASE
// Do not use this in production
sequelize.sync({ force: false });

export const db = {
  ...models,
  sequelize,
  Sequelize
}
