import express from "express";
// import { db_connection } from './secrets';
import * as dotenv from "dotenv";
import connection from "./Models/databaseConnection";
import Products from "./Models/Products";
import Categories from "./Models/Categories";
import ProductsRoutes from "./Routes/productsRoutes";
import userAuth from "./Routes/usersauth";
// import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const port = process.env.APP_PORT;

//Utilities//

// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Utilities//

// RELATIONS //

Categories.hasMany(Products, { foreignKey: "cat_id" });
Products.belongsTo(Categories, { foreignKey: "cat_id" });

// RELATIONS //

//Routes//

// app.use("/api", user);
app.use("/products", ProductsRoutes);
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
    console.log("error in database connection : " + err);
  });
