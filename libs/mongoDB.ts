import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("MongoDB connected!");
  } catch (error) {
    console.log("MongoDB connection failed!", error);
  }
};

export default connectToDB;
