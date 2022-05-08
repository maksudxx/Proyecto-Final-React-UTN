import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"

const Card = ({
  id,
  idApi,
  name,
  image,
  rating,
  genres,
  platforms,
  release,
}) => {

  console.log(genres)
  return (
    <li >
      <img src={image} alt={name} width={250} />
      <div>
        {platforms?.map((p) => (
          <p>{p.platform_name}</p>
        ))}
      </div>
      <h3>{name}</h3>
      <p>{release}</p>
      <div>
        {genres?.map((g) => (
          <p>{g.genre_name}</p>
        ))}
      </div>
      <Link to={`/videogames/${id}`}>Ver mas...</Link>
    </li>
  );
};

export default Card;
