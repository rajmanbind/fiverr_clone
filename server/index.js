import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import reviewRoute from "./routes/review.route.js";
import orderRoute from "./routes/order.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const PORT = process.env.PORT || 8000;
const server = express();

server.use(cors({ origin: "http://localhost:3000", credentials: true }));
server.use(cookieParser());
server.use(express.json());
server.use("/api/auths", authRoute);
server.use("/api/users", userRoute);
server.use("/api/gigs", gigRoute);
server.use("/api/reviews", reviewRoute);
server.use("/api/orders", orderRoute);

server.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).send(errorMessage);
});

connectDB(process.env.DATABASE_URL).then(() => {
  server.listen(PORT, () => {
    console.log(`Express server is running... ${PORT}`);
  });
});
