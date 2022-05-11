import React, { useEffect } from 'react'
import ComingSoon from '../../utils/ComingSoon/ComingSoon'

const Offers = () => {
    useEffect(() => {
        document.title = 'Luxury Living - Offers'
    })
    return (
        <ComingSoon />
    )
}

export default Offers