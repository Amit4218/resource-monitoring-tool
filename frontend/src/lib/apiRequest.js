import axios from "axios";
import { BASE_API_URL } from "@/config/enviromentVariable.js";

axios.defaults.withCredentials = true;

export const sendGetRequest = async (urlPoint) => {
  try {
    const response = await axios.get(`${BASE_API_URL}${urlPoint}`);

    return response;
  } catch (error) {
    console.error("APi Error Get: ", error.message);
  }
};

export const sendPostRequest = async (Data = null, urlPoint) => {
  try {
    const response = await axios.post(`${BASE_API_URL}${urlPoint}`, Data);

    return response;
  } catch (error) {
    console.error("APi Error Post: ", error.message);
  }
};

export default { sendGetRequest, sendPostRequest };
