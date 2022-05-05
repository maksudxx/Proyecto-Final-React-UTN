import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link to='/dashboard' className={styles.link}>Lista de juegos</Link>
        <Link to='/newGame' className={styles.link}>Agregar un juego</Link>
        <Link to='/about' className={styles.link}>Acerca de</Link>
        <Link to='/login' className={styles.link}>Login</Link>
    </div>
  )
}
