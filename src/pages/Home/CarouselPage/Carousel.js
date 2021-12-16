import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Carousel = () => {

    const navigate  =useNavigate()

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
                    <TopLeft onClick={goToAgentsPage}>AGENTS TO THE LEFT</TopLeft>
                    <TopLeft onClick={goToHotelsPage}>HOTELS TO THE RIGHT</TopLeft>
                </Top>
                <Bottom id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100 cover " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100 cover " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/3770883/pexels-photo-3770883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100 cover " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/3769710/pexels-photo-3769710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100 cover " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/6475035/pexels-photo-6475035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100 cover " alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.pexels.com/photos/6434634/pexels-photo-6434634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100 cover " alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </Bottom>
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
`

const Container = styled.div`
width: 1000px;
color: white;
margin: 0 auto;
height:90vh;
scroll-snap-align: start;
/* height: calc(100vh - 55px); */
transition: all 1s;
`
const Top = styled.div`
height: 40%;
display: flex;
align-items: center;
justify-content: space-between;
`
const TopLeft = styled.h1`
font-family: 'Tourney', cursive;
width: 20%;
font-size: 5rem;
cursor: pointer;
@media (max-width: 700px) {
 font-size:4rem ;
}
@media (max-width: 504px) {
 font-size:3rem ;
}
`
const Bottom = styled.div`
height: 60%;
border: 0.5px solid white;
display: flex;
.cover{
    object-fit: cover;
}
@media (max-width: 700px) {
    height:auto;
}
`


export default Carousel
