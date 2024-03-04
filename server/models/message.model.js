import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  conversionId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Message", messageSchema);
