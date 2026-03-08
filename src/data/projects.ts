import type { Project } from "../types/projects";
import todosApp from '../assets/images/todosapp.png';
import galleryApp from '../assets/images/galleryapp.png';
import contactList from '../assets/images/contactlist.png';
import extmanager from '../assets/images/extmanager.png';

export const  projects: Project[] =  [
    {
        id: 1,
        title: "TodosApp",
        image: todosApp,
        description: "Aplicación web de gestión de tareas desarrollada con React, enfocada en la implementación de operaciones CRUD, manejo de estado con Hooks y diseño responsive",
        codeLink: "https://github.com/rusbell-24/TodosApp",
        pageLink: "https://rusbell-24.github.io/TodosApp/"
    },
    {
        id: 2,
        title: "Galeria de imagenes",
        image: galleryApp,
        description: "La presente es una Progressive Web Apps(PWA) de galeria de imagenes que cuenta con algunas funciones, tales como: la busqueda de imagenes de forma aleatorio o a traves de alguna palabra clave.",
        codeLink: "https://github.com/rusbell-24/Gallery-App_PWA",
        pageLink: "https://galeria-de-imagenes-rusbell-react.netlify.app/"
    },
    {
        id: 3,
        title: "Agenda de contactos",
        image: contactList,
        description: "descripcion 3",
        codeLink: "https://github.com/rusbell-24/Agenda-Contactos_REACT-PWA",
        pageLink: "https://agenda-contactos-react-pwa-rusbell.netlify.app/"
    },
    {
        id: 4,
        title: "ExtManager",
        image: extmanager,
        description: "Aplicación de gestión de extensiones construida con React y TypeScript. Permite activar, desactivar, eliminar y filtrar extensiones con soporte de tema claro y oscuro.",
        codeLink: "https://github.com/rusbell-24/ExtManager",
        pageLink: "https://rusbell-24.github.io/ExtManager/"
    }
]