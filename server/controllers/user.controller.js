import User from "../models/user.model.js";
import createError from "../utils/createError.js";

class UserController {
  static deleteUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user || req.userId !== user._id.toString()) {
        return next(createError(403, "Your can delete only your account!"));
      }

      // Now that the token is verified and user exists, you can proceed with the deletion
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send("Account deleted successfully");
    } catch (error) {
      next(createError(500, "Internal Server Error"));
    }
  };
  static getUser = async (req, res) => {
    const user = await User.findById(req.params.id);

    res.status(200).send(user);
  };
}

export default UserController;
