import React from 'react';
import './Team.css'; 

const Team = () => {
  return (
    <section className="TeamBox" id="Team">
      <div className="Teams Heading">
        <h3>Team</h3>
      </div>
      <div className="Teams Content">
        <p>
          Teams significantly contribute to the club's excellence by pooling diverse skills
          and fostering unity. They promote innovation, ensure the club's vitality, and create
          an engaging environment for all members.
        </p>
      </div>
      <div className="TeamImages">
        <div className="Team Heading">
          <h3 className='mt'>Faculty Coordinator</h3>
        </div>
        <div className="President Div">
          <div className="President iss Img">
            <img
              src={process.env.PUBLIC_URL + "/images/Mam.png"} 
              alt="Head"
              width={280}
              height={280}
            />
            <div className="Overlay">
              <h6>Head of APJ Club</h6>
              <p>Mrs.B.Ujwala</p>
            </div>
          </div>
        </div>

        <div className="Team Heading">
          <h3 className='mt'>President</h3>
        </div>
        <div className="President Div">
          <div className="President Img">
            <img
              src={process.env.PUBLIC_URL + "/images/1.jpg"}
              alt="President"
              width={280}
              height={280}
            />
            <div className="Overlay">
              <h6>President</h6>
              <p>G Sudeepthi</p>
              <div className="LINK">
                <a href="https://www.instagram.com/_deepthiissleepy_/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/sudeepthi-g-75a973290/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Team Heading">
          <h3 className='mt'>Vice President</h3>
        </div>
        <div className="President Div">
          <div className="President Img">
            <img
              src={process.env.PUBLIC_URL + "/images/8.jpg"}
              alt="Vice President"
              width={280}
              height={280}
            />
            <div className="Overlay">
              <h6>Vice President</h6>
              <p>Kritika R G</p>
              <div className="LINK">
                <a href="https://www.instagram.com/_kritiikaaaa._/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/kritika-r-g-a30120325/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Team Heading">
          <h3>Organizing Team</h3>
        </div>
        <div className="Organizing Div">
          <div className="Organizing Img">
            <img
              src={process.env.PUBLIC_URL + "/images/2.jpg"}
              alt="Organizing Team Lead"
              width={280}
              height={280}
            />
            <div className="Overlay">
              <h6>Organizing Team Lead</h6>
              <p>Dachepally Rohit</p>
              <div className="LINK">
                <a href="https://www.instagram.com/rohit_dachepally?igsh=MXRtYTU4NGZ6N3I3eA==" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/dachepally-rohit-088a48317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Team Heading">
          <h3>Community Approach Team</h3>
        </div>
        <div className="CA Div">
          <div className="CATeam Img">
            <img
              src={process.env.PUBLIC_URL + "/images/3.jpg"}
              alt="Community Approach Lead"
              width={280}
              height={280}
            />
            <div className="Overlay">
              <h6>Community Approach Lead</h6>
              <p>Mridini M</p>
              <div className="LINK">
                <a href="https://www.instagram.com/mriiii_13?igsh=MWg4enM4c3hqc2dkdA==" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/mridini-m-0044bb2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Team Heading">
          <h3>Platform Lead</h3>
        </div>
        <div className="Platform Div">
          <div className="Platform Img">
            <img
              src={process.env.PUBLIC_URL + "/images/4.jpg"}
              alt="Platform Lead"
              width={280}
              height={280}
            />
            <div className="Overlay">
              <h6>Platform Lead</h6>
              <p>Chinmayee M</p>
              <div className="LINK">
                <a href="https://www.instagram.com/chinmayee8055/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/chinmayee-madha/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Team Heading">
          <h3>Problem Designing Team</h3>
        </div>
        <div className="ProblemD Div">
          <div className="PBTeam Img">
            <img
              src={process.env.PUBLIC_URL + "/images/5.jpg"} // Make sure this image exists
              alt="Problem Designing Lead"
              width={280}
              height={280}
            />
            <div className="Overlay">
              <h6>Problem Designing Lead</h6>
              <p>Y. Pushkala</p>
              <div className="LINK">
                <a href="https://www.instagram.com/y.pushkala/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/yeddula-pushkala/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Team Heading">
          <h3>Social Media Team</h3>
        </div>
        <div className="SM Div">
          <div className="SMTeam Img">
            <img
              src={process.env.PUBLIC_URL + "/images/6.jpg"} // Make sure this image exists
              alt="Social Media Lead"
              width={280}
              height={280}
            />
            <div className="Overlay">
              <h6>Social Media Lead</h6>
              <p>C.H. Praharika</p>
              <div className="LINK">
                <a href="https://www.instagram.com/praharika_?igsh=eHF2OGRwNWFmc3Fi" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/praharika-chappa-01a841295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Team Heading">
          <h3>Web Lead</h3>
        </div>
        <div className="WebLead Div">
          <div className="WebLead Img">
            <img
              src={process.env.PUBLIC_URL + "/images/7.jpg"}
              alt="Web Lead"
              width={280}
              height={280}
            />
            <div className="Overlay">
              <h6>Web Lead</h6>
              <p>Kachapuram Harshitha</p>
              <div className="LINK">
                <a href="https://www.instagram.com/harshithakachapuram?igsh=MWNxYWgxNTVwNWZyNg==" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/kachapuram-harshitha/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Team Heading">
          <h3>Treasurer</h3>
        </div>
        <div className="Treasurer Div">
          <div className="Treasurer Img">
            <img
              src={process.env.PUBLIC_URL + "/images/9.jpg"}
              alt="Treasurer"
              width={280}
              height={280}
            />
            <div className="Overlay">
              <h6>Treasurer</h6>
              <p>Mancha Laxmi Anusha</p>
              <div className="LINK">
                <a href="https://www.instagram.com/_laxmianusha_/?hl=en" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/laxmi-anusha-1882842a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;