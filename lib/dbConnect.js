import mongoose from "mongoose";

const MONGO_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

export default dbConnect;
