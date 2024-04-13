import axiosInstance from "../../Utils/AxiosInstance";
export const PostCategories = async (data) => {
  let snackBarData = {};
  try {
    let response = await axiosInstance.post("category/add/", data);

    snackBarData = {
      type: response?.data.IsSuccess ? "success" : "error",
      message: response.data.message,
      openToast: true,
    };

    return { ...response, snackBarData };
  } catch (error) {
    snackBarData = {
      type: "error",
      message: error?.response.data.Message,
      openToast: true,
    };
    return { ...error?.response, snackBarData };
  }
};
