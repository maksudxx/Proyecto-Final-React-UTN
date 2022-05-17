import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export const Navbar = ({isAuthenticated}) => {
  return (
    <div className={styles.container}>
       <NavLink to='/' className={styles.link}>Inicio</NavLink>
        <NavLink to='/videogames' className={styles.link}>Lista de juegos</NavLink>
        {isAuthenticated === true ? (<NavLink to='/newGame' className={styles.link}>Agregar un juego</NavLink>): null}
        <NavLink to='/about' className={styles.link}>Acerca de</NavLink>
        {isAuthenticated === false ? (<NavLink to='/login' className={styles.link}>Iniciar Sesion</NavLink>) : null}
    </div>
  )
}
