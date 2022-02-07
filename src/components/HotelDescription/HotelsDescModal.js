import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { data } from '../../hotelDescModaldata/index.js'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import download from 'images-downloader'
const HotelsDescModal = ({ ShowModal, places }) => {

    const [hotel, setHotel] = useState([])

    // const [image1, setImage1] = useState()
    // const [image2, setImage2] = useState()
    // const [image3, setImage3] = useState()
    useEffect(() => {
        const org_hotel = data.filter(i => i.hotelname === places)
        // console.log(org_hotel[0]);
        setHotel(org_hotel[0])
        // console.log(hotel);
    }, [places, hotel])


    // const dow=() => {
    //     const img1 = document.getElementById('img1').src
    //     const img2 = document.getElementById('img2').src
    //     const img3 = document.getElementById('img3').src
    //     // setImage1(img1)
    //     // setImage2(img2)
    //     // setImage3(img3)
    //     const images = [img1, img2, img3]
    //     console.log(images);
    //     // console.log(img1);
    //     const dest = 'path/to/dest'
    //     download(images ,dest)
    //         .then(result => {
    //             console.log('Images downloaded', result);
    //         })
    //         .catch(error => console.log("downloaded error", error))

    // }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <CarouselProvider
                        className='slider'
                        naturalSlideWidth={500}
                        naturalSlideHeight={325}
                        totalSlides={3}
                    >
                        <Slider className='slider_div'>
                            <Slide className='img' index={0}> <ImgLeft src={hotel.img1} id='el' /></Slide>
                            <Slide className='img' index={1}> <ImgLeft src={hotel.img2} id='img2' /></Slide>
                            <Slide className='img' index={2}> <ImgLeft src={hotel.img3} id='img3' /></Slide>
                        </Slider>
                        <ButtonBack className='leftImgBtn'><LeftOutlined /></ButtonBack>
                        <ButtonNext className='rightImgBtn'><RightOutlined /></ButtonNext>
                    </CarouselProvider>
                </Left>
                <Right>
                    <RightHeader>
                        <RightHeaderH>{places}</RightHeaderH>
                    </RightHeader>
                    <RightHeaderSecondDiv>
                        <CountryName>{hotel.about}</CountryName>
                        {/* <CountryName>New Delhi, India</CountryName> */}
                    </RightHeaderSecondDiv>
                    <RightHeaderThirdDiv>
                        <CarouselProvider
                            className='slider'
                            naturalSlideWidth={500}
                            naturalSlideHeight={325}
                            totalSlides={2}
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
                        <RightFooterSpan>Enquire</RightFooterSpan>
                        <RightFooterSpan>Share</RightFooterSpan>
                        <RightFooterSpan  >
                            <a
                                href={hotel.img1} alt='s' target='_blank' rel='noreferrer'
                                download={e => e.target.files[0]}
                            >
                                Download
                            </a>
                        </RightFooterSpan>
                    </RightFooter>
                </Right>
                <Cancel onClick={ShowModal}><CloseOutlined /></Cancel>
            </Wrapper>
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
z-index:10;
@media (max-width:700px){
   height:auto;
}
`
const Wrapper = styled.div`
width:90vw;
height:80vh;
position:relative;
background-color:black;
border:1px solid white;

display:flex;
@media (max-width:700px){
    width:100%;
    height:100vh;
    border:none;
    flex-direction:column;
}
`
const Left = styled.div`
width:45vw;
height:100vh;
position:relative;
overflow:hidden;
.slider{
    height:80vh;
    position:relative;
    .leftImgBtn{
        position:absolute;
        top:45%;
        font-size:5rem;
        color:white;
        z-index:33;
        left:100;
        background:transparent;
        border:none;
    }
    .rightImgBtn{
        position:absolute;
        font-size:5rem;
        color:white;
        top:45%;
        right:0;
        z-index:33;
        left:100;
        border:none;
        background:transparent;
    }
    .slider_div{
        height:80vh;
        .img{
            height:80vh;
        }
    }
}
@media (max-width:700px){
    width:100%;
    height:80vh;
    .slider{
        height:80vh;
        .slider_div{
            height:80vh;
            .img{
                height:100vh;
            }
        }
    }
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
}
`
const RightHeader = styled.div`
width:100%;
height:12%;
display:flex;
align-items:center;
justify-content:flex-start;
border-bottom:1px solid white;
`
const RightHeaderH = styled.h3`
font-size:3rem;
font-weight:400;
color:white;
`
const RightHeaderSecondDiv = styled.div`
width:100%;
height:40%;
display:flex;
justify-content:center;
align-items:center;
padding:3rem;
border-bottom:1px solid white;
`
const CountryName = styled.span`
font-size:2.7rem;
color:white;
font-weight:100;
text-align:center;
/* border:1px solid white; */
line-height:4rem;
`

const RightHeaderThirdDiv = styled.div`
width:50vw;
height:40%;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
position:relative;
color:white;
.slider{
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    height:100%;
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
    color:white;
    font-size:3rem;
    background:transparent;
    border:none;
}
.rightBtn{
    position:absolute;
    color:white;
    right:0;
    font-size:3rem;
    border:none;
    background:transparent;

}
@media (max-width:700px){
    .carousel_controls{
        top:30%;
        width:45vw;
    }
}
`
const Carouselxt = styled.h3`
font-size:2.6rem;
color:white;
padding:5rem;
text-align:center;
/* margin-top:4rem; */
`

const RightFooter = styled.div`
width:100%;
height:10%;
display:flex;
align-items:center;
justify-content:space-evenly;
border-top:1px solid white;
`
const RightFooterSpan = styled.span`
font-size:1.7rem;
color:white;
font-weight:400;
cursor:pointer;
a{
    color:white;
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
color:white;
cursor:pointer;
`
export default HotelsDescModal
