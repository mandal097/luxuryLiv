import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css'
import Aos from 'aos'
import Ham from '../../components/Hamburger/Ham'
import Navbar from '../../components/Navbar/Navbar'
import HomeBtn from '../../components/HomeBtn/HomeBtn'

const Hotels = () => {
    const [IsOpen, setIsOpen] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 1500 })
            document.title = 'Luxury Living - Hotels'
    })
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
            <HomeBtn />
            {
                IsOpen && <Navbar />
            }
            <Wrapper>
                <FirstSection>
                    <Header>
                        <Span onClick={showNavbar} > <Ham /> </Span>
                    </Header>
                    <Content>
                        <H>Coming Soon.....</H>
                      
                    </Content>
                </FirstSection>
               
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
overflow-x:hidden;
font-family: 'Raleway', sans-serif;
position:relative;

`
const Wrapper = styled.div`
width:1100px;
height:auto;
margin:0 auto;
@media(max-width:1100px){
    width:100%;   
}
`
const FirstSection = styled.div`
width:100%;
height: 100vh;
display:flex;
flex-direction:column;
justify-content:space-around;
`

const Header = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;

z-index:10;
position:absolute;
top:3rem;
right:14rem;
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
const Content = styled.div`
height:60vh;
width:70%;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const H = styled.h3`
font-size:7rem;
text-align:center;
font-family:'Shoreline';
text-transform:uppercase;
animation:comingSoonTxt 1000ms ease infinite alternate-reverse;
@media(max-width:300px){
    font-size:5rem;
}
`
export default Hotels
