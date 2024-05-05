import mongoose from "mongoose";
import SaveJobSchema from "./Schama.js";

const SaveJobModals = mongoose.model("savejobs", SaveJobSchema);
export default SaveJobModals;
