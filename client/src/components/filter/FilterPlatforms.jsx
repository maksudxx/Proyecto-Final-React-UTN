import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

const FilterPlatforms = ({props}) => {
  const [platform, setPlatform] = useState('')
  const handleChangePlatform = (e)=>{
    setPlatform(e.target.value)
    //distpatch
  }
  return (
    <select value={platform} onChange={handleChangePlatform}>
    {props?.map((p) => (
      <option value={p.platform_name} key={p.platform_id}>
        {p.platform_name}
      </option>
    ))}
  </select>
  )
}

export default FilterPlatforms