import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar'
import Ham from '../../components/Hamburger/Ham'
import HomeBtn from '../../components/HomeBtn/HomeBtn'
import {
    CarouselProvider, Slider, Slide,
    ButtonBack, ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
const AboutUs = () => {
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
        document.title = 'Luxury Living - About Us'
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
                <Content>
                    <ContentLeft className='leftImg'>
                        <ContentLeftImg className='img' src='https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
                    </ContentLeft>
                    <ContentRight className='show'>
                        <Line ></Line>
                        <ContentRightText className='fadeInText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                    </ContentRight>
                    <ContentCr className='contentCr'></ContentCr>
                </Content>
                <Content>
                    <ContentLeft className='leftImg'>
                        <ContentLeftImg className='img left' src='https://media.istockphoto.com/photos/professional-woman-working-from-home-picture-id1319189527?b=1&k=20&m=1319189527&s=170667a&w=0&h=OMelm_mmmIFVCCcgv1630qGqIWXH9AETusY4QtsRD9A=' />
                    </ContentLeft>
                    <ContentRight className='show'>
                        <Line></Line>
                        <ContentRightText className='fadeInText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                    </ContentRight>
                    <ContentCr className='contentCr'></ContentCr>
                </Content>
                <Content>
                    <ContentLeft className='leftImg'>
                        <ContentLeftImg className='img' src='https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=' />
                    </ContentLeft>
                    <ContentRight className='show'>
                        <Line></Line>
                        <ContentRightText className='fadeInText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                    </ContentRight>
                    <ContentCr className='contentCr'></ContentCr>
                </Content>
            </Wrapper>


            <Sliders>
                <CarouselProvider
                    className='slider'
                    naturalSlideWidth={500}
                    naturalSlideHeight={325}
                    totalSlides={2}
                    // dragEnabled={false}
                    // isPlaying={true}
                    interval={2500}

                >
                    <Slider className='slider_div'
                    >
                        <Slide className='slides' index={0}>
                            <ContentSLiders>
                                <TeamMembersDiv>
                                    <TeamMembersImg>
                                        <img src="https://www.gannett-cdn.com/media/2017/06/30/USATODAY/USATODAY/636344142221336028-A01REAR13-8P-X-10P.jpg?width=2560" alt="allen" />
                                    </TeamMembersImg>
                                    <TeamMembersName>Allen Max</TeamMembersName>
                                    <TeamMembersRole>Front Developer</TeamMembersRole>
                                </TeamMembersDiv>
                                <TeamMembersDiv>
                                    <TeamMembersImg>
                                        <img src="https://images.unsplash.com/photo-1580518337843-f959e992563b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWN0b3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="allen" />
                                    </TeamMembersImg>
                                    <TeamMembersName>Tom</TeamMembersName>
                                    <TeamMembersRole>Front Developer</TeamMembersRole>
                                </TeamMembersDiv>
                                <TeamMembersDiv>
                                    <TeamMembersImg>
                                        <img src='https://images.unsplash.com/photo-1587715362716-f55bde292cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFjdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="allen" />
                                    </TeamMembersImg>
                                    <TeamMembersName>George</TeamMembersName>
                                    <TeamMembersRole>Full Stack Developer</TeamMembersRole>
                                </TeamMembersDiv>
                            </ContentSLiders>
                        </Slide>
                        <Slide className='slides' index={1}>
                            <ContentSLiders>
                                <TeamMembersDiv>
                                    <TeamMembersImg>
                                        <img src="https://images.unsplash.com/photo-1578472577660-6f4a47a6660d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFjdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="allen" />
                                    </TeamMembersImg>
                                    <TeamMembersName>Ryan</TeamMembersName>
                                    <TeamMembersRole>AWS Solution Architect</TeamMembersRole>
                                </TeamMembersDiv>
                                <TeamMembersDiv>
                                    <TeamMembersImg>
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="allen" />
                                    </TeamMembersImg>
                                    <TeamMembersName>Christin</TeamMembersName>
                                    <TeamMembersRole>Backend Developer</TeamMembersRole>
                                </TeamMembersDiv>
                                <TeamMembersDiv>
                                    <TeamMembersImg>
                                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="allen" />
                                    </TeamMembersImg>
                                    <TeamMembersName>Anil</TeamMembersName>
                                    <TeamMembersRole>Video Editor</TeamMembersRole>
                                </TeamMembersDiv>
                            </ContentSLiders>
                        </Slide>
                    </Slider>
                    <ButtonBack className='leftImgBtn' ><LeftOutlined /></ButtonBack>
                    <ButtonNext className='rightImgBtn'><RightOutlined /></ButtonNext>
                </CarouselProvider>
            </Sliders>
        </Container>
    )
}

const Container = styled.div`
height:100vh;
width:100%;
overflow-y:scroll;
overflow-x:hidden;
position:relative;
display:flex;
flex-direction:column;
align-items:center;
/* justify-content:center; */
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
z-index:12;
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
const Wrapper = styled.div`
width:1050px;
height:auto;
margin:0rem auto;
margin-top:6rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
&::after{
    content:'';
    position:absolute;
    width:50%;
    height:0.1rem;
    background-color:#fff;
    bottom:-10rem;
}
@media(max-width:1100px){
    width:95%;
}
`
const Content = styled.div`
    width:20rem;
    height:25vh;
    display:flex;
    align-items:center;
    justify-content:center;
display:flex;
align-items:center;
margin-top:9rem;
transition:width 1000ms linear;
justify-content:space-between;
&:hover{
    width:100%;
    .show{
        display:flex;
    }
    .fadeInText{
        animation:fadeInText 1600ms ease 1 ;
    }
    .leftImg{
        border-right-color:black;
        border-bottom-color:black;
        z-index:1;
    }
    .contentCr{
        right:0%;
        visibility:visible;
    }
}
@media(max-width:650px){
    flex-direction:column;
    height:auto;
}
`
const ContentLeft = styled.div`
width:20rem;
height:20rem;
display:flex;
align-items:center;
justify-content:center;
z-index:9;
border:3px solid white;
border-radius:50%;
transform:rotate(-45deg);
transition:all 1500ms linear;
position:relative;
}

.semi_circle{
    transform:rotateX(45deg);
    transform-origin:40%;
}
@media(max-width:650px){
    border:none;
    margin-bottom:1rem;
}
`


const Line = styled.div`
position:absolute;
top:4rem;
left:-3rem;
width:2px;
height:11rem;
background-color:white;
z-index:3;
opacity:1;
animation:AboutUsLine 2000ms ease ;
@media(max-width:650px){
    display:none;
}
`

const ContentLeftImg = styled.img`
width:18rem;
height:18rem;
border-radius:50%;
object-fit:cover;
transform:rotate(45deg);
transition:all 300ms linear;
z-index:2;
}
`
const ContentRight = styled.div`
width:0;
width:73%;
height:20rem;
padding:5px;
position:relative;
z-index:1;
display:flex;
align-items:center;
justify-content:center;
display:none;
@media(max-width:650px){
    border:none;
    width:95%;
}
`
const ContentRightText = styled.p`
display:flex;
align-items:center;
justify-content:center;
height:100%;
width:90%;
font-size:1.8rem;
text-align:justify;
opacity:1;
color:white;
@media(max-width:950px){
    font-size:1.6rem;
}
@media(max-width:650px){
    font-size:1.4rem;
}
`

const ContentCr = styled.div`
position:absolute;
right:40.4%;
width:20rem;
height:20rem;
border-radius:50%;
border:3px solid white;
border-left-color:black;
border-top-color:black;
transform:rotate(-45deg);
/* z-index:11; */
visibility:hidden;
transition:all 1000ms linear;
@media(max-width:650px){
    display:none;
}
`

const Sliders = styled.div`
width:90%;
height:60vh;
margin-top:15rem;
margin-bottom:5rem;
.slider{
    position:relative;
    height:100%;
    .leftImgBtn{
        position:absolute;
        top:35%;
        font-size:5rem;
        color:white;
        z-index:33;
        left:0;
        background:transparent;
        border:none;
    }
    .rightImgBtn{
        position:absolute;
        font-size:5rem;
        color:white;
        top:35%;
        right:0;
        z-index:33;
        left:100;
        border:none;
        background:transparent;
    }
    .slider_div{
        height:100%;
        width:100%;
        .slides{
            height:100%;
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
        }

    }
    @media(max-width:650px){
        height:120vh;
        .slider_div{
            height:120vh;
            .slides{
                height:120vh;
            }
        }
    }
`
const ContentSLiders = styled.div`
width:100%;
height:40rem;
display:flex;
align-items:center;
justify-content:space-evenly;
transition:all 700ms linear;
    .show{
        display:flex;
    }
    .sliderImg{
     border-right-color:black;
    border-bottom-color:black;
    border-left-color:white;
    border-top-color:white;
}
@media(max-width:650px){
    flex-direction:column;
    height:125vh;
}
`

const TeamMembersDiv = styled.div`
width:30rem;
height:30rem;
display:flex;
flex-direction:column;
align-items:center;
`

const TeamMembersImg = styled.div`
width:23rem;
height:23rem;
border:3px solid white;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
img{
    width:20rem;
    height:20rem;
    border-radius:50%;
    object-fit:cover;
    transition:all 500ms linear;
    &:hover{
        transform:scale(1.05);
    }
}
`

const TeamMembersName = styled.span`
font-size:2rem;
color:white;
font-weight:400;
margin:0.5rem 0;
`

const TeamMembersRole = styled.span`
font-size:1.3rem;
color:white;
font-weight:400;
letter-spacing:1px;
`


export default AboutUs
