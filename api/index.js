import express from "express";
import connect from "./middleWare/dbConnect.js";
import userRouter from "./routes/user.route.js";
const app = express();
connect();
app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.use("/api/user", userRouter);

export default app;
