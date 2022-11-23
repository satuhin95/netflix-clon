import React from 'react'
import backgroundImg from '../assets/Untitled-2.png'
import styled from 'styled-components'
export default function BackgroundImages() {
  return (
    <Container>
      <img src={backgroundImg} alt="backgroundImg"  />
    </Container>
  )
}
const Container = styled.div`
    width:100vw;
    height:100vh;
    img{
    width:100vw;     
    height:100vh;
    }
`;
