// import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  try {
    if (!token) {
      return next(createError(401, "You are not authenticated!"));
    }
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
      if (err) {
        return next(createError(401, "Invalid token"));
      }
      req.userId = payload.id;
      req.isSeller = payload.isSeller;
    });
    next();
  } catch (error) {
    return next(createError(401, "Internal Server Error"));
  }
};

export default verifyToken;
