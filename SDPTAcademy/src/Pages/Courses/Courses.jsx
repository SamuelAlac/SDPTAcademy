import React from 'react'
import Navbar from '../../components/Header/Navbar'
import lessonImage from '../../assets/lessonImage.svg'
import bookIcon from '../../assets/bookIcon.svg'
import clockIcon from '../../assets/clockIcon.svg'
import studentsIcon from '../../assets/studentsIcon.svg'
import rateIcon from '../../assets/starIcon.svg'
import cartIcon from '../../assets/cartIcon.svg'
import searchIcon from '../../assets/searchIcon.svg'
import courseImage from '../../assets/courseImage.svg'
import './courses.css'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        <Navbar className="bg-black border-bottom rounded-bottom-4 border-effect"/>
        <section className="fixed-layout p-5">
        <div className="container w-50">
            <div class="btn-group d-flex flex-fill justify-content-center" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" defaultChecked/>
                <label class="btn btn-outline-warning text-white fw-semibold text-nowrap  text-center m-1" for="btnradio1">Buy Courses</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                <label class="btn btn-outline-warning text-white fw-semibold text-nowrap text-center m-1" for="btnradio2">Owned Courses</label>
            </div>
        </div>

        <div className="container mt-5 pt-3">
          <p className='lead text-white fw-bold'>Featured Courses</p>

          <div class="card featured-card-design mb-3 text-white">
              <div class="row g-5">
                <div class="col-md d-sm-flex align items-center">
                  <img src={lessonImage} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md">
                  <div class="card-body d-flex flex-column">

                    <div className="row text-start mb-5 d-flex align-items-center">
                      <div className="col-md d-flex align-items-center">
                        <img className='img-fluid' src={bookIcon} alt="" />
                        <span className="mx-1 card-text text-light">18 Lessons</span>
                      </div>
                      <div className="col-md d-flex align-items-center">
                        <img className='img-fluid' src={clockIcon} alt="" />
                        <span className="mx-1 card-text text-light">4h 20m</span>
                      </div>
                      <div className="col-md d-flex align-items-center">
                        <img className='img-fluid' src={studentsIcon} alt="" />
                        <span className="mx-1 card-text text-light">69 Students</span>
                      </div>
                      <div className="col-md d-flex align-items-center">
                        <img className='img-fluid' src={rateIcon} alt="" />
                        <span className="mx-1 card-text text-light">4.45</span>
                      </div>
                    </div>

                    <Link className="nav-link" to="/CoursePreview">
                      <h5 class="h5 card-title fw-bold">Advanced Java Tutorial</h5>                    
                    </Link>
                    
                    <p class="card-text fs-5">Learn different programming languages through the use of our Filipino Language which is Tagalog using the Java Language.</p>

                    <p className="card-text fs-1 fw-bold text-center my-3">₱800<span className='fw-normal'>/1 year</span></p>
                    <button className="btn btn-warning btn-lg rounded-5 text-white d-flex align-items-center justify-content-center"data-bs-toggle = "modal" data-bs-target="#purchase">
                      <img src={cartIcon} alt="" className="img-fluid px-1" />Purchase</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </section>

        <section className="container p-5 w-50">
          <div className="container w-75">
            <div className="d-md-flex align-items-center justify-content-center">
              <div className="search-design input-group rounded-5">
                <img src={searchIcon} alt="" className="search-design img-fluid p-2 ps-3" />
                <input type="text" placeholder = "Search Courses" class="form-control search-design text-white border-0 p-3" aria-label="Text input with dropdown button"/>
              </div>

              <div class="dropdown d-flex align-items-center justify-content-center">
                <button class="btn btn-sm text-white mx-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Category</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">I</a></li>
                  <li><a class="dropdown-item" href="#">Miss</a></li>
                  <li><a class="dropdown-item" href="#">Her</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="p-5 vh-100">
          <div className="container mb-5">
            <h3 className='text-white'>Courses</h3>
          </div>

          <div className="container">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-2 text-center text-white">
              <div className="col-md">
              <div class="card course-card-design rounded-4">
                <img src={courseImage} class="card-img-top img-fluid" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title text-white text-sm-start">Advanced Java Tutorial</h5>
                    <div className='container d-lg-flex align-items-center justify-content-between'>
                        <div className='d-lg-flex align-items-center'>
                          <img className='img-fluid' src={bookIcon} alt="" />
                          <span className="card-text mx-1 text-light">18 Lessons</span>
                        </div>
                        <div className='d-lg-flex align-items-center'>
                          <img className='img-fluid' src={clockIcon} alt="" />
                          <span className="card-text mx-1 text-light">4h 20m</span>
                        </div>
                        <div className='d-lg-flex align-items-center'>
                          <img className='img-fluid' src={studentsIcon} alt="" />
                          <span className="card-text mx-1 text-light">69 Students</span>
                        </div>
                    </div>
                  <p class="card-text text-white fs-6 fw-semibold my-3">Learn different programming languages through the use of our Filipino Language which is Tagalog using the Java Language.</p>

                  <div className="container d-lg-flex align-items-center justify-content-between">
                      <div>
                        <p className="card-text fw-bold text-white text-center">₱4799<span className='fw-normal'>/1 year</span></p>
                      </div>
                      <div>
                        <img className='img-fluid' src={rateIcon} alt="" />
                        <span className="mx-1 card-text text-white">4.45</span>
                      </div>
                      <div>
                        <button className="btn btn-warning btn-md rounded-5 text-white d-lg-flex align-items-center justify-content-center"data-bs-toggle = "modal" data-bs-target="#purchase">
                        <img src={cartIcon} alt="" className="img-fluid px-1" />Purchase</button>
                      </div>
                    </div>
                </div>
              </div>

              </div>
              <div className="col">123</div>
              <div className="col">123</div>
              <div className="col">123</div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Courses