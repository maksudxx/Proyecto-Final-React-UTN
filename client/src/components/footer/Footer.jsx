import React from "react";
import { Link as a } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineIe,
  AiOutlineCopyrightCircle,
  AiFillGithub,
} from "react-icons/ai";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerName}>
        <AiOutlineCopyrightCircle />
        <span>DESIGN | FACUNDO MAKSUD</span>
      </div>

      <div className={styles.containerIcons}>
        <a href="https://www.instagram.com/maksudcarp14/" target="_blank" className={styles.link}>
          {" "}
          <AiOutlineInstagram className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/facundo-maksud/" target="_blank" className={styles.link}>
          {" "}
          <AiOutlineLinkedin className={styles.icon} />
        </a>
        <a
          href="https://wa.me/+5493888603670/?text=Hola Facundo.!"
          target="_blank" className={styles.link}
        >
          {" "}
          <AiOutlineWhatsApp className={styles.icon} />
        </a>
        <a href="https://facundo-maksud.vercel.app/#/" target="_blank" className={styles.link}>
          <AiOutlineIe className={styles.icon} />
        </a>
        <a href="https://github.com/maksudxx" target="_blank" className={styles.link}>
          <AiFillGithub className={styles.icon} />
        </a>
      </div>
      <br />
    </div>
  );
};

export default Footer;
