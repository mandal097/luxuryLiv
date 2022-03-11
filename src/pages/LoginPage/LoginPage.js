import React, { useState } from 'react'
import styled from 'styled-components'
import Ham from '../../components/Hamburger/Ham'
import Navbar from '../../components/Navbar/Navbar'
import HomeBtn from '../../components/HomeBtn/HomeBtn'

const LoginPage = () => {
    // const navigate = useNavigate()

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
        <Container  >
            {
                IsOpen && <Navbar />
            }
            <Wrapper>
                <HomeBtn />
                <Header>
                    <Span onClick={showNavbar}><Ham /></Span>
                </Header>
                <ComingSoon>Coming soon.....</ComingSoon>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    scroll-snap-align:center;
    .nav{
    color:white;
    text-decoration:none;
}
`
const Wrapper = styled.div`
height:100%;
width:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin:0rem auto;
overflow-y:scroll;
overflow-x:hidden;
position:relative;
`

const Header = styled.div`
display:flex;
top:3rem;
right:14rem;
position:absolute;
margin-right:auto;
align-items:center;
justify-content:flex-end;
height:6rem;
z-index:11;
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

const ComingSoon = styled.h1`
font-size:7rem;
color:white;
font-family:'Shoreline';
text-align:center;
animation:comingSoonTxt 1000ms ease infinite alternate-reverse;
`


export default LoginPage
