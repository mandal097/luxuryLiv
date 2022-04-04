import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Ham from '../../components/Hamburger/Ham'
import Navbar from '../Navbar/Navbar'
import Aos from "aos";
import "aos/dist/aos.css";

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

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <Main>
            {
                IsOpen && <Navbar />
            }
            <Wrapper>
                <H  data-aos="fade-up">{title}</H>
                <P  data-aos="fade-up">{para}</P>
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
justify-content:center;
/* justify-content:flex-end; */
scroll-snap-align: start;
position:relative;
@media (max-width:600px){
    width: 100%;
}
`
const Wrapper = styled.div`
height:80vh;
width:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:space-evenly;
margin-top:6rem;
@media(max-width:700px){
    height:75vh;
}
`
const H = styled.h1`
font-size: 10rem;
font-weight: 100;
font-family: 'Shoreline';
text-align:center;
@media (max-width:1000px){
    font-size: 10rem;
}
@media (max-width:900px){
    font-size: 8rem;
}
@media (max-width:500px){
    margin-top:2rem;
   font-size: 6rem;
}
@media (max-width:400px){
   font-size: 6rem;
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
@media (max-width:900px){
   font-size: 2rem;
   width: 80%;
}
@media (max-width:600px){
   font-size: 2.6rem;
   margin-top:1rem;
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
