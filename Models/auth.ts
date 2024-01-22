import sequelize from "./databaseConnection";
import { Model, DataTypes } from "sequelize";

class Users extends Model {
  public id!: number;
  public user_name!: string;
  public adminId!: number;
  public email!: string;
  public password!: string;
  public isAdmin!: Boolean;
  public Address!: string;
  public imgurl!: string;
  public city!: string;
  public country!: string;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgurl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Users",
  }
);

export default Users;
