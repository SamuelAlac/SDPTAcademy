import React from 'react'
import Navbar from '../../components/Header/Navbar'
import './home.css'
import SDPTLogo from '../../assets/SDPTLogo_Big.svg'
import googleTranslate from '../../assets/Google Translate.svg'


const Home = () => {
  return (
    <>
        <Navbar/>
         <section className="text-light header-bg">
        </section>
        
        <section className="p-5 text-light">
        <h1 className='text-warning text-center py-5'>What is SDPT Academy?</h1>
        <hr></hr>
            <div className="container text-start">
                <div className="row align-items-center justify-content-evenly">
                  <div className="col-4">
                      <img className ='img-fluid' src={SDPTLogo} alt="" />
                  </div>

                  <div className="col-md">
                      <p className='lead'>SDPT Academy is an online platform where in teaches Programming Languages through the use of our own native language - Tagalog.
                    It aims to teach Filipino Programmers who wants to be developers.
                      Ginaya ko lang intro heheh AHHAHAHAHAH bsta ganto ganyan.
                      It is own by SDPT Solutions a Youtube Channel that teachers about Programming.
                      </p>
                  </div>
                </div>
            </div>
          <hr></hr>
        </section>

        <section id ="info" className="p-5 text-light">
            <h1 className='text-warning flex-wrap text-center'>What can I use SDPT Academy for?</h1>
            <div className='container'>
              <div className="row text-center py-5 g-3">
                <div className="col-md">
                  <div className="hoverMe card text-white pt-1">
                    <div className="card-body text-start">
                      <img className='img-fluid' src={googleTranslate} alt="" />

                      <h3 className='card-title mb-3 text-end text-warning'>Your Own Language</h3>

                      <p className='card-text text-start pb-3'>Learn different programming languages through the use of our Filipino Language which is Tagalog. </p>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                <div className="hoverMe card text-white pt-1">
                    <div className="card-body text-start">
                      <img className='img-fluid' src={googleTranslate} alt="" />

                      <h3 className='card-title mb-3 text-end text-warning'>Advanced Tutorial</h3>

                      <p className='card-text text-start pb-3'>Purchase Advanced Tutorial to skyrocket your learning char haha. Note: Basic Tutorial are up in SDPT Solution’s YT Channel.. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <footer className="p-5 text-white d-flex align-items-end">
            <div className="container">
            <div id="reviews" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#reviews" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#reviews" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#reviews" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner hoverReviews">
                <div class="carousel-item active">
                  <div className="cards-wrapper text-center">
                  <div className="card text-white p-3">
                    <div className="card-body">
                      <div className="h1 mb-3">
                        <p className='lead text-warning'>“Sobrang daling gamitin ng SDPT Academy! Would recommend this.”</p>
                      </div>

                      <h3 className='card-title text-warning pt-5'>Carmela Isabela</h3>

                      <p className='card-text pb-3'>Student</p>
                    </div>
                </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="cards-wrapper text-center">
                  <div className="card text-white p-3">
                    <div className="card-body">
                      <div className="h1 mb-3">
                        <p className='lead text-warning'>“Sobrang daling gamitin ng SDPT Academy! Would recommend this.”</p>
                      </div>

                      <h3 className='card-title text-warning pt-5'>Carmela Isabela</h3>

                      <p className='card-text pb-3'>Student</p>
                    </div>
                </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="cards-wrapper text-center">
                  <div className="card text-white p-3">
                    <div className="card-body">
                      <div className="h1 mb-3">
                        <p className='lead text-warning'>“Sobrang daling gamitin ng SDPT Academy! Would recommend this.”</p>
                      </div>

                      <h3 className='card-title text-warning pt-5'>Carmela Isabela</h3>

                      <p className='card-text pb-3'>Student</p>
                    </div>
                </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Home