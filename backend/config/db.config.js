import mongoose from "mongoose";

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connect to Db");
    })
    .catch((error) => {
      console.error("Error connecting Db", error.message);
    });
};

export default connectDb;
