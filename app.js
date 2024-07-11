"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { db_connection } from './secrets';
// import * as dotenv from "dotenv";
const databaseConnection_1 = __importDefault(require("./Models/databaseConnection"));
//    MODELS IMPORTS   //
const Products_1 = __importDefault(require("./Models/Products"));
const Categories_1 = __importDefault(require("./Models/Categories"));
const Cart_1 = __importDefault(require("./Models/Cart"));
const Prod_Cart_1 = __importDefault(require("./Models/Prod_Cart"));
const favorites_1 = __importDefault(require("./Models/favorites"));
const auth_1 = __importDefault(require("./Models/auth"));
const Payment_1 = __importDefault(require("./Models/Payment"));
const orders_1 = __importDefault(require("./Models/orders"));
const prod_Order_1 = __importDefault(require("./Models/prod_Order"));
//    MODELS IMPORTS  //
//    ROUTES IMPORTS  //
const productsRoutes_1 = __importDefault(require("./Routes/productsRoutes"));
const usersauth_1 = __importDefault(require("./Routes/usersauth"));
const favoritesRoutes_1 = __importDefault(require("./Routes/favoritesRoutes"));
const categoryRoutes_1 = __importDefault(require("./Routes/categoryRoutes"));
const cartRoutes_1 = __importDefault(require("./Routes/cartRoutes"));
const categoryRoutes_2 = __importDefault(require("./Routes/categoryRoutes"));
//    ROUTES IMPORTS  //
// import cors from "cors";
const body_parser_1 = __importDefault(require("body-parser"));
const secrets_1 = require("./secrets");
// dotenv.config();
const app = (0, express_1.default)();
const port = 5000;
//Utilities//
// app.use(cors);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
//Utilities//
// RELATIONS //
Categories_1.default.hasMany(Products_1.default, { foreignKey: "cat_id" }); //one to many
Products_1.default.belongsTo(Categories_1.default, { foreignKey: "cat_id" }); //one to many
Cart_1.default.belongsToMany(Products_1.default, { through: Prod_Cart_1.default }); // many to many
auth_1.default.hasMany(Cart_1.default, { foreignKey: "user_id" });
Cart_1.default.belongsTo(auth_1.default, { foreignKey: "user_id" });
Products_1.default.belongsToMany(Cart_1.default, { through: Prod_Cart_1.default }); // many to many
auth_1.default.hasMany(favorites_1.default, { foreignKey: "user_id" }); //one to many
favorites_1.default.belongsTo(auth_1.default, { foreignKey: "user_id" }); //one to many
Payment_1.default.belongsTo(auth_1.default, { foreignKey: "customerId" }); //one to many
auth_1.default.hasMany(Payment_1.default, { foreignKey: "customerId" }); //one to many
auth_1.default.hasMany(orders_1.default, { foreignKey: "customerId" }); //one to many
orders_1.default.belongsTo(auth_1.default, { foreignKey: "customerId" }); //one to many
orders_1.default.belongsToMany(Products_1.default, { through: prod_Order_1.default }); //many to many
orders_1.default.belongsTo(Payment_1.default, { foreignKey: "paymentId" }); //one to many
Payment_1.default.hasMany(orders_1.default, { foreignKey: "paymentId" }); //one to many
// RELATIONS //
//Routes//
// app.use("/api", user);
app.use("/products", productsRoutes_1.default);
app.use("/categories", categoryRoutes_2.default);
app.use("/auth", usersauth_1.default);
app.use("/favorites", favoritesRoutes_1.default);
app.use("/categories", categoryRoutes_1.default);
app.use("/cart", cartRoutes_1.default);
//Routes//
databaseConnection_1.default
    .sync()
    .then((result) => {
    app.listen(secrets_1.db_connection.APP_PORT);
    console.log("GOOD TO GO");
})
    .catch((err) => {
    console.log("===============");
    console.log(port);
    console.log(err);
    console.log("error in database connection : " + err);
});
