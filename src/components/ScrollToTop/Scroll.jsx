import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { UpOutlined } from '@ant-design/icons'
const Scroll = () => {
    const [show, setShow] = useState(false)
    const scrollWindow = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShow(true)
                // console.log('scrollde');
            } else {
                setShow(false)
            }
            return () => {
                window.removeEventListener("scroll")
            }
        })

    }, [])
    return (
        <>
            {
                show &&
                <Container onClick={scrollWindow}>
                    <UpOutlined style={{
                        color: 'white',
                        marginTop: '-0.3rem'
                    }} />
                </Container>
            }
        </>
    )
}

const Container = styled.div`
    width:4rem;
    height:4rem;
    border-radius:50%;
    border:2px solid white;
    background-color:black;
    z-index:10;
    position:fixed;
    bottom:2rem;
    right:4rem;
    box-shadow: 0px 5px 10px grey , 0px -5px 10px grey;
    animation: blinks 3.5s ease-in infinite alternate-reverse;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    font-weight:bold;
    cursor:pointer;
`

export default Scroll