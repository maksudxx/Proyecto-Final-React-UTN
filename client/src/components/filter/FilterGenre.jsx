import React,{ useState} from "react";
import{useDispatch} from "react-redux";

const FilterGenre = ({ props }) => {
  const [genre, setGenre] = useState('')
  const handleChangeGenre = (e)=>{
    setGenre(e.target.value)
    //distpatch
  }
  return (
    <select value={genre} onChange={handleChangeGenre}>
      {props?.map((g) => (
        <option value={g.genre_name} key={g.genre_id}>
          {g.genre_name}
        </option>
      ))}
    </select>
  );
};

export default FilterGenre;
