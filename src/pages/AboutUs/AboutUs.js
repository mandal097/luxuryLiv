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
                        <ContentLeftImg className='img' src='https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=' />
                    </ContentLeft>
                    <ContentRight>
                        <Line></Line>
                        <ContentRightText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                    <ContentCr></ContentCr>
                    </ContentRight>
                </Content>
                <Content>
                    <ContentLeft className='left'>
                        <ContentLeftImg className='img' src='https://media.istockphoto.com/photos/professional-woman-working-from-home-picture-id1319189527?b=1&k=20&m=1319189527&s=170667a&w=0&h=OMelm_mmmIFVCCcgv1630qGqIWXH9AETusY4QtsRD9A=' />
                    </ContentLeft>
                    <ContentRight>
                        <Line></Line>
                        <ContentRightText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                    <ContentCr></ContentCr>
                    </ContentRight>
                </Content>
                <Content>
                    <ContentLeft className='left'>
                        <ContentLeftImg className='img' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
                    </ContentLeft>
                    <ContentRight>
                        <Line></Line>
                        <ContentRightText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                    <ContentCr></ContentCr>
                    </ContentRight>
                </Content>
                <Content>
                    <ContentLeft className='left'>
                        <ContentLeftImg className='img' src='https://media.istockphoto.com/photos/young-man-with-laptop-and-coffee-working-indoors-home-office-concept-picture-id1334702614?b=1&k=20&m=1334702614&s=170667a&w=0&h=Ea5KZt7q8D_dm1kHuNG7__R8J--thzE-Yj7Q9nXMg6E=' />
                    </ContentLeft>
                    <ContentRight>
                        <Line></Line>
                        <ContentRightText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                    <ContentCr></ContentCr>
                    </ContentRight>
                </Content>
                <Content>
                    <ContentLeft className='left'>
                        <ContentLeftImg className='img' src='https://media.istockphoto.com/photos/african-mid-woman-using-smartphone-at-home-picture-id1319763415?b=1&k=20&m=1319763415&s=170667a&w=0&h=J9vN7w33elL-hY1CogyTB2BzzKpiEbmPqTdsQ6fBbuI=' />
                    </ContentLeft>
                    <ContentRight>
                        <Line></Line>
                        <ContentRightText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis architecto a, ea, ratione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officatione reiciendis quibusdam id ad facere temporibus pariatur quam vero  fugit officiis ut laboriosam temporibus nisi tempora est ullam non, aut labore ea aliquid odio esse facere molestiae.</ContentRightText>
                    <ContentCr></ContentCr>
                    </ContentRight>
                </Content>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
height:100vh;
width:100%;
overflow-y:scroll;
overflow-x:hidden;
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
margin-top:9rem;
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
transition:all 200ms linear;
position:relative;
&:hover{
    border-right-color:white;
    border-bottom-color:white;
    border-left-color:black;
    border-top-color:black;
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
left:-5rem;
width:2px;
height:11rem;
background-color:white;
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

`
const ContentRight = styled.div`
width:70%;
height:20rem;
padding:5px;
position:relative;
z-index:1;
display:flex;
align-items:center;
justify-content:center;
@media(max-width:650px){
    border:none;
    width:95%;
}
`
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

export default AboutUs
