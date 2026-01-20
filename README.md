# 🎮 Videogames API — v1.0

Aplicación **Full Stack** desarrollada con fines educativos.  
La plataforma permite explorar una amplia biblioteca de videojuegos consumiendo la API de **RAWG.io**, y además posibilita que los usuarios registrados creen y gestionen sus propios videojuegos mediante una base de datos propia.

Este proyecto corresponde a la **Versión 1.0**, concebida como una base sólida y escalable.  
En futuras versiones se incorporarán **nuevas funcionalidades, mejoras de rendimiento y optimizaciones de UX/UI**.

---

## 📝 Descripción

El proyecto se caracteriza por:
- Interfaz moderna e intuitiva.
- Manejo de estado global sólido.
- **Diseño 100% Responsive**, adaptable a cualquier dispositivo.

---

## 🛠️ Tecnologías y Librerías

### 🔹 Frontend
- **React** & **Redux** — Manejo de estado global.
- **CSS Modules** — Estilos encapsulados para evitar colisiones.
- **Material UI** — Grid System para el layout principal.
- **React Paginate** — Navegación eficiente entre grandes volúmenes de datos.
- **Responsive Design** — Media Queries y unidades dinámicas (`clamp`, `vw`, `rem`).

### 🔹 Backend
- **Node.js** & **Express**.
- **Sequelize ORM** & **PostgreSQL** — Persistencia de datos.
- **JWT (JSON Web Token)** — Autenticación segura.
- **Cloudinary** — Almacenamiento y gestión de imágenes en la nube.

---
## 🚀 Instalación

1. Clona el repositorio.
2. Es necesario realizar la instalación de dependencias en ambas carpetas:
   ```bash
   # En la carpeta api
   cd api && npm install
   
   # En la carpeta client
   cd ../client && npm install

## 🗄️ Carpeta API (Backend)
### ⚙️ Requisitos
- Base de datos **PostgreSQL** configurada.### Variables de entorno de api 

### 🔐 Variables de Entorno
```env
DB_USER=TU_USUARIO
DB_PASSWORD=TU_PASSWORD
DB_HOST=localhost
DATABASE=videogames
PORT=3001
API_KEY=TU_API_KEY_RAWG
JWT_SECRET=TU_SECRET_JWT
```
### 📡 Endpoints
### 🎮 Videogame
    GET /videogames : Obtiene 100 juegos de la API/BD.
    GET /videogames?name= : Búsqueda por nombre.
    GET /videogame/:videogame_id : Detalle de un juego específico.
    POST /videogame : Crea un nuevo juego en la BD. 
    PUT /videogame/:videogame_id : modificar un juego ya existente en la BD. 
    DELETE /videogame/:videogame_id : Elimina un juego de la BD.
### 🏷️ Genre
    GET /genres : Lista completa de géneros.

### 🖥️ Platform
    GET /platforms : Lista completa de plataformas disponibles.

### 👤 User
    GET /user : trae la información de un usuario en la BD.

### 🔐 Autenticación (JWT)
    POST /register : Registro de nuevos usuarios.
    POST /login : Inicio de sesión y generación de token.
    GET /is-verify : Validación de token JWT para persistencia de sesión.

### 🏷️ Tag
    GET /tags : trae la informacion de todos los tags que poseen los juegos.

## 🖥️ Carpeta Client (Frontend)

La interfaz de usuario ha sido optimizada para ofrecer una experiencia fluida en cualquier dispositivo.

### 📂 Secciones y Rutas Principales

#### `/` — Explorador de Juegos
- **Lista Paginada**: Visualización organizada de juegos con navegación optimizada.
- **Búsqueda Dinámica**: Barra de búsqueda funcional que filtra resultados por nombre.
- **Filtros Avanzados**: Herramientas para segmentar por **Género** y **Plataforma**.
- **UX Adaptativo**: Incluye un `MenuAside` (barra lateral) que se ajusta o colapsa según la resolución de pantalla.

#### `/videogame/:id` — Detalle
- Vista técnica con la información completa del título seleccionado.

#### `/newGame` — Creación de Contenido
- Formulario controlado para registrar nuevos videojuegos en la base de datos.
- **Restricción**: Requiere autenticación de usuario (**Login**).

#### `/about` — Acerca de
- Explicación técnica del proyecto, stack tecnológico y metodologías utilizadas.

#### `/login` & `/register` — Seguridad
- Módulos de acceso y creación de cuentas con validación y feedback visual.

## 📝 Comentarios Finales

Este proyecto fue desarrollado por **Facundo Maksud**.  
Se puso especial énfasis en la **refactorización del código** para lograr componentes limpios y una **interfaz de usuario totalmente responsive**, adaptada a cualquier dispositivo móvil.

Link del deploy: https://videogames-brown.vercel.app/

Cualquier comentario o **feedback** será bien recibido.  
¡Muchas gracias! 🙌


