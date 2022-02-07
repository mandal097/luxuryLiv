import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import {
    CloseOutlined 
}from '@ant-design/icons'
const Player = ({showPlayer,url}) => {
    return (
        <Container>
            <Wrapper>
            <ReactPlayer 
            url={url}
            playing={true}
            controls={true}
            />
            <CancelDIv onClick={showPlayer}><CloseOutlined /></CancelDIv>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
position:absolute;
top:0;
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
z-index:111;
`
const Wrapper = styled.div`
width:100%;
background:linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9));
height:100vh;
display:flex;
justify-content:center;
align-items:center;
position:relative;
`
const CancelDIv = styled.div`
position:absolute;
font-size:5rem;
color:white;
top:4rem;
right:15rem;
`
export default Player
