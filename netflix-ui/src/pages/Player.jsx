import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import video from '../assets/osman.mp4';
import { useNavigate } from 'react-router-dom';
export default function Player() {
    const navigate = useNavigate();
    const backHandler= ()=>{
        navigate(-1);
    }
  return (
    <Container>
      <div className="player">
        <div className="back">
            <BsArrowLeft onClick={backHandler}/>
        </div>
        <video src={video} autoPlay loop controls muted ></video>
      </div>
    </Container>
  )
}
const Container = styled.div`
    .player{
        width:100vw;
        height:100vh;
      .back{
        position:absolute;
        padding:2rem;
        z-index:1;
        svg{
            font-size:3rem;
            cursor:pointer;
        }
      }  
      video{
        width:100%;
        height:100%;
        object-fit:cover;
      }
    }
`;