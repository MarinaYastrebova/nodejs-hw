import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  console.log('MONGO_URL:', process.env.MONGO_URL);
  await mongoose.connect(process.env.MONGO_URL);
  console.log('✅ MongoDB connection established successfully');
};
