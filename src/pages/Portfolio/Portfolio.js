import React from 'react'
import './portfolio.scss'
import HotelSection from './Hotelsection/HotelSection'
import Firstpage from './Firstpage/Firstpage'
import HomeBtn from '../../components/HomeBtn/HomeBtn'
// import { useLocation } from 'react-router';
// import HotelsDescModal from "../../components/HotelDescription/HotelsDescModal";

const Portfolio = () => {
    // const [isOpen1, setIsOpen1] = useState(false);
    // const location = useLocation()
    // const page = location.pathname.split('/')[1]

    // useEffect(() => {
    //     document.title = 'Luxury Living ' + page

    // }, [page])
    return (
        <div className="portfolio">
            <HomeBtn/>
            <Firstpage />
            <HotelSection />
        </div>
    )
}

export default Portfolio

