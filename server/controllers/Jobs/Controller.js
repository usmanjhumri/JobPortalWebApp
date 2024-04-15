import JobModal from "../../model/Jobs/Modal.js";

const GetJobs = async (req, res) => {
  try {
    const result = await JobModal.find().populate("category");

    res.send({
      isSuccess: true,
      message: "data fetch Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const PostJobs = async (req, res) => {
  try {
    const saveJobs = new JobModal(req.body);
    const result = await saveJobs.save();
    res.send({
      isSuccess: true,
      message: "Data Saved Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const DeleteJobs = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const result = await JobModal.findByIdAndDelete(id);
    res.send({
      isSuccess: true,
      message: "Data Deleted Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const JobController = {
  GetJobs,
  DeleteJobs,
  PostJobs,
};
export default JobController;
