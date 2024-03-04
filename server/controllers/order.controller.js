import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

class OrderController {
  static createOrder = async (req, res, next) => {
    try {
      const gig = await Gig.findById(req.params.id);

      if (!gig) {
        return next(createError(404, "Gig not found"));
      }

      const newOrder = new Order({
        gigId: gig._id,
        img: gig.cover,
        title: gig.title,
        buyerId: req.userId,
        sellerId: gig.userId,
        price: gig.price,
        payment_intent: "paymentIntent.id",
      });
      await newOrder.save();

      res.status(200).send("Success");
    } catch (error) {
      next(error);
    }
  };
  static getOrders = async (req, res, next) => {
    try {
      const query = {
        ...(!req.isSeller ? { buyerId: req.userId } : { sellerId: req.userId }),
        isCompleted: true,
      };

      console.log("Query:", query);

      const orders = await Order.find(query);
      //   console.log(orders);
      console.log("orders:", orders);
      res.status(200).send(orders);
    } catch (error) {
      next(error);
    }
  };
}

export default OrderController;
