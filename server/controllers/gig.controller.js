import mongoose from "mongoose";
import createError from "../utils/createError.js";
import Gig from "../models/gig.model.js";
import gigModel from "../models/gig.model.js";
class GigController {
  static createGig = async (req, res, next) => {
    if (!req.isSeller) {
      return next(createError(403, "only sellers can create a gig"));
    }
    const newGig = new Gig({
      userId: req.userId,
      ...req.body,
    });

    try {
      const savedGig = await newGig.save();
      res.status(201).json(savedGig);
    } catch (error) {
      next(error);
    }
  };
  static deleteGig = async (req, res, next) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return next(createError(400, "Invalid Gig ID"));
        // return res.status(400).send("Invalid Gig ID");
      }
      const gig = await Gig.findById(req.params.id);
      if (!gig) {
        return next(createError(404, "Gig not found"));
      }
      if (req.userId !== gig.userId) {
        return next(createError(403, "you can delete only your gig!"));
      }
      await Gig.findByIdAndDelete(req.params.id);
      res.status(200).send("Gig has been deleted!");
    } catch (error) {
      next(error);
    }
  };
  static getGig = async (req, res, next) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return next(createError(400, "Invalid Gig ID"));
      }
      const gig = await Gig.findById(req.params.id);
      if (!gig) {
        return next(createError(404, "Gig not found"));
      }
      res.status(200).send(gig);
    } catch (error) {
      next(error);
    }
  };
  static getGigs = async (req, res, next) => {
    const q = req.query;
    const filters = {
      ...(q.cat && { cat: q.cat }),
      ...(q.userId && { userId: q.userId }),
      ...((q.min || q.max) && {
        price: { ...(q.min && { $gt: q.min }), ...(q.max && { $lt: q.max }) },
      }),
      ...(q.search && { title: { $regex: q.search, $options: "i" } }),
    };

    try {
      const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });
      res.status(200).send(gigs);
    } catch (error) {
      next(error);
    }
  };
}

export default GigController;
