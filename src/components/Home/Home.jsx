import React from 'react'
import './Home.css'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

import Education from './../../data/Education.json'
import Certificate from './../../data/Certificate.json'
import Experience from './../../data/Experience.json'
import Skill from './../../data/Skill.json'
import Project from './../../data/Project.json'
import Contact from './../../data/Contact.json'
const Home = () => {
    return (
        <div className='home' >
            <NavBar />

            <div className="Hero">
                <div className='HeroTitle' >
                    <h1>Hello , <br /> <span>I'm Yazan</span></h1> <br />
                    <h1>Full Stack Developer | Crafting Innovative Solutions for Seamless User Experiences</h1>
                </div>
                <img className='Pic' src="/images/yazan.png" alt="" />
            </div>

            <section className='About' id='About' >
                <p className='AboutTitle' >
                    Hello! I'm Yazan Khairi Al-anam, a recent graduate eager to kickstart my journey as a full stack developer. Armed with a informatic engineering From Ittihad Private University, I have a strong foundation in both front-end and back-end development. I've gained proficiency in HTML, CSS, JavaScript, Library Like React  And Know Well Bootstrap And GIT/github. alongside backend technologies such as PHP And MySQL .
                    I delved into projects using Laravel to develop scalable web applications, honing my skills in database management, API integrations, and server-side logic. I am passionate about creating user-friendly interfaces and leveraging backend technologies to deliver robust solutions. I know how to design using Photoshop and Illustrator. I'm excited about the prospect of contributing my skills and learning from
                    experienced professionals in the field. Let's connect to explore how my dedication and skills can benefit your team..!!
                </p>
            </section>
            <section className='Education' id='Education' >
                <h2 className='titleEducation' >Education</h2>
                {Education.map((element, index) => {
                    return (
                        <div key={index} >
                            <b>{element.duration}</b>
                            <h5>{element.name} / {element.university}</h5>

                        </div>
                    )
                })}
            </section>
            <section className='Certificate' id='Certificate' >
                <h2 className='titleCertificate' > Certificate</h2>
                {Certificate.map((element, index) => {
                    return (
                        <div key={index}>
                            <p  >
                                <b>{element.name}  </b>
                                <span>  /  {element.institute}</span>
                                <i> - {element.duration}</i>
                            </p>
                            <hr />
                        </div>
                    )
                })}
            </section>
            <section className='Experience' id='Experiences' >
                <h2 className='titleExperiences' >Experiences</h2>
                {Experience.map((element, index) => {
                    return (
                        <div key={index}>
                            <p  >
                                <b>{element.name}  </b>
                                <span>  /  {element.company}</span>
                                <i> - {element.duration}</i>
                            </p>
                            <hr />
                        </div>
                    )
                })}
            </section>
            <section className='Skill' id='Skill'  >
                <h2 className='titleSkil' >Skills</h2>
                <div className='SkillContainer' >
                    {Skill.map((element, index) => {
                        return (
                            <b className='SkillName' key={index} >{element.name}</b>
                        )
                    })}
                </div>
            </section>
            <h2 className='titleProject' >Projects</h2>
            <section className='Project' id='Projects' >

                {Project.map((element, index) => {
                    return (
                        <div key={index} >
                            <div className="card ProjectContainer ">
                                <img src={`/images/${element.image}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{element.name}</h5>
                                    <p className="card-text">{element.about}</p>
                                    <a className="btn btn-primary" href={`${element.url}`} target="_blank">Visit</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
            <section className='Social' id='Contact' >
                <h2 className='titleSocial' >Contact</h2>
                <div className="contactContainer">

                    {Contact.map((element, index) => {
                        return (
                            <div key={index} >
                                <a target="_blank" href={element.url}>
                                    <img src={`/images/${element.image}`} alt="" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
            <Footer />
            
        </div>
    )
}

export default Home