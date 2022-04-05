import React, { useState ,useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar'
import Ham from '../../components/Hamburger/Ham'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import HomeBtn from '../../components/HomeBtn/HomeBtn';
import emailjs from '@emailjs/browser';
const Feedback = () => {

    const [IsOpen, setIsOpen] = useState(false)

    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [feedbackMessage, setFeedbackMessage] = useState('')

    useEffect(() => {
        document.title = 'Luxury Living - Feedback'
    })

    const [errorField, setErrorField] = useState({
        nameError: '',
        emailError: '',
        companyNameError: '',
        phoneError: '',
        feedbackMessageError: ''
    })


    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("name", name)
        formData.append("companyName", companyName)
        formData.append("email", email)
        formData.append("phone", phone)
        formData.append("feedbackMessage", feedbackMessage)
        if (validForm()) {
            emailjs.sendForm('service_273fiq9', 'template_31k9kmj', e.target,
                'GwXreEVRE-9IpIAsX')
                // emailjs.sendForm('service_lisndc6', 'template_dxtvufe', e.target,
                //     'ZNJnYLB_TkQDJECii')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            try {
                toast.success('Added Successfully');

            } catch (error) {
                toast.error('Something went wrong')
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
            <HomeBtn />
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
                                name='name'
                                placeholder='First & last Name'
                                onChange={(e) => setName(e.target.value)}
                            />
                            {
                                errorField.nameError.length > 0 && <ErrorSpan>{errorField.nameError}</ErrorSpan>
                            }
                            <Input
                                type='text'
                                name='cname'
                                placeholder='Company Name'
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                            {
                                errorField.companyNameError.length > 0 && <ErrorSpan>{errorField.companyNameError}</ErrorSpan>
                            }
                            <Input
                                type='email'
                                name='email'
                                placeholder='e-mail'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {
                                errorField.emailError.length > 0 && <ErrorSpan>{errorField.emailError}</ErrorSpan>
                            }
                            <Input
                                type='number'
                                name='contact'
                                placeholder='Phone'
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {
                                errorField.phoneError.length > 0 && <ErrorSpan>{errorField.phoneError}</ErrorSpan>
                            }
                        </FormLeft>
                        <FormRight>

                            <TextArea
                                cols={1}
                                rows={3}
                                name='feedback'
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
@media(max-width:1000px){    
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
@media(max-width:900px){    
    height:auto;
    margin-top:14rem;
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
@media(max-width:900px){    
   height:auto;
}
`
const FormTop = styled.div`
width:100%;
height:55%;
display:flex;
justify-content:space-between;
@media(max-width:900px){    
    height:auto;
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
@media(max-width:900px){    
  font-size:2.5rem;
}
`
const FormLeft = styled.h1`
width:30%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
@media(max-width:900px){    
    width:100%;
    margin:1rem 0;
}
`
const Input = styled.input`
border:0.5px solid white;
width:100%;
font-size:3rem;
height:5.5rem;
border:1px solid white;
 background-color:black;
 color:white;
 font-size:2.2rem;
 font-weight:bolder;
 padding:0 1rem;
 color:white;
 &::placeholder {
    color: white;
    font-size:2.2rem;
    padding:0 1rem;
    }
     &[type="text"]{
         font-weight:100;
 }
     &[type="file"]::-webkit-file-upload-button {
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
    @media(max-width:900px){    
     margin-top:1rem;
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
@media(max-width:900px){
    margin:0.5rem 0;
    left:0;
}
`

const FormRight = styled.h1`
width:68%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
@media(max-width:900px){    
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



export default Feedback
