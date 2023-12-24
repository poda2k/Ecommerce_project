import { Sequelize } from "sequelize";
import dotenv from "dotenv";
// import {db_connection} from "../secrets" ;
dotenv.config();
const connection = new Sequelize({
  username: process.env.USER_NAME,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  dialect: "postgres",
});

export default connection;
