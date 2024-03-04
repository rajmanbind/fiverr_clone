import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DATABASE_NAME = {
      dbName: "fiver_clone",
    };
    await mongoose.connect(DATABASE_URL, DATABASE_NAME);
    console.log("Connected to mongooDB!...");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
