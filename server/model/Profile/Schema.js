import mongoose from "mongoose";
const Schema = mongoose.Schema;

const personalinfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
});
const EducationSchema = new mongoose.Schema({
  degree: {
    type: String,
  },
  institude: {
    type: String,
  },
  ontained: {
    type: String,
  },
  total: {
    type: String,
  },
  grade: {
    type: String,
  },
  passingdate: {
    type: String,
  },
});
const SkillSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  level: {
    type: String,
  },
});
const experienceSchema = new mongoose.Schema({
  job: {
    type: String,
  },
  institude: {
    type: String,
  },
  startingyear: {
    type: String,
  },
  endingyear: {
    type: String,
  },
});

const ProfileSchema = new mongoose.Schema({
  personalInformation: personalinfoSchema,
  education: [EducationSchema],
  experience: [experienceSchema],
  skills: [SkillSchema],
  userID: {
    type: Schema.Types.ObjectId,
    ref: "user",
    unique: true,
    required: true,
  },
});
export default ProfileSchema;
