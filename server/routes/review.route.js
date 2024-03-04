import express from "express";
import verifyToken from "../middlewares/jwt.js";
import ReviewController from "../controllers/review.controller.js";
const router = express.Router();

router.post("/", verifyToken, ReviewController.createReivew);
router.get("/:id", ReviewController.getReviews);
router.delete("/:id", ReviewController.deleteReivew);

export default router;
