import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import arcade from "../../assets/arcade.png";
import csgo from "../../assets/CSGO.png";
import fornite from "../../assets/Fornite.png";
import minecraft from "../../assets/Minecraft.png";
import pacman from "../../assets/pacman.png";
import rocket from "../../assets/RocketLeague.png";
import steam from "../../assets/steam.png";
import mario from "../../assets/mario.png";


const Landing = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>BIENVENIDOS VIDEOGAMES API</p>
      <div className={styles.buttonStart}>
        <Link to="/videogames" className={styles.link}>
          <h1 className={styles.textButton}>PRESS START</h1>
        </Link>
        
      </div>

      <div className={styles.containerImages}>
        <img src={minecraft} alt="minecraft" className={styles.images} />
        <img src={pacman} alt="pacman" className={styles.images} />
        <img src={rocket} alt="rocket" className={styles.images} />
        <img src={steam} alt="steam" className={styles.images} />
        <img src={mario} alt="mario" className={styles.images} />
        <img src={arcade} alt="arcade" className={styles.images} />
        <img src={csgo} alt="csgo" className={styles.images} />
        <img src={fornite} alt="fornite" className={styles.images} />
      </div>
    </div>
  );
};

export default Landing;
