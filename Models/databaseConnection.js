"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const secrets_1 = require("../secrets");
const connection = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: secrets_1.db_connection.HOST,
    port: secrets_1.db_connection.PORT,
    username: secrets_1.db_connection.USER_NAME,
    password: secrets_1.db_connection.PASSWORD,
    database: secrets_1.db_connection.DB_NAME,
});
exports.default = connection;
