import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";

export default function Chat() {
  const navigate = useNavigate();
  const [selectuser, setSelectuser] = useState(undefined);
  useEffect(async () => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    } 
  }, []);
  const handleselectedUser = (selectUser) => {
    setSelectuser(selectUser);
  };
  return (
    <>
      <Container>
        <div className="container">
          <Contacts classNam="constract" selectedUser={handleselectedUser} />
          {selectuser === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer selectuser={selectuser}/>
          )}
          </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
  @media screen and (min-width: 300px) and (max-width: 719px) {
    .container {
      font-size: 9px;
      grid-template-columns: 20% 80%;
    }
    
  }
  
`;
