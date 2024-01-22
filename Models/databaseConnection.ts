import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
import { env } from "process";
import {db_connection} from "../secrets" ;

const connection = new Sequelize({
  dialect: "postgres",
  host: db_connection.HOST,
  port: db_connection.PORT,
  username: db_connection.USER_NAME,
  password: db_connection.PASSWORD,
  database: db_connection.DB_NAME,
});

export default connection;
