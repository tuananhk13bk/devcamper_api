import mongoose from "mongoose";

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`Database connected`);
};

export default connectDb;
