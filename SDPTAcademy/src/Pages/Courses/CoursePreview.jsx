import React from 'react'
import Navbar from '../../components/Header/Navbar'
import './CoursePreview.css'
import rateIcon from '../../assets/starIcon.svg'
import blankRateIcon from '../../assets/transparentStarIcon.svg'
import bookIcon from '../../assets/bookIcon.svg'
import clockIcon from '../../assets/clockIcon.svg'
import studentsIcon from '../../assets/studentsIcon.svg'
import cartIcon from '../../assets/cartIcon.svg'
import cartIcon2 from '../../assets/cartIcon2.svg'

const CoursePreview = () => {
  return (
    <div>
        <Navbar className="bg-black border-bottom rounded-bottom-4 border-effect"/>

        <section className="fixed-layout p-5 text-center text-white">
            <div className="container course-preview-container d-flex flex-column align-items-center justify-content-center">
                <hr className='hr-white-line'></hr>

                <h3 className='text-nowrap'>Advanced Java Course</h3>
                <p className='lead fw-semibold fs-6 mb-5'>by SDPT Solutions</p>

                <p className='mb-4'>Learn different programming languages through the use of our Filipino Language which is Tagalog using the Java Language. 
                    Learn different programming languages through the use of our Filipino Language which is Tagalog using the Java Language. 
                    Learn different programming languages through the use of our Filipino Language which is Tagalog using the Java Language.
                </p>

                <div className="row row-cols-3 row-cols-lg-5 g-4 align-items-center justify-content-center mb-4">
                    <div className="col-md">
                    <img className='img-fluid' src={rateIcon} alt="" />
                    </div>
                    <div className="col-md">
                    <img className='img-fluid' src={rateIcon} alt="" />
                    </div>
                    <div className="col-md">
                    <img className='img-fluid' src={rateIcon} alt="" />
                    </div>
                    <div className="col-md">
                    <img className='img-fluid' src={rateIcon} alt="" />
                    </div>
                    <div className="col-md">
                    <img className='img-fluid' src={blankRateIcon} alt="" />
                    </div>
                </div>
                
                {/* <ul className="list-group flex-row">
                    <li className="list-group-item bg-transparent border-0">
                        <img className='img-fluid' src={rateIcon} alt="" />
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                        <img className='img-fluid' src={rateIcon} alt="" />
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                        <img className='img-fluid' src={rateIcon} alt="" />
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                        <img className='img-fluid' src={rateIcon} alt="" />
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                        <img className='img-fluid' src={blankRateIcon} alt="" />
                    </li>
                </ul> */}

                <p className='lead fs-6 fw-normal mb-4'>4.45 Rating</p>

                <ul className="list-group flex-row flex-wrap gap-2 justify-content-center">
                    <li className="list-group-item bg-transparent border-0">
                        <img className='img-fluid' src={bookIcon} alt="" />
                        <span className="card-text mx-1 text-light">18 Lessons</span>
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                        <img className='img-fluid' src={clockIcon} alt="" />
                        <span className="mx-1 card-text text-light">4h 20m</span>
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                        <img className='img-fluid' src={studentsIcon} alt="" />
                        <span className="mx-1 card-text text-light">69 Students</span>
                    </li>
                </ul>

                <div className='d-md-flex align-items-center mt-4 gap-md-3 gap-2 d-flex flex-sm-row flex-column-reverse'>
                    <div className='d-flex flex-row align-items-center'>
                    <p className="fw-bold text-white text-center my-0 mx-2 fs-5">₱1,299</p>
                    <span className='fw-light mt-1'>/1 year</span>
                    </div>


                    <button className="btn btn-light btn-md rounded-5 text-black fw-medium d-lg-flex align-items-center justify-content-center"data-bs-toggle = "modal" data-bs-target="#purchase">
                    <img src={cartIcon2} alt="" className="img-fluid"/><span className='px-2'>Purchase</span></button>
                </div>
            </div>
  
        </section>

        <section className="p-5">
            <div className="container vh-100">
                <div className='d-flex align-items-center gap-2'>
                    <hr className='hr-line'/>
                    <h1 className='text-nowrap text-white'>Course Preview</h1>
                    <hr className='hr-line'/>
                </div>

            <div className="container pt-5 mt-5">
                <div className="accordion according-flush" id="info">
                    <div className="accordion-item">
                        <h2 className="accordion-header d-flex align-items-center">
                            <button className="accordion-button collapsed fs-4 fw-semibold" type = "button"
                            data-bs-toggle="collapse" data-bs-target="#info-one">
                            <i class="bi bi-list-ul me-1"></i>Course Playlist</button>
                        </h2>

                        <div id="info-one" className="accordion-collapse collapse" data-bs-parent="#info">
                            <div className="accordion-body">
                                <div className="d-flex align-items-center justify-content-around">
                                    <div className='container'>
                                        <h5>Description</h5>
                                        <div className="container">
                                            <p className="lead fs-6">
                                            Learn different programming languages through the use of our Filipino Language which is Tagalog using the Java Language. 
                                            Learn different programming languages through the use of our Filipino Language which is Tagalog using the Java Language. 
                                            Learn different programming languages through the use of our Filipino Language which is Tagalog using the Java Language.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='container'>
                                        <h5 className="fw-bold text-warning">Table of Contents</h5>
                                        <ul className="list-group">
                                            <li className="list-group-item bg-transparent border-0"></li>
                                            <li className="list-group-item bg-transparent border-0"></li>
                                            <li className="list-group-item bg-transparent border-0"></li>
                                            <li className="list-group-item bg-transparent border-0"></li>
                                            <li className="list-group-item bg-transparent border-0"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item"></div>
                    <div className="accordion-item"></div>
                </div>
            </div>

            </div>
        </section>
    </div>
  )
}

export default CoursePreview