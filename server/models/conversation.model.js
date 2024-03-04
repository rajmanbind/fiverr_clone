import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  sellerId: {
    type: String,
    required: true,
  },
  buyerId: {
    type: String,
    required: true,
  },
  readByBuyer: {
    type: Boolean,
    required: true,
  },
  lastMessage: {
    type: String,
    required: false,
  },
});
export default mongoose.model("Conversation", conversationSchema);
