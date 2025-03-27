import React from 'react'
import Navbar from '../../components/Header/Navbar'
import './CoursePlaylist.css'

const CoursePlaylist = () => {
  return (
    <div>
        <Navbar className="bg-black border-bottom rounded-bottom-4 border-effect" />

        <section className="course-fixed-playlist-layout">
          <div className="container-fluid d-flex justify-content-between">
            
            <div className='playlist-box'>

            </div>
            <div className='playlist-box'>

            </div>
            <div className='playlist-box'>

            </div>
          </div>
        </section>
    </div>
  )
}

export default CoursePlaylist