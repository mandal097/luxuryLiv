import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {HomeOutlined } from '@ant-design/icons'
export const HomeBtn = () => {
    const [display, setDisplay] = useState("false")

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                setDisplay("true")
            } else {
                setDisplay("false")
            }
            console.log('scrollde');
            return () => {
                window.removeEventListener("scroll")
            }
        })

    }, [])

    return (
        <Button d={display}>
            <span d={display}> 
                <NavLink to='/' className='navlink' ><HomeOutlined /></NavLink>
            </span>
        </Button>
    )
};

const Button = styled.div`
position:fixed;;
height:5rem;
top:1.9rem;
left:13rem;
align-items:center;
font-weight:bold;
justify-content:center;
color:goldenrod;
z-index:1;
transition:all 200ms linear;
span{
    font-size:3.5rem;
    text-transform:uppercase;
    /* font-size: ${props => props.d === "true" ? "2rem" : '2.5rem'}; */
    .navlink{
        color:goldenrod;
        text-decoration:none;
    }
}
@media(max-width:600px){
    left:8rem;
    span{
        font-size:4.5rem;
    }
}
@media(max-width:400px){
    top:1.5rem;
    left:3rem;
}
`

export default HomeBtn;