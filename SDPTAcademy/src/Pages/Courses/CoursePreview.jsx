import React from 'react'
import Navbar from '../../components/Header/Navbar'
import './CoursePreview.css'
import rateIcon from '../../assets/starIcon.svg'
import blankRateIcon from '../../assets/transparentStarIcon.svg'

const CoursePreview = () => {
  return (
    <div>
        <Navbar className="bg-black border-bottom rounded-bottom-4 border-effect"/>

        <section className="fixed-layout p-5 vh-100 text-white">
            <div className="container course-preview-container d-flex flex-column align-items-center justify-content-center">
                <hr className='hr-white-line'></hr>

                <h3 className='mt-4 text-nowrap'>Advanced Java Course</h3>
                <p className='lead fw-semibold fs-6 mb-5'>by SDPT Solutions</p>

                <p className='mb-5'> Learn different programming languages through the use of our Filipino Language which is Tagalog using the Java Language. 
                    Learn different programming languages through the use of our Filipino Language which is Tagalog using the Java Language. 
                    Learn different programming languages through the use of our Filipino Language which is Tagalog using the Java Language.
                </p>

                <ul className="list-group d-flex flex-row">
                    <li className="list-group-item bg-transparent border-0">
                        <img src={rateIcon} alt="" />
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                        <img src={rateIcon} alt="" />
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                        <img src={rateIcon} alt="" />
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                        <img src={rateIcon} alt="" />
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                        <img src={blankRateIcon} alt="" />
                    </li>
                </ul>

                <p className='lead fs-6 fw-normal mt-2 mb-5'>4.45 Rating</p>

                <ul className="list-group d-flex flex-row">
                    
                </ul>
            </div>
        </section>
    </div>
  )
}

export default CoursePreview