import React from 'react'
import styled from 'styled-components'
import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
const Social = () => {
    return (
        <Socialhandles>
            <FaWhatsapp className="icons" />
            <AiOutlineInstagram className="icons" />
            <FaFacebookF className="icons" />
        </Socialhandles>
    )
}

const Socialhandles = styled.div`
height: 130px;
width: 60px;
position: fixed;
left: 30px;
bottom:50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
.icons{
    font-size: 25px;
}
@media (max-width:600px){
    position: fixed;
    left:-15px;
    top: 45%;
    .icons{
        font-size: 17px;
    }

}
`
export default Social
