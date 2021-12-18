import React, { useState } from 'react'
import styled from 'styled-components'
const Feedback = () => {
    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [feedback, setFeedback] = useState('')

    const submit = (e) => {
        e.preventDefault()
        console.log(name);
        console.log(companyName);
        console.log(feedback);
    }

    return (
        <Container>
            <Wrapper>
                <WrapperTop>
                    <TopHead>tell us how you feel... <br /> how you really really feel!</TopHead>
                    <Form onSubmit={submit} >
                        <InputDiv>
                            <Input
                                type='text'
                                placeholder='Your Name'
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                type='text'
                                placeholder='Company Name'
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </InputDiv>
                        <TextArea
                            cols={1}
                            rows={3}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="how was your experience of working with us?
                        did we just become best friends?">
                        </TextArea>
                        <Submit type="submit" value="SUBMIT" />
                    </Form>
                </WrapperTop>
                {/* <WrapperBottom>
                    <WrapperbottomTxt>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia velit rem ex aspernatur alias? Tempora modi cupiditate dicta animi quas quidem sunt odio dolorem vel facere. Iusto at enim repellendus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia velit rem ex aspernatur alias? Tempora modi cupiditate dicta animi quas quidem sunt odio dolorem vel facere. Iusto at enim repellendus!
                    </WrapperbottomTxt>
                </WrapperBottom> */}
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
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
width:1200px;
height:100%;
display:flex;
align-items:center;
justify-content:center;
`

const WrapperTop = styled.div`
width:100%;
height:85%;
background-color:black;
color:white;
padding:1rem;
`
const TopHead = styled.h1`
text-align:center;
font-size:3.5rem;
text-transform:uppercase;

`
const Form = styled.form`
width:95%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
margin:0 auto;
border:0.1rem solid white;
height:74%;
position:relative;
`


const InputDiv = styled.div`
width:95%;
display:flex;
justify-content:space-between;
align-items:center;
margin:1rem auto; 
@media(max-width:400px){
    flex-direction:column;
}
`
const Input = styled.input`
width:25%;
height:5rem;
border:1px solid white;
background-color:black;
color:white;
font-size:2.5rem;
&::placeholder {
       color: white;
       font-size:2.2rem;
    }
    &[type="text"]{
        text-align:center;
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
const TextArea = styled.textarea`
width:95%;
margin:0rem auto; 
border:1px solid white;
background-color:black;
color:white;
font-size:3rem;
resize:none;
outline:none;
text-align:center;
padding:4rem 0;
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
const Submit = styled.input`
width:18rem;
height:5rem;
border:1px solid white;
background-color:black;
color:white;
font-size:3rem;
`

// const WrapperBottom = styled.div`
// width:100%;
// height:15%;
// `
// const WrapperbottomTxt = styled.p`
// color:black;
// font-size:1.8rem;
// font-weight:bold;
// @media(max-width:745px){
//     /* font-size:1.8rem; */
// } 
// `

export default Feedback
