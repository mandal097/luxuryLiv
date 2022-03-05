import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
    LeftOutlined,
    RightOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined
} from '@ant-design/icons'
import { fetchApi } from '../../../axios'
const Carousel = () => {

    const [feedbackApi, setFeedbackApi] = useState([])
    const [activeSlides, setActiveSlides] = useState(true)

    const [count, setCount] = useState(0)
    const length = feedbackApi.length

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const feedback = await fetchApi.get('/feedback')
                setFeedbackApi(feedback.data)
                // console.log(feedbackApi);
                // console.log(feedbackApi[0].name);
            } catch (error) {
                console.log(`something went wrong`);
            }
        }
        fetchFeedback()
    }, [])
    
    const OrgFeedback = feedbackApi[count]
    
    if (activeSlides) {
        setTimeout(() => {
            count < length - 1 ? setCount(count + 1) : setCount(0)
        }, 3000);
    } else {
        console.log('inactive slides');
    }
    const handleLeft = () => {
        setActiveSlides(false)
        count > 0 ? setCount(count - 1) : setCount(length - 1)
    }

    const handleRight = () => {
        setActiveSlides(false)
        count < length - 1 ? setCount(count + 1) : setCount(0)
    }

    const navigate = useNavigate()

    const goToAgentsPage = () => {
        navigate('agents')
    }
    const goToHotelsPage = () => {
        navigate('hotels')

    }
    return (
        <MainContainer id='carousel'>
            <Container >
                <Top>
                    <TopLeft onClick={goToAgentsPage}> <ArrowLeftOutlined className='icons' /><h1>AGENTS TO THE LEFT</h1></TopLeft>
                    <TopRight onClick={goToHotelsPage}> <ArrowRightOutlined className='icons' /><h1>HOTELS TO THE RIGHT</h1></TopRight>
                </Top>
                <Bottomout>


                    {
                        feedbackApi.map(i => (
                            <Bottom key={i.phone}>
                                <LeftImg>
                                    <Img src={OrgFeedback.feedbackImage ? `/uploads/${OrgFeedback.feedbackImage}` : "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256__340.png"} />
                                </LeftImg>
                                <RightBottom>
                                    <RightBottomWrapper>
                                        <Feedback>
                                            <FeedbackText>{OrgFeedback.feedbackMessage}</FeedbackText>
                                        </Feedback>
                                        <NameDiv >
                                            <AgentsName>{OrgFeedback.name}</AgentsName>
                                            <CompanyName>{OrgFeedback.companyName}</CompanyName>
                                        </NameDiv>
                                    </RightBottomWrapper>
                                </RightBottom>
                                <Controls>
                                    <ControlsLeft onClick={handleLeft}><LeftOutlined /></ControlsLeft>
                                    <ControlsRight onClick={handleRight} ><RightOutlined /></ControlsRight>
                                </Controls>
                            </Bottom>
                        ))
                    }
                </Bottomout>
            </Container>
        </MainContainer>
    )
}

const MainContainer = styled.div`
display: flex;
width: 100%;
height:100vh;
margin:0 auto;
position: relative;
@media (max-width: 1000px) {
  width: 95%;
}
@media (max-width: 700px) {
 display:flex;
 align-items:center;
 justify-content:center;
}
`

const Container = styled.div`
width: 900px;
height:100%;
color: white;
margin: 0 auto;
height:90vh;
align-items: center;
justify-content: center;
scroll-snap-align: start;
transition: all 1s;
@media(max-width:1000px){    
   width:97%;
}
`
const Top = styled.div`
height: 40%;
width:100%;
display: flex;
align-items: center;
justify-content: space-between;
@media(max-width:700px){    
    height:auto;
    margin-top:2rem;
}
`
const TopLeft = styled.div`
width: 20%;
height:90%;
font-size: 1.4rem;
display: flex;
flex-direction:column;
align-items: flex-start;
justify-content: space-evenly;
cursor: pointer;
color: goldenrod;
transition:all 600ms linear;
&:hover{
    color:white
}
.icons{
    font-size:6rem;
}
@media (max-width: 700px) {
    font-size:3.4rem ;
    .icons{
        font-size:5rem;
    }
}
@media (max-width: 504px) {
    font-size:2.8rem ;
}
@media (max-width: 400px) {
    font-size:2rem ;
}
`
const TopRight = styled.div`
width: 20%;
height:90%;
font-size: 1.4rem;
display: flex;
flex-direction:column;
align-items: flex-end;
justify-content: space-evenly;
text-align:right;
cursor:pointer;
color: goldenrod;
transition:all 600ms linear;
.icons{
    font-size:6rem;
}
&:hover{
    color:white;
}
@media (max-width: 700px) {
    font-size:3.4rem ;
    .icons{
        font-size:5rem;
    }
}
@media (max-width: 504px) {
 font-size:2.8rem ;
}
@media (max-width: 400px) {
 font-size:2rem ;
}
`
const Bottomout = styled.div`
height: 60%;
width:100%;
overflow:hidden;
margin:0 auto;
border: 0.5px solid white;
display: flex;
/* justify-content:center; */
align-items:center;
position:relative;
.cover{
    height:100%;
    width:100%;
    object-fit: cover;
}
@media (max-width: 700px) {
    height:auto;
    border:none;
}
}
@media(max-width:1000px){    
    width:90vw;
}
@media(max-width:700px){    
    width:90vw;
}
`
const Bottom = styled.div`
height: 100%;
min-width:100%;
/* max-width:1000px; */
border: 0.5px solid white;
display: flex;
justify-content:space-around;
align-items:center;
position:relative;
.cover{
    height:100%;
    width:100%;
    object-fit: cover;
}
@media (max-width: 700px) {
    height:auto;
    border:none;
    margin-top:2rem;
}
}
@media(max-width:1000px){    
    min-width:90vw;
}
@media(max-width:700px){   
    flex-direction:column;
    justify-content:space-evenly; 
    width:90%;
}
`
const LeftImg = styled.div`
width:25%;
height:100%;
display: flex;
justify-content:center;
margin-top:6rem;
@media(max-width:700px){    
    width:90vw;
}
`
const Img = styled.img`
width:20rem;
height:20rem;
border-radius:50%;
border:2px solid white;
object-fit:cover;
`

const RightBottom = styled.div`
width:69%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
@media(max-width:700px){    
    width:90vw;
}
`
const RightBottomWrapper = styled.div`
width:90%;
height:90%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-end;
`
const Feedback = styled.div`
width:98%;
height:70%;
margin:0.4rem;
padding:1rem;
border:1px solid white;
display:flex;
justify-content:center;
align-items:center;
@media(max-width:700px){    
   margin-top:2rem;
}
`
const FeedbackText = styled.p`
font-size:1.6rem;
color:white;
text-align:justify;
@media(max-width:450px){
    font-size:1.3rem;
}
`

const NameDiv = styled.div`
width:80%;
height:20%;
border:1px solid white;
margin:0.4rem;
padding:1rem;
display:flex;
justify-content:space-around;
align-items:center;
`

const AgentsName = styled.span`
font-size:1.3rem;
color:white;
margin-right:1rem;
`
const CompanyName = styled.span`
font-size:1.7rem;
color:white;
text-transform:uppercase;
`



const Controls = styled.div`
width:100%;
top:40%;
height:7rem;
position:absolute;
display:flex;
justify-content:space-between;
align-items:center;
@media(max-width:700px){
    top:20%;
}
`
const ControlsLeft = styled.div`
font-size:4rem;
cursor:pointer;
`
const ControlsRight = styled.div`
font-size:4rem;
cursor:pointer;
`


export default Carousel
