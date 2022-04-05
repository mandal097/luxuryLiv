import React, { useEffect } from 'react'
import './frontpage.scss'
import FrontPage from '../../../components/FrontPage/FrontPage'
const Firstpage = () => {
    useEffect(() => {
        document.title = 'Luxury Living - Portfolio'
    })
    return (
        <div>
            <div className="FrontPagewrapper">
                <FrontPage title="Portfolio" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur nam totam fugiat quas porro, sapiente, maxime autem fugit modi vero, harum exercitationem vitae. Voluptas provident harum nostrum impedit culpa praesentium corporis aliquid, iusto expedita nam eum fugit, possimus minima!" />
            </div>
        </div>
    )
}

export default Firstpage
