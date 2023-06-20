import React from 'react'
import './userhomemain.css'
import Image from '../../../src/assets/1234.jpg'
import Image1 from '../../../src/assets/man-scooter-with-canadian-flag.jpg'

import Usernavbar from '../UserNavBar/Usernavbar'
import Footer from '../Footer/Footer'


function Userhomemain() {
    return (
        <>
        <Usernavbar/>
        <div>
            <img src={Image} alt=""style={{ width:'70%' , height:"20%" ,marginLeft:"15%" }} />
        </div>
        <div>
            <img src={Image1} alt=""style={{ width:'70%' , height:"20%" ,marginLeft:"15%" }} />
        </div>
        <Footer />
        </>
        
    )
}

export default Userhomemain
