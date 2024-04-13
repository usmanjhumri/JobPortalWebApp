import mongoose from "mongoose";
import Schema from "./Schames/Schema.js";
const CategoryModal = mongoose.model("categories", Schema);
export default CategoryModal;
