import React from "react";
import styles from "../css/Contact.module.css";
import stats1 from "../Images/stats1.png"; 
import stats2 from "../Images/stats2.png";
import stats3 from "../Images/stats3.png";
import github from "../Images/github.png";
import location from "../Images/location.png";
import phone from "../Images/phone.png";
import mail from "../Images/mail.png";
import linkedin from "../Images/linkedin.png";

function ContacMe() {
  return (
    <div className={styles.contactMain}>
      <div className={styles.statsDiv}>
        <div>
          <img width="100%" src={stats1} alt="" />
        </div>
        <div>
          <img width="100%" src={stats2} alt="" />
        </div>
      </div>
      <div className={styles.statsDiv}>
        <img width="80%" src={stats3} alt="" />
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
          <a target="_blank" href="mailto:manishnayakpro@gmail.com">
            <img src={mail} alt="" />
          </a>
          <a target="_blank" href="tel:+917008939103">
            <img src={phone} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.google.co.in/maps/place/Balasore,+Odisha/@20.9516658,85.0985236,6z/data=!4m5!3m4!1s0x3a1c5f84f036e035:0x5cd332bf1c70157c!8m2!3d21.4939636!4d86.9128418"
          >
            <img src={location} alt="" />
          </a>
          <a target="_blank" href="https://github.com/manish7377">
            <img src={github} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/manish-kumar-nayak-154ab3159/"
          >
            <img src={linkedin} alt="" />
          </a>
        </div>
        <div>Disigned by &#128151;Manish</div>
      </div>
    </div>
  );
}

export default ContacMe;
