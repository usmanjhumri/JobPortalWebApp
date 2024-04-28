import mongoose from "mongoose";
import ProfileSchema from "./Schema.js";

const ProfileModal = mongoose.model("profile", ProfileSchema);
export default ProfileModal;
