import React, { useState } from 'react'
import styled from 'styled-components'
import ReactPlayer from "react-player"
import Player from '../../components/Player/Player'
import { NavLink, useNavigate } from 'react-router-dom'
import { images } from './carouselImg'
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons'
import Login from '../../components/LoginPopUp/Login'

const LoginPage = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [playing, setPlaying] = useState(true)
    const [count, setCount] = useState(0)
    const [login, SetLogin] = useState(false)
    // url for you tube video
    const url = 'https://youtu.be/cr2Rrl3vz9I'

    // corousels
    const length = images.length
    const image = images[count].img

    const left = () => {
        count > 0 ? setCount(count - 1) : setCount(length - 1)
    }
    const right = () => {
        count < length - 1 ? setCount(count + 1) : setCount(0)
    }
    // setTimeout(() => {
    //     count < length - 1 ? setCount(count + 1) : setCount(0)
    //     count < length - 1 ? setCount(count + 1) : setCount(0)
    // }, 3000);



    const showPlayer = () => {
        switch (show) {
            case false:
                setShow(true)
                setPlaying(false)
                break;
            case true:
                setShow(false)
                setPlaying(true)
                break;
            default:
                setShow(false)
                setPlaying(true)
        }
    }

    const goBack = () => {
        navigate('..')
    }

  
    const showLogin = () => {
        switch (login) {
            case false:
                SetLogin(true)
                setPlaying(false)
                break;
            case true:
                SetLogin(false)
                setPlaying(true)
                break;
            default:
                SetLogin(false)
                setPlaying(true)
        }
    }


    return (
        <Container  >
            <Wrapper>
                <Header>
                    <Span onClick={goBack}> <a href="#carousel">LLIV.</a></Span>
                    <Span onClick={goBack}>HOME</Span>
                </Header>
                <Agent>
                    <AgentTopHeader>
                        <AgentTopHeaderLeft>
                            <AgentTopHeaderLeftName>Hi AMAN</AgentTopHeaderLeftName>
                        </AgentTopHeaderLeft>
                        <AgentTopHeaderRight>
                            <AgentTopHeaderRightSignUp> <NavLink to='/registration' className='nav'> SIGN UP</NavLink> </AgentTopHeaderRightSignUp>
                            <AgentTopHeaderRightLogIn onClick={showLogin}>LOGIN</AgentTopHeaderRightLogIn>
                        </AgentTopHeaderRight>
                    </AgentTopHeader>
                    <Info>
                        <Left>
                            <LeftTop>
                                <LeftTopSpan  > <NavLink className='nav' to='/portfolio'> VIEW OUR PORTFOLIO </NavLink></LeftTopSpan>
                                <LeftTopSpan onClick={showPlayer}>WHY WORK WITH US?</LeftTopSpan>
                                <LeftTopSpan>TESTIMONIES</LeftTopSpan>
                            </LeftTop>
                            <LeftBotom>
                                <ReactPlayer
                                    className={show ?'player' :undefined}
                                    url={url}
                                    playing={playing}
                                    controls={true}
                                    height='99%'
                                    width='100%'
                                />
                            </LeftBotom>
                        </Left>
                        <Right>
                            <RightTop>
                                <RightTopH>HOTEL OF THE WEEK</RightTopH>
                            </RightTop>
                            <RightBottom>

                                <img src={image} alt="..." />

                                <Controls>
                                    <ControlsLeft onClick={left}><LeftOutlined /></ControlsLeft>
                                    <ControlsRight onClick={right}><RightOutlined /></ControlsRight>
                                </Controls>
                            </RightBottom>
                        </Right>
                    </Info>
                </Agent>
            </Wrapper>
            {
                show && <Player showPlayer={showPlayer} url={url} />
            }
            {
                login && <Login  showLogin={showLogin}/>
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    scroll-snap-align:center;
    position:relative;
    .nav{
    color:white;
    text-decoration:none;
}
   @media(max-width:725px){
    width: auto;
    height: auto;
}
   `
const Wrapper = styled.div`
height:100%;
width:100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* background-color:red; */
margin:0rem auto;
overflow-y:scroll;
overflow-x:hidden;

`

const Header = styled.div`
display:flex;
width:1100px;
margin:1rem auto;
align-items:center;
justify-content:space-between;
height:6rem;
/* width:100%; */
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

const Agent = styled.div`
width:1100px;
height:auto;
margin:0rem auto;
border:0.5px solid white;

@media(max-width:1020px){
    width:97%;
    /* border:none; */
}
`

const AgentTopHeader = styled.div`
height:6rem;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
border-bottom:1px solid white;
`
const AgentTopHeaderLeft = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:center;
`
const AgentTopHeaderLeftName = styled.h4`
font-size:1.8rem;
text-align:center;
`
const AgentTopHeaderRight = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:center;
`
const AgentTopHeaderRightSignUp = styled.span`
font-size:2rem;
text-decoration:underline;
cursor:pointer;
`
const AgentTopHeaderRightLogIn = styled.span`
font-size:2rem;
margin-left:1rem;
text-decoration:underline;
cursor:pointer;
`

const Info = styled.div`
height:calc( 80vh - 60px);
width:100%;
display:flex;
align-items:center;
@media(max-width:725px){
    /* height:auto; */
    width:100%;
    flex-direction:column;
    margin-bottom:1rem;
}
`

const Left = styled.div`
width:50%;
height:100%;
padding:1rem;
border-right:0.5px solid white;
@media(max-width:725px){
    width:100%;
    height:100%;
    border:none;
}
`
const LeftTop = styled.div`
width:100%;
height:50%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
.nav{
    color:white;
    text-decoration:none;
}
@media(max-width:725px){
    height:30%;
}
`
const LeftTopSpan = styled.span`
width:100%;
height:50%;
font-size:2rem;
cursor:pointer;
`
const LeftBotom = styled.div`
width:100%;
height:50%;
border:0.5px solid white;
position:relative;
@media(max-width:725px){
    height:70%;
}
`
const Right = styled.div`
width:50%;
height:100%;
border-right:0.5px solid white;
@media(max-width:725px){
    width:100%;
    height:100%;
    border:none;
}
`
const RightTop = styled.div`
width:100%;
height:15%;
display:flex;
align-items:center;
justify-content:center;
border-bottom:0.5px solid white;
`
const RightTopH = styled.h3`
font-size:2.2rem;
font-weight:400;
`
const RightBottom = styled.div`
width:100%;
height:90%;
display:flex;
overflow-x:hidden;
position:relative;
img{
    height:90%;
    width:100%;
    transition:all 200ms linear;
}
`
const Controls = styled.div`
position:absolute;
top:40%;
right:0%;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
`
const ControlsLeft = styled.div`
font-size:3rem;
cursor:pointer;
`
const ControlsRight = styled.div`
font-size:3rem;
cursor:pointer;
`

// const Button = styled.button`
// background-color: black;
// color: white;
// margin:1rem auto;
// font-size: 2rem;
// padding: 1rem;
// `

export default LoginPage
