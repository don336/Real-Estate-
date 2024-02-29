import mongoose from "mongoose";
const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connect;
