import React from 'react'
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
            className='valuesController cRight'
            onClick={onClick} />
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <LeftOutlined
            className='valuesController cLeft'
            onClick={onClick} />

    );
}

const ValuesComp = () => {

    const data = [
        {
            id: 1,
            img: '/images/devil.png',
            title: "INTEGRITY",
            classes: 'one',
            content: "Why is this one the first? Well, lets just say that there aint no joy in doing business without it. If we dont deliver our promises to you, then you dont deliver your promises to your client, then he gets upset with you and then you get upset with us. You see where we are going with this...right?"
        },
        {
            id: 2,
            img: '/images/bells.png',
            title: "PROMPTNESS",
            classes: 'two',
            content: "When you send an email at 3 am & a follow up to the same at 9 am, you surely are in need of urgent assistance. We get that. Thats why our turn around time to anything that you require from us is less than 4 hours. Except when we are watching Game of Thrones! That show is addictive!"
        },
        {
            id: 3,
            img: '/images/split.png',
            title: "FLEXIBILITY",
            classes: 'three',
            content: "None of our team members can do a full split. And It's not like we didnt try! But what we do do is listen to you patiently, understand what your client wants & then devise a possible solution that actually works! And if that requires us to twist some arms or break some... well..lets just say we get it DONE. Period."
        },
        {
            id: 4,
            img: '/images/doors.png',
            title: "SELECTIVENESS",
            classes: 'four',
            content: "Just like our Hotel partners, we also like to handpick our Travel Agent Partners. 'Cos we only work with a limited number of agents, We answer their calls, give them both our ears to listen & never lose our calm. Ofcourse, this goes out the window as soon as we get back home to our respective spouses but isn't that how GOD intended it?"
        },
        {
            id: 5,
            img: '/images/armw.png',
            title: "MAXIMUM EFFORT!",
            classes: 'five',
            content: "You don't build credibility overnight. And that comes with Positivty, Passion, Perseverance & a few other big words. We always give our 100%, unless we give 80%. But whats 20% really?"
        },
        {
            id: 6,
            img: '/images/phone.png',
            title: "OLD SCHOOLISH",
            classes: 'six',
            content: "Water water everywhere, not a drop to drink.. Info Info everywhere, but what to do with it? Internet has so much of information that its impossible to put it in the right context. But not with us. We are old school. When you need an info from us, just pick up the phone & call...or come over & get a few beers along while you are at it!"
        },
        {
            id: 7,
            img: '/images/party.png',
            title: "FUN",
            classes: 'seven',
            content: "Fun is what we have from 9 am till 6 pm - when we work! Other times its usally Beers & Conversations that keep our spirits high! But can we tell you a secret? Sometimes the two get mixed up! :P...Shhh......"
        },

        {
            id: 8,
            img: '/images/awes.png',
            title: "AWESOMETASTIC",
            classes: 'eight',
            content: "Now how cool is that word? Does it not deserve its own block! Thats why it stays. Also, we coined this term. So, 'yey' to us & 'boo hoo' to those who still like to use Awesome & Fantastic in a sentence. Move on guys!"
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
        nextArrow: <SampleNextArrow  />,
        prevArrow: <SamplePrevArrow />
    }
    return (
        <Container>
            <Wrapper>
                <Section {...settings}>
                    {
                        data.map((d) => (
                            <div key={d.id} item>
                                <Article >
                                    <SectionLeft>
                                        <ImgContainer>
                                            <img src={d.img} alt="" className={d.classes} />
                                            <SemiCircleUp></SemiCircleUp>
                                            <SemiCircleDown></SemiCircleDown>
                                        </ImgContainer>
                                    </SectionLeft>
                                    <SectionRightt>
                                        <H>{d.title}</H>
                                        <P>{d.content}</P>
                                    </SectionRightt>
                                </Article>
                            </div>
                        ))
                    }
                    {/* <Icons>
                        <IconLeft onClick={handleLeft} ><LeftOutlined /></IconLeft>
                        <IconRight onClick={handleRight} ><RightOutlined /></IconRight>
                    </Icons> */}
                </Section>
            </Wrapper>
            <SideTexts>
                <h3>  Our values </h3>
            </SideTexts>
        </Container>
    )
}

const Container = styled.div`
width: 1100px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
scroll-snap-align: start;
height: 100vh;
margin: 0px auto;
/* border:1px solid red; */
@media(max-width:1100px){
    width: 100%;
}
`
const Wrapper = styled.div`
color: white;
height: 100vh;
display: flex;
flex-deirection:column;
align-items: center;
justify-content: center;
width: 95%;
position:relative;
/* border:1px solid red; */
overflow:hidden;
@media(max-width:1100px){
    height:100vh;
    width:95%;
}
@media(max-width:900px){
    height:100vh;
    align-items: flex-start;
}
@media(max-width:800px){
    align-items:center;
}
`
/* const Section = styled.section` */
const Section = styled(Slider)`
padding: 25px;
height: 85vh;
width: 100%;
/* overflow:hidden; */
/* border:1px solid blue; */
ul li button{
    margin:0rem;
    &:before{
        font-size:10px;
        color:white;
        position:absolute;
        /* display:none; */
        left:-4rem;
        top:-5rem;
    }
}
li.slick-active button::before{
    color:white;
}
.slick-list{
    overflow:visible;
}
button{
    z-index:1;
}

@media (max-width: 600px) {
    height:75vh;
    width:100%;
    flex-direction: column;
    justify-content: center;
}
@media (max-width: 400px) {
    height:90vh;
    width:100%;
    flex-direction: column;
    justify-content: center;
    ul li button{
    &:before{
        top:-21rem;
        right:10rem;
    }
}
button{
    left:5rem;
}
}
`
const SideTexts = styled.div`
text-transform: uppercase;
font-size: 8rem;
right: -24.3rem;
transform: rotate(90deg);
position: absolute;
font-family: 'Raleway', sans-serif;
font-weight:50;
h3{
    font-weight: bolder;
    font-size:8rem;
    color: goldenrod;
    cursor:pointer;
    transition:all 300ms linear;
    &:hover{
        color:white;
    }

}
@media (max-width:900px){
   transform:rotate(0deg);
   bottom:6rem;
   left:0;
   width: 100%;
   text-align:center;
   h3{
       font-size:5rem;
    }
}
@media (max-width:938px){
    font-size:3rem ;
}
@media (max-width:400px){
    font-size:3rem ;
    bottom:13rem;
}
`
const Article = styled.div`
display: flex;
flex-direction:row;
align-items: center;
justify-content:space-evenly;
height:70vh;
width:100%;
/* margin-right:2rem; */
/* border:1px solid white; */
/* overflow:hidden; */
@media (max-width: 800px) {
    width: 90%;
    height:70vh;
    margin:0 auto;
    flex-direction: column;
  justify-content: center;
  margin-top:-2rem;
}
@media (max-width: 650px) {
    width: 84%;
    height:70vh;
}

`

const SectionLeft = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
width: 40%;
height:90%;
/* border:1px solid green; */
position:relative;
@media (max-width: 600px) {
    justify-content: center;
    width: 100%;
    /* margin: 0 auto; */
    height:100%;
}
@media(max-width:900px){
    /* margin-bottom:5rem; */
    height:50%;
} 
@media(max-width:500px){
    /* margin-bottom:5rem; */
    height:40%;
} 
`

const ImgContainer = styled.div`
width: 100%;
height: 25vh;
display:flex;
justify-content:center;
align-items:center;
position:relative;
/* border:1px solid red; */
img{
    width: 70%;
    height: 70%;
    object-fit: contain;
}
.six{
    padding-right:3rem;
}
.one , 
.two,
.three,
.four,
.five,
.six,
.seven,
.eight
{
    width: 100%;
    height: 100%;
    object-fit: contain;

}
@media(max-width:500px){
    .six , .eight{
    width: 70%;
    height: 70%;
    object-fit: contain;
}
}
`

const SemiCircleUp = styled.div`
position: absolute;
top:-10.9rem;
left:20%;
height: 10.5rem;
width: 22rem;
border-radius: 250px 250px 0 0;
border:2px  solid white;
border-bottom:0px ;
@media (max-width: 800px) {
    left:23%;
    height:8rem;
    width:15rem;
}
@media (max-width: 800px) {
    left:40%;
    top:-9rem;
    height: 8rem;
    width: 15rem;
    display:none;
}
@media (max-width: 450px) {
    left:35%;
}
`

const SemiCircleDown = styled.div`
position: absolute;
bottom:-10.9rem;
left:20%;
height: 10.5rem;
width: 22rem;
border-radius:0 0  250px 250px ;
border:2px  solid white;
border-top:0px ;
@media (max-width: 800px) {
    left:23%;
    height:8rem;
    width:15rem;
    display:none;
}
@media (max-width: 600px) {
    left:40%;
    bottom:-9rem;
    height: 8rem;
    display:none;
    width: 15rem;
}
@media (max-width: 450px) {
    left:35%;
}
`


const SectionRightt = styled.div`
width: 40%;
height:90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
/* border:1px solid red; */
@media (max-width: 800px) {
    width: 100%;
    height:60%;
    margin: 0 auto;
}
@media (max-width: 400px) {
    justify-content:flex-start;
}
`

const H = styled.h3`
text-align:center;
text-transform: uppercase;
margin-bottom: 16px;
font-size: 3rem;
font-weight: 500;
font-family: 'Raleway', sans-serif;
@media (max-width: 600px) {
  font-size: 4rem;
}
@media (max-width: 600px) {
  font-size: 4rem;
  margin-top:2rem;
}
`
const P = styled.p`
text-align: justify;
line-height: 1.5;
letter-spacing: .4px;
font-size: 1.8rem;
@media (max-width: 600px) {
  font-size: 1.6rem;
}
@media (max-width: 400px) {
    margin-top:2rem;
  font-size: 2.15rem;
}
`
// const Icons = styled.div`
// width:10%;
// margin:0 auto;
// height:5rem;
// display:flex;
// align-items:center;
// bottom:5rem;
// justify-content:space-between;
// @media(max-width:900px){
//     position:absolute;
//     bottom:14rem;
//     width:20%;
// } 
// @media(max-width:400px){
//     position:absolute;
//     bottom:15rem;
//     width:30% ;
// } 
// `
// const IconLeft = styled.div`
// font-size:3rem;
// cursor:pointer ;
// `
// const IconRight = styled.div`
// font-size:3rem;
// cursor:pointer ;
// `

export default ValuesComp

