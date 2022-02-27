import apiClient from "../../../shared/helper/apiClient";

export const getAllUsers = async () => {
  return await apiClient().get("users");
};
