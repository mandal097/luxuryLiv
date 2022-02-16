import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar'
import Ham from '../../components/Hamburger/Ham'

const Testimonies = () => {

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
        <Container>
            {
                IsOpen && <Navbar />
            }
            <Wrapper>
            <Header>
                    <Span onClick={showNavbar}><Ham/></Span>
                </Header>
                <h2>THIS IS THE TESTIMONIES PAGE </h2>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh; //this should be removed
width: 100%;
scroll-snap-align:center;
background-color:black;
color:white;
position:relative;
/* overflow-y:scroll; */ //this should be removed
overflow-x:hidden;
`
const Wrapper = styled.div`
height:auto; //this should be removed
width:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* background-color:black; */
margin:0rem auto;

`


const Header = styled.div`
position:absolute;
top:3rem;
right:14rem;
display:flex;
margin:1rem auto;
align-items:center;
justify-content:flex-end;
height:6rem;
z-index:11;
/* width:100%; */
@media(max-width:700px){
    right:8rem;
}
@media(max-width:400px){
    right:4rem;
}
`
const Span = styled.div`
font-size: 20px;
font-weight: bold;
color: goldenrod;
cursor:pointer;
a{
text-decoration: none;  
color: goldenrod; 
}
`


export default Testimonies
