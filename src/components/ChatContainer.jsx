import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import Requests from "../utils/APICall/massage"
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HubConnectionBuilder } from '@microsoft/signalr';



export default function ChatContainer({ selectuser }) {
  const [currentuserid, setCurrentuserid] = useState(undefined)
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [ connection, setConnection ] = useState(null);

// users message api call
  const GetUsersMessage = async ()=>{
    const currentUserId = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    ).id;
    setCurrentuserid(currentUserId);
    const users = `${currentUserId},${selectuser.id}`;
  try {
    const response = await Requests.GetMessageData(users);
    if (response.status === 200) {
        setMessages(response.data);
    } else {
      console.log(response.data);
    }
  } catch (error) {
    if (error) {
      console.log(error.response);
    }
  }
}

  // Delete massage 
 const handleDelete = async (id)=>{
  try {
    const response = await Requests.DeleteMessage(id);
    if (response.status === 200) {
      //signalr hubs send massage
  try {
    await connection.send('SendMessage', {massage: "deleted massage", users: `${currentuserid},${selectuser.id}`,timestamp:`${Date.now()}`});
  }
catch(e) {
    console.log(e);
}
      toast.error("Massage deleted successfully")
    } else {
      console.log(response.data);
    }
  } catch (error) {
    if (error) {
      console.log(error.response);
    }
  }
 }

  const handleSendMsg = async (msg) => {
    // send massage to api 
    try {
      const response = await Requests.PostMessageData({massage: msg, users: `${currentuserid},${selectuser.id}`,timestamp:`${Date.now()}`});
      if (response.status === 201) {
        toast.success("massage send")
      } else {
        console.log(response.data);
      }
    } catch (error) {
      if (error) {
        console.log(error.response);
      }
}
//signalr hubs send massage
  try {
      await connection.send('SendMessage', {massage: msg, users: `${currentuserid},${selectuser.id}`,timestamp:`${Date.now()}`});
console.log("send massage")
    }
  catch(e) {
      console.log(e);
  }
  };
  //selected user massag api call
  useEffect(()=>{
    GetUsersMessage();
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  },[selectuser])

  useEffect(async() => {
     // connent to chathub
    const newConnection = new HubConnectionBuilder()
        .withUrl(`https://localhost:7117/chatHub`)
        .withAutomaticReconnect()
        .build();

    setConnection(newConnection);
}, []);
// start connection and users massages api call for every message send
useEffect(() => {
  if (connection) {
      connection.start()
          .then(result => {
              console.log('Connected!');

              connection.on('ReceiveMessage', message => {
                GetUsersMessage();
                scrollRef.current?.scrollIntoView({ behavior: "smooth" });
              });
          })
          .catch(e => console.log('Connection failed: ', e));
  }
}, [connection]);

  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img
              src={`data:image/svg+xml;base64,${selectuser.avatar}`}
              alt=""
            />
          </div>
          <div className="username">
            <h3>{`${selectuser.firstname} ${selectuser.lastname}`}</h3>
          </div>
        </div>
        <Logout />
      </div>
      <div className="chat-messages">
        {messages.map((message,index) => {
          return (
            <div ref={scrollRef} key={index}>
              <div
                className={`message ${
                  parseInt(message.users.split(",")[0]) === currentuserid ? "sended" : "recieved"
                }`}
              >
                <div className="content ">
                  <p>{message.massage}</p>
                </div>
                <div className="delete" onClick={()=> handleDelete(message.id)}>Delete</div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
      <ToastContainer />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .delete{
      font-size: 10px;
      color: #f9f9f9;
      padding-left: 1rem;
      cursor: pointer;
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;
