import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from './data'
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons'
const ValuesComp = () => {
    const [count, setCount] = useState(0)
    const length = data.length
    const items = data[count]

    const handleLeft = () => {
        count > 0 ? setCount(count - 1) : setCount(length - 1)
    }

    const handleRight = () => {
        count < length-1 ? setCount(count + 1) : setCount(0)
    }
    return (
        <Container>
            <Wrapper>
                <Section>
                    <Article>
                        <SectionLeft>
                            <img src={items.img} alt="" />
                            <SemiCircleUp></SemiCircleUp>
                            <SemiCircleDown></SemiCircleDown>
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
            <SideTexts>Our values</SideTexts>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
scroll-snap-align: start;
height: 100vh ;
`
const Wrapper = styled.div`
color: white;
height: 95vh;
display: flex;
flex-deirection:column;
align-items: center;
justify-content: center;
width: 900px;
margin: 0px auto;
`
const Section = styled.section`
padding: 25px;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
flex-wrap: wrap;
 @media (max-width: 600px) {
     height:90vh;
flex-direction: column;
 justify-content: center;
}
`
const SideTexts = styled.h1`
text-transform: uppercase;
font-size: 8rem;
right:  -150px;
font-weight: bold;
transform: rotate(90deg);
position: absolute;
font-family: 'Raleway', sans-serif;
@media (max-width:600px){
    display: none;
}
@media (max-width:1072px){
    font-size:6rem ;
    right: -12rem;
}
@media (max-width:938px){
    font-size:4rem ;
    right: -10rem;
}
`
const Article = styled.div`
display: flex;
align-items: center;
justify-content:space-evenly;
height: 90%;
margin:0 auto;
width:100%;
margin-left:-7rem;
@media (max-width: 600px) {
    flex-direction: column;
  justify-content: space-between;
  margin-left:0rem;
}

`

const SectionLeft = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
width: 60%;
height:90%;
position:relative;
img{
    width: 80%;
    height: 25vh;
    object-fit: contain;
}
@media (max-width: 600px) {
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  img{
      width: 90%;
      height:40%;
      margin-top: 2rem;
  }
}
@media(max-width:600px){
    margin-bottom:5rem;
    height:50%;
}
`
const SemiCircleUp = styled.div`
position: absolute;
top: 0rem;
left:24%;
height: 10.5rem;
width: 22rem;
border-radius: 250px 250px 0 0;
border:2px  solid white;
border-bottom:0px ;
@media (max-width: 600px) {
    left:35%;
    height: 8rem;
    width: 15rem;
}
`

const SemiCircleDown = styled.div`
position: absolute;
bottom:0rem;
left:24%;
height: 10.5rem;
width: 22rem;
border-radius:0 0  250px 250px ;
border:2px  solid white;
border-top:0px ;
@media (max-width: 600px) {
    left:35%;
    height: 8rem;
    width: 15rem;
}
`


const SectionRightt = styled.div`
width: 30%;
height:90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
@media (max-width: 600px) {
  width: 90%;
  height:60%;
  margin: 0 auto;
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
`
const P = styled.p`
text-align: justify;
line-height: 1.5;
letter-spacing: .4px;
font-size: 1.8rem;
@media (max-width: 600px) {
  font-size: 2rem;
}
`
const Icons = styled.div`
width:10%;
margin:0 auto;
height:5rem;
display:flex;
align-items:center;
justify-content:space-between;
@media(max-width:600px){
    position:absolute;
    bottom:0;
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
