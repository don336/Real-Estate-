import express from "express";
import connect from "./middleWare/dbConnect.js";
const app = express();
connect();
app.listen(3000, () => {
  console.log("server running on port 3000");
});
