import { Sequelize } from 'sequelize';
import pg from 'pg'

import { messages } from './models/Message.model';
import { chats } from './models/Chat.model';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectModule: pg,
  dialect: 'postgres',
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
// sequelize.sync({ force: false });

export const db = {
  ...models,
  sequelize,
  Sequelize
}
