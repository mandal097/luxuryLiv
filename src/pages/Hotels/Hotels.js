import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { Fade } from 'react-reveal'

const Hotels = () => {
    const navigate = useNavigate()

    useEffect(() => {
        Aos.init({ duration: 700 })
    })
    const goBack = () => {
        navigate('..')
    }

    return (
        <Container>
            <Wrapper>
                <FirstSection>
                    <Header>
                        <Span onClick={goBack}> <a href="#carousel">LLIV.</a></Span>
                        <Span onClick={goBack}>MENU</Span>
                    </Header>
                    <Content>
                        <H>OUR FIRST LOVE</H>
                        <P>  Hotels. A gift given to us by the Japanese in 705 and still going strong.
                          We would do anything for them...except promoting them
                          when they dont follow 'price parity'...and that leaves us with what...
                          5 - 7 of them? So, yes, Our first love! But if you are amongst those
                          5-7 then read on...for the rest...woo us when you really need a partner!</P>
                    </Content>
                </FirstSection>
                <SecondPage>
                    <Fade left>
                    <SWrapper >
                        <Left>
                            <Img src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </Left>
                        <Right>
                            <Name>AMAN</Name>
                            <About>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae molestiae dicta voluptatum recusandae est aliquid quaerat nemo totam error. Aspernatur fugiat numquam assumenda qui aut reiciendis, ut odio quasi.</About>
                            <Button>Know More</Button>
                        </Right>
                    </SWrapper>
                    </Fade>
                    <Fade right>
                    <SWrapper>
                        <Right style={{ textAlign: 'right' }}>
                            <Name>GAURAV</Name>
                            <About>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae molestiae dicta voluptatum recusandae est aliquid quaerat nemo totam error. Aspernatur fugiat numquam assumenda qui aut reiciendis, ut odio quasi.</About>
                            <Button style={{ marginLeft: 'auto' }}>Know More</Button>
                        </Right>
                        <Left>
                            <Img src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </Left>
                    </SWrapper>
                    </Fade>
                    <Fade left>
                    <SWrapper >
                        <Left>
                            <Img src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </Left>
                        <Right>
                            <Name>AMAN</Name>
                            <About>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae molestiae dicta voluptatum recusandae est aliquid quaerat nemo totam error. Aspernatur fugiat numquam assumenda qui aut reiciendis, ut odio quasi.</About>
                            <Button>Know More</Button>
                        </Right>
                    </SWrapper>
                    </Fade>
                    <Fade right>
                    <SWrapper>
                        <Right style={{ textAlign: 'right' }}>
                            <Name>GAURAV</Name>
                            <About>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae molestiae dicta voluptatum recusandae est aliquid quaerat nemo totam error. Aspernatur fugiat numquam assumenda qui aut reiciendis, ut odio quasi.</About>
                            <Button style={{ marginLeft: 'auto' }}>Know More</Button>
                        </Right>
                        <Left>
                            <Img src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </Left>
                    </SWrapper>
                    </Fade>
                    <Fade left>
                    <SWrapper >
                        <Left>
                            <Img src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </Left>
                        <Right>
                            <Name>AMAN</Name>
                            <About>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae molestiae dicta voluptatum recusandae est aliquid quaerat nemo totam error. Aspernatur fugiat numquam assumenda qui aut reiciendis, ut odio quasi.</About>
                            <Button>Know More</Button>
                        </Right>
                    </SWrapper>
                    </Fade>
                    <Fade right>
                    <SWrapper>
                        <Right style={{ textAlign: 'right' }}>
                            <Name>GAURAV</Name>
                            <About>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae molestiae dicta voluptatum recusandae est aliquid quaerat nemo totam error. Aspernatur fugiat numquam assumenda qui aut reiciendis, ut odio quasi.</About>
                            <Button style={{ marginLeft: 'auto' }}>Know More</Button>
                        </Right>
                        <Left>
                            <Img src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </Left>
                    </SWrapper>
                    </Fade>
                </SecondPage>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
/* position: absolute; */
/* top: 0; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
/* overflow-y:scroll; */
overflow-x:hidden;

`
const Wrapper = styled.div`
width:1000px;
height:auto;
margin:0 auto;
@media(max-width:1000px){
    width:95%;
    /* height:auto; */
}
`
const FirstSection = styled.div`
width:100%;
height: 100vh;
display:flex;
flex-direction:column;
justify-content:space-around;
/* background-color:red; */
/* margin-bottom:90vh; */
`

const Header = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
height:50px;
width:100%;
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
font-size:5rem;
text-align:center;
`
const P = styled.p`
font-size:2.5rem;
text-align:center;
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
display:flex;
justify-content:center;
align-items:center;
padding:2rem;
margin-bottom:2rem;
@media(max-width:650px){
    flex-direction:column;
    heigth:auto;
}
`

const Left = styled.div`
height:60%;
width:50%;
display:flex;
justify-content:space-around;
@media(max-width:650px){
    width:100%;
    height:auto;
}
`

const Img = styled.img`
height:100%;
width:80%;
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
justify-content:center;
@media(max-width:650px){
    width:80%;
    height:auto;
}
`

const Name = styled.span`
font-size:4rem;
`
const About = styled.span`
font-size:1.8rem;
margin-bottom:0.3rem;
`

const Button = styled.button`
background-color: black;
color: white;
width:10rem;
font-size: 1.5rem;
border:none;
background-color:green;
padding: 1rem;
`
export default Hotels
