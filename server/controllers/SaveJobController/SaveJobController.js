import SaveJobModals from "../../model/SavedJob/Modal.js";

const GetSavedJobs = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const result = await SaveJobModals.find({ userID: id });
    //   .populate("userID")
    //   .populate("jobs");
    console.log(result);
    res.send({
      isSuccess: true,
      message: "data fetch Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const AddSavedJobs = async (req, res) => {
  try {
    let found = await SaveJobModals.findOne({ userID: req.body.userID });
    if (!found) {
      const savejobs = new SaveJobModals(req.body);
      const result = await savejobs.save();
      res.send({
        isSuccess: true,
        message: "Profile Saved Successfully",
        data: result,
      });
    } else {
      let found = await SaveJobModals.updateOne(
        { userID: req.body.userID },
        {
          $push: {
            jobs: req.body.jobs,
          },
        }
      );
      res.send({
        isSuccess: true,
        message: "jobs Updated Successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const RemoveSavedJobs = async (req, res) => {
  try {
    let result = await SaveJobModals.updateOne(
      { userID: req.body.userID },
      { $pull: { jobs: req.body.jobs } } , // item(s) to match from array you want to pull/remove
      { multi: true }
    );
    res.send({
      isSuccess: true,
      message: "jobs Updated Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const SavedJobController = {
  GetSavedJobs,
  RemoveSavedJobs,
  AddSavedJobs,
};
export default SavedJobController;
