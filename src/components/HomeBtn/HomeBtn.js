import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const HomeBtn = () => {
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 70) {
                setDisplay(true)
            } else {
                setDisplay(false)
            }
            return () => {
                window.removeEventListener("scroll")
            }
        })

    }, [])

    return (
        <Button d={display}>
            <span>
                <NavLink to='/' className='navlink'>home</NavLink>
            </span>
        </Button>
    )
};

const Button = styled.div`
position:absolute;;
height:5rem;
top: ${props => props.d ? "-4rem" : '4rem'};
left:12rem;
align-items:center;
font-weight:bold;
justify-content:center;
color:goldenrod;
z-index:1;
transition:all 200ms linear;
span{
    font-size:2rem;
    text-transform:uppercase;
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