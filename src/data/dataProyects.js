import imgProject1 from '../assets/project-1-low.jpg';
import imgProject2 from '../assets/project-2-low.jpg';
import imgProject3 from '../assets/project-3-low.jpg';
import imgProject4 from '../assets/project-4-low.jpg';
import imgProject5 from '../assets/project-5-low.jpg';
import imgProject6 from '../assets/project-6-low.jpg';
import imgProject1High from '../assets/project-1.jpg';
import imgProject2High from '../assets/project-2.jpg';
import imgProject3High from '../assets/project-3.jpg';
import imgProject4High from '../assets/project-4.jpg';
import imgProject5High from '../assets/project-5.jpg';
import imgProject6High from '../assets/project-6.jpg';

import imgProject3Extra1 from '../assets/project-3-1.jpg';
import imgProject3Extra2 from '../assets/project-3-2.jpg';
import imgProject3Extra3 from '../assets/project-3-3.jpg';
import imgProject3Extra4 from '../assets/project-3-4.jpg';

export default [
    {
        id: 1,
        img: imgProject1,
        imgHigh: imgProject1High,
        title: 'ToDo React',
        description:
            'Web app de tareas. Donde puedes crear, eliminar y marcar como realizadas tareas',
        technologies: ['React', 'HTML', 'CSS'],
        repository: 'https://github.com/ivancard/todo-react',
        site: 'https://ivancard.github.io/todo-react/',
        parrafs: [],
        videoUrl: false,
        imgExtra: [],
    },
    {
        id: 2,
        img: imgProject2,
        imgHigh: imgProject2High,
        title: 'Administrador Veterinaria',
        description:
            'Web app que administra turnos de pacientes de un a veterinaria',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        repository: 'https://github.com/ivancard/administrador-citas',
        site: 'https://ivancard.github.io/administrador-citas/',
        parrafs: [],
        videoUrl: false,
        imgExtra: [],
    },
    {
        id: 3,
        img: imgProject3,
        imgHigh: imgProject3High,
        title: 'Silicon Travel',
        description:
            'Web app fullStack que administra las operaciones de una agencia de viajes. Tanto los productos, servicios y ventas como los empleados y clientes',
        technologies: [
            'Java',
            'JPA',
            'MySQL',
            'JSP',
            'JavaScript',
            'HTML',
            'CSS',
        ],
        repository: 'https://github.com/ivancard/AgenciaTurismoTPOFinal',
        site: '',
        parrafs: [
            'Front-end desarrollado en HTML, CSS y JavaScript. El back-end fue desarrollado en Java, usando Java JPA y MySQL para la persistencia de datos y Java JSP para el manejo del front-end.',
            'Comencé diseñando el logo el interfaz de usuario en Adobe XD.',
            'Cuenta con un Login de empleados.',
            'Visualización de los datos almacenados.',
            'Y gráficos estadísticos.',
        ],
        videoUrl: 'https://www.youtube.com/watch?v=qihevLQWSZk',
        imgExtra: [
            imgProject3Extra1,
            imgProject3Extra2,
            imgProject3Extra3,
            imgProject3Extra4,
        ],
    },
    {
        id: 4,
        img: imgProject4,
        imgHigh: imgProject4High,
        title: 'Gif Expert App',
        description: 'Web app que busca gifs desde la API de gihpy',
        technologies: ['React', 'HTML', 'CSS'],
        repository: 'https://github.com/ivancard/gifexpert',
        site: 'https://ivancard.github.io/gifexpert/',
        parrafs: [],
        videoUrl: false,
        imgExtra: [],
    },
    {
        id: 5,
        img: imgProject5,
        imgHigh: imgProject5High,
        title: 'Heroes App',
        description:
            'Web app que lista héroes de 2 empresas (Marvel y DC) y permite hacer búsquedas de héroes',
        technologies: ['React', 'React router', 'HTML', 'CSS'],
        repository: 'https://github.com/ivancard/heroes-app',
        site: 'https://heroes-app-inky.vercel.app/',
        parrafs: [],
        videoUrl: false,
        imgExtra: [],
    },
    {
        id: 6,
        img: imgProject6,
        imgHigh: imgProject6High,
        title: 'Fundicion Garcia',
        description: 'Página web de una fundición de aluminio',
        technologies: ['React', 'HTML', 'CSS'],
        repository: 'https://github.com/ivancard/fundiciongarcia',
        site: 'https://fundiciongarcia.vercel.app/',
        parrafs: [],
        videoUrl: false,
        imgExtra: [],
    },
];
