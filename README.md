
# Task Manager Frontend

Task Manager es una aplicación para gestionar tareas, donde puedes agregar, editar, eliminar y marcar como completadas las tareas. Este repositorio contiene el código del frontend, desarrollado en React.

## Enlace a la aplicación desplegada

Puedes acceder a la aplicación desplegada en el siguiente enlace:

[Task Manager - Aplicación desplegada](https://task-manager-front-ecru.vercel.app/)

## Pasos para instalar y ejecutar el proyecto localmente

Sigue estos pasos para ejecutar la aplicación en tu máquina local:

1. **Clonar el repositorio**

   Si aún no lo has hecho, clona el repositorio en tu máquina:

   ```bash
   git clone https://github.com/tu-usuario/task-manager-front.git
   ```

2. **Instalar las dependencias**

   Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```bash
   cd task-manager-front
   npm install
   ```

3. **Ejecutar el proyecto localmente**

   Para ejecutar el proyecto en tu máquina local, utiliza el siguiente comando:

   ```bash
   npm start
   ```

   Esto abrirá la aplicación en tu navegador por defecto en la siguiente URL:

   ```
   http://localhost:3000
   ```

## Detalles de configuración

1. **Variables de entorno**

   Si necesitas configurar variables de entorno específicas, puedes crear un archivo `.env` en la raíz del proyecto. Ejemplo de archivo `.env`:

   ```plaintext
   REACT_APP_API_URL=https://api.tu-servidor.com
   ```

   Asegúrate de reiniciar el servidor de desarrollo (`npm start`) después de agregar o modificar las variables de entorno.

2. **Dependencias importantes**

   El proyecto usa las siguientes tecnologías y dependencias:

   - **React**: Librería de JavaScript para construir la interfaz de usuario.
   - **Tailwind CSS**: Framework de CSS para diseño y estilo de la interfaz.
   - **react-hot-toast**: Para mostrar notificaciones de forma interactiva.
   - **React Context API**: Para el manejo del estado global de las tareas.

## Estructura del proyecto

- `src/`: Contiene todos los archivos fuente de la aplicación.
  - `components/`: Componentes reutilizables de la interfaz de usuario.
  - `context/`: Contexto de React para manejar el estado de las tareas.
  - `pages/`: Páginas principales de la aplicación.
  - `App.js`: Componente principal de la aplicación.
  - `index.js`: Punto de entrada de la aplicación.

## Contribuciones

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva característica o corrección de errores (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz un commit de tus cambios (`git commit -am 'Añadir nueva característica'`).
4. Empuja tus cambios a tu fork (`git push origin feature/nueva-caracteristica`).
5. Crea un Pull Request para que tus cambios sean revisados e integrados al proyecto principal.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](./LICENSE) para más detalles.
