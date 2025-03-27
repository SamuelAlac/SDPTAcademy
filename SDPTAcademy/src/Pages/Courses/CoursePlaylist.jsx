import React from 'react'
import Navbar from '../../components/Header/Navbar'
import './CoursePlaylist.css'

const CoursePlaylist = () => {
  return (
    <div>
        <Navbar className="bg-black border-bottom rounded-bottom-3 border-effect" />

        <section className="fixed-layout vh-100 bg-black text-white">
          <div className="container-fluid">
            <div className="row row-cols-3 playlist-container">
              <div className='container col-md-2 mt-3'>
                <p className='fw-bold'>Java Advanced Tutorial</p>

                <ul className='list-unstyled'>
                  <li>
                    <p>I: Hello World</p>
                  </li>
                  <li>
                    <p>II: Hello World Advance Skirtt</p>
                  </li>
                  <li>
                    <p>II: Hello World Advance Skirtt</p>
                  </li>
                  <li>
                    <p>II: Hello World Advance Skirtt</p>
                  </li>
                  <li>
                    <p>II: Hello World Advance Skirtt</p>
                  </li>
                  <li>
                    <p>II: Hello World Advance Skirtt</p>
                  </li>
                  <li>
                    <p>II: Hello World Advance Skirtt</p>
                  </li>
                  <li>
                    <p>II: Hello World Advance Skirtt</p>
                  </li>
                </ul>

              </div>

              <div className='container col-md-8'>
                <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/8HXqOHH2ocM?si=UdG60ST60V7t80--" title='Advanced Java Tutorial' allowFullScreen></iframe>

                </div>
              </div>
              <div className='container col-md'>sam</div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default CoursePlaylist