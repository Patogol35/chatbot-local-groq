/*
|--------------------------------------------------------------------------
| NORMALIZAR TEXTO
|--------------------------------------------------------------------------
*/

const normalizeText = (text = "") => {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?¡!.,;:()[\]{}]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
};

/*
|--------------------------------------------------------------------------
| NOMBRES VÁLIDOS DE JORGE
|--------------------------------------------------------------------------
*/

const VALID_NAMES = [
    "jorge",
    "patricio",
    "santamaria",
    "cherrez",
    "jorge patricio",
    "jorge patricio santamaria",
    "jorge patricio santamaria cherrez",
    "santamaria cherrez",
];

/*
|--------------------------------------------------------------------------
| PALABRAS COMUNES
|--------------------------------------------------------------------------
|
| Se ignoran estas palabras al buscar nombres.
|
|--------------------------------------------------------------------------
*/

const COMMON_WORDS = new Set([
    "a",
    "soluciones",
    "aplicaciones",
    "apps",
    "sistemas",
    "al",
    "algo",
    "proyectos",
    "proyecto",
    "tecnologia",
    "tecnologias",
    "stack",
    "lenguajes",
    "herramientas",
    "que",
    "algun",
    "alguna",
    "algunos",
    "algunas",
    "como",
    "con",
    "cual",
    "cuales",
    "cuando",
    "calificacion",
    "de",
    "del",
    "desde",
    "deseo",
    "dime",
    "donde",
    "estudio",
    "estudia",
    "estudios",
    "el",
    "ella",
    "ellos",
    "en",
    "es",
    "esa",
    "son",
    "ese",
    "eso",
    "esta",
    "estas",
    "este",
    "estos",
    "fue",
    "ha",
    "habla",
    "hablame",
    "hablar",
    "hay",
    "la",
    "las",
    "le",
    "lo",
    "los",
    "me",
    "mi",
    "mis",
    "necesito",
    "nombre",
    "no",
    "o",
    "para",
    "por",
    "que",
    "quien",
    "quienes",
    "se",
    "sobre",
    "su",
    "sus",
    "tiene",
    "tienen",
    "tu",
    "un",
    "una",
    "unos",
    "unas",
    "y",

    // Perfil y formación
    "formacion",
    "ingenieria",
    "ingeniero",
    "acerca",
    "master",
    "maestria",
    "posgrado",
    "postgrado",
    "promedio",
    "perfil",
    "nota",
    "realizo",
    "siguio",
    "educacion", 
    "estudio",
    "estudios",

    // Conversación
    "hola",
    "buenas",
    "buenos",
    "dias",
    "tardes",
    "noches",
    "hey",
    "hello",
    "gracias",
    "muchas",
    "te",
    "agradezco",
    "chao",
    "adios",
    "hasta",
    "luego",
    "nos",
    "vemos",
    "voy",
    "bye",
    "pronto",
    "estas",
    "encuentras",
    "bien",
    "va",
    "creo",
    "ti",
    "eres",
    "sasha",

    // Desarrollo
    "hizo",
    "programo",
    "desarrollo",
    "curso",
    "cursos",
    "certificado",
    "certificados",
    "certificacion",
    "certificaciones",

    // Contacto
    "contactarlo",
    "contactame",
    "contactar",
    "contactarme",
    "comunicarme",
    "comunicar",
    "quiero",
    "hablar",
    "llamar",
    "cuentame",
    "saber",

    // Microsoft / Azure
    "microsoft",
    "azure",
    "az",
    "az900",
    "fundamentals",
    "cloud",
    "nube",

    // MCP / Anthropic / Claude
    "mcp",
    "anthropic",
    "claude",
    //IBM
    "ibm",
    // otros
    "linux",
    "utiliza",
]);
    


/*
|--------------------------------------------------------------------------
| RESPUESTAS LOCALES
|--------------------------------------------------------------------------
*/

const LOCAL_RESPONSES = [
    {
        category: "identidad",
keywords: [
    "quien es jorge",
    "quien es jorge patricio",
    "quien es santamaria",
    "quien es santamaria cherrez",
    "presentame a jorge",
    "hablame de el",

    "perfil",
    "perfil de",
    "perfil profesional de jorge",
    "perfil profesional",
    

    "habla de jorge",
    "habla acerca de jorge",
    "habla sobre jorge",
    "sobre jorge",
    "dime sobre jorge",
    "cuentame sobre Jorge",
    "cuentame acerca de Jorge",
    "cuentame de Jorge",
    "quiero saber de Jorge",
    "acerca de jorge",
    "hablame de el",
    "hablame acerca de el",
    "hablame sobre el",
    "dime sobre el",
    "dime acerca de el",
    "cuentame acerca de el",
    "cuentame sobre el",
    "cuentame de el",
    "habla sobre el",
    "habla acerca de el",
    "hablame",
    "cuentame",
],
        responses: [
            "Jorge Patricio Santamaría Cherrez es ingeniero en sistemas y tiene un máster en ingeniería de software. Su experiencia se enfoca en desarrollo Full Stack, virtualización y ciberseguridad, trabajando con React, JavaScript, Django, Java y SQL.",
            "Jorge Patricio Santamaría Cherrez es un profesional de Ingeniería de Software, con formación en Ingeniería en Sistemas y un Máster en esta área.",
            "Jorge es Ingeniero en Sistemas y cuenta con un Máster en Ingeniería de Software. Se especializa en desarrollo Full Stack, además de tener conocimientos en virtualización y ciberseguridad. Ha creado aplicaciones web, un chatbot, un juego de ajedrez y un e-commerce.",
            "Jorge es Ingeniero en Sistemas por la Universidad Indoamérica y Máster en Ingeniería de Software y Sistemas Informáticos por la UNIR.",
            "Jorge Patricio es un profesional de sistemas con formación de máster en ingeniería de software. Entre sus principales áreas están el desarrollo Full Stack, la ciberseguridad y la virtualización, utilizando tecnologías como React, Django, JavaScript y Java.",
            "Jorge Santamaría Cherrez es Ingeniero en Sistemas y Máster en Ingeniería de Software. Ha trabajado en diferentes proyectos tecnológicos, incluyendo aplicaciones React, un quiz sobre Ecuador, una aplicación del clima, un chatbot, ajedrez y una tienda online.",
            "Jorge se desempeña como Ingeniero de Software y Desarrollador Full Stack. Tiene formación en Ingeniería de Sistemas y una maestría en Ingeniería de Software, con experiencia en tecnologías como React, JavaScript, Django, Java y bases de datos SQL.",
            "Jorge Patricio Santamaría Cherrez combina su formación en Ingeniería de Sistemas con un máster en Ingeniería de Software. Sus principales áreas de interés son el desarrollo Full Stack, la virtualización y la ciberseguridad, donde trabaja con diferentes tecnologías web.",
            "Jorge es un Ingeniero en Sistemas con Máster en Ingeniería de Software. Dentro de su experiencia destacan el desarrollo de aplicaciones web y proyectos Full Stack, utilizando herramientas como React, Django, JavaScript, Java y bases de datos SQL.",
            "Jorge Patricio tiene formación como Ingeniero en Sistemas y Máster en Ingeniería de Software. En su trayectoria ha desarrollado proyectos como un portfolio, un quiz sobre Ecuador, una app del clima, un chatbot, un juego de ajedrez y un e-commerce.",
            "Jorge Santamaría se especializa en desarrollo de software y Full Stack. Es Ingeniero en Sistemas y tiene un Máster en Ingeniería de Software, con conocimientos en React, JavaScript, Django, Java, SQL, virtualización y ciberseguridad.",
"Jorge Patricio Santamaría Cherrez es un profesional de software con formación en Ingeniería de Sistemas y una maestría en Ingeniería de Software. Ha desarrollado diversos proyectos web y aplicaciones, destacando su trabajo con React, Django, JavaScript, Java y SQL.",
        ],
    },

            {
    category: "formacion",
    keywords: [
        "donde estudio",
        "en que universidad",
        "donde estudia",
        "en que universidades estudio",
        "universidad de jorge",
        "universidades de jorge",
        "donde hizo sus estudios",
        "donde realizo sus estudios",
        "donde se formo",
        "donde curso sus estudios",
    ],
    responses: [
        "Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica, Ecuador. Posteriormente realizó un Máster en Ingeniería de Software y Sistemas Informáticos en la UNIR, España.",
        "Su formación universitaria comenzó con Ingeniería en Sistemas en la Universidad Indoamérica y continuó con un Máster en Ingeniería de Software y Sistemas Informáticos en la UNIR.",
        "Jorge cursó Ingeniería en Sistemas en Ecuador y posteriormente realizó un Máster en Ingeniería de Software y Sistemas Informáticos en España.",
        "A nivel universitario, Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica y después realizó un Máster en Ingeniería de Software y Sistemas Informáticos en la UNIR.",
        "Jorge realizó sus estudios de Ingeniería en Sistemas en la Universidad Indoamérica y su formación de posgrado en la UNIR, España.",
        "En cuanto a sus estudios universitarios, Jorge se formó en la Universidad Indoamérica y posteriormente continuó sus estudios en la UNIR.",
        "Jorge estudió su carrera de Ingeniería en Sistemas en Ecuador y realizó su Máster en Ingeniería de Software y Sistemas Informáticos en España.",
        "Su trayectoria universitaria comprende estudios en la Universidad Indoamérica y posteriormente en la Universidad Internacional de La Rioja, UNIR.",
        "Jorge inició su formación profesional en la Universidad Indoamérica y continuó su especialización académica en la UNIR, España.",
        "Las universidades donde Jorge realizó sus principales estudios son la Universidad Indoamérica, en Ecuador, y la UNIR, en España.",
    ],
},

{
    category: "formacion",
  keywords: [
    "ingenieria de",
    "que ingenieria hizo",
    "que ingenieria estudio",
    "que ingenieria tiene",
    "titulo de ingenieria",
      "su ingenieria",
      
    "es ingeniero",
    "estudio ingenieria",
    "carrera de ingenieria",

    "donde estudio su ingenieria",
    "donde estudio la ingenieria",
    "donde estudio ingenieria",

      "donde siguio su ingenieria",
    "donde  siguio la ingenieria",
    "donde siguio ingenieria",

    "donde hizo su ingenieria",
    "donde hizo la ingenieria",
    "donde hizo ingenieria",

    "donde realizo su ingenieria",
    "donde realizo la ingenieria",
    "donde realizo ingenieria",

    "donde curso su ingenieria",
    "donde curso la ingenieria",
    "donde curso ingenieria",

    "en que universidad estudio su ingenieria",
    "en que universidad hizo su ingenieria",
    "en que universidad estudio ingenieria",
    "universidad de su ingenieria",
    "universidad de la ingenieria",
],
    responses: [
        "Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica, Ecuador.",
        "La carrera universitaria de Jorge es Ingeniería en Sistemas y siguió la minsma en la Universidad Indoamerica.",
        "Jorge es Ingeniero en Sistemas, titulado por la Universidad Indoamérica.",
        "Su formación de grado corresponde a Ingeniería en Sistemas en la Universidad Indoamérica, Ecuador.",
        "Jorge realizó sus estudios universitarios en Ingeniería en Sistemas en la Universidad Indoamerica.",
        "A nivel de grado, Jorge estudió Ingeniería en Sistemas en Ecuador.",
        "Jorge cuenta con el título de Ingeniero en Sistemas por la Universidad Indoamérica.",
        "La carrera que estudió Jorge fue Ingeniería en Sistemas en la Universidad Indoamérica.",
        "Jorge se formó profesionalmente como Ingeniero en Sistemas.",
        "Su carrera universitaria principal es Ingeniería en Sistemas, cursada en la Universidad Indoamérica.",
    ],
},

{
    category: "formacion",
    keywords: [
    "master",
    "maestria",
    "posgrado",

    "que master tiene",
    "que maestria tiene",
    "que posgrado tiene",

    "donde estudio su master",
    "donde estudio su maestria",
    "donde estudio su posgrado",

    "donde estudio el master",
    "donde estudio la maestria",
    "donde estudio el posgrado",

    "donde hizo su master",
    "donde hizo su maestria",
    "donde hizo su posgrado",

    "donde realizo su master",
    "donde realizo su maestria",
    "donde realizo su posgrado",

    "estudio una maestria",
    "tiene maestria",
    "tiene un master",
    "master de jorge",
],
    responses: [
        "Jorge realizó un Máster en Ingeniería de Software y Sistemas Informáticos en la Universidad Internacional de La Rioja (UNIR), España.",
        "Jorge tiene un Máster en Ingeniería de Software y Sistemas Informáticos realizado en la UNIR.",
        "A nivel de posgrado, Jorge cuenta con un Máster en Ingeniería de Software y Sistemas Informáticos por la UNIR, España.",
        "Jorge continuó su formación con un Máster en Ingeniería de Software y Sistemas Informáticos en la Universidad Internacional de La Rioja.",
        "La maestría de Jorge es en Ingeniería de Software y Sistemas Informáticos, realizada en la UNIR.",
        "Jorge realizó sus estudios de posgrado en Ingeniería de Software y Sistemas Informáticos en España.",
        "Su formación de posgrado corresponde a un Máster en Ingeniería de Software y Sistemas Informáticos por la UNIR.",
        "Jorge cuenta con una maestría especializada en Ingeniería de Software y Sistemas Informáticos.",
        "Después de su Ingeniería en Sistemas, Jorge continuó sus estudios con un Máster en la UNIR, España.",
        "Jorge se especializó mediante un Máster en Ingeniería de Software y Sistemas Informáticos en la Universidad Internacional de La Rioja.",
    ],
},

{
    category: "formacion",
    keywords: [
        "formacion de jorge",
        "formacion",
        "educacion",
        "formacion academica",
        "educacion de jorge",
        "trayectoria academica",
        "estudios de jorge",
        "estudios academicos",
        "perfil academico",
        "historial academico",
        "preparacion academica",
        "nivel academico",
    ],
    responses: [
        "La formación académica de Jorge incluye Ingeniería en Sistemas por la Universidad Indoamérica y un Máster en Ingeniería de Software y Sistemas Informáticos por la UNIR, España.",
        "Jorge tiene formación de grado en Ingeniería en Sistemas y formación de posgrado en Ingeniería de Software y Sistemas Informáticos.",
        "Su trayectoria académica comprende una Ingeniería en Sistemas en Ecuador y un Máster en Ingeniería de Software y Sistemas Informáticos en España.",
        "En cuanto a formación académica, Jorge cuenta con una Ingeniería en Sistemas y posteriormente realizó un Máster especializado en Ingeniería de Software y Sistemas Informáticos.",
        "Jorge es Ingeniero en Sistemas y cuenta además con un Máster en Ingeniería de Software y Sistemas Informáticos.",
        "Su formación combina estudios de Ingeniería en Sistemas en Ecuador y estudios de posgrado en España.",
        "La trayectoria académica de Jorge comenzó con Ingeniería en Sistemas y continuó con un Máster en Ingeniería de Software y Sistemas Informáticos.",
        "Jorge cuenta con formación universitaria y de posgrado orientada al área de sistemas e ingeniería de software.",
        "Su preparación académica incluye Ingeniería en Sistemas por la Universidad Indoamérica y un Máster realizado en la UNIR.",
        "En resumen, Jorge tiene una Ingeniería en Sistemas y un Máster en Ingeniería de Software y Sistemas Informáticos.",
    ],
},

{
    category: "notas",
    keywords: [
        "promedio ingenieria",
        "nota ingenieria",
        "promedio universidad",
        "nota universidad",
        "promedio de ingenieria",
        "promedio de la ingenieria",
        "nota de ingenieria",
        "nota de la ingenieria",
        "calificacion ingenieria",
        "nota de su ingenieria",
        "promedio de la ingenieria",
"promedio de su ingenieria",
        "calificacion de la ingenieria",
        "calificacion de su ingenieria",
    ],
    responses: [
        "Jorge obtuvo un promedio de 9 en Ingeniería en Sistemas.",
        "En Ingeniería en Sistemas, Jorge obtuvo un promedio final de 9.",
        "La nota promedio de Jorge en Ingeniería en Sistemas fue de 9.",
        "Jorge terminó su Ingeniería en Sistemas con un promedio de 9.",
        "Jorge obtuvo una calificación promedio de 9 durante su Ingeniería en Sistemas.",
        "El promedio final de Jorge en su Ingeniería en Sistemas fue de 9 sobre 10.",
        "En sus estudios de Ingeniería en Sistemas, Jorge alcanzó un promedio de 9.",
        "Jorge obtuvo 9 de promedio en su carrera de Ingeniería en Sistemas.",
        "Su promedio universitario en Ingeniería en Sistemas fue de 9.",
        "La Ingeniería en Sistemas de Jorge tuvo un promedio final de 9 sobre 10.",
    ],
},


{
    category: "notas",
    keywords: [
        "promedio master",
        "promedio de su master",
        "nota master",
        "promedio posgrado",
        "nota posgrado",
        "promedio maestria",
        "nota maestria",
        "promedio del master",
        "nota del master",
        "promedio de la maestria",
        "calificacion master",
        "nota de Master",
        "nota de su master",
        "nota de su maestria",
        "nota de maestria",
        "nota de la maestria",
        "nota de su posgrado",
        "nota del posgrado",
    ],
    responses: [
        "Jorge obtuvo un promedio de 8.68 en el Máster en Ingeniería de Software y Sistemas Informáticos.",
        "En su Máster, Jorge obtuvo un promedio de 8.68.",
        "La media final de Jorge en el Máster en Ingeniería de Software y Sistemas Informáticos fue de 8.68.",
        "Jorge completó su Máster con un promedio de 8.68.",
        "El promedio final de Jorge en su Máster fue de 8.68 sobre 10.",
        "Jorge obtuvo una calificación promedio de 8.68 durante su Máster.",
        "En sus estudios de posgrado, Jorge alcanzó un promedio de 8.68.",
        "Su promedio en el Máster en Ingeniería de Software y Sistemas Informáticos fue de 8.68.",
        "Jorge terminó su formación de posgrado con un promedio de 8.68.",
        "La calificación promedio registrada de Jorge en el Máster es de 8.68 sobre 10.",
    ],
},

{
    category: "notas",
    keywords: [
        "promedio",
        "notas",
        "nota",
        "calificacion",
        "calificaciones",
        "notas academicas",
        "promedios",
        "promedio academico",
        "notas de jorge",
        "promedio de jorge",
    ],
    responses: [
        "Jorge obtuvo un promedio de 9 en Ingeniería en Sistemas y un promedio de 8.68 en el Máster en Ingeniería de Software y Sistemas Informáticos.",
        "En su formación universitaria, Jorge obtuvo un 9 de promedio en Ingeniería en Sistemas y 8.68 en el Máster.",
        "Sus promedios registrados son 9 en Ingeniería en Sistemas y 8.68 en el Máster en Ingeniería de Software y Sistemas Informáticos.",
        "Jorge obtuvo excelentes resultados académicos: 9 en su Ingeniería en Sistemas y 8.68 en su Máster.",
        "En total, Jorge cuenta con un promedio de 9 en su Ingeniería y 8.68 en su Máster.",
        "Sus notas académicas son 9 sobre 10 en Ingeniería en Sistemas y 8.68 sobre 10 en el Máster.",
        "Jorge obtuvo 9 de promedio durante su Ingeniería y 8.68 durante su formación de posgrado.",
        "En Ingeniería en Sistemas obtuvo 9 de promedio, mientras que en el Máster obtuvo 8.68.",
        "Los promedios académicos de Jorge son 9 en Ingeniería en Sistemas y 8.68 en Ingeniería de Software y Sistemas Informáticos.",
        "Jorge tuvo un promedio final de 9 en su carrera universitaria y de 8.68 en su Máster.",
    ],
},

    {
        category: "tecnologias",
        keywords: [
            "frontend",
            "front end",
            "react",
            "javascript",
        ],
        responses: [
            "En frontend, Jorge trabaja principalmente con React y JavaScript.",
            "Para desarrollo frontend, Jorge utiliza principalmente React y JavaScript.",
            "Jorge tiene experiencia en frontend utilizando React y JavaScript.",
            "En la parte visual de sus proyectos, Jorge trabaja con React y JavaScript.",
        ],
    },

    {
        category: "tecnologias",
        keywords: [
            "backend",
            "back end",
            "django",
            "java",
        ],
        responses: [
            "En backend, Jorge trabaja principalmente con Django y Java.",
            "Para el desarrollo backend, Jorge utiliza Django y Java.",
            "Jorge cuenta con experiencia en backend utilizando Django y Java.",
            "En el lado del servidor, Jorge trabaja principalmente con Django y Java.",
        ],
    },

    {
        category: "tecnologias",
        keywords: [
            "base de datos",
            "bases de datos",
            "postgresql",
            "mysql",
        ],
        responses: [
            "Jorge trabaja con PostgreSQL y MySQL.",
            "En bases de datos, Jorge utiliza principalmente PostgreSQL y MySQL.",
            "Jorge tiene experiencia trabajando con PostgreSQL y MySQL.",
            "Entre las tecnologías de bases de datos que utiliza Jorge están PostgreSQL y MySQL.",
        ],
    },

    {
        category: "tecnologias",
        keywords: [
            "deploy",
            "deployment",
            "despliegue",
            "hosting",
        ],
        responses: [
            "Para despliegue, Jorge trabaja con servicios como Render, Vercel y AWS.",
            "Jorge utiliza Render, Vercel y AWS para desplegar sus aplicaciones.",
            "En cuanto a deployment, Jorge trabaja con plataformas como Render, Vercel y AWS.",
            "Para publicar sus proyectos, Jorge utiliza servicios como Render, Vercel y AWS.",
        ],
    },

    {
        category: "tecnologias",
        keywords: [
            "tecnologias",
            "tecnologia",
            "stack",
            "herramientas",
            "lenguajes",
        ],
        responses: [
    "Jorge trabaja principalmente con React, JavaScript, Django, Java, PostgreSQL y MySQL. También utiliza Render, Vercel y AWS.",

    "Su stack tecnológico combina React y JavaScript para el desarrollo frontend, Django y Java para backend, y PostgreSQL y MySQL para bases de datos.",

    "Entre las principales tecnologías de Jorge se encuentran React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.",

    "Jorge tiene experiencia en desarrollo Full Stack utilizando React y JavaScript en frontend, Django y Java en backend, además de PostgreSQL y MySQL.",

    "Su perfil técnico abarca desarrollo web Full Stack, trabajando con React, JavaScript, Django y Java, junto con bases de datos como PostgreSQL y MySQL.",

    "Jorge utiliza tecnologías modernas para desarrollar aplicaciones web, entre ellas React, JavaScript, Django, Java, PostgreSQL y MySQL, además de servicios como Render, Vercel y AWS.",

    "En frontend, Jorge trabaja principalmente con React y JavaScript; en backend utiliza Django y Java, y tiene experiencia con PostgreSQL y MySQL.",

    "Su experiencia tecnológica incluye desarrollo frontend, backend, bases de datos y despliegue de aplicaciones mediante React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.",

    "Jorge cuenta con un stack orientado al desarrollo de aplicaciones web, combinando React, JavaScript, Django y Java con PostgreSQL y MySQL, además de plataformas de despliegue como Render, Vercel y AWS.",

    "Las principales tecnologías que forman parte del perfil de Jorge son React, JavaScript, Django, Java, PostgreSQL y MySQL. También trabaja con servicios de despliegue y nube como Render, Vercel y AWS."
],
    },

    {
        category: "proyectos",
        keywords: [
            "portfolio",
            "portafolio",
            "portfolio react",
        ],
        responses: [
            "Jorge cuenta con un portfolio desarrollado con React para mostrar su formación, tecnologías y proyectos.",
            "Su portfolio está desarrollado con React y reúne información sobre su perfil profesional y sus proyectos.",
            "Jorge tiene un portfolio web creado con React donde presenta su experiencia, formación y proyectos.",
            "El portfolio de Jorge es una aplicación desarrollada con React para presentar su perfil profesional.",
        ],
    },

    {
        category: "proyectos",
        keywords: [
            "quiz",
            "quiz ecuador",
            "quiz sobre ecuador",
        ],
        responses: [
            "Uno de los proyectos de Jorge es un Quiz sobre Ecuador.",
            "Jorge desarrolló un proyecto de preguntas y respuestas relacionado con Ecuador.",
            "Entre sus proyectos se encuentra un Quiz dedicado a temas relacionados con Ecuador.",
            "Jorge cuenta con una aplicación tipo Quiz enfocada en Ecuador.",
        ],
    },

    {
        category: "proyectos",
        keywords: [
            "clima",
            "app clima",
            "aplicacion clima",
        ],
        responses: [
            "Jorge desarrolló una aplicación del clima que permite consultar información meteorológica.",
            "Entre sus proyectos está una aplicación para consultar información del clima.",
            "Jorge cuenta con una app meteorológica desarrollada como parte de sus proyectos.",
            "Uno de sus proyectos es una aplicación del clima que muestra información meteorológica.",
        ],
    },

    {
        category: "proyectos",
        keywords: [
            "chatbot",
            "chat bot",
            "sasha",
        ],
        responses: [
            "Jorge desarrolló un chatbot y Sasha funciona como asistente virtual de su portfolio.",
            "Entre sus proyectos se encuentra este chatbot, donde Sasha actúa como asistente virtual.",
            "Jorge cuenta con un proyecto de chatbot integrado en su portfolio.",
            "Sasha forma parte del proyecto de chatbot desarrollado para el portfolio de Jorge.",
        ],
    },

    {
        category: "proyectos",
        keywords: [
            "ajedrez",
            "chess",
        ],
        responses: [
            "Jorge cuenta con un proyecto relacionado con el juego de ajedrez.",
            "Entre sus proyectos se encuentra una aplicación relacionada con ajedrez.",
            "Jorge desarrolló también un proyecto basado en el juego de ajedrez.",
            "Otro de sus proyectos está relacionado con ajedrez.",
        ],
    },

    {
        category: "proyectos",
        keywords: [
            "ecommerce",
            "e-commerce",
            "tienda",
            "tienda online",
            "comercio electronico",
        ],
        responses: [
            "Jorge desarrolló un e-commerce utilizando React en frontend y Django en backend.",
            "Entre sus proyectos está una tienda online desarrollada con React y Django.",
            "Jorge cuenta con un proyecto de comercio electrónico utilizando React y Django.",
            "Su proyecto e-commerce combina React para el frontend y Django para el backend.",
        ],
    },

    {
        category: "proyectos",
        keywords: [
            "proyectos",
            "proyecto",
"trabajos",
"desarrollos",
"aplicaciones",
"sistemas",
"soluciones",
            "apps",
            "que proyectos tiene",
            "que ha desarrollado",
            "aplicaciones",
        ],
        responses: [
            "Entre los proyectos de Jorge se encuentran su Portfolio React, un Quiz sobre Ecuador, una aplicación del clima, un chatbot, un proyecto de ajedrez y un e-commerce con React y Django.",
            "Jorge ha desarrollado proyectos como un portfolio, un Quiz sobre Ecuador, una aplicación del clima, un chatbot, un proyecto de ajedrez y un e-commerce.",
            "Su portafolio de proyectos incluye aplicaciones web, un chatbot, una app del clima, un Quiz sobre Ecuador, ajedrez y un e-commerce.",
            "Entre sus principales proyectos destacan su portfolio React, Quiz sobre Ecuador, aplicación meteorológica, chatbot, ajedrez y e-commerce.",
        ],
    },



{
    category: "certificaciones",
    keywords: [
        "certificaciones",
        "certificados",
        "certificacion",
        "que certificaciones tiene",
        "que certificados tiene",
        "que cursos tiene",
        "cuales son sus certificados",
        "cuales son sus cursos",
        "cuales son sus certificaciones",
        "que certificaciones posee",
        "que certificados posee",
        "que cursos posee",
        "lista de certificaciones",
        "lista de certificados",
        "formacion complementaria",
        "formacion adicional",
        "cursos de jorge",
        "certificaciones de jorge",
        "certificados de jorge",
        "cursos de jorge",
    ],
    responses: [
        "Jorge cuenta con certificaciones relacionadas con MCP, Linux, Fundamentals of AI, AZ-900 y Claude API.",
        "Entre las certificaciones de Jorge se encuentran MCP, Linux, Fundamentals of AI, AZ-900 y Claude API.",
        "Jorge tiene certificaciones en áreas como MCP, Linux, inteligencia artificial, Azure y Claude API.",
        "Su formación complementaria incluye certificaciones de MCP, Linux, Fundamentals of AI, AZ-900 y Claude API.",
        "Jorge ha complementado su formación profesional con certificaciones en tecnología, inteligencia artificial, Linux y Azure.",
        "Entre su formación adicional destacan certificaciones relacionadas con MCP, Linux, IA, Azure y Claude API.",
        "Jorge cuenta con formación certificada en diferentes áreas tecnológicas, incluyendo MCP, Linux, IA, Azure y Claude API.",
        "Su preparación complementaria incluye MCP, Linux, Fundamentals of AI de IBM, AZ-900 y Claude API.",
        "Jorge dispone de certificaciones relacionadas con inteligencia artificial, sistemas, cloud y tecnologías de desarrollo.",
        "Las principales certificaciones de Jorge incluyen MCP, Linux, Fundamentals of AI, AZ-900 y Claude API.",
    ],
},
    


{
    category: "contacto",
    keywords: [
        "contacto",
        "contactar",
        "contactarme",
        "contactarlo",
        "comunicarme",
        "comunicar",
        "comunicarme con jorge",
        "hablar con jorge",
        "hablar con el",
        "hablar con jorge patricio",
        "contactar a jorge",
        "contactar a jorge patricio",
        "como contacto",
        "como contactar",
        "como contactarlo",
        "como me comunico",
        "como me comunico con jorge",
        "como llamar a jorge",
        "llamar a jorge",
        "quiero contactar",
        "quiero contactarlo",
        "quiero contactar a jorge",
        "quiero hablar con jorge",
        "deseo contactar",
        "deseo contactarlo",
        "deseo contactar a jorge",
        "deseo hablar con jorge",
        "quiero comunicarme",
        "deseo comunicarme",
        "necesito contactar",
        "necesito hablar con jorge",
        "contactame con el",
        "contactame",
        
    ],
    responses: [
        'Puedes contactar a Jorge desde la sección "Contacto" de su portfolio.',
        'Para comunicarte con Jorge, utiliza la sección "Contacto" de su portfolio.',
        'Si quieres contactar a Jorge, encontrarás la opción correspondiente en la sección "Contacto".',
        'La forma indicada para contactar a Jorge es mediante la sección "Contacto" de su portfolio.',
        'Puedes encontrar las opciones de contacto de Jorge directamente en su portfolio.',
        'Si deseas hablar con Jorge, visita la sección "Contacto" de su portfolio.',
        'Para comunicarte con Jorge, dirígete a la sección "Contacto". Allí encontrarás las opciones disponibles.',
        '¿Quieres contactar a Jorge? Puedes hacerlo desde la sección "Contacto" de su portfolio.',
        'La sección "Contacto" del portfolio es el lugar indicado para comunicarte con Jorge.',
        'Si necesitas comunicarte con Jorge, entra a la sección "Contacto" y utiliza la opción que prefieras.',
    ],
},
{
    category: "sasha",
    keywords: [
        "quien eres",
        "que eres",
        "como te llamas",
        "tu nombre",
        "quien es sasha",
        "que es sasha",
        "hablame de ti",
        "cuentame de ti",
        "dime quien eres",
        "como te llamas sasha",
        "que haces",
        "cual es tu funcion",
        "cual es tu trabajo",
        "para que sirves",
    ],
    responses: [
        "Soy Sasha, la asistente virtual del portfolio de Jorge.",
        "Me llamo Sasha y soy la asistente virtual del portfolio de Jorge.",
        "Soy Sasha, una IA creada para asistir a los visitantes del portfolio de Jorge.",
        "Mi nombre es Sasha y funciono como asistente virtual del portfolio de Jorge.",
        "Soy Sasha, la asistente virtual encargada de ayudarte a conocer el portfolio de Jorge.",
        "Me llamo Sasha 😊. Estoy aquí para responder tus preguntas sobre Jorge y su trabajo.",
        "Soy Sasha, una asistente virtual desarrollada para acompañar a los visitantes del portfolio de Jorge.",
        "¡Soy Sasha! 👋 Puedo ayudarte a conocer el perfil, estudios, proyectos y habilidades de Jorge.",
        "Soy Sasha y mi función es ayudarte a descubrir más sobre el trabajo y trayectoria profesional de Jorge.",
        "Soy Sasha, la asistente virtual de Jorge. 😊 Pregúntame lo que quieras sobre su portfolio.",
    ],
},

    {
    category: "sasha_saludos",
    keywords: [
        "hola",
        "buenas",
        "buenos dias",
        "buenas tardes",
        "buenas noches",
        "hey",
    ],
    responses: [
        "¡Hola! Soy Sasha, la asistente virtual del portfolio de Jorge. ¿En qué puedo ayudarte?",
        "¡Hola! 👋 Soy Sasha. ¿Qué te gustaría saber?",
        "¡Buenas! Soy Sasha, la asistente virtual del guapo de Jorge. Estoy aquí para ayudarte.",
        "¡Hola! Qué gusto tenerte por aquí. ¿Qué quieres conocer?",
        "¡Hey! 👋 Bienvenido al portfolio de Jorge. Soy Sasha, ¿en qué puedo ayudarte?",
        "¡Hola! 😊 Me alegra verte por aquí. ¿Quieres conocer más sobre Jorge?",
        "¡Buenas! 👋 Soy Sasha y estoy lista para ayudarte a conocer el trabajo de Jorge.",
        "¡Hola! Qué bueno tenerte por aquí. Dime, ¿qué te gustaría saber?",
        "¡Buenos días! 😊 Soy Sasha, la asistente virtual de Jorge. ¿Cómo puedo ayudarte?",
        "¡Buenas tardes/noches! 👋 Soy Sasha. Pregúntame lo que quieras sobre el portfolio de Jorge.",
    ],
},

{
    category: "sasha_gracias",
    keywords: [
        "gracias",
        "muchas gracias",
        "te agradezco",
        "gracias sasha",
        "muy agradecido",
    ],
    responses: [
        "¡De nada! 😊",
        "¡Con gusto! Estoy aquí para ayudarte.",
        "¡No hay de qué! 😊",
        "¡Cuando quieras! ¿Necesitas algo más?",
        "¡Un placer ayudarte! 😊",
        "¡No tienes nada que agradecer! Estoy para ayudarte.",
        "¡Con mucho gusto! ¿Hay algo más que quieras saber?",
        "¡De nada! Me alegra poder ayudarte. 😊",
        "¡Para eso estoy! Cuando quieras, puedes preguntarme.",
        "¡Encantada de ayudarte! 😊 ¿Necesitas algo más?",
    ],
},

{
    category: "sasha_despedida",
    keywords: [
        "chao",
        "adios",
        "hasta luego",
        "nos vemos",
        "me voy",
        "bye",
        "hasta pronto",
    ],
    responses: [
        "¡Chao! 👋 Gracias por visitar el portfolio de Jorge.",
        "¡Hasta luego! Fue un gusto ayudarte. 😊",
        "¡Nos vemos! 👋 Espero que vuelvas pronto.",
        "¡Adiós! Que tengas un excelente día.",
        "¡Hasta pronto! 👋 Espero verte nuevamente por aquí.",
        "¡Chao! 😊 Ha sido un gusto conversar contigo.",
        "¡Nos vemos! Que tengas un excelente día. 👋",
        "¡Hasta luego! Gracias por pasar por el portfolio de Jorge.",
        "¡Adiós! 👋 Cuando quieras, aquí estará Sasha para ayudarte.",
        "¡Hasta pronto! 😊 Espero que hayas encontrado lo que buscabas.",
    ],
},

{
    category: "sasha_estado",
    keywords: [
        "como estas",
        "como te encuentras",
        "estas bien",
        "como te va",
        "como vas",
    ],
    responses: [
        "¡Muy bien, gracias por preguntar! 😊 ¿En qué puedo ayudarte?",
        "Estoy muy bien y lista para ayudarte. ¿Qué quieres saber?",
        "¡Todo bien por aquí! Soy Sasha, siempre lista para ayudarte.",
        "Muy bien, gracias. 😊 ¿Quieres conocer algo sobre Jorge?",
        "¡Estoy genial! Siempre disponible para ayudarte con el portfolio de Jorge.",
        "Todo marcha muy bien por aquí. 😊 ¿Qué te gustaría conocer?",
        "¡Muy bien! Gracias por preguntar. ¿Quieres que te cuente algo sobre Jorge?",
        "Estoy excelente y preparada para ayudarte. ¿Qué necesitas saber?",
        "¡Todo perfecto! 😊 Dime qué quieres conocer del portfolio de Jorge.",
        "Muy bien, gracias. ¡Es un gusto conversar contigo! ¿En qué puedo ayudarte?",
    ],
},

{
    category: "sasha_creador",
    keywords: [
        "quien te creo",
        "quien te creo a ti",
        "quien te hizo",
        "quien te programo",
        "quien te desarrollo",
        "quien desarrollo a sasha",
        "quien te invento",
    ],
    responses: [
        "Fui creada para funcionar como la asistente virtual del portfolio de Jorge Patricio Santamaría Cherrez.",
        "Jorge Patricio Santamaría Cherrez desarrolló a Sasha como asistente virtual para su portfolio.",
        "Soy una asistente virtual creada para el portfolio de Jorge Patricio Santamaría Cherrez.",
        "Fui desarrollada como parte del portfolio de Jorge para ayudar a los visitantes a conocer su perfil y proyectos.",
        "Jorge creó a Sasha para brindar información y ayudar a los visitantes de su portfolio.",
        "Soy Sasha, una asistente virtual desarrollada por Jorge para acompañar a quienes visitan su portfolio.",
        "Mi función es ayudar a los visitantes a conocer mejor el perfil profesional y los proyectos de Jorge.",
        "Fui desarrollada por Jorge como parte de su portfolio de Ingeniería de Software.",
        "Jorge Patricio Santamaría Cherrez es quien desarrolló a Sasha para interactuar con los visitantes de su portfolio.",
        "Soy Sasha, la asistente virtual de Jorge, creada para responder preguntas sobre su perfil, estudios, proyectos y experiencia.",
    ],
},
];

/*
|--------------------------------------------------------------------------
| DETECTAR SI EL MENSAJE MENCIONA A JORGE
|--------------------------------------------------------------------------
*/

const containsValidName = (message) => {
    const normalized = normalizeText(message);

    return VALID_NAMES.some((name) => {
        const normalizedName = normalizeText(name);

        const regex = new RegExp(
            `(^|\\s)${normalizedName.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            )}(?=\\s|$)`
        );

        return regex.test(normalized);
    });
};

/*
|--------------------------------------------------------------------------
| DETECTAR SI EXISTE OTRO NOMBRE
|--------------------------------------------------------------------------
|
| Regla:
|
| - Si el mensaje menciona a Jorge -> puede usar respuestas locales.
| - Si menciona otro nombre -> Groq.
|
| No importa la posición ni el tipo de frase.
|
|--------------------------------------------------------------------------
*/

const containsAnotherPersonName = (message) => {
    const normalized = normalizeText(message);

    console.log("MENSAJE:", normalized);

    // Nombres y apellidos que pertenecen a Jorge
    const jorgeWords = new Set([
        "jorge",
        "patricio",
        "santamaria",
        "cherrez",
    ]);

    const words = normalized.split(/\s+/);

    for (const word of words) {
        if (!word) continue;

        // Palabras del nombre completo de Jorge
        if (jorgeWords.has(word)) {
            continue;
        }

        // Sasha no es una persona consultada
        if (word === "sasha") {
            continue;
        }

        // Palabras comunes de la pregunta
        if (COMMON_WORDS.has(word)) {
            continue;
        }

        // Números
        if (/^\d+$/.test(word)) {
            continue;
        }

        // Cualquier palabra restante se considera otro nombre
        if (/^[a-záéíóúñ]+$/i.test(word)) {
            console.log("OTRA PERSONA:", word);
            return true;
        }
    }

    return false;
};
/*
|--------------------------------------------------------------------------
| BUSCAR RESPUESTA LOCAL
|--------------------------------------------------------------------------
*/

export const getLocalResponse = (message) => {
    

const normalizedMessage = normalizeText(message);

if (
    normalizedMessage === "que es un stack" ||
    normalizedMessage === "que es stack" ||
    normalizedMessage === "que significa stack" ||
    normalizedMessage === "que significa un stack" ||

    normalizedMessage === "que es tecnologia" ||
    normalizedMessage === "que es una tecnologia" ||
    normalizedMessage === "que significa tecnologia" ||
    normalizedMessage === "que son las tecnologias" ||
    normalizedMessage === "que son tecnologias" ||
    normalizedMessage === "que significan las tecnologias" ||

    normalizedMessage === "que es una herramienta" ||
    normalizedMessage === "que es herramienta" ||
    normalizedMessage === "que significa herramienta" ||
    normalizedMessage === "que son las herramientas" ||
    normalizedMessage === "que son herramientas" ||
    normalizedMessage === "que significan las herramientas"
) {
    return null;
}

    if (containsAnotherPersonName(message)) {
        return null;
    }

    



    let bestMatch = null;
    let bestScore = 0;

    for (const item of LOCAL_RESPONSES) {

        let score = 0;

        for (const keyword of item.keywords) {

            const normalizedKeyword =
                normalizeText(keyword);

            const escapedKeyword =
                normalizedKeyword.replace(
                    /[.*+?^${}()|[\]\\]/g,
                    "\\$&"
                );

            const regex = new RegExp(
                `(^|\\s)${escapedKeyword}(?=\\s|$)`
            );

            if (regex.test(normalizedMessage)) {

                const words =
                    normalizedKeyword.split(" ").length;

                score += words * 10;
            }
        }

        if (score > bestScore) {
            bestScore = score;
            bestMatch = item;
        }
    }

    if (
        bestMatch &&
        bestScore >= 10
    ) {

        const responses =
            bestMatch.responses;

        const randomIndex =
            Math.floor(
                Math.random() *
                responses.length
            );

        return responses[randomIndex];
    }

    return null;
};
