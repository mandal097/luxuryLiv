import React  from 'react'
import './explore.scss'
import { useNavigate } from 'react-router-dom'
// import { LinkOutlined } from '@ant-design/icons'
// import Aos from "aos";
// import "aos/dist/aos.css";
const Explore = () => {

    // const [blinks, setBlinks] = useState(200)

    const navigate = useNavigate()

    const goToPortfolio = () => {
        navigate('portfolio')
    }

    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    // }, []);

    return (
        <div className="explore" id='explore'>
            <div className='explore_wrapper'>
                <video src='./videos/LL_INTRO.mp4' muted autoPlay controls></video>
            </div>
            <div className='our_portfolio'>
                <h3 onClick={goToPortfolio} className='desk'>PORTFOLIO
                    {/* <LinkOutlined /> */}
                </h3>
                <div>
                    <h3 onClick={goToPortfolio} className='mob'> VIEW PORTFOLIO </h3>
                </div>
            </div>
        </div>
    )
}

export default Explore
