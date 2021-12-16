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
            <Fade bottom>
                <H>{title}</H>
                <P>{para}</P>
            </Fade>
            <HamDIv onClick={showNavbar} ><Ham /></HamDIv>
        </Main>
    )
}
const Main = styled.div`
width: 100%;
margin: 0px auto;
height: calc(100vh  - 55px);
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
scroll-snap-align: start;
position:relative;
@media (max-width:600px){
    width: 100%;
    justify-content: space-evenly;
}
`
const H = styled.h1`
font-size: 150px;
font-weight: 400;
font-family: 'Shoreline';
src: local('Shoreline'), url(Library/Fonts/LuxuryLiving_Logo.otf) format('opentype');
@media (max-width:600px){
   font-size: 100px;
   text-align:center;
}
`
const P = styled.p`
text-align: center;
font-size: 25px;
letter-spacing: 1px;
word-spacing: 5px;
line-height: 1.5;
width: 60%;
margin: 0px auto;
@media (max-width:600px){
   font-size: 20px;
   width: 80%;
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
