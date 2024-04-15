import mongoose from "mongoose";
import JobSchema from "./Schema.js";

const JobModal = mongoose.model("jobs", JobSchema);
export default JobModal;
