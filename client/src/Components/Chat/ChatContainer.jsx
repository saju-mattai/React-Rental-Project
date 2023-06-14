import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import { v4 as uuidv4 } from "uuid";

import Message from "./Message";
import { getMessageApi, sendMessageApi } from "../../API/User/ApiCalls";

function ChatContainer({ currentUser, currentChat }) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    if (currentChat) {
      const messages = async () => {
        const response = await getMessageApi({
          from: currentUser.id,
          to: currentChat._id,
        });
      };
      messages();
    }
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    sendMessageApi({
      from: currentUser.id,
      to: currentChat._id,
      message: msg,
    });
  };
  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img src={currentChat.image} alt="" />
          </div>
          <div className="username">
            <h3>{currentChat.name}</h3>
          </div>
        </div>
      </div>
      {/* <Message/> */}

      <div className="chat-messages">
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.sender === currentUser.id ? "sended" : "received"
                }`}
              >
                <div className="content">
                  <p>{message.message?.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 78% 12%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 10% 78% 12%;
  }
  .chat-header {
    background-color: #f5f5dc;
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
          height: 2.5rem;
          border-radius: 20px;
        }
      }
      .username {
        h5 {
          margin-bottom: 0;
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
        background-color: grey;
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
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #0f8aab;
        p {
          margin-bottom: 0;
        }
      }
    }
    .received {
      justify-content: flex-start;
      .content {
        background-color: #387180;
        p {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default ChatContainer;
