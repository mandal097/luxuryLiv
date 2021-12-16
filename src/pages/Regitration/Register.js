import React from 'react'
import styled from 'styled-components'
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <H>Registration</H>
                <PersonalDetails>
                    <DetailsHeading>Personal details :</DetailsHeading>
                    <InputDiv>
                        <InputDivs>
                            <Label>First Name *</Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Last Name *</Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Date of Birth</Label>
                            <Input type='date' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Gender*</Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Email Address*</Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Handphone 1*</Label>
                            <Input type='number' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Handphone 2</Label>
                            <Input type='number' />
                        </InputDivs>
                    </InputDiv>
                </PersonalDetails>
                <CompanyDetails>
                    <DetailsHeading>Company details :</DetailsHeading>
                    <InputDiv>
                        <InputDivs>
                            <Label>Company  Name *</Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Date of Formation*</Label>
                            <Input type='date' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Address 1 </Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Address 2 </Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Address 3 </Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>City</Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>State</Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Country</Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Country</Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>GST Number*</Label>
                            <Input type='number' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Handphone</Label>
                            <Input type='number' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Emergency Contact Number</Label>
                            <Input type='number' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Landline</Label>
                            <Input type='number' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Website</Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Accounts Persons</Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Accounts Email</Label>
                            <Input type='text' />
                        </InputDivs>
                        <InputDivs>
                            <Label>Accounts Phone</Label>
                            <Input type='number' />
                        </InputDivs>
                    </InputDiv>
                </CompanyDetails>
                <Button>Sign UP</Button>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
width:100%;
height:auto;
display:flex;
align-items:center;
justify-content:center;
color:white;
`

const Wrapper = styled.div`
width:1000px;
height:auto;
padding:3rem 0;
border:1px solid grey;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media(max-width:1000px){
    width:90%;
    margin:0 auto;
}
`
const H = styled.h1`
text-align:center;
`

const PersonalDetails = styled.div`
width:100%;
height:auto;
border-radius:0.5rem;
padding:1rem;
`

const DetailsHeading = styled.div`
font-size:3rem;
color:teal;
`
const InputDiv = styled.div`
width:100%;
height:auto;
display:flex;
align-items:flex-start;
justify-content:space-between;
flex-wrap:wrap;
`
const InputDivs = styled.div`
flex:1 1 330px;
max-width:330px;
min-width:48%;
display:flex;
margin:0.8rem;
flex-direction:column;
align-items:flex-start;
/* justify-content:center; */
`
const Label = styled.label`
font-size:2rem;
`
const Input = styled.input`
width:100%;
height:4rem;
font-size:2rem;
outline:none;
background-color:transparent;
color:white;
border:0.5px solid white ;
border-radius:0.5rem;
padding:1rem;
`

const CompanyDetails = styled(PersonalDetails)`

`
const Button = styled.button`
width:30%;
height:5rem;
background-color:teal;
border:none;
font-size:2rem;
color:white;
text-transform:uppercase;
transition:all 300ms linear ;
/* margin-left:35%; */
margin-top:2rem;
border-radius:1rem;
&:hover{
    background-color:green;
}
`
export default Register
