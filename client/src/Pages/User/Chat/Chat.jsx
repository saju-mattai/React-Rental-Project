import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAllUserApi } from "../../../API/User/ApiCalls";
import Contacts from "../../../Components/Chat/Contacts";
import Welcome from "../../../Components/Chat/Welcome";
import ChatContainer from "../../../Components/Chat/ChatContainer";
function Chat() {
  const user = useSelector((state) => state.UserLoginReducer?.loginuserdata);
  const [contacts, setContacts] = useState([]);
  const [currentChat ,setCurrentChat] = useState(undefined)

  console.log(contacts);

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
  const handleChatChange =(chat)=>{
    setCurrentChat(chat)
  }

  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts} currentUser={user} changeChat={ handleChatChange} />
        {currentChat === undefined ? (
            <Welcome currentUser={user} />
          ) : (

            <ChatContainer
              currentUser={user}
              currentChat={currentChat}
              // socket={socket}
            />
          )}
        {/* <Welcome currentUser={user} /> */}
      </div>
    </Container>
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
`;

export default Chat;
