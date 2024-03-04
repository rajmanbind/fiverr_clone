import express from "express";
import userController from "../controllers/user.controller.js";
import verifyToken from "../middlewares/jwt.js";

const router = express.Router();

router.delete("/:id", verifyToken, userController.deleteUser);
router.get("/:id", userController.getUser);

export default router;
