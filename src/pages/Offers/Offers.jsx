import React, { useEffect, Suspense } from 'react';
import './style.scss';
import Header from '../../components/Header/Header'
import Social from '../../components/Social/Social'
import Loading from '../../utils/Loading/Loading';

const OffersCard = React.lazy(() => import('../../components/OffersCard/OffersCard'))

const Offers = () => {
    useEffect(() => {
        document.title = 'Luxury Living - Offers'
    }, [])
    return (
        <Suspense fallback={<Loading />}>
            <div className="offers">
                <Header />
                <div className="offers_wrapper">
                    <div className="offers_header">
                        <h1>Booyah!! we have some offers for you </h1>
                    </div>
                    <div className="offers_">
                        {/* offers cards should be added here  */}

                        <OffersCard
                            h_name='aman resorts'
                            offer={25}
                            coverImg='https://images.unsplash.com/photo-1516531558361-f6c4c956ad85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmlnaHQlMjBob3RlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                            img1='https://images.unsplash.com/photo-1625582421421-0d27eafe68fb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pZ2h0JTIwaG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
                            img2='https://images.unsplash.com/photo-1504652517000-ae1068478c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBob3RlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                        />

                        <OffersCard
                            h_name='Badrutts Palace'
                            offer={50}
                            coverImg='https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5pZ2h0JTIwaG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'
                            img1='https://images.unsplash.com/photo-1570206986634-afd7cccb68d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5pZ2h0JTIwaG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            img2='https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE='
                        />


                    </div>
                </div>
                <Social />
            </div>
        </Suspense>
    )
}

export default Offers