import React from 'react'
import President from '../assets/PresidentImg.jpg';
import { PBTeam } from '../constants';
import { OTTeam } from '../constants';
import { PlatformLeads } from '../constants';
import { SMTeam } from '../constants';
import { CATeam } from '../constants';
import Head from '../assets/Head.jpg'
import { OTJrTeam, PdJrTeam, CAJrTeam, SmJrTeam } from '../constants';
const Team = () => {
  return (
    <section
      className="TeamBox" id="Team"
    >
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
              src={Head}
              alt="Head"
              width={280}
              height={280}
            />
            <div
              className="Overlay"
            >
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
              src={President}
              alt="PresidentImage"
              width={280}
              height={280}
            />
            <div
              className="Overlay"
            >
              <h6>President</h6>
              <p>Ankathi Shreyan</p>
              <div className="LINK">
                <a href="https://www.instagram.com/shreyan_ankathi_/"><i class="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/ankathi-shreyan/"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="Team Heading">
          <h3>Organizing Team</h3>
        </div>
        <div className="Organizing Div">
          {
            OTTeam.map((Img) => (
              <div class="Organizing Img" key={Img.Title}>
                <img
                  src={Img.Member}
                  alt="TeamLead"
                />
                <div
                  className="Overlay"
                >
                  <h6>{Img.Title}</h6>
                  <p>{Img.Name}</p>
                  <div className="LINK">
                    <a href={Img.ilink}><i class="bi bi-instagram"></i></a>
                    <a href={Img.llink}><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="Team Heading">
          <h3>Community Approach Team</h3>
        </div>
        <div className="CA Div">
          {
            CATeam.map((Img) => (
              <div class="CATeam Img" key={Img.Title}>
                <img
                  src={Img.Member}
                  alt="TeamLead"
                />
                <div
                  className="Overlay"
                >
                  <h6>{Img.Title}</h6>
                  <p>{Img.Name}</p>
                  <div className="LINK">
                    <a href={Img.ilink}><i class="bi bi-instagram"></i></a>
                    <a href={Img.llink}><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="Team Heading">
          <h3>Platform Leads</h3>
        </div>
        <div className="Plaform Div">
          {
            PlatformLeads.map((Img) => (
              <div class="Platfrom Img" key={Img.Title}>
                <img
                  src={Img.Lead}
                  alt="TeamLead"
                />
                <div
                  className="Overlay"
                >
                  <h6>{Img.Title}</h6>
                  <p>{Img.Name}</p>
                  <div className="LINK">
                    <a href={Img.ilink}><i class="bi bi-instagram"></i></a>
                    <a href={Img.llink}><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="Team Heading">
          <h3>Problem Designing Team</h3>
        </div>
        <div className="ProblemD Div">
          {
            PBTeam.map((Img) => (
              <div class="PBTeam Img" key={Img.Title}>
                <img
                  src={Img.Member}
                  alt="TeamLead"
                />
                <div
                  className="Overlay"
                >
                  <h6>{Img.Title}</h6>
                  <p>{Img.Name}</p>
                  <div className="LINK">
                    <a href={Img.ilink}><i class="bi bi-instagram"></i></a>
                    <a href={Img.llink}><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="Team Heading">
          <h3>Social Media Team</h3>
        </div>
        <div className="SM Div">
          {
            SMTeam.map((Img) => (
              <div class="SMTeam Img" key={Img.Title}>
                <img
                  src={Img.Member}
                  alt="TeamLead"
                />
                <div
                  className="Overlay"
                >
                  <h6>{Img.Title}</h6>
                  <p>{Img.Name}</p>
                  <div className="LINK">
                    <a href={Img.ilink}><i class="bi bi-instagram"></i></a>
                    <a href={Img.llink}><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>

            ))
          }
        </div>
        <div className="Team Heading">
          <h3>Junior Team</h3>
        </div>
        <div className="Team Heading mt">
          <h3>Organising Team</h3>
        </div>
        <div className="ProblemD Div">
          {
            OTJrTeam.map((Img) => (
              <div class="PBTeam Img" key={Img.Title}>
                <img
                  src={Img.Member}
                  alt="TeamLead"
                />
                <div
                  className="Overlay"
                >
                  <h6>{Img.Title}</h6>
                  <p>{Img.Name}</p>
                  <div className="LINK">
                    <a href={Img.ilink}><i class="bi bi-instagram"></i></a>
                    <a href={Img.llink}><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="Team Heading">
          <h3>Problem Designing Team</h3>
        </div>
        <div className="ProblemD Div">
          {
            PdJrTeam.map((Img) => (
              <div class="PBTeam Img" key={Img.Title}>
                <img
                  src={Img.Member}
                  alt="TeamLead"
                />
                <div
                  className="Overlay"
                >
                  <h6>{Img.Title}</h6>
                  <p>{Img.Name}</p>
                  <div className="LINK">
                    <a href={Img.ilink}><i class="bi bi-instagram"></i></a>
                    <a href={Img.llink}><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="Team Heading">
          <h3>Community Approach Team</h3>
        </div>
        <div className="ProblemD Div">
          {
            CAJrTeam.map((Img) => (
              <div class="PBTeam Img" key={Img.Title}>
                <img
                  src={Img.Member}
                  alt="TeamLead"
                />
                <div
                  className="Overlay"
                >
                  <h6>{Img.Title}</h6>
                  <p>{Img.Name}</p>
                  <div className="LINK">
                    <a href={Img.ilink}><i class="bi bi-instagram"></i></a>
                    <a href={Img.llink}><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="Team Heading">
          <h3>Social Media Team</h3>
        </div>
        <div className="ProblemD Div">
          {
            SmJrTeam.map((Img) => (
              <div class="PBTeam Img" key={Img.Title}>
                <img
                  src={Img.Member}
                  alt="TeamLead"
                />
                <div
                  className="Overlay"
                >
                  <h6>{Img.Title}</h6>
                  <p>{Img.Name}</p>
                  <div className="LINK">
                    <a href={Img.ilink}><i class="bi bi-instagram"></i></a>
                    <a href={Img.llink}><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Team
