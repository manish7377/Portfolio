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
import styles from "../css/TechStacks.module.css";


function TechStacks() {
  return (
    <div className={styles.main}>
      <h1 className={styles.head}>Tech Stacks</h1>
      <div className={styles.skills}>
        <div>
          <img width="50%" src={html} alt="" />
        </div>

        <div>
          <img width="50%" src={css} alt="" />
        </div>

        <div>
          <img width="50%" src={javascript} alt="" />
        </div>

        <div>
          <img width="50%" src={react} alt="" />
        </div>

        <div>
          <img width="50%" src={express} alt="" />
        </div>

        <div>
          <img width="50%" src={mongodb} alt="" />
        </div>

        <div>
          <img width="50%" src={nodejs} alt="" />
        </div>
        <div>
          <img width="50%" src={styledcomponents} alt="" />
        </div>

        <div>
          <img width="50%" src={git} alt="" />
        </div>
        <div>
          <img width="50%" src={postman} alt="" />
        </div>
        <div>
          <img width="50%" src={npm} alt="" />
        </div>
        <div>
          <img width="50%" src={material} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TechStacks;
