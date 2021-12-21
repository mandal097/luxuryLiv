import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../../components/Navbar/Navbar'
import Ham from '../../../components/Hamburger/Ham'
const Feedback = () => {
    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [feedback, setFeedback] = useState('')

    const [IsOpen, setIsOpen] = useState(false)

    const submit = (e) => {
        e.preventDefault()
        console.log(name);
        console.log(companyName);
        console.log(email);
        console.log(phone);
        console.log(feedback);
    }

    const showNavbar = () => {
        switch (IsOpen) {
            case false:
                setIsOpen(true);
                break;
            case true:
                setIsOpen(false);
                break;
            default:
                setIsOpen(false)
        }
    }
    return (
        <Container>
            {
                IsOpen && <Navbar />
            }
            <Wrapper>
                <Header>
                    <Span onClick={showNavbar}><Ham /></Span>
                </Header>
                <Form onSubmit={submit}>
                    <FormTopText>
                        <TextDivLeft>
                            <LeftHeading>Luxury Living</LeftHeading>
                        </TextDivLeft>
                        <TextDivRight>
                            <RightHeading>TELL HER HOW YOU FEEL <br /> HOW YOU REALLY REALLY FEEL</RightHeading>
                        </TextDivRight>
                    </FormTopText>
                    <FormTop>
                        <FormLeft>
                            <Input
                                type='text'
                                placeholder='First & last Name'
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                type='text'
                                placeholder='Company Name'
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                            <Input
                                type='email'
                                placeholder='e-mail'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                type='number'
                                placeholder='Phone'
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </FormLeft>
                        <FormRight>

                            <TextArea
                                cols={1}
                                rows={3}
                                onChange={(e) => setFeedback(e.target.value)}
                                placeholder="how was your experience of working with us?
                did we just become best friends?">
                            </TextArea>
                        </FormRight>
                    </FormTop>
                    <Submit type='submit'>SUBMIT</Submit>
                </Form>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
height:100vh;
width:100%;
background-color:black;
color:black;
scroll-snap-align: start;
display:flex;
/* align-items:flex-end; */
justify-content:center;
color:white;
`
const Wrapper = styled.div`
width:1200px;
height:80vh;
display:flex;
align-items:center;
justify-content:center;
margin-top:9rem;
`

const Header = styled.div`
display:flex;
top:3rem;
right:14rem;
position:absolute;
margin-right:auto;
align-items:center;
justify-content:flex-end;
height:6rem;
z-index:11;
@media(max-width:700px){
    right:8rem;
}
@media(max-width:400px){
    right:4rem;
}
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

const Form = styled.form`
width:90%;
height:95%;
background-color:black;
color:white;
padding:1rem;
`
const FormTop = styled.div`
width:100%;
height:60%;
display:flex;
justify-content:space-between;
`
const FormTopText = styled.h1`
width:100%;
height:25%;
display:flex;
justify-content:space-between;
`
const TextDivLeft = styled.div`
width:30%;
display:flex;
align-items:center;
justify-content:center;
`
const TextDivRight = styled.div`
width:70%;
display:flex;
align-items:center;
justify-content:center;
`

const LeftHeading = styled.span`
font-size:1.6rem;
text-align:center;
`
const RightHeading = styled.span`
font-size:3rem;
text-align:center;
`
const FormLeft = styled.h1`
width:30%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
/* margin:1rem; */
`
const Input = styled.input`
border:0.5px solid white;
width:100%;
font-size:3rem;
height:5rem;
border:1px solid white;
 background-color:black;
 color:white;
 font-size:2.5rem;
 &::placeholder {
    color: white;
    font-size:2.2rem;
    padding:0 1rem;
    }
     &[type="text"]{
         font-weight:100;
 }
     &[type="email"]{
         font-weight:100;
 }
     &[type="number"]{
         font-weight:100;
 }
 &:focus::placeholder {
   color: transparent;
 }
 @media(max-width:650px){
 &::placeholder {
        color: white;
    font-size:1.5rem;
     }
 }
 @media(max-width:400px){
     width:100%;
     margin:0.5rem 0;
 } 
`


const FormRight = styled.h1`
width:68%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
`

const TextArea = styled.textarea`
width:100%;
height:100%;
margin:0rem auto; 
border:1px solid white;
background-color:black;
color:white;
font-size:3rem;
resize:none;
outline:none;
text-align:center;
padding:4rem 0;
display:flex;
align-items:center;
justify-content:center;
&:focus::placeholder {
    color: transparent;
}
&::placeholder {
    color: white;
    font-size:2.5rem;
    text-align:center;
    font-weight:100;
    }
    `

const Submit = styled.button`
    width:100%;
    height:5rem;
    border:1px solid white;
    background:transparent;
    color:white;
    font-size:2rem;
    font-weight:400;
    margin-top:2rem;
    `
export default Feedback
