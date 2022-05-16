import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { filterVideogamesPlatform } from '../../redux/actions/videogameActions'
import styles from './Filter.module.css'

const FilterPlatforms = ({props}) => {
  const [platform, setPlatform] = useState('');
  const dispatch = useDispatch();
  const handleChangePlatform = (e)=>{
    setPlatform(e.target.value)
    dispatch(filterVideogamesPlatform(e.target.value))
  }
  return (
    <select value={platform} onChange={handleChangePlatform} className={styles.select} name='platform'>
      <option>Todas las plataformas</option>
    {props?.map((p, index) => (
      <option key={index}>
        {p.platform_name}
      </option>
    ))}
  </select>
  )
}

export default FilterPlatforms