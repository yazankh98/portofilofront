import React, { useContext } from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Education from "./../../data/Education.json";
import Certificate from "./../../data/Certificate.json";
import Experience from "./../../data/Experience.json";
import Skill from "./../../data/Skill.json";
import softskils from "./../../data/softskils.json";
import Project from "./../../data/Project.json";
import Contact from "./../../data/Contact.json";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={`home ${theme === "dark" ? "dark" : "light"}`}>
      <NavBar />

      <main>
        <section className="Hero">
          <div className="HeroTitle">
            <span className="heroBadge">Available for full-stack work</span>

            <h1>
              Hi, I'm <span>Yazan Khairi</span>
            </h1>

            <h2>
              Full-Stack Developer building clean, scalable web applications
              with React and Laravel.
            </h2>

            <p>
              I create modern front-end interfaces, reliable back-end systems,
              dashboards, API integrations, and database-driven applications
              with a focus on performance, maintainability, and real business
              value.
            </p>

            <div className="heroActions">
              <a className="primaryAction" href="#Projects">
                View Projects
              </a>
              <a className="secondaryAction" href="#Contact">
                Contact Me
              </a>
            </div>

            <div className="heroStats">
              <div>
                <strong>10+</strong>
                <small>Projects</small>
              </div>
              <div>
                <strong>React</strong>
                <small>Frontend</small>
              </div>
              <div>
                <strong>Laravel</strong>
                <small>Backend</small>
              </div>
            </div>
          </div>

          <div className="heroVisual">
            <img className="Pic" src="/public/images/yazan.jpg" alt="Yazan Khairi" />

            <div className="codeCard">
              <div className="codeDots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>
                <span>const</span> developer = &#123;
              </p>
              <p>&nbsp;&nbsp;name: "Yazan",</p>
              <p>&nbsp;&nbsp;stack: ["React", "Laravel , NextJs"],</p>
              <p>&nbsp;&nbsp;focus: "Scalable Apps"</p>
              <p>&#125;</p>
            </div>
          </div>
        </section>

        <section className="About sectionBlock" id="About">
          <div className="sectionHeader">
            <span>About</span>
            <h2>Developer with a product mindset</h2>
          </div>

          <p className="AboutTitle">
            I am a Full Stack Developer with a Bachelor's degree in Informatics
            Engineering. I have experience in front-end development using React,
            Next.js, and TypeScript, as well as back-end development with PHP
            and Laravel. I am proficient in database management with MySQL,
            MongoDB, and PostgreSQL. I have experience with REST API
            integration, server-side development, and application optimization.
            I also have a solid background in graphic design, with proficiency
            in Adobe Photoshop and Illustrator.
          </p>
        </section>

        <section className="Education sectionBlock" id="Education">
          <div className="sectionHeader">
            <span>Education</span>
            <h2>Academic background</h2>
          </div>

          <div className="timelineList">
            {Education.map((element, index) => (
              <article className="timelineItem" key={index}>
                <small>{element.duration}</small>
                <h3>{element.name}</h3>
                <p>{element.university}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="Certificate sectionBlock" id="Certificate">
          <div className="sectionHeader">
            <span>Certificates</span>
            <h2>Training and certifications</h2>
          </div>

          <div className="timelineList">
            {Certificate.map((element, index) => (
              <article className="timelineItem" key={index}>
                <small>{element.duration}</small>
                <h3>{element.name}</h3>
                <p>{element.institute}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="Experience sectionBlock" id="Experiences">
          <div className="sectionHeader">
            <span>Experience</span>
            <h2>Work experience</h2>
          </div>

          <div className="timelineList">
            {Experience.map((element, index) => (
              <article className="timelineItem" key={index}>
                <small>{element.duration}</small>
                <h3>{element.name}</h3>
                <p>{element.company}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="Skill sectionBlock" id="Skill">
          <div className="sectionHeader">
            <span>Skills</span>
            <h2>Technical stack</h2>
          </div>

          <div className="SkillContainer">
            {Skill.map((element, index) => (
              <b className="SkillName" key={index}>
                {element.name}
              </b>
            ))}
          </div>
        </section>

        <section className="Skill sectionBlock">
          <div className="sectionHeader">
            <span>Soft Skills</span>
            <h2>How I work</h2>
          </div>

          <div className="SkillContainer">
            {softskils.map((element, index) => (
              <b className="SkillName soft" key={index}>
                {element.name}
              </b>
            ))}
          </div>
        </section>

        <section className="ProjectsSection sectionBlock" id="Projects">
          <div className="sectionHeader">
            <span>Projects</span>
            <h2>Selected work</h2>
          </div>

          <div className="Project">
            {Project.map((element, index) => (
              <article className="ProjectContainer" key={index}>
                <img src={`/images/${element.image}`} alt={element.name} />

                <div className="projectBody">
                  <h3>{element.name}</h3>
                  <p>{element.about}</p>

                  <a href={element.url} target="_blank" rel="noreferrer">
                    Visit Project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="Social sectionBlock" id="Contact">
          <div className="sectionHeader">
            <span>Contact</span>
            <h2>Let's build something useful</h2>
          </div>

          <div className="contactContainer">
            {Contact.map((element, index) => (
              <a
                className="contactLink"
                key={index}
                target="_blank"
                rel="noreferrer"
                href={element.url}
              >
                <img src={`/images/${element.image}`} alt="Contact link" />
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
