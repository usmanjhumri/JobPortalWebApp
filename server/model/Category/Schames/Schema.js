import mongoose from "mongoose";
const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});
export default Schema;
