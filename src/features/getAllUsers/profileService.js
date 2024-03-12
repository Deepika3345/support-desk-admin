import axios from "axios";

const API_URL = "/api/admin";
const getAllProfiles = async (token) => {

    const option = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  const response = await axios.get(API_URL + "/profile",option);
  // console.log(response);
  return response.data;
};


const profileServices = {
  getAllProfiles,
};
export default profileServices;
