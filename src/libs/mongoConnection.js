import mongoose from "mongoose";

export const connectionMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    mongoose.connection.asPromise();
  }
  return await mongoose.connect(process.env.MONGO_URI);
};
