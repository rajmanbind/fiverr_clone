import express from "express";
import verifyToken from "../middlewares/jwt.js";
import GigController from "../controllers/gig.controller.js";
const router = express.Router();

router.post("/", verifyToken, GigController.createGig);
router.delete("/:id", verifyToken, GigController.deleteGig);
router.get("/single/:id", GigController.getGig);
router.get("/", GigController.getGigs);

export default router;
