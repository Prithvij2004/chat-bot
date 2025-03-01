import { DataTypes } from "sequelize";

export const messages = (sequelize) => {
  return sequelize.define("Message", {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    }, 
    chatId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: 'chats',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    sender: {
      type: DataTypes.ENUM('user', 'assistant'),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    tableName: "messages",
    schema: "public"
  }); 
}
