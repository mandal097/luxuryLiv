import React, { useState ,useEffect} from 'react'
import styled from 'styled-components'
import SocialMob from '../SocialMob/SocialMob'
import Navbar from '../Navbar/Navbar'
import Ham from '../Hamburger/Ham'
import HomeBtn from '../HomeBtn/HomeBtn'
const Contact = () => {
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
        document.title = 'Luxury Living - Contact Us'
    })
    return (
        <Container>
            <HomeBtn />
            {
                IsOpen && <Navbar />
            }
            <Header>
                <Spann onClick={showNavbar}><Ham /></Spann>
            </Header>
            <Wrapper>
                <Left>
                    <H3>COME...VISIT US SOMETIMES! </H3>
                    <Img src='./images/gmap.png' />
                    <Span>LX MARKETING PVT. LTD.</Span>
                    <P>K No. - 846/2, first floor, <br /> Opposite Metro pillar No. -115 <br />Ghitorni, New Delhi , India</P>
                </Left>
                <Right>
                    <H3>IN A HURRY TO CONTACT?</H3>
                    <Img src='./images/cphone.png' />
                    <Span>+91 971983158</Span>
                    <Span>+91 9899699991</Span>
                    <Email>gaurav.v@luxuryliving.in <br /> shilesh.v@luxuryliving.in</Email>
                </Right>
                <Vertical />
            </Wrapper>
            <SocialMob />
        </Container>
    )
}


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
const Spann = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: goldenrod;
    cursor:pointer;
    a{
    text-decoration: none;  
    color: goldenrod; 
    }
    `


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    scroll-snap-align:center;
    position:relative;
    .nav{
        color:white;
        text-decoration:none;
    }
`

const Wrapper = styled.div`
width:1000px;
height:75vh;
display: flex;
align-items: center;
justify-content: center;
position:relative;
@media(max-width:1000px){
    width:90%;
}
@media(max-width:540px){
    flex-direction:column;
    justify-content: space-evenly;
    height:85vh;
    /* padding-top:2rem; */
}
`
const Left = styled.div`
width:50%;
height:70%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-evenly;
@media(max-width:540px){
    width:90%;
    height:45%;
}
`
const H3 = styled.h3`
font-size:1.9rem;
color:white;
font-weight:bold;
letter-spacing:1.5px;
line-height:2;
@media(max-width:300px){
    font-size:1.5rem;
}
`

const Img = styled.img`
width:12rem;
height:12rem;
object-fit:cover;
`

const Span = styled.span`
font-size:1.5rem;
color:white;
font-weight:400;
`
const P = styled.p`
font-size:1.4rem;
color:white;
text-align:center;
letter-spacing:1.5px;
`
const Email = styled.p`
font-size:1.2rem;
color:white;
text-align:center;
letter-spacing:1.6px;
`

const Right = styled.div`
width:50%;
height:70%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
@media(max-width:540px){
    width:90%;
    height:40%;
}
`
const Vertical = styled.div`
position:absolute;
top:10rem;
right:49%;
width:2px;
height:50vh;
background-color:goldenrod;
@media(max-width:540px){
    height:1.5px;
    width: 60%;
    left:20%;
    top:50%;
}
`

export default Contact
