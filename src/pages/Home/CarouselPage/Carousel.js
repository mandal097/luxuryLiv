import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
    LeftOutlined,
    RightOutlined,
    // ArrowLeftOutlined,
    // ArrowRightOutlined
} from '@ant-design/icons'
// import { FaQuoteLeft } from 'react-icons/fa';
// import { fetchApi } from '../../../axios'
const Carousel = () => {

    // const feedbacks = [
    const feedbackApi = [
        {
            id: 1,
            feedbacktxt: 'ntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis nemo, unde suscipit! Ectio amet facilis repudiandae, iure similique aperiam officiis consectetur ea beatae tis laudantium expedita aperiam sequi fuga asperiores veniam voluptatibus eius voluptatum! Dolore,',
            name: 'Claudine Trilio',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village'
        },
        {
            id: 2,
            feedbacktxt: 'ntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis nemo, unde susepturi perspiciatis laudantium expedita aperiam sequi fuga asperiores veniam voluptatibus eius voluptatum! Dolore,',
            name: 'Demo Name second',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village demo Second'
        },
        {
            id: 3,
            feedbacktxt: 'ntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis nemo, unde suscipit! Eaque esse maiores maxime labore vitae illo dicta consequatur dignissimos aut cum quae aniptatum! Dolore,',
            name: 'Claudine Trilio Demo Name 3rd',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village Demo 3rd'
        },
        {
            id: 4,
            feedbacktxt: 'ntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis nemo, unde suscipit! Eaque esse maiores maxime labore vitae illo dicta consequatur dignissimos aut cum quae ani excepturi,',
            name: 'Claudine Trilio 4th',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village 4th'
        },
        {
            id: 5,
            feedbacktxt: 'ntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis nemo, unde sut cim offics aut cum quae animi distinctio amet facilis repudiandae, iure similique aperiam officiia praesentium, animi excepturi,',
            name: 'Claudine Trilio 5th',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village 5th'
        },
    ]

    // const [feedbackApi, setFeedbackApi] = useState([])
    // const [activeSlides, setActiveSlides] = useState(true);

    const [count, setCount] = useState(0)
    const length = feedbackApi.length



    const OrgFeedback = feedbackApi[count]

    // if (activeSlides) {
    //     setTimeout(() => {
    //         count < length - 1 ? setCount(count + 1) : setCount(0)
    //     }, 3000);
    // }
    const handleLeft = () => {
        // setActiveSlides(false)
        count > 0 ? setCount(count - 1) : setCount(length - 1)
    }

    const handleRight = () => {
        // setActiveSlides(false)
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
            <Container>
                <Agents onClick={goToAgentsPage}>
                    <AgentsH className='agents'>Agents</AgentsH>
                    <ToLeft className='totheleft'>to the left</ToLeft>
                </Agents>
                <Middle>
                    {
                        feedbackApi.map(i => (
                            <Bottom key={i.id}>
                                <BottomWrapper>
                                    <TestimoniesHeader>Testimonials</TestimoniesHeader>
                                    <>
                                        <TestimoniesParaDiv>
                                            <UpperLine></UpperLine>
                                            <Testimonies>{OrgFeedback.feedbacktxt}</Testimonies>
                                            <LowerLine></LowerLine>
                                        </TestimoniesParaDiv>
                                        <TestimonialsInfoDiv>
                                            <TestimonialsName>{OrgFeedback.name}</TestimonialsName>
                                            <TestimonialsStatus>{OrgFeedback.status}</TestimonialsStatus>
                                        </TestimonialsInfoDiv>
                                    </>
                                    <SelectorDiv>
                                        {
                                            feedbackApi.map((i, index) => (
                                                <Selectors id='selectors'
                                                    key={i.id}
                                                    onClick={() => {
                                                        setCount(index);
                                                        // setActiveSlides(false)
                                                    }}
                                                ></Selectors>
                                            ))
                                        }
                                    </SelectorDiv>
                                </BottomWrapper>
                                <Controls>
                                    <ControlsLeft onClick={handleLeft}><LeftOutlined /></ControlsLeft>
                                    <ControlsRight onClick={handleRight} ><RightOutlined /></ControlsRight>
                                </Controls>
                            </Bottom>
                        ))
                    }
                </Middle>
                <Hotels onClick={goToHotelsPage}>
                    <HotelsH className='hotels' >Hotels</HotelsH>
                    <ToRight className='totheright'>to the right</ToRight>
                </Hotels>
            </Container>
        </MainContainer>
    )
}

const MainContainer = styled.div`
display: flex;
width: 100%;
height:100vh;
margin:0 auto;
scroll-snap-align: start;
position: relative;
align-items:center;
justify-content:center;
.active{
    background-color:white;
}
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
width: 89%;
height:85%;
color: white;
margin: 0 auto;
display:flex;
align-items: center;
justify-content:space-between;
transition: all 1s;
@media(max-width:1100px){    
   width:97%;
}
`

const Agents = styled.div`
height:auto;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
position:relative;
cursor:pointer;
&:hover{
    .agents{
        color:white;
    }
    .totheleft{
        color:goldenrod;
    }
}
&:hover{
    .hotels{
        color:white;
    }
    .totheright{
        color:goldenrod;
    }
}

`

const Hotels = styled(Agents)`
align-items:flex-end;
`

const AgentsH = styled.h1`
font-size:5.5rem;
font-weight:bold;
color:goldenrod;
text-transform:uppercase;
line-height:3rem;
letter-spacing:2px;
cursor:pointer;
transition:all 300ms linear;
}
`
const ToLeft = styled.span`
font-size:2.7rem;
font-weight:bold;
transition:all 300ms linear;
text-transform:uppercase;
transition:all 300ms linear;

}

`

const HotelsH = styled(AgentsH)`

`
const ToRight = styled(ToLeft)`

`

const Middle = styled.div`
height: 90%;
width:52%;
overflow:hidden;
margin:0 auto;
border: 0.5px solid #fff;
display: flex;
align-items:center;
position:relative;
.cover{
    height:100%;
    width:100%;
    object-fit: cover;
}
`
const Bottom = styled.div`
height: 100%;
min-width:100%;
display: flex;
justify-content:space-around;
align-items:center;
position:relative;
.cover{
    height:100%;
    width:100%;
    object-fit: cover;
}
`

const BottomWrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
padding:0  5rem;
@media (max-width:900px){
    width:90%;
}
`

const TestimoniesHeader = styled.div`
font-size:4rem;
color:white;
text-align:center;
text-transform:uppercase;
position:relative;
padding:0.4rem 0;
@media(max-width:750px){
    font-size:3.3rem;
}
`

const TestimoniesParaDiv = styled.div`
width:100%;
height:50%;
display:flex;
align-items:center;
justify:center;
position:relative;
padding:1rem;
@media(max-width:700px){
    padding:0.3rem 0;
}
`
const UpperLine = styled.div`
position:absolute;
height:2px;
background-color: rgb(179, 144, 58);
top:-1rem;
width:35% ;
left:30%;
`
const LowerLine = styled.div`
position:absolute;
height:2px;
background-color: rgb(179, 144, 58);
bottom:0;
width:35% ;
left:30%;
`


const Testimonies = styled.p`
color:white;
font-size:1.6rem;
text-align:center;
@media(max-width:800px){
    font-size:1.4rem;
}
`
const TestimonialsInfoDiv = styled.div`
height:auto;
width:100%;
display: flex;
padding:0.5rem;
flex-direction:column;
align-items: center;
justify-content:center;
`

const TestimonialsName = styled.span`
font-size:2rem;
color:white;
font-weight:500;
text-align:center;
`
const TestimonialsStatus = styled.p`
font-size:1.3rem;
color:grey;
text-align:center;
`

const SelectorDiv = styled.div`
height:auto;
display:flex;
align-items:center;
position:relative;
`
const Selectors = styled.div`
height:1.3rem;
width:1.3rem;
border-radius:50%;
background-color:transparent;
border:2px solid white;
margin:0 2px;
cursor:pointer;
transition:all 300ms linear;
&:hover{
    background-color:white;
    transform:scale(1.1);
    border:1px solid white;
}
`

const Controls = styled.div`
width:97%;
top:40%;
height:7rem;
position:absolute;
display:flex;
justify-content:space-between;
align-items:center;
@media(max-width:840px){
    width:100%;
}
`
const ControlsLeft = styled.div`
font-size:2.4rem;
color:goldenrod;
cursor:pointer;
transition:all 300ms linear;
&:hover{
    color:white;
}
`
const ControlsRight = styled.div`
font-size:2.4rem;
color:goldenrod;
cursor:pointer;
transition:all 300ms linear;
&:hover{
    color:white;
}
`


export default Carousel
