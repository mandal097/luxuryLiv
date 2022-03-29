import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = () => {
    return (
        <Container>
            <Nav><NavLink to='/' className='navlink'>home</NavLink> </Nav>
            <Nav><NavLink to='/portfolio' className='navlink'>View our Hotel's Portfolio</NavLink> </Nav>
            <Nav><NavLink to='/comingsoon' className='navlink'>Sign up / Login for Agent Partners</NavLink> </Nav>
            {/* <Nav><NavLink to='#' className='navlink'>Sign up / Login for Agent Partners</NavLink> </Nav> */}
            <Nav><NavLink to='/comingSoon' className='navlink'>Collaborative Info for Hotel Partners</NavLink> </Nav>
            <Nav><NavLink to='/feedback' className='navlink'>Say Nice – Not So Nice Things About Us!</NavLink> </Nav>
            <Nav><NavLink to='/contactus' className='navlink'>Contact Us</NavLink> </Nav>
            <Nav><NavLink to='/aboutus' className='navlink'>About Us</NavLink> </Nav>
        </Container>
    )
}

const Container = styled.div`
height:100vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
background-color:teal;
z-index:10;
position:absolute;
top:0;
right:0;
left:0;
bottom:0;
transition:all 500ms;
animation:navbar 500ms;
opacity:1;
background-color:teal;
padding:0 10rem;
z-index:10;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:space-evenly;
.navlink{
    text-decoration:none;
    color:white;
    transition:all 200ms;
    &:hover{
        color:black;
    }
@media (max-width:700px){
    align-items:center;
}
`

const Nav = styled.span`
font-size:4.3rem;
color:white;
font-weight:bolder;
text-transform:uppercase;
line-height:1;
transition:all 200ms;
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


