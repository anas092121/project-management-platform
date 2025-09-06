import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Mongo Db Connected");
  } catch (error) {
    console.error("❌ Mondo DB Connection Error!", error);
    process.exit(1);
  }
};

export default connectDB;
