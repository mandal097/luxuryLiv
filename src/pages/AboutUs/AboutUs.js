import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar'
import Ham from '../../components/Hamburger/Ham'
import HomeBtn from '../../components/HomeBtn/HomeBtn'
// import SemiCircleProgressBar from "react-progressbar-semicircle";
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
                    <ContentLeft className='left'>
                        {/* <Dem>
                    <SemiCircleProgressBar 
                    percentage={33}
                     showPercentValue 
                     orientation='up'
                     direction='right'
                     background='#fff'
                     stroke='#fff'
                     width={2}
                     className='semi_circle' />
                     </Dem> */}
                        <ContentLeftImg className='img' src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                        {/* <ContentLeftArc></ContentLeftArc> */}
                    </ContentLeft>
                    <ContentRight>
                        <Line></Line>
                        <ContentRightText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                    </ContentRight>
                    <ContentCr></ContentCr>
                        {/* <ContentRighttArc></ContentRighttArc> */}
                </Content>
                <Content>
                    <ContentLeft className='left'>
                        <ContentLeftImg className='img' src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                        {/* <ContentLeftArc></ContentLeftArc> */}
                    </ContentLeft>
                    <ContentRight>
                        <Line></Line>
                        <ContentRightText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                        {/* <ContentRighttArc></ContentRighttArc> */}
                    </ContentRight>
                    <ContentCr></ContentCr>
                </Content>
                <Content>
                    <ContentLeft className='left'>
                        <ContentLeftImg className='img' src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                        {/* <ContentLeftArc></ContentLeftArc> */}
                    </ContentLeft>
                    <ContentRight>
                        <Line></Line>
                        <ContentRightText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                        {/* <ContentRighttArc></ContentRighttArc> */}
                    </ContentRight>
                    <ContentCr></ContentCr>
                </Content>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
height:100vh;
width:100%;
overflow-y:scroll;
position:relative;
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
margin:0 auto;
margin-top:13rem;
/* position:relative; */
@media(max-width:1100px){
    width:95%;
}
`
const Content = styled.div`
width:100%;
height:25vh;
display:flex;
align-items:center;
justify-content:space-between;
margin-top:7rem;
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
border-right-color:black;
border-bottom-color:black;
transform:rotate(-45deg);
transition:all 300ms linear;
position:relative;
&:hover{
    border-right-color:white;
    border-bottom-color:white;
    .img{
        animation:about 400ms linear 1;
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
left:-5rem;
width:2px;
height:11rem;
background-color:white;
@media(max-width:650px){
    display:none;
}
`

// const ContentLeftArc = styled.img`
// position: absolute;
// top:-1rem;
// left:-1.9rem;
// height:18rem;
// width:18rem;
// border:2px solid white;
// border-radius:50%;
// border-right-color:transparent;
// border-top-color:transparent;
// transform:rotate(43deg);
// z-index: -1;
// `


const ContentLeftImg = styled.img`
width:16rem;
height:16rem;
border-radius:50%;
object-fit:cover;
transform:rotate(45deg);
transition:all 300ms linear;

`
const ContentRight = styled.div`
width:70%;
height:20rem;
padding:5px;
position:relative;
/* border-top-right-radius:10rem;
border-bottom-right-radius:10rem; */
/* border-bottom:none;
border-top:none;
border-left:none; */
z-index:1;
display:flex;
align-items:center;
justify-content:center;
@media(max-width:650px){
    border:none;
    width:95%;
}
`
// const ContentRighttArc = styled.img`
// position: absolute;
// top:-1rem;
// right:-1.9rem;
// height:18rem;
// width:18rem;
// /* border:2px solid white; */
// border-radius:50%;
// border-left-color:black;
// border-bottom-color:black;
// transform:rotate(43deg);
// z-index: -1;
// `

const ContentRightText = styled.div`
font-size:1.8rem;
width:93%;
text-align:justify;
@media(max-width:950px){
    font-size:1.6rem;
}
@media(max-width:650px){
    font-size:1.4rem;
}
`

const ContentCr = styled.div`
position:absolute;
right:15rem;
width:20rem;
height:20rem;
border-radius:50%;
border:3px solid white;
border-left-color:black;
border-top-color:black;
transform:rotate(-45deg);
`

export default AboutUs
