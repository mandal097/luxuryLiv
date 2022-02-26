import React, { useState } from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import Ham from '../../components/Hamburger/Ham'
import Navbar from '../Navbar/Navbar'

const FrontPage = ({ title, para }) => {
    const [IsOpen, setIsOpen] = useState(false)
    const showNavbar = () => {
        switch (IsOpen) {
            case false:
                setIsOpen(true);
                break;
            case true:
                setIsOpen(false);
                break;
            default:
                setIsOpen(false)
        }
    }
    return (
        <Main>
            {
                IsOpen && <Navbar />
            }
            <Wrapper>
                <Fade bottom>
                    <H>{title}</H>
                    <P>{para}</P>
                </Fade>
            </Wrapper>
            <HamDIv onClick={showNavbar} ><Ham /></HamDIv>
        </Main>
    )
}
const Main = styled.div`
width: 100%;
margin: 0px auto;
height:100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content:flex-end;
scroll-snap-align: start;
position:relative;
@media (max-width:600px){
    width: 100%;
}
`
const Wrapper = styled.div`
height:86vh;
width:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:space-evenly;
scroll-snap-align: start;
`
const H = styled.h1`
font-size: 10rem;
font-weight: 100;
font-family: 'Shoreline';
/* margin-bottom:4rem; */
@media (max-width:1000px){
    font-size: 9rem;
    text-align:center;
}
@media (max-width:900px){
    margin-bottom:6rem;
   font-size: 7rem;
   text-align:center;
}
@media (max-width:600px){
   font-size: 9rem;
   text-align:center;
}
`
const P = styled.p`
text-align: center;
font-size: 2.5rem;
letter-spacing: 1px;
word-spacing: 5px;
line-height: 1.5;
width: 60%;
margin: 0px auto;
margin-top:4rem;
@media (max-width:900px){
   font-size: 2rem;
   width: 80%;
   line-height:1.4;
}
@media (max-width:600px){
   font-size: 1.9rem;
   width: 80%;
   line-height:1.4;
}
`

const HamDIv = styled.div`
position:absolute;
top:3rem;
right:14rem;
font-size:4rem;
color:white;
z-index:100;
cursor:pointer;
@media (max-width:700px){
  right:7rem;
}
@media (max-width:500px){
  right:5rem;
}
@media (max-width:400px){
  right:2rem;
}
`

export default FrontPage
