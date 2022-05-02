import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = () => {
    const navigate = useNavigate()
    const toTop = () => {
        window.scroll({
            top: 0,
            behavior: 'auto'
        })
    }
    return (
        <Container>
            <Nav
                onClick={() => {
                    navigate('/')
                    toTop()
                }}
            ><span className='span'>home</span> </Nav>

            <Nav
                onClick={() => {
                    navigate('/luxury-living-portfolio')
                    toTop()
                }}
            ><span className='span'>View our Hotel's Portfolio</span> </Nav>

            <Nav
                onClick={() => {
                    navigate('/sign-up-agents')
                    toTop()
                }}
            ><span className='span'>Sign up / Login for Agent Partners</span> </Nav>

            <Nav
                onClick={() => {
                    navigate('/luxury-living-clients-preferce')
                    toTop()
                }}
            ><span className='span'>FILL CLIENT'S PREFERENCE FORM</span> </Nav>

            <Nav
                onClick={() => {
                    navigate('/hotel-partners')
                    toTop()
                }}

            ><span className='span'>Collaborative Info for Hotel Partners</span> </Nav>

            <Nav
                onClick={() => {
                    navigate('/feedback')
                    toTop()
                }}
            ><span className='span'>Say Nice – Not So Nice Things About Us!</span> </Nav>

            <Nav
                onClick={() => {
                    navigate('/contactus')
                    toTop()
                }}
            ><span className='span'>Contact Us</span> </Nav>

            <Nav
                onClick={() => {
                    navigate('/aboutus')
                    toTop()
                }}
            ><span className='span'>About Us</span> </Nav>

            {/* <Nav
                onClick={() => {
                    navigate('/hotel-collabs')
                    toTop()
                }}
            ><span className='span hide'>New Hotel Collaborations
                </span> </Nav>

            <Nav
                onClick={() => {
                    navigate('/offers')
                    toTop()
                }}
            ><span className='span hide'>Irresistible Offers
                </span> </Nav> */}

        </Container>
    )
}

const Container = styled.div`
height:100vh;
width:100%;
background-color:teal;
z-index:12;
position:fixed;
top:0;
right:0;
left:0;
bottom:0;
transition:all 500ms;
animation:navbar 500ms;
opacity:1;
background-color:teal;
padding:0 10rem;
display:flex;
flex-direction:column;
/* align-items:flex-start; */
justify-content:space-evenly;
@media(max-width:700px){
    height:85vh;
    animation:navbarMob 500ms;
}
.hide{
    display:none;
    @media (max-width:480px){
  display:block;
}
}
.span{
    text-decoration:none;
    color:white;
    transition:all 200ms;
    margin-top:2rem;
    &:hover{
        color:black;
    }
@media (max-width:700px){
    align-items:center;
}

`

const Nav = styled.span`
font-size:3.8rem;
color:white;
font-weight:bolder;
text-transform:uppercase;
line-height:1;
transition:all 200ms;
margin-left:5rem;
cursor:pointer;
&:hover{
    transform:perspective(90px)  rotateX(-5deg);
}
@media (max-width:700px){
    font-size:3.2rem;
}
@media (max-width:600px){
    font-size:2.7rem;
}
@media (max-width:400px){
    font-size:2.3rem;
}
`

export default Navbar


