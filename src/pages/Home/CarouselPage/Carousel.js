import React from 'react'
// import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <RightOutlined
            className='carouselControls caRight'
            style={{ color: 'goldenrod', fontSize: '3rem', right: '8rem', bottom: '10rem', display: 'none' }}
            onClick={onClick} />
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <LeftOutlined
            className='carouselControls caLeft'
            style={{ color: 'goldenrod', fontSize: '3rem', display: 'none' }}
            onClick={onClick} />

    );
}

const Carousel = () => {

    // const feedbacks = [
    const feedbackApi = [
        {
            id: 1,
            feedbacktxt: 'lntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae ntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentiiis neea beatae ntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentiiis neea beatae ntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptattis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatibus eius voluptatum! Dolore,',
            name: 'Claudine Trilio',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village'
        },
        {
            id: 2,
            feedbacktxt: 'akmntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae ntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptattis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatibus eius voluptatum! Dolore,',
            name: 'Demo Name second',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village demo Second'
        },
        {
            id: 3,
            feedbacktxt: 'akmntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae ntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptattis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatibus eius voluptatum! Dolore,',
            name: 'Claudine Trilio Demo3rd',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village Demo 3rd'
        },
        {
            id: 4,
            feedbacktxt: 'akmntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae ntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptattis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatibus eius voluptatum! Dolore,',
            name: 'Claudine Trilio 4th',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village 4th'
        },
        {
            id: 5,
            feedbacktxt: 'akmntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae ntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptattis laudantium expedita aperiam sequi fuga asperiores veniam voluptatntore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis neea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatibus eius voluptatum! Dolore,',
            name: 'Claudine Trilio 5th',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village 5th'
        },
    ]


    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <MainContainer id='carousel'>
            <Container>
                <Middle {...settings}>
                    {
                        feedbackApi.map(i => (
                            <Bottom key={i.id}>
                                <BottomWrapper>
                                    <TestimoniesHeader>Testimonials</TestimoniesHeader>
                                    <>
                                        <TestimoniesParaDiv>
                                            <Testimonies>{i.feedbacktxt}</Testimonies>
                                        </TestimoniesParaDiv>
                                        <TestimonialsInfoDiv>
                                            <TestimonialsName>{i.name}</TestimonialsName>
                                            <TestimonialsStatus>{i.status}</TestimonialsStatus>
                                        </TestimonialsInfoDiv>
                                    </>
                                </BottomWrapper>
                            </Bottom>
                        ))
                    }
                </Middle>
            </Container>
        </MainContainer>
    )
}

const MainContainer = styled.div`
display: flex;
width: 100%;
height:100vh;
margin:0 auto;
scroll-snap-align: start;
position: relative;
align-items:center;
justify-content:center;
.active{
    background-color:white;
}
@media (max-width: 1000px) {
  width: 95%;
}
@media (max-width: 700px) {
 display:flex;
 align-items:center;
 justify-content:center;
}
`

const Container = styled.div`
width: 89%;
height:85%;
color: white;
margin: 0 auto;
display:flex;
align-items: center;
transition: all 1s;
position:relative;
@media(max-width:1100px){    
    width:97%;
}
@media(max-width:750px){
    width:100%;
    height:95%;
    align-items:center;
}
@media(max-width:500px){
    width:100%;
    height:80%;
    align-items:center;
}
`

const Middle = styled(Slider)`
height: 80vh;
width:80%;
margin:0 auto;
border: 0.5px solid #fff;
display: flex;
align-items:center;
position:relative;
ul li button{
    margin:0;
    &:before{
        font-size:12px;
        color:white;
        position:absolute;
        top:-5rem;
    }
}
li.slick-active button::before{
    color:white;
}
.slick-list{
    overflow:hidden;
}
button{
    z-index:1;
}
.cover{
    height:100%;
    width:100%;
    object-fit: cover;
}
@media(max-width:750px){
    width:100%;
    height:100%;
    border:none;
    /* overflow:hidden; */
    ul li button{
    &:before{
        font-size:10px;
        color:white;
        position:absolute;
        top:3rem;
    }
}
}
@media(max-width:500px){
    height:80vh;
    ul li button{
    &:before{
        top:-2rem;
    }
}
}
`
const Bottom = styled.div`
height: 80vh;
width:100%;
display: flex;
justify-content:space-around;
align-items:center;
position:relative;
/* border:1px solid red; */

@media(max-width:400px){
    height:65vh;
}
`

const BottomWrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
/* justify-content:center; */
/* border:1px solid green; */
padding:0  2rem;
@media (max-width:900px){
    width:100%;
}
`

const TestimoniesHeader = styled.div`
font-size:4rem;
color:white;
text-align:center;
text-transform:uppercase;
position:relative;
padding:0.4rem 0;
height:15%;
width:100%;
position:relative;
&::after{
    content:'';
    position:absolute;
    position:absolute;
    height:1px;
    background-color: rgb(179, 144, 58);
    bottom:0rem;
    left:35%;
    width:30% ;
    
}

@media(max-width:750px){
    font-size:3.3rem;
}
@media(max-width:400px){
    width:100%;
    font-size:5rem;
    height:auto ;
    margin-top:-1rem;
    margin-bottom:2rem;
    padding-bottom:1rem;
    &::after{
        left:0;
        width:100%;
        height:2px;
    }
}
`

const TestimoniesParaDiv = styled.div`
width:100%;
height:60%;
display:flex;
align-items:center;
justify:center;
position:relative;
padding:1.5rem 1rem;
overflow-y:scroll;

@media(max-width:700px){
    padding:0.3rem 0;
    height:auto;
}
@media(min-width:700px){
    &::-webkit-scrollbar {
  width: 7px;
} 

/* Track */
&::-webkit-scrollbar-track {
    background:lightgray;
}

/* Handle */
&::-webkit-scrollbar-thumb {
    background: grey;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #555;
}
}
@media(max-width:400px){
    padding:1rem ;
    align-items:flex-start;
    justify:flex-start;
    max-height:35vh;
}
`


const Testimonies = styled.p`
color:white;
font-size:1.6rem;
text-align:justify;
/* padding:3rem 1rem; */
@media(max-width:750px){
    font-size:2rem;
}
@media(max-width:400px){
    font-size:2rem;
    /* padding-top:10rem; */
}
`
const TestimonialsInfoDiv = styled.div`
height:auto;
width:100%;
display: flex;
padding:0.5rem;
flex-direction:column;
align-items: center;
justify-content:center;
height:15%;
position:relative;
&::after{
    content:'';
    position:absolute;
    position:absolute;
height:1px;
background-color: rgb(179, 144, 58);
top:0rem;
width:30% ;
left:35%;
}
@media(max-width:400px){
    height:15vh;
    margin-top:5rem;
    padding-top:4rem;
    &::after{
        left:0;
        width:100%;
    }
}
`

const TestimonialsName = styled.span`
font-size:2rem;
color:white;
font-weight:500;
text-align:center;
@media(max-width:400px){
    font-size:3.8rem;
    margin-top:2rem;
}
`
const TestimonialsStatus = styled.p`
font-size:1.3rem;
color:rgba(255, 255, 255, 0.541);
text-align:center;
@media(max-width:400px){
    font-size:2.4rem;
    margin-top:1rem;
}
`

export default Carousel
