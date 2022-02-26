import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from './data'
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons'
import { useEffect } from 'react';
const ValuesComp = () => {
    const [count, setCount] = useState(0)
    const [activeSlides, setActiveSlides] = useState(true)
    const length = data.length
    const items = data[count]

    const handleLeft = () => {
        setActiveSlides(false)
        count > 0 ? setCount(count - 1) : setCount(length - 1)
    }

    const handleRight = () => {
        setActiveSlides(false)
        count < length - 1 ? setCount(count + 1) : setCount(0)
    }
    useEffect(() => {
        if (activeSlides) {
            setTimeout(() => {
                count < length - 1 ? setCount(count + 1) : setCount(0)
            }, 3000);
        } else {
            console.log('slides inactive');
        }
    }, [length, count, activeSlides])
    return (
        <Container>
            <Wrapper>
                <Section>
                    <Article>
                        <SectionLeft>
                            <ImgContainer>
                                <img src={items.img} alt="" />
                                <SemiCircleUp></SemiCircleUp>
                                <SemiCircleDown></SemiCircleDown>
                            </ImgContainer>
                        </SectionLeft>
                        <SectionRightt>
                            <H>{items.title}</H>
                            <P>{items.content}</P>
                        </SectionRightt>
                    </Article>
                    <Icons>
                        <IconLeft onClick={handleLeft} ><LeftOutlined /></IconLeft>
                        <IconRight onClick={handleRight} ><RightOutlined /></IconRight>
                    </Icons>
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
@media(max-width:1100px){
    width: 100%;
}
`
const Wrapper = styled.div`
color: white;
height: 95vh;
display: flex;
flex-deirection:column;
align-items: center;
justify-content: center;
width: 1100px;
/* position:relative; */

@media(max-width:600px){
    height:100vh;
}
`
const Section = styled.section`
padding: 25px;
height: 80vh;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
width: 100%;

@media (max-width: 600px) {
    height:85vh;
    flex-direction: column;
    justify-content: center;
}
`
const SideTexts = styled.div`
text-transform: uppercase;
font-size: 8rem;
right: -20rem;
transform: rotate(90deg);
position: absolute;
font-family: 'Raleway', sans-serif;

h3{
    font-weight: bolder;
    font-size:8rem;
}
@media (max-width:600px){
   transform:rotate(0deg);
   bottom:0;
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
`
const Article = styled.div`
display: flex;
align-items: center;
justify-content:space-evenly;
height: 90%;
margin:0 auto;
width:80%;
@media (max-width: 600px) {
    width: 100%;
    height:100%;
    flex-direction: column;
  justify-content: center;
  margin-left:0rem;
}

`

const SectionLeft = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
width: 40%;
height:90%;

position:relative;
@media (max-width: 600px) {
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    height:100%;
}
@media(max-width:600px){
    /* margin-bottom:5rem; */
    height:50%;
} 
`

const ImgContainer = styled.div`
width: 100%;
height: 25vh;
display:flex;
justify-content:center;
align-items:center;
position:relative;
img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`

const SemiCircleUp = styled.div`
position: absolute;
top:-10.9rem;
left:17%;
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
@media (max-width: 600px) {
    left:40%;
    top:-9rem;
    height: 8rem;
    width: 15rem;
}
@media (max-width: 450px) {
    left:35%;
}
`

const SemiCircleDown = styled.div`
position: absolute;
bottom:-10.9rem;
left:17%;
height: 10.5rem;
width: 22rem;
border-radius:0 0  250px 250px ;
border:2px  solid white;
border-top:0px ;
@media (max-width: 800px) {
    left:23%;
    height:8rem;
    width:15rem;
}
@media (max-width: 600px) {
    left:40%;
    bottom:-9rem;
    height: 8rem;
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
@media (max-width: 600px) {
  width: 100%;
  height:60%;
  margin: 0 auto;
}
@media (max-width: 400px) {
  margin-top:8rem;
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
  font-size: 3.4rem;
}
`
const P = styled.p`
text-align: justify;
line-height: 1.5;
letter-spacing: .4px;
font-size: 1.8rem;
/* @media (max-width: 600px) {
  font-size: 2rem;
} */
@media (max-width: 600px) {
  font-size: 1.6rem;
}
`
const Icons = styled.div`
width:10%;
margin:0 auto;
height:5rem;
display:flex;
align-items:center;
bottom:5rem;
justify-content:space-between;
@media(max-width:600px){
    position:absolute;
    bottom:8rem;
    width:20%;
} 
@media(max-width:400px){
    position:absolute;
    bottom:6rem;
} 
`
const IconLeft = styled.div`
font-size:3rem;
cursor:pointer onClick={handleLeft} ;
`
const IconRight = styled.div`
font-size:3rem;
cursor:pointer onClick={handleLeft} ;
`

export default ValuesComp

