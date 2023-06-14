import React from 'react'
import styled from "styled-components";

function Welcome({currentUser}) {
    return (
        <Container>
            <h2>Welcome, <span>{currentUser.name}</span></h2>
            <h4>Please select a chat to start messaging</h4>
        </Container>
      )
    }
    
    const Container = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    h2,h3 {
      color:#054D60;
    }
    span {
      color: #b31f1f;
    }
    `

export default Welcome