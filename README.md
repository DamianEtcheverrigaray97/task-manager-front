
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
   git clone https://github.com/DamianEtcheverrigaray97/task-manager-front.git
   ```

2. **Instalar las dependencias**

   Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```bash
   cd task-manager-front
   bun install
   ```

3. **Ejecutar el proyecto localmente**

   Para ejecutar el proyecto en tu máquina local, utiliza el siguiente comando:

   ```bash
   bun run dev
   ```

   Esto abrirá la aplicación en tu navegador por defecto en la siguiente URL:

   ```
   http://localhost:5173
   ```

## Detalles de configuración

1. **Variables de entorno**

   El proyecto utiliza diferentes configuraciones dependiendo del entorno, debes asegurarte que la url sea la generada por el proyecto de backend, generalmente es por defecto localhost:5000:

   - Archivo `.env` (entorno local):

     ```plaintext
     VITE_API_URL=http://localhost:5000/api/
     ```

   - Archivo `.env.production` (entorno de producción, para deploy en Vercel):

     ```plaintext
     VITE_API_URL=https://task-manager-back-2yaa.onrender.com/api/
     ```

   Asegúrate de reiniciar el servidor de desarrollo (`npm start`) después de agregar o modificar las variables de entorno.

2. **Dependencias importantes**

   El proyecto usa las siguientes tecnologías y dependencias:

   - **React**: Librería de JavaScript para construir la interfaz de usuario.
   - **Tailwind CSS**: Framework de CSS para diseño y estilo de la interfaz.
   - **react-hot-toast**: Para mostrar notificaciones de forma interactiva.
   - **React Context API**: Para el manejo del estado global de las tareas.
   - **Axios**: Para realizar solicitudes HTTP a la API backend.

## Estructura del proyecto

La estructura del proyecto es la siguiente:

```
task-manager-front/
│
├── public/
│   ├── textures/
│   │   └── texture-background.jpg
│   │── favicon-32x32.png
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   └── TaskList/
│   │       ├── TaskList.tsx
│   │       └── TaskList.css
│   ├── context/
│   │   └── TaskContext.tsx
│   ├── modals/
│   │   ├── ConfirmDeleteModal.tsx
│   │   ├── TaskModal.tsx
│   │   └── TaskViewModal.tsx
│   ├── pages/
│   │   └── HomePage.tsx
│   ├── services/
│   │   └── taskService.ts
│   ├── utils/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .env
├── .env.production
├── package.json
├── README.md
└── tsconfig.json
```

### Descripción de carpetas

- **`components/`**: Contiene los componentes reutilizables de la interfaz de usuario, como `Header` y `TaskList`.
- **`context/`**: Maneja el estado global de la aplicación mediante el Context API.
- **`modals/`**: Contiene componentes modales, como formularios de confirmación y vistas de detalle.
- **`pages/`**: Contiene las páginas principales de la aplicación.
- **`services/`**: Define funciones para interactuar con la API backend usando Axios.

## Servicios disponibles

El archivo `taskService.ts` contiene funciones para interactuar con la API:

- `fetchTasks(completed?: boolean)`: Obtener todas las tareas (opcionalmente filtradas por estado de completado).
- `createTask(task: { title: string })`: Crear una nueva tarea.
- `updateTaskCompleted(id: string, updates: { completed: boolean })`: Actualizar el estado de completado de una tarea.
- `updateTask(id: string, updates: { title: string, description: string })`: Actualizar título y descripción de una tarea.
- `deleteTask(id: string)`: Eliminar una tarea.

