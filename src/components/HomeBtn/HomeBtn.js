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
/* top: ${props => props.d === "true" ? "-4rem" : '4rem'}; */
top:4rem;
left:12rem;
align-items:center;
font-weight:bold;
justify-content:center;
color:goldenrod;
z-index:1;
transition:all 200ms linear;
span{
    /* font-size:2rem; */
    text-transform:uppercase;
    font-size: ${props => props.d === "true" ? "2rem" : '2.5rem'};
    .navlink{
        color:goldenrod;
        text-decoration:none;
    }
}
@media(max-width:600px){
    left:8rem;
    top:5rem;
    span{
        font-size:2.5rem;
    }
}
@media(max-width:400px){
    left:6rem;
}
`

export default HomeBtn;