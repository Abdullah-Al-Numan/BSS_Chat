import APIs from "../APIRoutes";
import axios from "axios";

  const PostMessageData = async (data) => {
    const response = await axios.post(`${APIs.host}/Massage/`,data);
    return response;
  };
  
  const GetMessageData = async (users) => {
    const response = await axios.get(`${APIs.host}/users/Massage?users=${users}`);
    return response;
  };

  const DeleteMessage = async (id) => {
    const response = await axios.delete(`${APIs.host}/Massage/${id}`);
    return response;
  };
  
  
  const Message = {
    PostMessageData,
    GetMessageData,
    DeleteMessage
  };
  
  export default Message;