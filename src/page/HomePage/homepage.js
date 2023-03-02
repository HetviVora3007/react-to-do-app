import React from 'react'
import { Link } from 'react-router-dom'

import './homePage.css'
import HomepageImg from '../../Assests/homepageimg.jpg'

const homepage = () => {
    return (
        <>
            <div className='homepage-maincontainer'>
                <div className='homepage-leftside-container'>
                    <div className='homepage-title-button-container'>
                        <div className='Homepage-title'>
                            <p>Welcome to the Todo List.</p>
                        </div>
                        <div className='homepage-button'>
                            <Link to='/categorypage' className='homepage-button-link'>Let's Start</Link>
                        </div>
                    </div>
                </div>
                <div className='homepage-rightside-container'>
                    <div className='homepage-img-container'>
                        <img src={HomepageImg} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default homepage