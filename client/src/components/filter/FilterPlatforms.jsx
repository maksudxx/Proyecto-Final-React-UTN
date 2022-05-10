import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styles from './Filter.module.css'

const FilterPlatforms = ({props}) => {
  const [platform, setPlatform] = useState('')
  const handleChangePlatform = (e)=>{
    setPlatform(e.target.value)
    //distpatch
  }
  return (
    <select value={platform} onChange={handleChangePlatform} className={styles.select}>
      <option value="all">Todas las plataformas</option>
    {props?.map((p) => (
      <option value={p.platform_name} key={p.platform_id}>
        {p.platform_name}
      </option>
    ))}
  </select>
  )
}

export default FilterPlatforms