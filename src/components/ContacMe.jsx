import React from "react";
import styles from "../css/Contact.module.css";
//import stats1 from "../Images/stats1.png";
//import stats2 from "../Images/stats2.png";
import stats3_1 from "../Images/stats3.1.png";
import stats3_2 from "../Images/stats3.2.png";
import github from "../Images/github.png";
import location from "../Images/location.png";
import phone from "../Images/phone.png";
import mail from "../Images/mail.png";
import linkedin from "../Images/linkedin.png";
//import GitHubCalendar from "react-github-calendar"

function ContacMe() {
  return (
    <div className={styles.contactMain}>
      <div className={styles.statsDiv}>
        <div>
          <img width="100%" src="https://camo.githubusercontent.com/e3c712833ca826cdb0d22e1ccd9804097a0761690763c02ffbe2671d8ed08319/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6d616e697368373337372673686f775f69636f6e733d74727565266c6f63616c653d656e267468656d653d68696768636f6e7472617374" alt="" />
        </div>
        <div>
          <img width="100%" src="https://camo.githubusercontent.com/6825031fbe59f5501ab41bd7445d533ae0084cc7656748b4a5958fa8ff2afa34/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d6d616e69736837333737267468656d653d68696768636f6e7472617374" alt="" />
         
        </div>
      </div>
      <div className={styles.statsDiv}>
        <img className={styles.visible1} src={stats3_1} alt="" />
        <img className={styles.visible2} src={stats3_2} alt="" />
      </div>
      <div className={styles.div}>
        <div className={styles.contact}>
          <h2 className={styles.head}>Contact Me</h2>
          <p>
            I am available in all the below social networks. You can ping me if
            you need any help regarding react, redux, mongoDB, express, HTML,
            CSS and ES6. I will be happy to help you.
          </p>
        </div>
        <hr />
        <div className={styles.linkDiv}>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:manishnayak.dev@gmail.com"
          >
            <img width="20px" height="20px" src={mail} alt="" />{" "}
            <span>manishnayak.dev@gmail.com</span>
          </a>
          <a target="_blank" rel="noreferrer" href="tel:+917008939103">
            <img width="20px" height="20px" src={phone} alt="" />{" "}
            <span>+917008939103</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.co.in/maps/place/Balasore,+Odisha/@20.9516658,85.0985236,6z/data=!4m5!3m4!1s0x3a1c5f84f036e035:0x5cd332bf1c70157c!8m2!3d21.4939636!4d86.9128418"
          >
            <img width="20px" height="20px" src={location} alt="" />{" "}
            <span>Odisha,India</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/manish7377"
          >
            <img width="20px" height="20px" src={github} alt="" />{" "}
            <span>Github</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/manish-kumar-nayak-154ab3159/"
          >
            <img width="20px" height="20px" src={linkedin} alt="" />{" "}
            <span>Linkedin</span>
          </a>
        </div>
        <div>Designed by &#128151;Manish</div>
      </div>
    </div>
  );
}

export default ContacMe;
