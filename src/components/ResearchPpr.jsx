import React from "react";


const ResearchPpr = () => {
  return (
    <React.Fragment>
      <div className="modal fade" id="mechanical">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Global Oceans 2021</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="img-flex">
                <div className="profile-modal">
                  <img src={Advaith} alt="advaith" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/advaith-kandiraju-14320517a/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>Advaith Kandiraju</p>
                </div>
                <div className="profile-modal">
                  <img src={Ruthwik} alt="ruthwik" className="profile" />
                  <a
                    href="https://www.linkedin.com/in/ruthwikdasyam/"
                    target="blank"
                  >
                    <i className="fa">&#xf0e1;</i>
                  </a>
                  <p>
                    Title: Development of AUV for SAUVC During COVID-19 Authors:
                    Mayank Navneet Mehta, Subash Mylraj, Vishva Nilesh Bhate
                    Abstract: This paper describes the design, implementation,
                    and testing of control and vision algorithms for an AUV in
                    virtual and real environments. Hardware design and the
                    software stack of the vec6 underwater vehicle are described
                    in this paper. The paper also presents a simulation
                    test-bed, the uwv-simulator, which is developed using ROS
                    and Gazebo. A custom arena similar to that used in the
                    Singapore AUV Challenge is constructed in the simulation
                    environment. The software stack is designed to execute
                    higher and abstract algorithms without the trouble of going
                    through the lower-level functions. Conference: Global OCEANS
                    2021, San Diego – Porto, Sept 20-23, 2021 Link to the work:
                    https://github.com/auvsocietyiiitdm/uwv-simulator
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResearchPpr;
