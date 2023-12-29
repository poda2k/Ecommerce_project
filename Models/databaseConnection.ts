import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
import {db_connection} from "../secrets" ;
// dotenv.config();
const connection = new Sequelize({
  username: db_connection.USER_NAME,
  database: db_connection.DB_NAME,
  password: db_connection.PASSWORD,
  host: db_connection.HOST,
  port: 5432,
  dialect: "postgres",
});



export default connection;
