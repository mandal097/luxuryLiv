import React from 'react'
import styled from 'styled-components'
import {
    CloseOutlined 
}from '@ant-design/icons'
const Login = ({showLogin}) => {
    return (
        <Container>
            <Wrapper>
                <H>Login details</H>
                <Inputs>
                    <Label>Email*</Label>
                    <Input type='text' />
                </Inputs>
                <Inputs>
                    <Label>Password*</Label>
                    <Input type='password' />
                </Inputs>
                <Submit>Log In</Submit>
                <Cancel onClick={showLogin}><CloseOutlined/></Cancel>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
width:100%;
height:100vh;
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.9));
display:flex;
align-items:center;
justify-content:center;

`
const Wrapper = styled.div`
width:40%;
height:50vh;
background-color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
@media(max-width:660px){
    width:70%;
}
`
const H = styled.h1`
color:black;
font-weight:bold;
`
const Inputs = styled.div`
width:90%;
height:5rem;
margin:1rem;
`
const Label = styled.label`
color:black;
font-size:1.6rem;
font-weight:bold;
`


const Input = styled.input`
width:100%;
height:3.5rem;
outline:none;
border:1px solid black;
font-size:1.7rem;
padding:1rem;
`

const Submit = styled.button`
border:none;
width:30%;
margin-top:2rem;
height:4rem;
background-color:teal;
color:white;
font-size:2rem;
text-transform:uppercase;
&:hover{
    background-color:green;
}
`
const Cancel = styled.div`
position:absolute;
font-size:3rem;
top:1rem;
right:2rem;
color:black;
cursor:pointer;
`
export default Login
