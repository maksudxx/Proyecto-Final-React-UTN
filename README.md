# Videogames API

## Proyecto Final curso de React-UTN

![](https://dana.org/wp-content/uploads/2019/11/videogames-boffey-nov-2019.jpg)


## Instalacion

    Una vez clonada la carpeta hacer 2 npm install (uno en carpeta api y otro en client)

## Carpeta API 
para poder hacer la instalacion tener una base de datos postgres
### Variables de entorno de api 

    DB_USER = TU_USUARIO
    DB_PASSWORD = TU_PASSWORD
    DB_HOST = localhost
    DATABASE = videogames
    PORT = 3001
    API_KEY = 51198d696f0f4a03aaa77936ccd81e51
    JWT_SECRET = f4cund0M4ksuD2021141192

### Endpoints
### Videogame
    GET /videogames : trae una lista cargada con 100 juegos desde raw.io y que anteriormente los almacena en la BD.
    GET /videogames?name= : /realiza la busqueda de juegos por nombre.
    GET /videogame/:videogame_id : accede a la informacion del juego. (GET)
    POST /videogame : puedes registar tu propio videojuego. 

### Genre
    GET /genres : Trae una lista con todos los generos de juegos.

### Platform
    GET /platforms : trae una lista cargada con todos las plataformas.

### User
    GET /user : trae la informacion del usuario una vez logueado.

### jwtAuth
    POST /register : aca realizamos el registro de nombre, email y password.
    POST /login : ruta en la cual iniciamos sesion con email y contraseña.
    GET /is-verify : nos devuelve un valor true o false el cual nos sirve para saber si el usuario esta logueado.

**Aclaracion:** en la carpeta hay 2 endpoints mas que no los estoy usando por el momento que son **PUT /videogame/:videogame_id** y **DELETE /videogame/:videogame_id**. estas rutas si funcionan pero no las aplique en este proyecto por el momento.

## Carpeta Client
    Una vez hecho la instalacion dentro de esta carpeta te encontraras con estas secciones
    '/' Landing page o pagina de inicio la cual te lleva a la siguiente ruta que es la lista de juegos.
    '/videogames' Vista la cual contiene la lista de juegos paginada, como asi tambien tiene 2 filtros (por genero y por categoria)
    '/videogame/:id' Vista que muestra la informacion detallada de un juego
    '/newGame' en esta seccion podemos crear o agregar un nuevo juego con la informacion que solicita la misma (para poder usar esa funcion debes estar logueado)
    '/about' vista la cual explica un poco de lo que va la pagina.
    '/login' vista para iniciar sesion.
    '/register' vista para poder registrarse.


## **Cualquier comentario o Feedback sera bien recibido. Muchas gracias**
