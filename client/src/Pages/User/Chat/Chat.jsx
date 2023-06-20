import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAllUserApi } from "../../../API/User/ApiCalls";
import { io } from "socket.io-client";
import Contacts from "../../../Components/Chat/Contacts";
import Welcome from "../../../Components/Chat/Welcome";
import ChatContainer from "../../../Components/Chat/ChatContainer";
import Usernavbar from "../../../Components/UserNavBar/Usernavbar";
function Chat() {
  const socket = io("http://localhost:8080");
  const user = useSelector((state) => state.UserLoginReducer?.loginuserdata);
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);

  useEffect(() => {
    if (user) {
      const details = async () => {
        GetAllUserApi(user.id).then((data) => {
          setContacts(data.data);
        });
      };
      details();
    }
  }, []);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  useEffect(() => {
    if (user) {
      // socket.current = io(host)
      socket.emit("add-user", user.id);
    }
  });

  return (
    <>
          <Usernavbar />

      <Container>
        <div className="container">
          <Contacts
            contacts={contacts}
            currentUser={user}
            changeChat={handleChatChange}
          />
          {currentChat === undefined ? (
            <Welcome currentUser={user} />
          ) : (
            <ChatContainer
              currentUser={user}
              currentChat={currentChat}
              socket={socket}
            />
          )}
          {/* <Welcome currentUser={user} /> */}
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
  background-color: #008080;
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
`;

export default Chat;
