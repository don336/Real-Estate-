import User from "../src/models/user.model.js";
import bcrypt from "bcrypt";

class AuthController {
  static async signUp(req, res, next) {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        return res.status(400).json({ message: "All Fields are required" });
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const newUser = new User({ username, email, password: hashedPassword });
      const saveUser = await newUser.save();

      if (saveUser) {
        return res.status(201).json({ message: "User Saved to DB" });
      } else {
        throw new Error("Something Went Wrong ");
      }
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
