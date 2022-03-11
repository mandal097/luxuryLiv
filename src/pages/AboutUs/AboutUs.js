import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar'
import Ham from '../../components/Hamburger/Ham'
import HomeBtn from '../../components/HomeBtn/HomeBtn'
import {
    CarouselProvider, Slider, Slide,
    //  ButtonBack, ButtonNext 
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
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
                        <Line></Line>
                        <ContentRightText className='fadeInText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                        <ContentCr></ContentCr>
                    </ContentRight>
                </Content>
                <Content>
                    <ContentLeft className='leftImg'>
                        <ContentLeftImg className='img left' src='https://media.istockphoto.com/photos/professional-woman-working-from-home-picture-id1319189527?b=1&k=20&m=1319189527&s=170667a&w=0&h=OMelm_mmmIFVCCcgv1630qGqIWXH9AETusY4QtsRD9A=' />
                    </ContentLeft>
                    <ContentRight className='show'>
                        <Line></Line>
                        <ContentRightText className='fadeInText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                        <ContentCr></ContentCr>
                    </ContentRight>
                </Content>
                <Content>
                    <ContentLeft className='leftImg'>
                        <ContentLeftImg className='img' src='https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=' />
                    </ContentLeft>
                    <ContentRight className='show'>
                        <Line></Line>
                        <ContentRightText className='fadeInText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                        <ContentCr></ContentCr>
                    </ContentRight>
                </Content>
            </Wrapper>
            <Sliders>
                {/* <SliderWrapper> */}
                {/* </SliderWrapper> */}
                <CarouselProvider
                    className='slider'
                    naturalSlideWidth={500}
                    naturalSlideHeight={325}
                    totalSlides={3}
                    // dragEnabled={false}
                    isPlaying={true}
                    interval={2500}

                >
                    <Slider className='slider_div'
                    >
                        <Slide className='slides' index={0}>
                            <ContentSLiders>
                                <ContentLeft className='leftImg sliderImg'>
                                    <ContentLeftImg className='img' src='https://www.gannett-cdn.com/media/2017/06/30/USATODAY/USATODAY/636344142221336028-A01REAR13-8P-X-10P.jpg?width=2560' />
                                </ContentLeft>
                                <ContentRight className='show'>
                                    <SliderLine></SliderLine>
                                    <ContentRightText >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                                    <ContentCr></ContentCr>
                                </ContentRight>
                            </ContentSLiders>
                        </Slide>
                        <Slide className='slides' index={1}>
                            <ContentSLiders>
                                <ContentLeft className='leftImg sliderImg'>
                                    <ContentLeftImg className='img' src='https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
                                </ContentLeft>
                                <ContentRight className='show'>
                                    <SliderLine></SliderLine>
                                    <ContentRightText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                                    <ContentCr></ContentCr>
                                </ContentRight>
                            </ContentSLiders>
                        </Slide>
                        <Slide className='slides' index={2}>
                            <ContentSLiders>
                                <ContentLeft className='leftImg sliderImg'>
                                    <ContentLeftImg className='img' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
                                </ContentLeft>
                                <ContentRight className='show'>
                                    <SliderLine></SliderLine>
                                    <ContentRightText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                                    <ContentCr></ContentCr>
                                </ContentRight>
                            </ContentSLiders>
                        </Slide>
                    </Slider>
                    {/* <ButtonBack className='leftImgBtn' ><LeftOutlined /></ButtonBack>
                    <ButtonNext className='rightImgBtn'><RightOutlined /></ButtonNext> */}
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
const Wrapper = styled.div`
width:1050px;
height:auto;
margin:0rem auto;
margin-top:6rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
/* position:relative; */
margin
border:1px solid red;
@media(max-width:1100px){
    width:95%;
}
`
const Content = styled.div`
width:20rem;
/* width:100%; */
height:25vh;
display:flex;
align-items:center;
justify-content:center;
display:flex;
align-items:center;
justify-content:center;
margin-top:9rem;
transition:all 500ms linear;

&:hover{
    justify-content:space-between;
    width:100%;
    .show{
        display:flex;
        width:73%;
    }
    .fadeInText{
        animation:fadeInText 1000ms ease 1 ;
    }
    .leftImg{
        border-right-color:black;
    border-bottom-color:black;
    /* border-left-color:white;
    border-top-color:white; */
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
z-index:2;
border:3px solid white;
border-radius:50%;
transform:rotate(-45deg);
transition:all 200ms linear;
position:relative;
&:hover{
    .img{
        animation:about 500ms ease-in-out 1;
    }
}
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
left:-2rem;
width:2px;
height:11rem;
background-color:white;
z-index:3;
@media(max-width:650px){
    display:none;
}
`

const ContentLeftImg = styled.img`
width:16rem;
height:16rem;
border-radius:50%;
object-fit:cover;
transform:rotate(45deg);
transition:all 300ms linear;
}
`
const ContentRight = styled.div`
width:0;
width:70%;
height:20rem;
padding:5px;
position:relative;
z-index:1;
display:flex;
align-items:center;
justify-content:center;
display:none;
transition:all 400ms linear;
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
right:-1rem;
width:20rem;
height:20rem;
border-radius:50%;
border:3px solid white;
border-left-color:black;
border-top-color:black;
transform:rotate(-45deg);
z-index:-11;
@media(max-width:650px){
    display:none;
}
`

const Sliders = styled.div`
width:90%;
height:40vh;
margin-top:9rem;
/* overflow:hidden; */
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
        height:auto;
    }
`
const ContentSLiders = styled.div`
width:100%;
height:25vh;
display:flex;
align-items:center;
justify-content:center;
margin-top:5rem;
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
    height:auto;
}
`

const SliderLine = styled.div`
position:absolute;
top:4rem;
left:1.4rem;
width:2px;
height:11rem;
background-color:white;
@media(max-width:650px){
    display:none;
}
`
export default AboutUs
