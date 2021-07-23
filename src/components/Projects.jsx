import React from "react";
import styles from "../css/Project.module.css";
import html from "../Images/html30.png";
import css from "../Images/css30.png";
import react from "../Images/react30.png";
import redux from "../Images/redux30.png";
import material from "../Images/material30.png";
import node from "../Images/node30.png";
import mongo from "../Images/mongo30.png";
import socket from "../Images/socket.png";
import js from "../Images/js30.png";
import ss from "../Images/ss.jpg";
import milaap from "../Images/milaap.png";
import buffer from "../Images/buffer.png";
import chat from "../Images/chat.png";

function Projects() {
  return (
    <>
      <h1 className={styles.head}>Projects</h1>
      <div className={styles.main}>
        <div className={styles.card}>
          <div>
            <img width="100%" src={ss} alt="" />
          </div>
          <h3>Shopperstop Clone</h3>
          <br />
          <p className={styles.para}>
            Shoppersstop is an e-commerce website, provides outfits for men,
            women, kids and some beauty products.
          </p>
          <div className={styles.aDiv}>
            <div>
              <a
                target="_blank"
                href="https://github.com/Shubhamsharma585/ShoppersStop_Clone"
              >
                Github
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://shoppersstop-clone-sigma.vercel.app/"
              >
                Demo
              </a>
            </div>
          </div>
          <hr />
          <div className={styles.tech}>
            <div>
              <img src={react} alt="" />
            </div>
            <div>
              <img src={redux} alt="" />
            </div>
            <div>
              <img src={css} alt="" />
            </div>
            <div>
              <img src={node} alt="" />
            </div>
            <div>
              <img src={mongo} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img width="100%" src={milaap} alt="" />
          </div>
          <h3>Milaap Clone</h3>
          <br />
          <p className={styles.para}>
            Milaap helps needy people for mediacl emergencies and eduction.This
            is a crowd funding website.
          </p>
          <div className={styles.aDiv}>
            <div>
              <a
                target="_blank"
                href="https://github.com/tambegaurav/milaap-clone"
              >
                Github
              </a>
            </div>
            <div>
              <a target="_blank" href="https://milapp-clone.netlify.app">
                Demo
              </a>
            </div>
          </div>
          <hr />
          <div className={styles.tech}>
            <div>
              <img src={react} alt="" />
            </div>
            <div>
              <img src={redux} alt="" />
            </div>
            <div>
              <img src={css} alt="" />
            </div>
            <div>
              <img src={material} alt="" />
            </div>
            <div>
              <img src={html} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img width="100%" src={buffer} alt="" />
          </div>
          <h3>Buffer Clone</h3>
          <br />
          <p className={styles.para}>
            Buffer helps to maintain social media accounts of customers.
            Provides scheduled post.
          </p>
          <div className={styles.aDiv}>
            <div>
              <a
                target="_blank"
                href="https://github.com/AbhishekSardagi/Buffer"
              >
                Github
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/128YNOayKEyEM-JlTX02NwkDpjwwJAwY9/view?usp=sharing"
              >
                Demo
              </a>
            </div>
          </div>
          <hr />
          <div className={styles.tech}>
            <div>
              <img src={html} alt="" />
            </div>
            <div>
              <img src={js} alt="" />
            </div>
            <div>
              <img src={css} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img width="100%" src={chat} alt="" />
          </div>
          <h3>Chat app</h3>
          <br />
          <p className={styles.para}>
            This chat app privdes real-time message sending and reciving in a
            room with a group of people.
          </p>
          <div className={styles.aDiv}>
            <div>
              <a target="_blank" href="https://github.com/manish7377/chat-app">
                Github
              </a>
            </div>
            <div>
              <a target="_blank" href="https://chat-app-by-manish.netlify.app">
                Demo
              </a>
            </div>
          </div>
          <hr />
          <div className={styles.tech}>
            <div>
              <img src={react} alt="" />
            </div>
            <div>
              <img src={html} alt="" />
            </div>
            <div>
              <img src={css} alt="" />
            </div>
            <div>
              <img src={socket} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
