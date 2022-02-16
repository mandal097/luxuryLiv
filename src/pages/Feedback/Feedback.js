import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar'
import Ham from '../../components/Hamburger/Ham'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import HomeBtn from '../../components/HomeBtn/HomeBtn';
const Feedback = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const [IsOpen, setIsOpen] = useState(false)

    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [feedbackMessage, setFeedbackMessage] = useState('')
    const [fileName, setFileName] = useState('')


    const [errorField, setErrorField] = useState({
        nameError: '',
        emailError: '',
        companyNameError: '',
        phoneError: '',
        feedbackMessageError: '',
        fileNameError: ''
    })


    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        formData.append("name", name)
        formData.append("companyName", companyName)
        formData.append("email", email)
        formData.append("phone", phone)
        formData.append("feedbackMessage", feedbackMessage)
        formData.append("feedbackImage", fileName)
        if (validForm()) {
            let url = 'http://localhost:8000/api/feedback'
            let options = {
                method: 'POST',
                url: url,
                headers: {

                },
                data: formData
            }
            try {
                let response = await axios(options);
                console.log(response);
                toast.success('Added Successfully');
                setTimeout(() => {
                    setSuccess(true)
                }, 1500);
            } catch (error) {
                toast.error('Something went wrong')
                setTimeout(() => {
                    setError(true)
                }, 1000);
            }
        } else {
            toast.error('Invalid Form')
        }
    }

    const validForm = () => {
        setErrorField({
            nameError: '',
            emailError: '',
            companyNameError: '',
            phoneError: '',
            feedbackMessageError: '',
            fileNameError: ''
        })
        let formIsValid = true;
        if (name === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, nameError: "please Enter Name"
            }))
        }
        if (email === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, emailError: "please Enter email"
            }))
        }
        if (companyName === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, companyNameError: "please Enter your company name"
            }))
        }
        if (phone === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, phoneError: "please Enter contact number"
            }))
        }
        if (fileName === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, fileNameError: "please choose your image"
            }))
        }
        if (feedbackMessage === '') {
            formIsValid = false;
            setErrorField(pre => ({
                ...pre, feedbackMessageError: "please give your feedback"
            }))
        }
        return formIsValid;
    }

// for showing navbar

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
            <HomeBtn/>
            {
                IsOpen && <Navbar />
            }
            <Wrapper>
                <Header>
                    <Span onClick={showNavbar}><Ham /></Span>
                </Header>
                <ToastContainer style={{ fontSize: '2rem' }} />
                <Form onSubmit={submit} encType='multipart/form-data' method='post'>
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
                            {
                                errorField.nameError.length > 0 && <ErrorSpan>{errorField.nameError}</ErrorSpan>
                            }
                            <Input
                                type='text'
                                placeholder='Company Name'
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                            {
                                errorField.companyNameError.length > 0 && <ErrorSpan>{errorField.companyNameError}</ErrorSpan>
                            }
                            <Input
                                type='email'
                                placeholder='e-mail'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {
                                errorField.emailError.length > 0 && <ErrorSpan>{errorField.emailError}</ErrorSpan>
                            }
                            <Input
                                type='number'
                                placeholder='Phone'
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {
                                errorField.phoneError.length > 0 && <ErrorSpan>{errorField.phoneError}</ErrorSpan>
                            }
                            <Input
                                type='file'
                                // filename="feedbackImage"
                                placeholder='select Image'
                                name='feedbackImage'
                                onChange={(e) => setFileName(e.target.files[0])}
                            />
                            {
                                errorField.fileNameError.length > 0 && <ErrorSpan>{errorField.fileNameError}</ErrorSpan>
                            }
                        </FormLeft>
                        <FormRight>

                            <TextArea
                                cols={1}
                                rows={3}
                                onChange={(e) => setFeedbackMessage(e.target.value)}
                                placeholder="how was your experience of working with us?
                did we just become best friends?">
                            </TextArea>
                            {
                                errorField.feedbackMessageError.length > 0 && <ErrorSpan>{errorField.feedbackMessageError}</ErrorSpan>
                            }
                        </FormRight>
                    </FormTop>
                    <Submit type='submit'>SUBMIT</Submit>
                </Form>
            </Wrapper>
            {
                success &&
                <SuccessMessage>
                    <SuccessWrapper>
                        <SuccessContent>THANK YOU FOR YOUR FEEDBACK</SuccessContent>
                        <SuccessContent>YOUR FEEDBACK HAS BEEN SUBMITTED</SuccessContent>
                        <Navigation>
                            <NavLink to="/" className='nav' >GO TO HOME</NavLink>
                            <Success onClick={() => setSuccess(false)}>MORE FEEDBACK</Success>
                        </Navigation>
                    </SuccessWrapper>
                </SuccessMessage>
            }
            {
                error &&
                <SuccessMessage>
                    <SuccessWrapper>
                        <SuccessContent>SOMETHING WENT WRONG</SuccessContent>
                        {/* <Navigation> */}
                        <Success onClick={() => setError(false)}>OKAY!</Success>
                        {/* </Navigation> */}
                    </SuccessWrapper>
                </SuccessMessage>
            }
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
justify-content:center;
color:white;
position:relative;
.nav{
    font-size:1.5rem;
    text-decoration:none;
    background-color:teal; 
     color:white;
     padding:0.5rem 2rem;
}
@media(max-width:550px){    
   height:auto;
   margin-top:3rem;
}
`
const Wrapper = styled.div`
width:1200px;
height:90vh;
display:flex;
align-items:center;
justify-content:center;
margin-top:6rem;
@media(max-width:550px){    
   height:auto;
}
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
height:100%;
background-color:black;
color:white;
padding:1rem;
@media(max-width:550px){    
   height:auto;
}
`
const FormTop = styled.div`
width:100%;
height:60%;
display:flex;
justify-content:space-between;
@media(max-width:550px){    
    flex-direction:column;
}
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
@media(max-width:550px){    
  font-size:2rem;
}
`
const FormLeft = styled.h1`
width:30%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
@media(max-width:550px){    
    width:100%;
    margin:1rem 0;
}
`
const Input = styled.input`
border:0.5px solid white;
width:100%;
font-size:3rem;
height:4.3rem;
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
     &[type="file"]::-webkit-file-upload-button {
  /* visibility: hidden; */
  background-color:black;
  color:white;
  margin-top:0.8rem;
  border:0.5px solid white;
  font-size:2rem;
}
 }
&[type='file']{
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
 @media(max-width:550px){    
   margin:0.4rem 0;
}
 @media(max-width:400px){
     width:100%;
     margin:0.5rem 0;
 } 
`

const ErrorSpan = styled.span`
font-size:1.3rem;
color:red;
text-align:left;
margin:-2rem 0;
`

const FormRight = styled.h1`
width:68%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
@media(max-width:550px){    
   width:100%;
}
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

const SuccessMessage = styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
leftl:0;
width:100%;
heigth:100vh;
background-color:rgba(0,0,0,0.8);
display:flex;
align-items:center;
justify-content:center;
`

const SuccessWrapper = styled.div`
height:30rem;
width:45%;
padding:5rem;
background-color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const SuccessContent = styled.p`
font-size:2.5rem;
font-weight:bold;
color:black;
`
const Navigation = styled.div`
width:60%;
height:5rem;
color:black;
display:flex;
align-items:center;
justify-content:space-between;
`
const Success = styled.div`
font-size:1.5rem;
text-decoration:none;
font-weight:400;
background-color:green;
color:white;
padding:0.5rem 2rem;
cursor:pointer;
`

export default Feedback
