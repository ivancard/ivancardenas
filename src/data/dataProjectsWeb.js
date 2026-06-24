import imgTodo from '../assets/project-1-low.jpg';
import imgTodoHigh from '../assets/project-1.jpg';
import imgVet from '../assets/project-2-low.jpg';
import imgVetHigh from '../assets/project-2.jpg';
import imgSilicon from '../assets/project-3-low.jpg';
import imgSiliconHigh from '../assets/project-3.jpg';
import imgSilicon1 from '../assets/project-3-1.jpg';
import imgSilicon2 from '../assets/project-3-2.jpg';
import imgSilicon3 from '../assets/project-3-3.jpg';
import imgSilicon4 from '../assets/project-3-4.jpg';
import imgGif from '../assets/project-4-low.jpg';
import imgGifHigh from '../assets/project-4.jpg';
import imgHeroes from '../assets/project-5-low.jpg';
import imgHeroesHigh from '../assets/project-5.jpg';
import imgFundicion from '../assets/project-6-low.jpg';
import imgFundicionHigh from '../assets/project-6.jpg';

export default [
  {
    id: 1,
    category: 'web',
    img: imgTodo,
    imgHigh: imgTodoHigh,
    imgPhone: null,
    title: 'ToDo React',
    description: 'Web app de tareas. Puedes crear, eliminar y marcar como realizadas las tareas.',
    descriptionEn: 'A to-do web app. You can create, delete and mark tasks as done.',
    technologies: ['React', 'HTML', 'CSS'],
    repository: 'https://github.com/ivancard/todo-react',
    site: 'https://ivancard.github.io/todo-react/',
    videoUrl: null,
    parrafs: [],
    parrafsEn: [],
    imgExtra: [],
  },
  {
    id: 2,
    category: 'web',
    img: imgVet,
    imgHigh: imgVetHigh,
    imgPhone: null,
    title: 'Administrador Veterinaria',
    description: 'Web app que administra turnos de pacientes de una veterinaria.',
    descriptionEn: 'A web app that manages patient appointments for a veterinary clinic.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    repository: 'https://github.com/ivancard/administrador-citas',
    site: 'https://ivancard.github.io/administrador-citas/',
    videoUrl: null,
    parrafs: [],
    parrafsEn: [],
    imgExtra: [],
  },
  {
    id: 3,
    category: 'web',
    img: imgSilicon,
    imgHigh: imgSiliconHigh,
    imgPhone: null,
    title: 'Silicon Travel',
    description: 'Web app fullStack que administra las operaciones de una agencia de viajes: productos, servicios, ventas, empleados y clientes.',
    descriptionEn: 'A full-stack web app that manages a travel agency\'s operations: products, services, sales, employees and clients.',
    technologies: ['Java', 'JPA', 'MySQL', 'JSP', 'JavaScript', 'HTML', 'CSS'],
    repository: 'https://github.com/ivancard/AgenciaTurismoTPOFinal',
    site: null,
    videoUrl: 'https://www.youtube.com/watch?v=qihevLQWSZk',
    parrafs: [
      'Front-end desarrollado en HTML, CSS y JavaScript. Back-end en Java con JPA y MySQL para persistencia de datos, y JSP para el manejo del front-end.',
      'Comencé diseñando el logo y la interfaz de usuario en Adobe XD.',
      'Cuenta con login de empleados y visualización de datos almacenados.',
      'Incluye gráficos estadísticos.',
    ],
    parrafsEn: [
      'Front-end built with HTML, CSS and JavaScript. Back-end in Java with JPA and MySQL for data persistence, and JSP to handle the front-end.',
      'I started by designing the logo and the user interface in Adobe XD.',
      'It features an employee login and visualization of the stored data.',
      'It includes statistical charts.',
    ],
    imgExtra: [imgSilicon1, imgSilicon2, imgSilicon3, imgSilicon4],
  },
  {
    id: 4,
    category: 'web',
    img: imgGif,
    imgHigh: imgGifHigh,
    imgPhone: null,
    title: 'Gif Expert App',
    description: 'Web app que busca y muestra GIFs desde la API de Giphy.',
    descriptionEn: 'A web app that searches and displays GIFs from the Giphy API.',
    technologies: ['React', 'HTML', 'CSS'],
    repository: 'https://github.com/ivancard/gifexpert',
    site: 'https://ivancard.github.io/gifexpert/',
    videoUrl: null,
    parrafs: [],
    parrafsEn: [],
    imgExtra: [],
  },
  {
    id: 5,
    category: 'web',
    img: imgHeroes,
    imgHigh: imgHeroesHigh,
    imgPhone: null,
    title: 'Heroes App',
    description: 'Web app que lista héroes de Marvel y DC, con búsqueda y navegación por personaje.',
    descriptionEn: 'A web app that lists Marvel and DC heroes, with search and per-character navigation.',
    technologies: ['React', 'React Router', 'HTML', 'CSS'],
    repository: 'https://github.com/ivancard/heroes-app',
    site: 'https://heroes-app-inky.vercel.app/',
    videoUrl: null,
    parrafs: [],
    parrafsEn: [],
    imgExtra: [],
  },
  {
    id: 6,
    category: 'web',
    img: imgFundicion,
    imgHigh: imgFundicionHigh,
    imgPhone: null,
    title: 'Fundición García',
    description: 'Página web institucional para una fundición de aluminio.',
    descriptionEn: 'An institutional website for an aluminum foundry.',
    technologies: ['React', 'HTML', 'CSS'],
    repository: 'https://github.com/ivancard/fundiciongarcia',
    site: 'https://fundiciongarcia.vercel.app/',
    videoUrl: null,
    parrafs: [],
    parrafsEn: [],
    imgExtra: [],
  },
];
