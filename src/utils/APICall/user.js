import APIs from "../APIRoutes";
import axios from "axios";

const PostUserData = async (data) => {
    const response = await axios.post(`${APIs.host}/User`,data)
    return response;
  };
  const GetEmailUserData = async (email) => {
    const response = await axios.get(`${APIs.host}/email?email=${email}`)
    return response;
  };
  const GetContactData = async () => {
    const response = await axios.get(`${APIs.host}/Users`)
    return response;
  };
  
  const User = {
    PostUserData,
    GetEmailUserData,
    GetContactData
  };
  
  export default User;