import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Videogames.module.css";
import {getVideogames} from '../../redux/actions/videogameActions'
import Card from "../../components/card/Card"

const Videogames = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogame.videogames)
  useEffect(() => {
      dispatch(getVideogames());
  }, [dispatch]);

  console.log(videogames)
  return (
    <div className={styles.container}>
      <Outlet />
      <ul>
          {videogames?.map((v, index)=>(
              <Card key={index} id={v.videogame_id} idApi={v.videogame_id_api} name={v.videogame_name} image={v.videogame_image} rating={v.videogame_rating} genres={v.genres} platforms={v.platforms} release={v.videogame_release_date} />
          ))}
      </ul>
      
    </div>
  );
};

export default Videogames;
