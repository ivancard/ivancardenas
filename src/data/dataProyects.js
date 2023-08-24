import imgProject1 from '../assets/project-1-low.jpg';
import imgProject2 from '../assets/project-2-low.jpg';
import imgProject3 from '../assets/project-3-low.jpg';
import imgProject4 from '../assets/project-4-low.jpg';
import imgProject5 from '../assets/project-5-low.jpg';
import imgProject6 from '../assets/project-6-low.jpg';
import imgIos1 from '../assets/ios-1.jpg';
import imgIos2 from '../assets/ios-2.jpg';
import imgIos3 from '../assets/ios-3.jpg';
import imgIos4 from '../assets/ios-4.jpg';
import imgIos5 from '../assets/ios-5.jpg';
import imgIos6 from '../assets/ios-6.jpg';
import imgIos7 from '../assets/ios-7.jpg';
import imgIos8 from '../assets/ios-8.jpg';
import imgIos9 from '../assets/ios-9.jpg';
import imgIos10 from '../assets/ios-10.jpg';
import imgIos11 from '../assets/ios-11.jpg';
import imgIos12 from '../assets/iosProject10.png';
import imgIos13 from '../assets/iosProject12.png';
import gifIos1 from '../assets/iosGif1.gif';
import gifIos2 from '../assets/iosGif2.gif';
import gifIos3 from '../assets/iosGif3.gif';
import gifIos4 from '../assets/iosGif4.gif';
import gifIos5 from '../assets/iosGif5.gif';
import gifIos6 from '../assets/iosGif6.gif';
import gifIos7 from '../assets/iosGif7.gif';
import gifIos8 from '../assets/iosGif8.gif';
import gifIos9 from '../assets/iosGif9.gif';
import gifIos10 from '../assets/iosGif10.gif';
import gifIos11 from '../assets/iosGif11.gif';
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
    id: 17,
    img: imgIos11,
    imgPhone: gifIos1,
    title: 'Parking App',
    description:
      'App para conductores que necesitan encontrar y reservar espacios para estacionar en la ciudad. Gracias a la integración de mapas de terceros, la aplicación permite a los usuarios ver en tiempo real los lugares disponibles para estacionar, además de la posibilidad de reservar y pagar por el espacio elegido. La aplicación cuenta con una interfaz intuitiva y fácil de usar que permite a los usuarios navegar fácilmente por los mapas y encontrar el espacio de estacionamiento que mejor se adapte a sus necesidades. Además, la navegación asistida por voz garantiza que los conductores lleguen a su destino de manera segura y sin problemas. Por otra parte la app cuenta con la posibilidad de actuar como prestador del servicio de estacionamieto, poniendo a servicio su propio espacio para estacionar.',
    technologies: ['Swift', 'UIKit', 'MapBox', 'Combine'],
    parrafs: [],
    videoUrl: false,
    imgExtra: [],
  },

  {
    id: 15,
    img: imgIos10,
    imgPhone: gifIos11,
    title: 'ART social media',
    description:
      'Red social para artistas, donde pueden compartir sus obras y recibir feedback de otros artistas. Comprar y vender  obras. Tambien con una seccion de mensageria para comunicarse con otros artistas. Y cuenta con una seccion de combocatorias para que varios artistas puedan contactarse y colaborar en un proyecto en común.',
    technologies: ['Swift', 'UIKit', 'RxSwift', 'Firebase'],
    parrafs: [],
    videoUrl: false,
    imgExtra: [],
  },
  {
    id: 7,
    img: imgIos1,
    imgPhone: gifIos2,
    title: 'AR Dice',
    description:
      'App de realidad aumentada que simula el lanzamiento de dados, con la posibilidad de agitar los dados por boton o agitando el dispositivo.',
    technologies: ['Swift', 'UIKit', 'ARKit', 'SceneKit'],
    repository: 'https://github.com/ivancard/ARDice',
    parrafs: [],
    videoUrl: false,
    imgExtra: [],
  },

  {
    id: 8,
    img: imgIos2,
    imgPhone: gifIos3,
    title: 'AR Ruler',
    description:
      'App de realidad aumentada que permite medir distancias seleccionando dos puntos.',
    technologies: ['Swift', 'UIKit', 'ARKit', 'SceneKit'],
    repository: 'https://github.com/ivancard/ARRuler',
    parrafs: [],
    videoUrl: false,
    imgExtra: [],
  },
  {
    id: 9,
    img: imgIos3,
    imgPhone: gifIos4,
    title: 'Tipsy',
    description:
      'App que permite calcular la division de una cuenta entre varias personas y el porcentaje de propina a pagar.',
    technologies: ['Swift', 'UIKit'],
    repository: 'https://github.com/ivancard/Tipsy-iOS',
    parrafs: [],
    videoUrl: false,
    imgExtra: [],
  },
  {
    id: 10,
    img: imgIos4,
    imgPhone: gifIos5,
    title: 'Weather App',
    description:
      'App que muestra el clima de una ciudad dada. Consumiendo una API y teniendo un estilo grafico diferente dependiendo de el tema del dispositivo.',
    technologies: ['Swift', 'UIKit', 'URLSession'],
    repository: 'https://github.com/ivancard/weather-iOS',
    parrafs: [],
    videoUrl: false,
    imgExtra: [],
  },
  {
    id: 11,
    img: imgIos5,
    imgPhone: gifIos6,
    title: 'What guitar is',
    description:
      'App que identifica un modelo guitarra al capturarla con la camara. En esta app se utilizo CreateML para entrenar un modelo de machine learning, dadas fotos de modelos de guitarras. Y se utilizo CoreML para utilizar el modelo entrenado en la app',
    technologies: ['Swift', 'UIKit', 'CoreML', 'CreateML'],
    repository: 'https://github.com/ivancard/whatguitaris-iOS',
    parrafs: [],
    videoUrl: false,
    imgExtra: [],
  },
  {
    id: 12,
    img: imgIos6,
    imgPhone: gifIos7,
    title: 'ToDo app con Realm',
    description:
      'App de ToDo utilizando Realm como base de datos. Tambien se desarrollo esta misma app utilizando CoreData',
    technologies: ['Swift', 'UIKit', 'Realm', 'CoreData'],
    repository: 'https://github.com/ivancard/ToDo-Realm-iOS',
    parrafs: [],
    videoUrl: false,
    imgExtra: [],
  },
  {
    id: 13,
    img: imgIos7,
    imgPhone: gifIos8,
    title: 'AR Oddish',
    description:
      'App de realidad aumentada que reconoce una imagen a traves de la camara y muestra un modelo 3D de un pokemon.',
    technologies: ['Swift', 'UIKit', 'ARKit', 'SceneKit'],
    repository: 'https://github.com/ivancard/OddishAR',
    parrafs: [],
    videoUrl: false,
    imgExtra: [],
  },
  {
    id: 14,
    img: imgIos8,
    imgPhone: gifIos9,
    title: 'H4X0R News',
    description:
      'App de noticias que consume una API de noticias Hacker News. Utilizando SwiftUI',
    technologies: ['Swift', 'SwiftUI', 'URLSession'],
    repository: 'https://github.com/ivancard/H4X0R-iOS',
    parrafs: [
      'Utilizando project Catalist para compilar y usar la app en macOS ',
    ],
    videoUrl: false,
    imgExtra: [imgIos12],
  },
  {
    id: 16,
    img: imgIos9,
    imgHigh: imgIos13,
    title: 'Chat App',
    description: 'App de chat utilizando Firebase',
    technologies: ['Swift', 'UIKit', 'Firebase'],
    repository: 'https://github.com/ivancard/chat-iOS',
    parrafs: [],
    videoUrl: false,
    imgExtra: [gifIos10],
  },

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
    technologies: ['Java', 'JPA', 'MySQL', 'JSP', 'JavaScript', 'HTML', 'CSS'],
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
