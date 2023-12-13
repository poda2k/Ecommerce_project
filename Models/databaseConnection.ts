import { Sequelize } from "sequelize";
import {config} from "dotenv";
import {db_connection} from "../secrets" ;

config() ;


const connection = new Sequelize({
    username :db_connection.USER_NAME ,
    database : db_connection.DB_NAME ,
    password :db_connection.PASSWORD,
    host : db_connection.HOST ,
    port : db_connection.PORT ,
    dialect : 'postgres'
}
);


export default connection ;