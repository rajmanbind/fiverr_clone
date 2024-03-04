import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
class AuthController {
  static register = async (req, res, next) => {
    try {
      const genSalt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, genSalt);
      const newUser = new User({ ...req.body, password: hashPassword });
      await newUser.save();
      //   console.log(dd);
      res.status(201).send("user created!");
    } catch (err) {
      next(err);
    }
  };
  static login = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.body.username });

      if (!user) {
        return next(createError(404, "User not found!"));
      }
      const isCorrect = await bcrypt.compare(req.body.password, user.password);
      if (!isCorrect) {
        return next(createError(400, "Wrong password or username!"));
      }
      const token = jwt.sign(
        { id: user._id, isSeller: user.isSeller },
        process.env.JWT_KEY,
        { expiresIn: "30d" }
      );
      const { password, ...info } = user._doc;

      res
        .cookie("accessToken", token, { httpOnly: true })
        .status(200)
        .send(info);
    } catch (error) {
      next(createError(400, "Something went wrong!"));
    }
  };
  static logout = async (req, res) => {
    res
      .clearCookie("accessToken", { sameSite: "none", secure: true })
      .send("User has been logged out.");
  };
}

export default AuthController;
