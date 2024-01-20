import express from "express";
// import { db_connection } from './secrets';
// import * as dotenv from "dotenv";
import connection from "./Models/databaseConnection";

//    MODELS IMPORTS   //

import Products from "./Models/Products";
import Categories from "./Models/Categories";
import Cart from "./Models/Cart";
import Prod_Cart from "./Models/Prod_Cart";

//    MODELS IMPORTS  //
//    ROUTES IMPORTS  //

import productsRoutes from "./Routes/productsRoutes";
import userAuth from "./Routes/usersauth";
import categoriesRoute from "./Routes/CategoryRoutes";
//    ROUTES IMPORTS  //

// import cors from "cors";
import bodyParser from "body-parser";
import Users from "./Models/auth";

// dotenv.config();
const app = express();
const port = 5000;

//Utilities//

// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Utilities//

// RELATIONS //

Categories.hasMany(Products, { foreignKey: "cat_id" });
Products.belongsTo(Categories, { foreignKey: "cat_id" });
Cart.belongsToMany(Products, { through: Prod_Cart });

Users.hasMany(Cart, { foreignKey: "user_id" });
Cart.belongsTo(Users, { foreignKey: "user_id" });

Products.belongsToMany(Cart, { through: Prod_Cart });

// RELATIONS //

//Routes//

// app.use("/api", user);
app.use("/products", productsRoutes);
app.use("/categories", categoriesRoute);
app.use("/auth", userAuth);

//Routes//

connection
  .sync()
  .then((result) => {
    console.log("GOOD TO GO");
    app.listen(port);
  })
  .catch((err) => {
    console.log("===============");
    console.log(port);
    console.log(err);

    console.log("error in database connection : " + err);
  });
