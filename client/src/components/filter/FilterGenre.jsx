import React,{ useState} from "react";
import{useDispatch} from "react-redux";
import styles from './Filter.module.css'

const FilterGenre = ({ props }) => {
  const [genre, setGenre] = useState('')
  const handleChangeGenre = (e)=>{
    setGenre(e.target.value)
    //distpatch
  }
  return (
    <select value={genre} onChange={handleChangeGenre} className={styles.select}>
      <option value="all">Todos los generos</option>
      {props?.map((g) => (
        <option value={g.genre_name} key={g.genre_id}  >
          {g.genre_name} 
        </option>
      ))}
    </select>
  );
};

export default FilterGenre;
