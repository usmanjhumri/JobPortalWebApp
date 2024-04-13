import CategoryModal from "../../model/Category/Modal.js";

const getdata = async (req, res) => {
  try {
    console.log(req.body);
    const result = await CategoryModal.find();
    console.log(result);
    res.send({
      isSuccess: true,
      message: "Data Fetch Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const postCategory = async (req, res) => {
  try {
    const result = await new CategoryModal(req.body);
    const savedData = await result.save();
    console.log(savedData);
    res.send({
      isSuccess: true,
      message: "Data Added Successfully",
      data: savedData,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteCategory = async (req, res) => {
  try {
    const result = await CategoryModal.findByIdAndDelete(req.params.id);
    console.log(result);
    res.send({
      isSuccess: true,
      message: "Data Deleted Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const CatController = {
  getdata,
  postCategory,
  deleteCategory,
};
export default CatController;
