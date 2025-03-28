import React, { useState } from 'react'
import Navbar from '../../components/Header/Navbar'
import './CoursePlaylist.css'

const CoursePlaylist = () => {

  const [embeddedVideo, setEmbeddedVideo] = useState("https://www.youtube.com/embed/8HXqOHH2ocM")

  const changeEmbeddedVideo = (videoID) => {
    setEmbeddedVideo(`https://www.youtube.com/embed/${videoID}`)
  }

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
                    <p className='text-warning text-opacity-75 embedded-button-effect' role='button' onClick={() => changeEmbeddedVideo("8HXqOHH2ocM")}>I: Hello World</p>
                  </li>
                  <li>
                    <p className='text-warning embedded-button-effect' role='button' onClick={() => changeEmbeddedVideo("lePkYEGt2es")}>II: Variables & Datatype</p>
                  </li>
                  <li>
                    <p className='embedded-button-effect' role='button' onClick={() => changeEmbeddedVideo("76b2d6ozN_k")}>III: User Input & Arithmetic Operations</p>
                  </li>
                  <li>
                    <p className='embedded-button-effect' role='button' onClick={() => changeEmbeddedVideo("LzeUR6JJBZo")}>IV: Arrays</p>
                  </li>
                  <li>
                    <p className='embedded-button-effect' role='button' onClick={() => changeEmbeddedVideo("m8Qo5vT-5MY")}>V: Conditional Statements</p>
                  </li>
                  <li>
                    <p className='embedded-button-effect' role='button' onClick={() => changeEmbeddedVideo("Px3J6ZdDqls")}>VI: Switch Statements</p>
                  </li>
                  <li>
                    <p className='embedded-button-effect' role='button' onClick={() => changeEmbeddedVideo("WX978uCVAkM")}>VII: While & Do - While Loop</p>
                  </li>
                  <li>
                    <p className='embedded-button-effect' role='button' onClick={() => changeEmbeddedVideo("re6AlB8AciI")}>VIII: For Loop</p>
                  </li>
                  <li>
                    <p className='embedded-button-effect' role='button' onClick={() => changeEmbeddedVideo("rGVpVP9o6ps")}>IX: For Each Loop</p>
                  </li>
                  <li>
                    <p className='embedded-button-effect' role='button' onClick={() => changeEmbeddedVideo("zC8R_JXiqDs")}>X: 2D Array + Nested For Loop</p>
                  </li>
                  <li>
                    <p className='embedded-button-effect' role='button' onClick={() => changeEmbeddedVideo("s7GQ5HmlGQY")}>XI: Methods</p>
                  </li>
                  <li>
                    <p className='embedded-button-effect' role='button' onClick={() => changeEmbeddedVideo("VI9D3_zGG74")}>XII: Packages & Modifiers</p>
                  </li>
                </ul>

              </div>

              <div className='container col-md-8'>
                <div className="ratio ratio-16x9">
                  <iframe src={embeddedVideo} title='Advanced Java Tutorial' allowFullScreen></iframe>

                </div>
              </div>
              <div className='container col-md'>
                <p className="fw-bold fs-5 text-center">Ask A Question</p>


              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default CoursePlaylist