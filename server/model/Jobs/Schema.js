import mongoose from "mongoose";
const Schema = mongoose.Schema;
const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salaryfrom: {
    type: String,
    required: true,
  },
  salaryto: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "categories",
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  lastdate: {
    type: String,
    required: true,
  },
  jobtype: {
    type: String,
    required: true,
    default: "full time",
  },
  desc: {
    type: String,
    required: true,
  },
  applications: [
    {
      type: Schema.Types.ObjectId,
      ref: "profile",
      unique: true,
    },
  ],
});
export default JobSchema;
