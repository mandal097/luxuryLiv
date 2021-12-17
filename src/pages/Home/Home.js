import React from 'react'
import styled from 'styled-components'
import ValuesComp from './ValuesComp/ValuesComp'
import Social from '../../components/Social/Social';
import Explore from './Explore/Explore';
import FrontPage from '../../components/FrontPage/FrontPage';
import Carousel from './CarouselPage/Carousel';
import Feedback from './Feedback/Feedback';

const Home = () => {
  return (
    <>
      <Container>
        <Section>
          <FrontPage title="Luxury Living" para="Our top game is to make it easy for our Travel Partners to book 'High End Hotels Worldwide'. Our medium game is to do this with finnese, subtelty & without much hangups. Our low  game is to do 30 push-ups in one go." />
          <ValuesComp />
          <Explore />
          <Carousel />
          <Feedback />
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
scroll-behavior: smooth;
scroll-snap-type: y mandatory;
scroll-snap-points-y: repeat(100vh);
/* height: calc(100vh - 55px); */
height: 100vh;
overflow-y: scroll;
overflow-x: hidden;
/* width
/* &::-webkit-scrollbar {
  width: 7px;
} */ */

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
