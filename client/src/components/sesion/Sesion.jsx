import React,{ useState, useEffect} from 'react'
import styles from './Sesion.module.css'

const Sesion = ({setAuth, isAuthenticated}) => {
    const [name, setName] = useState("");
    async function getName() {
      try {
        const response = await fetch("http://localhost:3001/user", {
          method: "GET",
          headers: { token: localStorage.token },
        });
        const parseRes = await response.json();
        setName(parseRes.user_name);
      } catch (error) {
        console.error(error.message);
      }
    }
    useEffect(() => {
      getName();
    }, []);
  
    const logout = (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      setAuth(false);
    };
  return (
      
    <div>
        {isAuthenticated === true ? (
        <span className={styles.containerLogin}>
          <span>Bienvenido {name}</span>
          <button onClick={logout} className={styles.buttonLogout}>
            Cerrar sesion
          </button>
        </span>
      ) : null}
    </div>
  )
}

export default Sesion