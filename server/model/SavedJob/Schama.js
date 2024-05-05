import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SaveJobSchema = new mongoose.Schema({
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "jobs",
    },
  ],
  userID: {
    type: Schema.Types.ObjectId,
    ref: "user",
    unique: true,
    required: true,
  },
});
export default SaveJobSchema;
