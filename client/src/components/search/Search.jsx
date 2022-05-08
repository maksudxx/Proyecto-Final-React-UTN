import React from 'react';
import { FcSearch } from "react-icons/fc";
import { useState, useEffect } from "react";
import styles from './Search.module.css'

const Search = () => {
  return (
    <form className={styles.searchContainer} >
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar"
        //   value={searchText}
        //   onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FcSearch size={20} />
        </button>
      </div>
    </form>
  )
}

export default Search