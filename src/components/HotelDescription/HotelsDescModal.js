import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { data } from '../../hotelDescModaldata/index.js'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Enquiry from '../Enquiry/Enquiry'
import jsPDF from 'jspdf'

const HotelsDescModal = ({ ShowModal, places }) => {

    const [hotel, setHotel] = useState([])
    const [showForm, setShowForm] = useState()
    // const [img1, setImg1] = useState()
    // const [img2, setImg2] = useState()
    // const [img3, setImg3] = useState()

    const [oImage, setOImage] = useState()

    useEffect(() => {
        const org_hotel = data.filter(i => i.hotelname === places)
        setHotel(org_hotel[0])
        // setImg1(hotel.img1)
        // setImg2(hotel.img2)
        // setImg3(hotel.img3)
    }, [places, hotel])

    const gotoEnquiry = () => {
        setShowForm(true)
    }

    const leftImageHandler = () => {
        const img1 = document.getElementById('img1').src
        const img2 = document.getElementById('img2').src
        const img3 = document.getElementById('img3').src
        const img4 = document.getElementById('img4').src
        const img5 = document.getElementById('img5').src
        switch (oImage) {
            case img5:
                setOImage(img4)
                break;
            case img4:
                setOImage(img3)
                break;
            case img3:
                setOImage(img2)
                break;
            case img2:
                setOImage(img1)
                break;
            default:
                setOImage(img1)
        }
    }
    const rightImageHandler = () => {
        const img1 = document.getElementById('img1').src
        const img2 = document.getElementById('img2').src
        const img3 = document.getElementById('img3').src
        const img4 = document.getElementById('img4').src
        const img5 = document.getElementById('img5').src
        switch (oImage) {
            case img1:
                setOImage(img2)
                break;
            case img2:
                setOImage(img3)
                break;
            case img3:
                setOImage(img4)
                break;
            case img4:
                setOImage(img5)
                break;
            default:
                setOImage(img3)
        }
    }
    const download = () => {
        const img1 = document.getElementById('img1').src
        var doc = new jsPDF("p", "mm", "a4");


        // doc.addImage('images/aman.png', 'JPEG', 20, 50,  170, 130, 480, 160);
        doc.setFontSize(19);
        doc.text(20, 10, places)
        doc.setFontSize(12);
        doc.addFont('helvetica', 'normal')
        doc.text(20, 20, hotel.about)
        doc.text(20, 30, hotel.carouseltxt1)
        doc.text(20, 40, hotel.carouseltxt2)
        // {
        oImage
            ? doc.addImage(oImage, 'JPEG', 20, 50, 170, 110)
            : doc.addImage(img1, 'JPEG', 20, 50, 170, 110)
        // }

        doc.save("luxury_living.pdf")

    }

    return (
        <Container >
            <Wrapper >
                <Left>
                    <CarouselProvider
                        className='slider'
                        naturalSlideWidth={500}
                        naturalSlideHeight={325}
                        totalSlides={5}
                        dragEnabled={false}
                        isPlaying={true}
                        interval={3000}

                    >
                        <Slider className='slider_div'>
                            <Slide className='img' index={0}> <ImgLeft src={hotel.img1} id='img1' /></Slide>
                            <Slide className='img' index={1}> <ImgLeft src={hotel.img2} id='img2' /></Slide>
                            <Slide className='img' index={2}> <ImgLeft src={hotel.img3} id='img3' /></Slide>
                            <Slide className='img' index={3}> <ImgLeft src={hotel.img4} id='img4' /></Slide>
                            <Slide className='img' index={4}> <ImgLeft src={hotel.img5} id='img5' /></Slide>
                        </Slider>
                        <ButtonBack className='leftImgBtn' onClick={leftImageHandler}><LeftOutlined /></ButtonBack>
                        <ButtonNext className='rightImgBtn' onClick={rightImageHandler}><RightOutlined /></ButtonNext>
                    </CarouselProvider>
                </Left>
                <Right>
                    <RightHeader>
                        <RightHeaderH>{places}</RightHeaderH>
                    </RightHeader>
                    <RightHeaderSecondDiv>
                        <CountryName><p>{hotel.about}</p></CountryName>
                    </RightHeaderSecondDiv>
                    <RightHeaderThirdDiv>
                        <CarouselProvider
                            className='slider'
                            naturalSlideWidth={500}
                            naturalSlideHeight={325}
                            totalSlides={2}
                            dragEnabled={false}
                            isPlaying={true}
                            interval={3000}
                        >
                            <Slider className='slider_div'>
                                <Slide className='slider_content' index={0}> <Carouselxt>{hotel.carouseltxt1}</Carouselxt></Slide>
                                <Slide className='slider_content' index={1}> <Carouselxt>{hotel.carouseltxt2}</Carouselxt></Slide>

                            </Slider>
                            <ButtonBack className='leftBtn'><LeftOutlined /></ButtonBack>
                            <ButtonNext className='rightBtn'><RightOutlined /></ButtonNext>
                        </CarouselProvider>
                    </RightHeaderThirdDiv>
                    <RightFooter>
                        <RightFooterSpan onClick={gotoEnquiry}>Enquire
                        </RightFooterSpan>
                        <RightFooterSpan>Share</RightFooterSpan>
                        <RightFooterSpan onClick={download} >download</RightFooterSpan>
                    </RightFooter>
                </Right>
                <Cancel onClick={()=>{
                    ShowModal()
                    setHotel(null)
                }}><CloseOutlined /></Cancel>
            </Wrapper>
            {
                showForm && <Enquiry setShowForm={setShowForm} hotel={places} />
            }
        </Container>
    )
}

const Container = styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
background:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8));
height:100vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
z-index:10000000000;
@media (max-width:700px){
    height:auto;
}
`
const Wrapper = styled.div`
width:90vw;
height:85vh;
position:relative;
background-color:white;
color:black;

display:flex;
@media (max-width:700px){
    width:100%;
    /* height:100vh; */
    height:auto;
    border:none;
    flex-direction:column;
}
`
const Left = styled.div`
width:45vw;
/* height:90%; */
position:relative;
/* overflow:hidden; */
.slider{
    height:100%;
    position:relative;
    .leftImgBtn{
        position:absolute;
        top:45%;
        font-size:5rem;
        color:black;
        z-index:33;
        left:100;
        background:transparent;
        border:none;
    }
    .rightImgBtn{
        position:absolute;
        font-size:5rem;
        color:black;
        top:45%;
        right:0;
        z-index:33;
        left:100;
        border:none;
        background:transparent;
    }
    .slider_div{
        height:100%;
        .img{
            height:100vh;
        }
    }
}
@media (max-width:700px){
    width:100vw;
    height:50vh;
    .slider{
        height:100%;
        .slider_div{
            height:100%;
            .img{
                height:100%;
            }
        }
    }
}
@media (max-width:400px){
    width:100vw;
    height:auto;
}
`
const ImgLeft = styled.img`
width:100%;
height:100%;
object-fit:cover;
transition:all 400ms linear;
z-index:-111;
&:hover{
    transform:scale(1.1);
}
@media(max-width:700px){
    object-fit:cover;
}
`

const Right = styled.div`
width:45vw;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding: 0 1rem;
@media (max-width:700px){
   width:100%;
   height:50vh;
}
`
const RightHeader = styled.div`
width:100%;
height:12%;
display:flex;
align-items:center;
justify-content:flex-start;
border-bottom:2px solid black;
`
const RightHeaderH = styled.h3`
font-size:2.6rem;
font-family: 'Baloo', sans-serif;
font-family: cursive;
font-weight:400;
color:black;
@media(max-width:300px){
    font-size:2.3rem;
}
`
const RightHeaderSecondDiv = styled.div`
width:100%;
height:40%;
display:flex;
justify-content:center;
align-items:center;
padding:3rem;
border-bottom:2px solid black;
`
const CountryName = styled.span`
font-size:2.9rem;
color:black;
font-weight:600;
text-align:center;
line-height:4rem;
@media(max-width:400px){
    font-size:2.3rem;
}
`

const RightHeaderThirdDiv = styled.div`
width:40vw;
height:40%;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
position:relative;
color:black;
.slider{
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:90%;
    height:90%;
    outline:none;
    border:none;
    .slider_div{
        width:100%;
        .slider_content{
            width:100%;
            display:flex;
    align-items:center;
    justify-content:center;    
}
}
}
.leftBtn{
    position:absolute;
    color:black;
    font-size:3rem;
    background:transparent;
    border:none;
    left:1rem;
}
.rightBtn{
    position:absolute;
    color:black;
    right:1rem;
    font-size:3rem;
    border:none;
    background:transparent;

}
@media (max-width:700px){
    width:90vw;
    .leftBtn{
        left:0rem;
    }
    .rightBtn{
        right:0rem;
    }
    .carousel_controls{
        top:30%;
        width:45vw;
    }
}
`
const Carouselxt = styled.h3`
font-size:2.6rem;
color:black;
padding:5rem;
text-align:center;
@media(max-width:700px){
    margin-top:-1rem;
    font-size:2rem;
    width:100%;
}
@media(max-width:400px){
    font-size:1.8rem;
}
`

const RightFooter = styled.div`
width:100%;
height:10%;
display:flex;
align-items:center;
justify-content:space-evenly;
border-top:2px solid black;
`
const RightFooterSpan = styled.span`
font-size:1.7rem;
color:black;
font-weight:600;
cursor:pointer;
a{
    color:black;
    text-decoration:none;
    &:hover{
    color:blue;
}
}
&:hover{
    color:blue;
}
`

const Cancel = styled.div`
position:absolute;
top:-0.7rem;
right:2rem;
font-size:4rem;
color:black;
cursor:pointer;
`
export default HotelsDescModal
