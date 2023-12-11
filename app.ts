import express from "express";
import * as dotenv from "dotenv";
import bodyParser = require("body-parser");
import user from "./Routes/users";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const port = process.env.PORT || 3000;

// app.use("/", (req, res) => {
//   try {
//     res.send("Hello eccomerce");
//   } catch (error) {}
// });
app.use("/api", user);

app.listen(port, () => {
  console.log("listening on port : ", port);
});
