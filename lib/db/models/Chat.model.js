import { DataTypes } from "sequelize";

export const chats = (sequelize) => {
  return sequelize.define("Chat", {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    tableName: "chats",
    schema: "public"
  }); 
};
