import axiosInstance from "../../Utils/AxiosInstance";
export const CheckUserAuth = async () => {
  let snackBarData = {};
  try {
    let response = await axiosInstance.get("/user/userlogged");

    if (response.data?.usertype === "admin") {
      snackBarData = {
        type: "success",
        message: "user varified successfully",
        openToast: true,
      };
    } else {
      snackBarData = {
        type: "error",
        message: "user varified failed",
        openToast: true,
      };
    }
    return { ...response, snackBarData };
  } catch (error) {
    snackBarData = {
      type: "error",
      message: "something went wrong",
      openToast: true,
    };
    return { ...error?.response, snackBarData };
  }
};
