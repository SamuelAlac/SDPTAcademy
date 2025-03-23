import React from "react";
import Navbar from "../../components/Header/Navbar";
import "./aboutUs.css";
import imgSTI from "../../assets/StiBsit.svg";

const AboutUs = () => {
  return (
    <div>
      <Navbar className="bg-black border-bottom rounded-bottom-4 border-effect" />
      <section className="fixed-layout AboutUs p-5 text-white">
        <div className="container">
          <div className="row g-4 align-items-end">
            <div className="col-md text-center text-md-start">
              <img src={imgSTI} alt="" className="img-fluid w-75" />
            </div>

            <div className="col-md text-center text-md-end">
              <p className="lead fw-bold letter-spacing">Passionate</p>
              <p className="letter-spacing lead">
                <span className="fw-bold">Individuals</span> that aims
              </p>
              <p className="letter-spacing lead">
                to <span className="fw-bold">teach Filipinos</span>
              </p>
              <p className="letter-spacing lead">
                <span className="fw-bold">Programming</span> in our
              </p>
              <p className="letter-spacing lead">
                <span className="fw-bold">own language</span> and.
              </p>
              <p className="letter-spacing lead fw-bold">Glorify God</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-team-info p-5 text-light mt-5">
        <div className="container">
          <div className="row text-center align-items-end justify-content-between">
            <div className="col-md-6 text-start">
              <div className="card-design card p-3 my-5 text-white">
                <div className="card-body">
                  <p className="fw-bold fs-3">Lets meet our</p>

                  <h3 className="card-title mb-3 fw-bold fs-2 text-warning">
                    SDPT Academy Team
                  </h3>

                  <div className="line">
                    <span></span>
                    <p className="card-text">
                      DEVELOPER | DESIGNER | PROFESSOR | MARKETING
                    </p>
                    <p className="card-text text-warning">2 Members</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5 text-start">
              <div className="card-team-info card my-5 text-white border border-0">
                <div className="card-body">
                  <hr className="text-white"></hr>

                  <p className="card-title mb-3 fw-bold text-warning">
                    Our Team
                  </p>

                  <p className="card-text">
                    A <span className="fw-bold">Duo</span> fueled by{" "}
                    <span className="fw-bold">God and their passion</span> to
                    produce{" "}
                    <span className="fw-bold">
                      resources that will help fellow Filipino
                    </span>{" "}
                    Programmers{" "}
                    <span className="fw-bold">learn Programming</span> in a
                    comprehensive way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 text-white mt-5">
        <div className="container">
          <h2 className="text-warning fw-bold text-center mt-5">
            SDPT Academy Team
          </h2>
          <hr></hr>
        </div>

        <div className="container d-flex align-items-center justify-content-center">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5 text-center">
              <div className="card-design card p-3 my-5 text-white">
                <p>co-founder image</p>
              </div>
              <h5 className="fw-bold">Jean Eren Fajardo</h5>
              <p>Co-Founder</p>
            </div>
            <div className="col-md-5">
              <p className="text-break">
                Uses his{" "}
                <span className="fw-bold text-warning">Logical Thinking</span>{" "}
                to provide Programming Tutorial contents that will cater a lot
                of students' inquiries.
              </p>
              <hr></hr>
              <p>@spdtEren</p>
            </div>
          </div>
        </div>

        <br />

        <div className="container d-flex align-items-center justify-content-center">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              <p className="text-break">
                Uses her{" "}
                <span className="fw-bold text-warning">Creative Thinking</span>{" "}
                to provide innovative User interfaces, Quality Video Content
                edits, and
              </p>
              <hr></hr>
              <p>@spdtCarmela</p>
            </div>
            <div className="col-md-5 text-center">
              <div className="card-design card p-3 my-5 text-white">
                <p>co-founder image</p>
              </div>
              <h5 className="fw-bold">Carmela Isabelle Mendoza</h5>
              <p>Co-Founder</p>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h6 className="text-warning">
            <i>
              All wisdom comes from the LORD, and so do common sense and
              understanding.
            </i>
          </h6>
          <p className="fw-bold">
            <i>Proverbs 2:6</i>
          </p>
          <hr></hr>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
