import React, { useEffect } from 'react'
import styled from 'styled-components'
import ValuesComp from './ValuesComp/ValuesComp'
import Social from '../../components/Social/Social';
import Explore from './Explore/Explore';
import FrontPage from '../../components/FrontPage/FrontPage';
import Carousel from './CarouselPage/Carousel';
// import Feedback from './Feedback/Feedback';
import Contactus from '../ContactUs/Contactus';
import HomeBtn from '../../components/HomeBtn/HomeBtn';

const Home = () => {
  useEffect(() => {
    document.title = 'Luxury Living'
  })
  return (
    <>
      <Container>
        <Section>
          <HomeBtn />
          <FrontPage title="Luxury Living" para="Our top game is to make it easy for our Travel Partners to book 'High End Hotels Worldwide'.." 
          paraS=' Our medium game is to do this with finnese, subtelty & without much hangups'
          paraT=' Our low  game is to do 30 push-ups in one go.'
          />
          <ValuesComp />
          <Explore />
          <Carousel />
          <Contactus />
        </Section>
        <Social />
      </Container>
    </>
  )
}

const Container = styled.div`
/* overflow-x:hidden; */
color: white;
`
const Section = styled.div`
position:relative;
scroll-behavior: smooth;
scroll-snap-type: y mandatory;
scroll-snap-points-y: repeat(100vh);
height: 100vh;
overflow-y: scroll;
overflow-x: hidden;
/* width
/* &::-webkit-scrollbar {
  width: 7px;
} */ 

/* Track */
&::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
&::-webkit-scrollbar-thumb {
  background:grey;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`


export default Home
