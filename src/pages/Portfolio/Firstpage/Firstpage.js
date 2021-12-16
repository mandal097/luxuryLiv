import React from 'react'
import './frontpage.scss'
import { useNavigate } from 'react-router-dom'
import FrontPage from '../../../components/FrontPage/FrontPage'
const Firstpage = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate('..')
    }
    return (
        <div>
            <div className="FrontPagewrapper">
                <span className='back' onClick={back} >
                    <a href="#explore" >LLIV.</a>
                </span>
                <FrontPage title="Portfolio" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur nam totam fugiat quas porro, sapiente, maxime autem fugit modi vero, harum exercitationem vitae. Voluptas provident harum nostrum impedit culpa praesentium corporis aliquid, iusto expedita nam eum fugit, possimus minima!" />
            </div>
        </div>
    )
}

export default Firstpage
