import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css'
import Aos from 'aos'
import Ham from '../../components/Hamburger/Ham'
import Navbar from '../../components/Navbar/Navbar'
import HomeBtn from '../../components/HomeBtn/HomeBtn'

const Hotels = () => {
    const [IsOpen, setIsOpen] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 1500 })
    })
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
            <Wrapper>
                <FirstSection>
                    <Header>
                        <Span onClick={showNavbar} > <Ham /> </Span>
                    </Header>
                    <Content>
                        <H>OUR FIRST LOVE</H>
                        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eum eveniet eius ipsam inventore dolores! Iusto natus voluptatum quae magnam consectetur eaque voluptatibus perspiciatis. Iure dolorem repellendus id cupiditate atque.</P>
                    </Content>
                </FirstSection>
                <SecondPage>
                    <SWrapper data-aos="fade-right">
                        <Left>
                            <Img src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </Left>
                        <Right>
                            <Name>AMAN</Name>
                            <About>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae molestiae dicta voluptatum recusandae est aliquid quaerat nemo totam error. Aspernatur fugiat numquam assumenda qui aut reiciendis, ut odio quasi.</About>
                            <Button>Know More</Button>
                        </Right>
                    </SWrapper>
                    <SWrapper data-aos="fade-left">
                        <Right >
                            <Name>GAURAV</Name>
                            <About>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae molestiae dicta voluptatum recusandae est aliquid quaerat nemo totam error. Aspernatur fugiat numquam assumenda qui aut reiciendis, ut odio quasi.</About>
                            <Button>Know More</Button>
                        </Right>
                        <Left>
                            <Img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        </Left>
                    </SWrapper>
                    <SWrapper data-aos="fade-right">
                        <Left>
                            <Img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        </Left>
                        <Right>
                            <Name>AMAN</Name>
                            <About>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae molestiae dicta voluptatum recusandae est aliquid quaerat nemo totam error. Aspernatur fugiat numquam assumenda qui aut reiciendis, ut odio quasi.</About>
                            <Button>Know More</Button>
                        </Right>
                    </SWrapper>
                    <SWrapper data-aos="fade-left">
                        <Right >
                            <Name>GAURAV</Name>
                            <About>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae molestiae dicta voluptatum recusandae est aliquid quaerat nemo totam error. Aspernatur fugiat numquam assumenda qui aut reiciendis, ut odio quasi.</About>
                            <Button>Know More</Button>
                        </Right>
                        <Left>
                            <Img src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        </Left>
                    </SWrapper>
                    <SWrapper data-aos="fade-right" >
                        <Left>
                            <Img src="https://images.unsplash.com/photo-1516531558361-f6c4c956ad85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzJTIwbmlnaHRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        </Left>
                        <Right>
                            <Name>AMAN</Name>
                            <About>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae molestiae dicta voluptatum recusandae est aliquid quaerat nemo totam error. Aspernatur fugiat numquam assumenda qui aut reiciendis, ut odio quasi.</About>
                            <Button>Know More</Button>
                        </Right>
                    </SWrapper>
                    <SWrapper data-aos="fade-left">
                        <Right >
                            <Name>GAURAV</Name>
                            <About>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae molestiae dicta voluptatum recusandae est aliquid quaerat nemo totam error. Aspernatur fugiat numquam assumenda qui aut reiciendis, ut odio quasi.</About>
                            <Button>Know More</Button>
                        </Right>
                        <Left>
                            <Img src="https://images.unsplash.com/photo-1580747182325-66c1cbcdb289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzJTIwbmlnaHRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        </Left>
                    </SWrapper>
                </SecondPage>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
overflow-x:hidden;
font-family: 'Raleway', sans-serif;
position:relative;

`
const Wrapper = styled.div`
width:1100px;
height:auto;
margin:0 auto;
@media(max-width:1100px){
    width:100%;   
}
`
const FirstSection = styled.div`
width:100%;
height: 100vh;
display:flex;
flex-direction:column;
justify-content:space-around;
`

const Header = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;

z-index:10;
position:absolute;
top:3rem;
right:14rem;
@media(max-width:700px){
    right:8rem;
}
@media(max-width:400px){
    right:4rem;
}
`
const Span = styled.div`
font-size: 20px;
font-weight: bold;
color: goldenrod;
cursor:pointer;
a{
text-decoration: none;  
color: goldenrod; 
}
`
const Content = styled.div`
height:60vh;
width:70%;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const H = styled.h3`
font-size:7rem;
text-align:center;
font-family:'Shoreline';
text-transform:uppercase;
@media(max-width:300px){
    font-size:5rem;
}
`
const P = styled.p`
font-size:2.5rem;
text-align:center;
@media(max-width:350px){
    font-size:2rem;
}
`


const SecondPage = styled.div`
/* height:100vh; */
width:80%;
margin:0 auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const SWrapper = styled.div`
/* height:70vh; */
width:100%;
margin:0 auto;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:5rem;
@media(max-width:650px){
    flex-direction:column; 
    heigth:auto;  
}
`

const Left = styled.div`
height:80%;
width:50%;
display:flex;
justify-content:space-around;
margin:2rem;
@media(max-width:650px){
    width:100%;
    height:auto;
    order:1;
}
`

const Img = styled.img`
height:40vh;
width:100%;
object-fit:cover;
display:flex;
justify-content:space-around;
@media(max-width:650px){
    width:100%;
}
`
const Right = styled.div`
height:50%;
width:50%;
display:flex;
flex-direction:column;
margin:2rem;
@media(max-width:650px){
    width:100%;
    height:auto;
    order:2;
}
`

const Name = styled.span`
font-size:4rem;
@media(max-width:650px){
    text-align:left;
    margin:0.5rem 0;
}
@media(max-width:835px){
   font-size:3rem;
}
`
const About = styled.span`
font-size:1.8rem;
margin-bottom:0.3rem;
@media(max-width:935px){
   font-size:1.6rem;
}
@media(max-width:650px){
    text-align:left;
    margin:1rem 0;
}
`

const Button = styled.button`
background-color: black;
color: white;
width:10rem;
font-size: 1.5rem;
border:none;
background-color:green;
padding: 1rem;
@media(max-width:650px){
    margin-right:auto;
}
`
export default Hotels
