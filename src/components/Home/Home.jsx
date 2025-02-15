import React from 'react'
import './Home.css'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Education from './../../data/Education.json'
import Certificate from './../../data/Certificate.json'
import Experience from './../../data/Experience.json'
import Skill from './../../data/Skill.json'
import softskils from './../../data/softskils.json'
import Project from './../../data/Project.json'
import Contact from './../../data/Contact.json'
const Home = () => {
    return (
        <div className='home' >
            <NavBar />

            <div className="Hero">
                <div className='HeroTitle' >
                    <h1>Hello , <br /> <span>I'm Yazan</span></h1> <br />
                    <h1>Full-Stack Developer | React.js & Laravel & Specialist | Crafting Scalable Solutions</h1>
                    {/* <h4>Dubai residence visa</h4> */}
                </div>
                <img className='Pic' src="/images/yazan.png" alt="" />
            </div>

            <section className='About' id='About' >
                <p className='AboutTitle' >
                    I am a dedicated full-stack developer with a degree in Informatics Engineering from
                    Ittihad Private University. I have a strong foundation in both front-end and back
                    end development, with proficiency in HTML, CSS, JavaScript, and libraries like
                    React and Next.js. I am well-versed in tools such as Bootstrap and Git/GitHub.
                    On the backend, I specialize in PHP and MySQL, with experience developing
                    scalable web applications using Laravel. I also have expertise in modern
                    technologies like MongoDB, PostgreSQL, and Prisma for efficient database
                    management. My skills include API integrations, server-side logic, and building
                    high-performance applications. Additionally, I have a strong background in graphic
                    design, proficient in Photoshop and Illustrator.
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
                <h2 className='titleSkil' >Technical Skills</h2>
                <div className='SkillContainer' >
                    {Skill.map((element, index) => {
                        return (
                            <b className='SkillName' key={index} >{element.name}</b>
                        )
                    })}
                </div>
            </section>
            <section className='Skill' id='Skill'  >
                <h2 className='titleSkil' > Soft Skills</h2>
                <div className='SkillContainer' >
                    {softskils.map((element, index) => {
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
                <marquee direction="left" scrollamount="10">
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
                </marquee>
            </section>
            <Footer />

        </div>
    )
}

export default Home