import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  amount: { type: Number, required: true },
  address: { type: String, required: true },
  item: [  // Changed back to "item" to match existing data
    {
      productId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true }
    }
  ],
  status: {
    type: String,
    required: true,
    default: 'Order Placed',
  },
  date: { type: Date, default: Date.now }
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);