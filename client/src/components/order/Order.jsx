import React, { useState, useEffect } from "react";
import styles from "./Order.module.css"

const Order = () => {
const [order, setOrder] = useState("asc");
const handleChange = (e) => {
    setOrder(e.target.value);
   // dispatch(getObraArtesLikes(e.target.value))
  };
  return (
    <select
    value={order}
    className={styles.select}
    onChange={handleChange}
  >
    <option value={"ASC"}>A-Z</option>
    <option value={"DESC"}>Z-A</option>
  </select>
  )
}

export default Order