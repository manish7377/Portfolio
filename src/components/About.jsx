import React from "react";
import styles from "../css/About.module.css";
import profile from "../Images/photo_proff.png";
import github from "../Images/github.png";
import location from "../Images/location.png";
import phone from "../Images/phone.png";
import mail from "../Images/mail.png";
import linkedin from "../Images/linkedin.png";

function About() {
  return (
    <>
      <div className={styles.top}>Manish Kumar Nayak &#9997;</div>
      <div className={styles.about}>
        <div className={styles.about_content}>
          <div className={styles.about_content_left}>
            <div className={styles.profile}>
              <img width="100%" src={profile} alt="img" />
            </div>
            <div className={styles.linksDiv}>
              <div>
                <a target="_blank" rel="noreferrer" href="mailto:manishnayak.dev@gmail.com">
                  <img src={mail} alt="img" />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href="tel:+917008939103">
                  <img src={phone} alt="img" />
                </a>
              </div>
              <div>
                <a
                  target="_blank" rel="noreferrer"
                  href="https://www.google.co.in/maps/place/Balasore,+Odisha/@20.9516658,85.0985236,6z/data=!4m5!3m4!1s0x3a1c5f84f036e035:0x5cd332bf1c70157c!8m2!3d21.4939636!4d86.9128418"
                >
                  <img src={location} alt="img" />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href="https://github.com/manish7377">
                  <img src={github} alt="img" />
                </a>
              </div>
              <div>
                <a
                  target="_blank" rel="noreferrer"
                  href="https://www.linkedin.com/in/manish-kumar-nayak-154ab3159/"
                >
                  <img src={linkedin} alt="img" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.about_content_right}>
            <h1>
              Hi 👋{" "}
              <p className={styles.name}>
                {" "}
                I am <span>Manish</span>
              </p>
            </h1>
            <br />
            <h4 className={styles.role}>FULL STACK WEB DEVELOPER</h4>
            <p className={styles.content}>
              Aspiring full-stack web developer with efficient problem-solving
              skills and the ability to work in a team. Having good knowledge of
              javascript, data structures, and algorithms. Looking forward to
              work on a challenging project.
            </p>
            <div className={styles.resume}>
              <a
                target="_blank" rel="noreferrer"
                href="https://drive.google.com/file/d/1Zh4iv76HGCMzdxGalS43O14F7VEhtVLb/view?usp=sharing"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
