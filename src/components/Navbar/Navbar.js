import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Navbar = () => {
    return (
        <Container>
            <Nav><NavLink to='/' className='navlink'>home</NavLink> </Nav>
            <Nav><NavLink to='/portfolio' className='navlink'>portfolio</NavLink> </Nav>
            <Nav><NavLink to='/agents' className='navlink'>agents</NavLink> </Nav>
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
justify-content:center;
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
font-size:14rem;
color:white;
font-weight:bolder;
text-transform:uppercase;
line-height:1;
transition:all 200ms;
&:hover{
    transform:perspective(100px)  rotateX(-5deg);
}
@media (max-width:700px){
    font-size:12rem;
}
@media (max-width:600px){
    font-size:10rem;
}
@media (max-width:500px){
    font-size:8rem;
}
@media (max-width:400px){
    font-size:6rem;
}
`

export default Navbar


