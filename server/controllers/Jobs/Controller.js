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
const ApplyJob = async (req, res) => {
  try {
    console.log(req.body);
    let check = await JobModal.findOne({ _id: req.body.jobId });
    let found = await check?.applications?.includes(req.body.profileID);
    if (found) {
      return res.send({
        isSuccess: true,
        message: "You have already applied for this job",
        status: "error",
      });
    } else {
      let data = await JobModal.updateOne(
        { _id: req.body.jobId },
        {
          $push: {
            applications: req.body.profileID,
          },
        }
      );
      return res.send({
        isSuccess: true,
        message: "You have Successfully applied for this job",
        status: "success",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const GetJobApplications = async (req, res) => {
  try {
    console.log(req.params.id);
    const result = await JobModal.findOne({ _id: req.params.id }).populate(
      "applications"
    );
    res.send({
      isSuccess: true,
      message: "data fetched successfully",
      status: "success",
      data: result?.applications,
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
  ApplyJob,
  GetJobApplications,
};
export default JobController;
