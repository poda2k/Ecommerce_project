import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
import { env } from "process";

const connection = new Sequelize({
  dialect: "postgres",
  host: "0.0.0.0",
  port: 6000,
  username: "root",
  password: "root",
  database: "test_db",
});

export default connection;
