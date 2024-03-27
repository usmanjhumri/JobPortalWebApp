import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("db not connected", error);
  }
};

export default connectDB;
