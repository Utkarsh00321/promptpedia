import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      dbName: "prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("Mongodb connected!");
  } catch (error) {
    console.log(error);
  }
};
