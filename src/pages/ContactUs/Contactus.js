import React from 'react'
import styled from 'styled-components'
import SocialMob from '../../components/SocialMob/SocialMob'
const Contactus = () => {

    return (
        <Container>
            <Wrapper>
                <Left>
                    <H3>COME...VISIT US SOMETIMES!  </H3>
                    <Img src='./images/gmap.png' />
                    <Span>LX MARKETING PVT. LTD.</Span>
                    <P>K No. - 846/2, first floor, <br /> Opposite Metro pillar No. -115 <br />Ghitorni, New Delhi , India</P>
                </Left>
                <Right>
                    <H3>IN A HURRY TO CONTACT?</H3>
                    <Img src='./images/cphone.png' />
                    <div>
                        <Span>+91 971983158</Span>
                        <Span>+91 9899699991</Span>
                    </div>
                    <Email>gaurav.v@luxuryliving.in <br /> shilesh.v@luxuryliving.in</Email>
                </Right>
                <Vertical />
            </Wrapper>
            <SocialMob />
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    scroll-snap-align:center;
    position:relative;
    .nav{
        color:white;
        text-decoration:none;
    }
`

const Wrapper = styled.div`
width:1000px;
height:75vh;
display: flex;
align-items: center;
justify-content: center;
position:relative;
@media(max-width:1000px){
    width:95%;
    /* border:1px solid red; */
}
@media(max-width:540px){
    flex-direction:column;
    justify-content: space-evenly;
    height:85vh;
    /* padding-top:2rem; */
}
`
const Left = styled.div`
width:50%;
height:70%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-evenly;
@media(max-width:540px){
    width:90%;
    height:40%;
}
`
const H3 = styled.h3`
font-size:1.9rem;
color:white;
font-weight:bold;
letter-spacing:1.5px;
line-height:2;
text-align:center;
@media(max-width:400px){
    font-size:2.3rem;
}
`

const Img = styled.img`
width:12rem;
height:12rem;
object-fit:cover;
@media(max-width:540px){
    width:15rem;
    height:15rem;    
}
`

const Span = styled.span`
font-size:1.9rem;
color:white;
font-weight:400;
@media(max-width:540px){
    font-size:1.7rem;
}
`
const P = styled.p`
font-size:1.4rem;
color:white;
text-align:center;
letter-spacing:1.5px;
@media(max-width:540px){
    font-size:1.8rem;    
    margin-top:1rem;
}
`
const Email = styled.p`
font-size:1.4rem;
color:white;
text-align:center;
margin-top:1rem;
letter-spacing:1.6px;
@media(max-width:540px){
    font-size:1.8rem;
}
`

const Right = styled.div`
width:50%;
height:70%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
div{
    display:flex;
    flex-direction:column;
}
@media(max-width:540px){
    width:90%;
    height:35%;
}
`
const Vertical = styled.div`
position:absolute;
top:10rem;
right:49%;
width:2px;
height:50vh;
background-color:goldenrod;
@media(max-width:540px){
    height:1.5px;
    width: 60%;
    left:20%;
    top:50%;
}
`

export default Contactus
