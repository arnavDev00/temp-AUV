import React from "react";
import SAUVC from "../assets/logo/sauvclogo.png";
import ScrollAnimation from "react-animate-on-scroll";
import MechanicalModal from "./Teams/Mechanical";
import Mechanical from "../assets/icons/mechanical.png";


/*heyyyyyy */
const Achievements = () => {
  return (
    <React.Fragment>
      <div className="achievement" id="achievement">
        <div className="container">
        <MechanicalModal />
          <h2 className="title" style={{ backgroundColor: "#161a22" }}>
            Achievements
          </h2>
          <hr></hr>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={SAUVC} alt="sauvc" width="90px"></img>
                    </div>
                    <div className="col-sm-10">
                      <div className="card-body">
                        <h6 className="sub-heading">
                          17th Place in SAUVC 2019
                        </h6>
                        <p>
                          The SAUVC competition challenges participant teams to
                          build an AUV which can perform given tasks. The tasks
                          involve four widely faced challenges underwater such
                          as AUV navigation, visual identification, acoustic
                          localization and robotic manipulation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row mt-5">
              <div className="col-sm-8">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={SAUVC} alt="sauvc" width="90px"></img>
                    </div>
                    <div className="col-sm-10">
                      <div className="card-body">
                        <h6 className="sub-heading">Qualified in SAUVC 2020</h6>
                        <p>
                          The SAUVC competition challenges participant teams to
                          build an AUV which can perform given tasks. The tasks
                          involve four widely faced challenges underwater such
                          as AUV navigation, visual identification, acoustic
                          localization and robotic manipulation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/Wj7A49-mySk?playlist=NsHS6F2bjII&loop=1"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="row">
                    <div className="col-sm-2">
                      <img src={SAUVC} alt="sauvc" width="90px"></img>
                    </div>
                    <div className="col-sm-10">
                      <div className="card-body">
                        <h6 className="sub-heading">
                          <a
                          data-toggle="modal"
                          data-target="#achieve2022"
                          >
                            17th Place in SAUVC 2021
                            </a>
                        </h6>
                        <p>
                          The SAUVC competition challenges participant teams to
                          build an AUV which can perform given tasks. The tasks
                          involve four widely faced challenges underwater such
                          as AUV navigation, visual identification, acoustic
                          localization and robotic manipulation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 text-center">
                <iframe
                  title="video"
                  src="https://www.youtube.com/embed/c58AMctLp04?playlist=c58AMctLp04&loop=1"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
          <div className='modal fade' id='achieve2022'>
        <div
          className='modal-dialog modal-dialog-centered modal-dialog-scrollable'
          style={{ maxWidth: "600px" }}>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Core Team</h4>
              <button type='button' className='close' data-dismiss='modal'>
                &times;
              </button>
            </div>
            <div className='modal-body'>
              <div className='img-flex'>
                <div className='profile-modal'>
                  <img src="" alt='Sharath' className='profile' />
                  <a
                    href='https://www.linkedin.com/in/sharath-chandar-bb145b14'
                    target='blank'>
                    <i className='fa'>&#xf0e1;</i>
                  </a>
                  <p>Sharath Chander</p>
                </div>
                <div className='profile-modal'>
                  <img src="" alt='Mayank' className='profile' />
                  <a
                    href='https://www.linkedin.com/in/mayank-n-mehta-468a47187'
                    target='blank'>
                    <i className='fa'>&#xf0e1;</i>
                  </a>
                  <p>Mayank Mehta</p>
                </div>
                <div className='profile-modal'>
                  <img src="" alt='Ravi' className='profile' />
                  <a
                    href='https://www.linkedin.com/in/ravikumar87/'
                    target='blank'>
                    <i className='fa'>&#xf0e1;</i>
                  </a>
                  <p>Ravi Kumar</p>
                </div>
                <div className='profile-modal'>
                  <img src="" alt='Vishva' className='profile' />
                  <a
                    href='https://www.linkedin.com/in/vishva-bhate-a72847175/'
                    target='blank'>
                    <i className='fa'>&#xf0e1;</i>
                  </a>
                  <p>
                    Vishva Bhate
                    <br />
                    (Co-Leader)
                  </p>
                </div>
                <div className='profile-modal'>
                  <img src="" alt='Subash' className='profile' />
                  <a
                    href='https://www.linkedin.com/in/subash-m-1bba75130/'
                    target='blank'>
                    <i className='fa'>&#xf0e1;</i>
                  </a>
                  <p>
                    Subash Mylraj
                    <br />
                    (Co-Leader)
                  </p>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-danger'
                data-dismiss='modal'>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Achievements;                            