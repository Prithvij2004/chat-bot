import { DataTypes } from "sequelize";

export const messages = (sequelize) => {
  return sequelize.define("Message", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    }, 
    chatId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'chats',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    role: {
      type: DataTypes.ENUM('user', 'assistant'),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    tableName: "messages",
    schema: "public"
  }); 
}
