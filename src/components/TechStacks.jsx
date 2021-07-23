import React from "react";
import html from "../Images/html.png";
import css from "../Images/css.png";
import javascript from "../Images/javascript.png";
import react from "../Images/react.png";
import mongodb from "../Images/mongodb.png";
import express from "../Images/expressjs.png";
import nodejs from "../Images/nodejs.png";
import styledcomponents from "../Images/styledcomponents.png";
import git from "../Images/git.png";
import material from "../Images/material.png";
import postman from "../Images/postman.png";
import npm from "../Images/npm.png";
import frontend from "../Images/frontend.png";
import backend from "../Images/backend.png";
import ds from "../Images/ds.png";
import Algo from "../Images/Algo.png";
import styles from "../css/TechStacks.module.css";



function TechStacks() {
  return (
    <div className={styles.main}>
      <h1 className={styles.head}>Tech Stacks</h1>
      <div className={styles.skills}>
        <div>
          <img width="50%" src={html} alt="" />
          <div>HTML</div>
        </div>

        <div>
          <img width="50%" src={css} alt="" />
          <div>CSS</div>
        </div>

        <div>
          <img width="50%" src={javascript} alt="" />
          <div>JAVASCRIPT</div>
        </div>

        <div>
          <img width="50%" src={react} alt="" />
          <div>REACTJS</div>
        </div>

        <div>
          <img width="85%" src={express} alt="" />
          <div>EXPRESSJS</div>
        </div>

        <div>
          <img width="50%" src={mongodb} alt="" />
          <div>MONGODB</div>
        </div>

        <div>
          <img width="50%" src={nodejs} alt="" />
          <div>NODEJS</div>
        </div>
        <div>
          <img width="50%" src={styledcomponents} alt="" />
          <div>STYLED-COMPO</div>
        </div>

        <div>
          <img width="50%" src={git} alt="" />
          <div>GIT</div>
        </div>
        <div>
          <img width="50%" src={postman} alt="" />
          <div>POSTMAN</div>
        </div>
        <div>
          <img width="50%" src={npm} alt="" />
          <div>NPM</div>
        </div>
        <div>
          <img width="50%" src={material} alt="" />
          <div>MATERIALUI</div>
        </div>
      </div>

      <h1 className={styles.head}>Proficiencies</h1>
      <div className={styles.skills}>
        <div>
          <img width="50%" src={frontend} alt="" />
          <div>FRONT-END</div>
        </div>

        <div>
          <img width="50%" src={backend} alt="" />
          <div>BACKEND</div>
        </div>

        <div>
          <img width="50%" src={Algo} alt="" />
          <div>ALGORITHM</div>
        </div>

        <div>
          <img width="50%" src={ds} alt="" />
          <div>DATA STRUCTURE</div>
        </div>

      </div>


      
    </div>
  );
}

export default TechStacks;
