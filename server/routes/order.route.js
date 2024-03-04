import express from "express";
import verifyToken from "../middlewares/jwt.js";
import OrderController from "../controllers/order.controller.js";
const router = express.Router();

router.post("/:id", verifyToken, OrderController.createOrder);
router.get("/", verifyToken, OrderController.getOrders);

export default router;
