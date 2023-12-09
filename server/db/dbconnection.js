import { connect } from "mongoose";
import { config } from "dotenv";

config();

export const dbConnect = async () => {
  try {
    await connect("mongodb://localhost:27017/chat");
  } catch (error) {
    console.error(`Error in connecting to MongoDB. Error: ${error.message}`);
  }
};
