import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { img } from './hotelModalImg'

const HotelsDescModal = ({ ShowModal }) => {

    const [count, setCount] = useState(5)
    const length = img.length

    const left = () => {
        count > 0 ? setCount(count - 1) : setCount(length - 1)
    }

    const right = () => {
        count < length - 1 ? setCount(count + 1) : setCount(0)
    }
    const images = img[count]

    return (
        <Container>
            <Wrapper>
                <Left>
                    <ImgLeft src={images.img} />
                    <Controls>
                        <ControlsLeft onClick={left} ><LeftOutlined /></ControlsLeft>
                        <ControlsRight onClick={right} ><RightOutlined /></ControlsRight>
                    </Controls>
                </Left>
                <Right>
                    <RightHeader>
                        <RightHeaderH>Hotel Majestico</RightHeaderH>
                    </RightHeader>
                    <RightHeaderSecondDiv>
                        <CountryName>New Delhi, India</CountryName>
                    </RightHeaderSecondDiv>
                    <RightHeaderThirdDiv>

                    </RightHeaderThirdDiv>
                    <RightFooter>
                        <RightFooterSpan>Enquire</RightFooterSpan>
                        <RightFooterSpan>Share</RightFooterSpan>
                        <RightFooterSpan>Download</RightFooterSpan>
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
background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8));
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
width:80%;
height:80vh;
background-color:red;
position:relative;
display:flex;
@media (max-width:700px){
    width:90%;
    flex-direction:column;
}
`
const Left = styled.div`
width:50%;
height:100%;
position:relative;
overflow:hidden;
@media (max-width:700px){
   width:100%;
}
`
const ImgLeft = styled.img`
width:100%;
height:100%;
object-fit:cover;
transition:all 400ms linear;
&:hover{
    transform:scale(1.1);
}
`
const Controls = styled.div`
position:absolute;
top:48%;
width:100%;
padding:0 1rem;
display:flex;
align-items:center;
justify-content:space-between;
color:white;
font-size:2rem;
`
const ControlsLeft = styled.div`
height:4rem;
width:4rem;
background-color:black;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
`
const ControlsRight = styled(ControlsLeft)`

`

const Right = styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media (max-width:700px){
   width:100%;
}
`
const RightHeader = styled.div`
width:100%;
height:12%;
background-color:lightsalmon;
display:flex;
align-items:center;
justify-content:flex-start;
`
const RightHeaderH = styled.h3`
font-size:3rem;
font-weight:400;
color:black;
`
const RightHeaderSecondDiv = styled.div`
width:100%;
height:40%;
background-color:skyblue;
display:flex;
/* align-items:center; */
justify-content:center;
`
const CountryName = styled.span`
font-size:1.7rem;
font-weight:100;
color:black;
`

const RightHeaderThirdDiv = styled.div`
width:100%;
height:40%;
background-color:yellow;
`
const RightFooter = styled.div`
width:100%;
height:10%;
background-color:grey;
display:flex;
align-items:center;
justify-content:space-evenly;
`
const RightFooterSpan = styled.span`
font-size:1.7rem;
color:black;
cursor:pointer;
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
