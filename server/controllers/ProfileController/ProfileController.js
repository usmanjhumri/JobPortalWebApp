import ProfileModal from "../../model/Profile/Modal.js";

const GetProfile = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const result = await ProfileModal.findOne({ userID: id }).populate(
      "userID"
    );
    res.send({
      isSuccess: true,
      message: "data fetch Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const UpdateProfile = async (req, res) => {
  try {
    // const saveJobs = new ProfileModal(req.body);
    // const result = await saveJobs.save();
    // res.send({
    //   isSuccess: true,
    //   message: "Data Saved Successfully",
    //   data: result,
    // });
    let found = await ProfileModal.findOne({ userID: req.body.userID });
    if (!found) {
      const saveProfile = new ProfileModal(req.body);
      const result = await saveProfile.save();
      res.send({
        isSuccess: true,
        message: "Profile Saved Successfully",
      });
    } else {
      let found = await ProfileModal.updateOne(
        { userID: req.body.userID },
        {
          $set: {
            education: req.body.education,
            skills: req.body.skills,
            personalInformation: req.body.personalInformation,
            experience: req.body.experience,
          },
        }
      );
      console.log(found);
      res.send({
        isSuccess: true,
        message: "Profile Updated Successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const DeleteProfile = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const result = await ProfileModal.findByIdAndDelete(id);
    res.send({
      isSuccess: true,
      message: "Data Deleted Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const ProfileController = {
  GetProfile,
  DeleteProfile,
  UpdateProfile,
};
export default ProfileController;
