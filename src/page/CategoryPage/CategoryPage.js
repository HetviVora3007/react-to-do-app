import React from 'react'
import { Link } from 'react-router-dom'

import './CategoryPage.css'
import Personl from '../../Assests/person.jpg'
import Work from '../../Assests/work.jpg'
import Health from '../../Assests/health.jpg'
import Travel from '../../Assests/travel.jpg'
import Shopping from '../../Assests/shopping.jpg'
import Education from '../../Assests/education.jpg'

const CategoryPage = () => {
    return (
        <>
            <div className='categorypage-main-container'>
                <div className='categorypage-title'>
                    <p>Select Category</p>
                </div>
                <div className='categorypage-container'>
                    <div className='personal-work-health-category'>
                        <div className='personal-category'>
                            <Link to='/personal' className='personal-category-link'><img src={Personl} /></Link>
                            <p>Personal</p>
                        </div>
                        <div className='work-category'>
                            <Link to='/work' className='work-category-link'><img src={Work} /></Link>
                            <p>Work</p>
                        </div>
                        <div className='health-category'>
                            <Link to='/health' className='health-category-link'><img src={Health} /></Link>
                            <p>Health</p>
                        </div>
                    </div>
                    <div className='travel-shopping-education-category'>
                        <div className='travel-category'>
                            <Link to='/travel' className='travel-category-link'><img src={Travel} /></Link>
                            <p>Travel</p>
                        </div>
                        <div className='shopping-category'>
                            <Link to='/shopping' className='shopping-category-link'><img src={Shopping} /></Link>
                            <p>Shopping</p>
                        </div>
                        <div className='education-category'>
                            <Link to='/education' className='education-category-link'><img src={Education} /></Link>
                            <p>Education</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryPage