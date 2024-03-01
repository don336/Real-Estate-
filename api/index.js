import express from "express";
import connect from "./middleWare/dbConnect.js";
import userRouter from "./src/routes/user.route.js";
import AuthRouter from "./src/routes/auth.route.js";

const app = express();
app.use(express.json());
connect();
app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", AuthRouter);

export default app;
