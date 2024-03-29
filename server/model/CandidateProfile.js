import mongoose from "mongoose";

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true, trim: true },
  portfolio: { type: String, trim: true },
  rdoc: { type: String, required: true },
  phone: { type: String, required: true, trim: true },
  salary: { type: String, required: true, trim: true },
  hearabout: { type: String, trim: true },
  coverletter: { type: String, trim: true },
});

const UserApplication = mongoose.model("candidateApplication", CandidateSchema);

export default UserApplication;
