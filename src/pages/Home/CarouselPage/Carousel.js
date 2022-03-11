import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
    LeftOutlined,
    RightOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined
} from '@ant-design/icons'
// import { FaQuoteLeft } from 'react-icons/fa';
// import { fetchApi } from '../../../axios'
const Carousel = () => {

    const feedbacks = [
        {
            id: 1,
            feedbacktxt: 'ntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis nemo, unde suscipit! Eaque esse maiores maxime labore vitae illo dicta consequatur dignissimos aut cum quae animi distinctio amet facilis repudiandae, iure similique aperiam officiis consectetur ea beatae quod delectus? Iusto et modi saepe sint qui nesciunt quo soluta dolorum fuga praesentium, animi excepturi um fuga praesentium, animi excepturi um fuga praesentium, animi excepturi um fuga praesentium, animi excepturi um fuga praesentium, animi excepturi um fuga praesentium, animi excepturi molestias, rerum quia, eum iste doloribus sed? Recusandae deleniti, quos qui excepturi perspiciatis laudantium expedita aperiam sequi fuga asperiores veniam voluptatibus eius voluptatum! Dolore,',
            name: 'Claudine Trilio',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village'
        },
        {
            id: 2,
            feedbacktxt: 'ntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis nemo, unde suscipit! Eaque esse maiores maxime labore vitae illo dicta consequatur dignissimos aut cum quae animi distinctio amet facilis repudiandae, iure similique aperiam officiis consectetur ea beatae quod delectus? Iusto et modi saepe sint qui nesciunt quo soluta dolorum fuga praesentium, animi excepturi molestias, rerum quia, eum iste doloribus sed? Recusandae deleniti, quos qui excepturi perspiciatis laudantium expedita aperiam sequi fuga asperiores veniam voluptatibus eius voluptatum! Dolore,',
            name: 'Demo Name second',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village demo Second'
        },
        {
            id: 3,
            feedbacktxt: 'ntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis nemo, unde suscipit! Eaque esse maiores maxime labore vitae illo dicta consequatur dignissimos aut cum quae animi distinctio amet facilis repudiandae, iure similique aperiam officiis consectetur ea beatae quod delectus? Iusto et modi saepe sint qui nesciunt quo soluta dolorum fuga praesentium, animi excepturi molestias, rerum quia, eum iste doloribus sed? Recusandae deleniti, quos qui excepturi perspiciatis laudantium expedita aperiam sequi fuga asperiores veniam voluptatibus eius voluptatum! Dolore,',
            name: 'Claudine Trilio Demo Name 3rd',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village Demo 3rd'
        },
        {
            id: 4,
            feedbacktxt: 'ntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis nemo, unde suscipit! Eaque esse maiores maxime labore vitae illo dicta consequatur dignissimos aut cum quae animi distinctio amet facilis repudiandae, iure similique aperiam officiis consectetur ea beatae quod delectus? Iusto et modi saepe sint qui nesciunt quo soluta dolorum fuga praesentium, animi excepturi,',
            name: 'Claudine Trilio 4th',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village 4th'
        },
        {
            id: 5,
            feedbacktxt: 'ntium inventore praesentium impedit consequuntur hic tempore fugiat possimus perferendis doloremque enim officiis nemo, unde suscipit! Eaque esse maiores maxime labore vitae illo dicta consequatur dignissimos aut cim officiis nemo, unde suscipit! Eaque esse maiores maxime labore vitae illo dicta consequatur dignissimos aut cim officiis nemo, unde suscipit! Eaque esse maiores maxime labore vitae illo dicta consequatur dignissimos aut cum quae animi distinctio amet facilis repudiandae, iure similique aperiam officiis consectetur ea beatae quod delectus? Iusto et modi saepe sint qui nesciunt quo soluta dolorum fuga praesentium, animi excepturi,',
            name: 'Claudine Trilio 5th',
            status: 'Director of Sales & Marketing | RayaVadee & Tamarind Village 5th'
        },
    ]

    const [feedbackApi, setFeedbackApi] = useState([])
    const [activeSlides, setActiveSlides] = useState(true)

    const [count, setCount] = useState(0)
    const length = feedbackApi.length

    useEffect(() => {
        // const fetchFeedback = async () => {
        //     try {
        //         const feedback = await fetchApi.get('/feedback')
        //         setFeedbackApi(feedback.data)
        //         console.log(feedbackApi);
        //         console.log(feedbackApi[0].name);
        //     } catch (error) {
        //         console.log(`something went wrong`);
        //     }
        // }
        // fetchFeedback()
        setFeedbackApi(feedbacks)
        // console.log(feedbackApi);
    },[])

    const OrgFeedback = feedbackApi[count]

    if (activeSlides) {
        setTimeout(() => {
            count < length - 1 ? setCount(count + 1) : setCount(0)
        }, 3000);
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
                            <Bottom key={i.id}>
                                {/* <Bottom> */}
                                <BottomWrapper>
                                    <TestimoniesHeader>Testimonials</TestimoniesHeader>
                                    <>
                                        <TestimoniesParaDiv>
                                            <UpperLine></UpperLine>
                                            <Testimonies>{OrgFeedback.feedbacktxt}</Testimonies>
                                            <LowerLine></LowerLine>
                                        </TestimoniesParaDiv>
                                        <TestimonialsInfoDiv>
                                            {/* <TestimonialsInfoQuotes><FaQuoteLeft /></TestimonialsInfoQuotes> */}
                                            <TestimonialsName>{OrgFeedback.name}</TestimonialsName>
                                            <TestimonialsStatus>{OrgFeedback.status}</TestimonialsStatus>
                                        </TestimonialsInfoDiv>
                                    </>
                                    <SelectorDiv>
                                        {
                                            feedbackApi.map((but, index) => (
                                                <Selectors id='selectors'
                                                // className={index ? "active" : ''}
                                                    onClick={() => {
                                                        setCount(index);
                                                        setActiveSlides(false)
                                                    }}
                                                ></Selectors>
                                            ))
                                        }
                                        {/* <Selectors></Selectors>
                                        <Selectors></Selectors>
                                        <Selectors></Selectors>
                                        <Selectors></Selectors> */}
                                    </SelectorDiv>
                                </BottomWrapper>
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
scroll-snap-align: start;
position: relative;
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
width: 1100px;
height:100%;
color: white;
margin: 0 auto;
display:flex;
flex-direction:column;
align-items: center;
justify-content: space-evenly;
transition: all 1s;
@media(max-width:1100px){    
   width:97%;
}
`
const Top = styled.div`
height: 20%;
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
border: 0.5px solid rgb(179, 144, 58);
/* border: 0.5px solid goldenrod !important; */
display: flex;
/* justify-content:center; */
align-items:center;
position:relative;
.cover{
    height:100%;
    width:100%;
    object-fit: cover;
}
@media(max-width:1000px){    
    width:90vw;
}
@media (min-width:680px) and (max-width:750px){    
height:70%;
}
@media(max-width:400px){ 
    height:auto;
}
`
const Bottom = styled.div`
height: 100%;
min-width:100%;
display: flex;
justify-content:space-around;
align-items:center;
position:relative;
/* background:linear-gradient(rgba(0,0,0,0.7) , rgba(0,0,0,0.9)) , url('https://media.istockphoto.com/photos/complex-digital-network-artificial-intelligence-internet-of-things-picture-id1299996685?b=1&k=20&m=1299996685&s=170667a&w=0&h=8SsvzJ4_fRf095MnlIIuadp8aqVJ1n8gI_7B2VVmVAY=');
background-size:cover;
baackroud-position:center;
background-repeat:no-repeat; */
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
    min-width:90vw;
}
@media(max-width:700px){   
    flex-direction:column;
    justify-content:space-evenly; 
    width:90%;
}
`

const BottomWrapper = styled.div`
width:900px;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
padding:0  1rem;
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

const TestimoniesParaDiv = styled.p`
width:100%;
height:50%;
display:flex;
align-items:center;
justify:center;
position:relative;
@media(max-width:700px){
    padding:0.3rem 0;
}
`
const UpperLine = styled.div`
position:absolute;
height:1px;
background-color: rgb(179, 144, 58);
top:0;
left:42%;
width:16% ;
`
const LowerLine = styled.div`
position:absolute;
height:1px;
background-color: rgb(179, 144, 58);
bottom:0;
width:16% ;
left:42%;
`


const Testimonies = styled.p`
color:white;
font-size:1.6rem;
text-align:center;
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
// const TestimonialsInfoQuotes = styled.div`
// width:5rem;
// height:5rem;
// border-radius:50%;
// border:3px solid white;
// display:flex;
// align-items:center;
// justify-content:center;
// font-size:1.7rem;
// `

const TestimonialsName = styled.span`
font-size:2rem;
color:white;
font-weight:500;
text-align:center;
`
const TestimonialsStatus = styled.p`
font-size:1.3rem;
color:grey
`

const SelectorDiv = styled.div`
height:auto;
display:flex;
align-items:center;
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
width:90%;
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
