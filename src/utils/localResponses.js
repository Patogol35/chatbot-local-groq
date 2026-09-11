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
    "al",
    "algo",
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
    "hay",
    "la",
    "las",
    "le",
    "lo",
    "los",
    "me",
    "mi",
    "mis",
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

    "perfil de jorge",
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
    "habla sobre el",
    "habla acerca de el"
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
        "formacion",
        "formacion academica",
        "educacion",
        "trayectoria academica",
        "estudios",
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
        "promedio carrera",
        "calificacion ingenieria",
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
            "Su stack incluye React y JavaScript en frontend, Django y Java en backend, además de PostgreSQL y MySQL.",
            "Entre las principales tecnologías de Jorge están React, JavaScript, Django, Java, PostgreSQL y MySQL, junto con Render, Vercel y AWS.",
            "Jorge cuenta con experiencia en frontend, backend, bases de datos y deployment utilizando React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.",
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
    "mcp",

    "certificacion mcp",
    "certificacion de mcp",
    "certificado mcp",
    "certificado de mcp",

    "mcp de anthropic",
    "anthropic mcp",
    "mcp anthropic",

    "certificacion anthropic",
    "certificado anthropic",
    "certificacion de anthropic",
    "certificado de anthropic",

    "certificacion relacionada con mcp",
    "certificado relacionado con mcp",
    "formacion en mcp",
    "formacion mcp",

    "curso de mcp",
    "curso mcp",
    "cursos de mcp",

    "que certificacion tiene de mcp",
    "que certificado tiene de mcp",
    "tiene certificacion de mcp",
    "tiene certificado de mcp",

    "certificacion mcp anthropic",
    "certificado mcp anthropic",
    "certificacion de mcp de anthropic",
    "certificado de mcp de anthropic",

        "formacion de jorge en mcp",
"formacion de jorge mcp",
"formacion en mcp",
"formacion mcp",
"formacion de mcp",
"formacion relacionada con mcp",
"formacion de jorge relacionada con mcp",

"educacion de jorge en mcp",
"educacion de jorge mcp",
"educacion en mcp",
"educacion mcp",
"educacion de mcp",
"educacion relacionada con mcp",
"educacion de jorge relacionada con mcp",

"estudios de jorge en mcp",
"estudios de jorge mcp",
"estudios en mcp",
"estudios mcp",
"estudios de mcp",
"estudios relacionada con mcp",
"estudios de jorge relacionada con mcp",
        "formacion de jorge en anthropic",
"formacion de jorge anthropic",
"formacion en anthropic",
"formacion anthropic",
"formacion de anthropic",
"formacion relacionada con anthropic",
"formacion de jorge relacionada con anthropic",

"educacion de jorge en anthropic",
"educacion de jorge anthropic",
"educacion en anthropic",
"educacion anthropic",
"educacion de anthropic",
"educacion relacionada con anthropic",
"educacion de jorge relacionada con anthropic",

"estudios de jorge en anthropic",
"estudios de jorge anthropic",
"estudios en anthropic",
"estudios anthropic",
"estudios de anthropic",
"estudios relacionada con anthropic",
"estudios de jorge relacionada con anthropic",
],
    responses: [
        "Jorge cuenta con una certificación relacionada con MCP de Anthropic, obtenida en 2026.",
        "En 2026, Jorge obtuvo una certificación relacionada con MCP de Anthropic.",
        "Jorge tiene una certificación de MCP asociada a Anthropic.",
        "Entre sus certificaciones se encuentra una relacionada con MCP de Anthropic, obtenida en 2026.",
        "Jorge complementó su formación con una certificación relacionada con MCP de Anthropic.",
        "Dentro de su formación complementaria, Jorge cuenta con una certificación de MCP de Anthropic.",
        "Jorge obtuvo en 2026 una certificación relacionada con el protocolo MCP de Anthropic.",
        "Una de las certificaciones de Jorge está relacionada con MCP y Anthropic.",
        "Jorge cuenta con formación certificada relacionada con MCP de Anthropic.",
        "Entre sus certificaciones más recientes se encuentra una relacionada con MCP de Anthropic.",
        
    ],
},

{
    category: "certificaciones",
    keywords: [
    "linux",

    "certificacion linux",
    "certificacion de linux",
    "certificado linux",
    "certificado de linux",

    "curso de linux",
    "curso linux",
    "cursos de linux",

    "formacion en linux",
    "formacion linux",
    "formacion de linux",

    "estudio linux",
    "estudios de linux",
    "estudio de linux",

    "linux udemy",
    "udemy linux",

    "certificacion linux udemy",
    "certificado linux udemy",
    "curso de linux udemy",

    "certificacion relacionada con linux",
    "certificado relacionado con linux",
    "formacion relacionada con linux",

    "que certificacion tiene de linux",
    "que certificado tiene de linux",
    "que curso tiene de linux",
    "tiene certificacion de linux",
    "tiene certificado de linux",
        "formacion de jorge en linux",
"formacion de jorge linux",
"formacion en linux",
"formacion linux",
"formacion de linux",
"formacion relacionada con linux",
"formacion de jorge relacionada con linux",
        "educacion de jorge en linux",
"educacion de jorge linux",
"educacion en linux",
"educacion linux",
"educacion de linux",
"educacion relacionada con linux",
"educacion de jorge relacionada con linux",
"estudios de jorge en linux",
        "estudios de jorge linux",
"estudios en linux",
"estudios linux",
"estudios de linux",
"estudios relacionada con linux",
"estudios de jorge relacionada con linux",
],
    responses: [
        "Jorge cuenta con una certificación de Linux realizada en Udemy en 2024.",
        "En 2024, Jorge realizó una certificación de Linux en Udemy.",
        "Jorge tiene formación certificada en Linux mediante Udemy.",
        "Entre sus certificaciones se encuentra una relacionada con Linux, realizada en Udemy en 2024.",
        "Jorge complementó su formación con una certificación de Linux en Udemy.",
        "Dentro de su formación adicional, Jorge cuenta con conocimientos certificados en Linux.",
        "Jorge obtuvo formación certificada en Linux mediante Udemy durante 2024.",
        "Una de las certificaciones de Jorge corresponde al área de Linux.",
        "Jorge cuenta con una certificación de Linux obtenida a través de Udemy.",
        "Su formación complementaria incluye una certificación de Linux realizada en 2024.",
    ],
},

{
    category: "certificaciones",
    keywords: [
    "fundamentals of ai",
    "fundamentals ai",
    "fundamentos de ai",
    "fundamentos de ia",
    "fundamentos ia",
    "fundamentos de inteligencia artificial",
    "fundamentos inteligencia artificial",

    "inteligencia artificial ibm",
    "ia ibm",
    "ai ibm",
    "ibm inteligencia artificial",
    "ibm ia",

    "certificacion ia",
    "certificacion ai",
    "certificado ia",
    "certificado ai",
    "certificacion de ia",
    "certificado de ia",

    "certificacion inteligencia artificial",
    "certificado inteligencia artificial",
    "certificacion de inteligencia artificial",
    "certificado de inteligencia artificial",

    "certificacion fundamentals of ai",
    "certificado fundamentals of ai",
    "certificacion fundamentals ai",
    "certificado fundamentals ai",

    "certificacion ibm",
    "certificado ibm",
    "certificacion de ibm",
    "certificado de ibm",

    "curso de inteligencia artificial",
    "curso inteligencia artificial",
    "curso de ia",
    "curso ia",
    "curso de ai",
    "curso ai",
        "curso de ibm",
        "curso ibm",
       "formacion de ibm",
       "formacion ibm",

    "formacion en inteligencia artificial",
    "formacion inteligencia artificial",
    "formacion en ia",
    "formacion ia",

    "fundamentals of ai ibm",
    "fundamentals ai ibm",
    "fundamentos de ia ibm",
        "formacion de jorge en ibm",
"formacion de jorge ibm",
"formacion en ibm",
"formacion ibm",
"formacion de ibm",
"formacion relacionada con ibm",
"formacion de jorge relacionada con ibm",

"educacion de jorge en ibm",
"educacion de jorge ibm",
"educacion en ibm",
"educacion ibm",
"educacion de ibm",
"educacion relacionada con ibm",
"educacion de jorge relacionada con ibm",

"estudios de jorge en ibm",
"estudios de jorge ibm",
"estudios en ibm",
"estudios ibm",
"estudios de ibm",
"estudios relacionada con ibm",
"estudios de jorge relacionada con ibm",
],
    responses: [
        "Jorge cuenta con la certificación Fundamentals of AI de IBM, obtenida en 2025.",
        "En 2025, Jorge obtuvo Fundamentals of AI de IBM.",
        "Jorge tiene una certificación de Fundamentals of AI otorgada por IBM.",
        "Entre sus certificaciones está Fundamentals of AI de IBM, correspondiente a 2025.",
        "Jorge complementó su formación con Fundamentals of AI de IBM.",
        "Dentro de sus certificaciones relacionadas con inteligencia artificial se encuentra Fundamentals of AI de IBM.",
        "Jorge cuenta con formación certificada en inteligencia artificial mediante IBM.",
        "En su formación complementaria, Jorge incluye la certificación Fundamentals of AI.",
        "Una de las certificaciones de Jorge está enfocada en inteligencia artificial y fue obtenida mediante IBM.",
        "Jorge obtuvo en 2025 la certificación Fundamentals of AI de IBM.",
    ],
},

{
    category: "certificaciones",
    keywords: [
    "az 900",
    "az-900",
    "az900",
    "azure",
    "microsoft",
    "microsoft azure",

    "certificacion azure",
    "certificacion de azure",
    "certificado azure",
    "certificado de azure",

    "certificacion az900",
    "certificacion az 900",
    "certificacion az-900",
    "certificado az900",
    "certificado az 900",
    "certificado az-900",

    "curso az900",
    "curso az 900",
    "curso az-900",
    "curso de azure",
    "curso de microsoft azure",

    "azure fundamentals",
    "microsoft azure fundamentals",
    "azure fundamentals certification",
    "certificacion azure fundamentals",
    "certificado azure fundamentals",
        "formacion de jorge en azure",
"formacion de jorge azure",
"formacion en azure",
"formacion azure",
"formacion de azure",
"formacion relacionada con azure",
"formacion de jorge relacionada con azure",

"educacion de jorge en azure",
"educacion de jorge azure",
"educacion en azure",
"educacion azure",
"educacion de azure",
"educacion relacionada con azure",
"educacion de jorge relacionada con azure",

"estudios de jorge en azure",
"estudios de jorge azure",
"estudios en azure",
"estudios azure",
"estudios de azure",
"estudios relacionada con azure",
"estudios de jorge relacionada con azure",
        "formacion de jorge en az900",
"formacion de jorge az900",
"formacion en az900",
"formacion az900",
"formacion de az900",
"formacion relacionada con az900",
"formacion de jorge relacionada con az900",

"educacion de jorge en az900",
"educacion de jorge az900",
"educacion en az900",
"educacion az900",
"educacion de az900",
"educacion relacionada con az900",
"educacion de jorge relacionada con az900",

"estudios de jorge en az900",
"estudios de jorge az900",
"estudios en az900",
"estudios az900",
"estudios de az900",
"estudios relacionada con az900",
"estudios de jorge relacionada con az900",
],
    responses: [
        "Jorge cuenta con la certificación AZ-900 de UNIR, obtenida en 2023.",
        "En 2023, Jorge obtuvo la certificación AZ-900 de UNIR.",
        "Jorge tiene la certificación AZ-900 relacionada con Azure.",
        "Entre sus certificaciones se encuentra AZ-900, obtenida mediante UNIR en 2023.",
        "Jorge complementó su formación con la certificación AZ-900 de Azure.",
        "Dentro de su formación en tecnologías cloud se encuentra la certificación AZ-900.",
        "Jorge cuenta con conocimientos certificados relacionados con Microsoft Azure.",
        "Una de las certificaciones de Jorge corresponde a Azure mediante AZ-900.",
        "Jorge obtuvo la certificación AZ-900 en 2023 a través de UNIR.",
        "Su formación complementaria incluye la certificación AZ-900 relacionada con Microsoft Azure.",
    ],
},

{
    category: "certificaciones",
    keywords: [
    "claude api",
    "api de claude",
    "claude de anthropic",
    "anthropic claude",
    "claude anthropic",

    "certificacion claude",
    "certificacion de claude",
    "certificado claude",
    "certificado de claude",

    "certificacion claude api",
    "certificado claude api",
    "certificacion de claude api",
    "certificado de claude api",

    "certificacion anthropic",
    "certificado anthropic",
    "certificacion de anthropic",
    "certificado de anthropic",

    "certificacion anthropic claude",
    "certificado anthropic claude",

    "curso claude",
    "curso de claude",
    "cursos de claude",
    "curso claude api",
    "curso de claude api",

    "formacion claude",
    "formacion de claude",
    "formacion claude api",
    "formacion en claude api",

    "que certificacion tiene de claude",
    "que certificado tiene de claude",
    "tiene certificacion de claude",
    "tiene certificado de claude",

    "que certificacion tiene de claude api",
    "que certificado tiene de claude api",
    "tiene certificacion de claude api",
    "tiene certificado de claude api",

    "certificacion claude api anthropic",
    "certificado claude api anthropic",
        "formacion de jorge en claude api",
"formacion de jorge claude api",
"formacion en claude api",
"formacion claude api",
"formacion de claude api",
"formacion relacionada con claude api",
"formacion de jorge relacionada con claude api",

"educacion de jorge en claude api",
"educacion de jorge claude api",
"educacion en claude api",
"educacion claude api",
"educacion de claude api",
"educacion relacionada con claude api",
"educacion de jorge relacionada con claude api",

"estudios de jorge en claude api",
"estudios de jorge claude api",
"estudios en claude api",
"estudios claude api",
"estudios de claude api",
"estudios relacionada con claude api",
"estudios de jorge relacionada con claude api",
],
    responses: [
        "Jorge cuenta con una certificación relacionada con Claude API de Anthropic, obtenida en 2026.",
        "En 2026, Jorge obtuvo una certificación relacionada con Claude API de Anthropic.",
        "Jorge tiene una certificación relacionada con Claude API.",
        "Entre sus certificaciones está una relacionada con Claude API de Anthropic, correspondiente a 2026.",
        "Jorge complementó su formación con una certificación relacionada con Claude API.",
        "Dentro de su formación en inteligencia artificial se encuentra una certificación relacionada con Claude API.",
        "Jorge cuenta con formación certificada relacionada con Claude API de Anthropic.",
        "Una de las certificaciones de Jorge está relacionada con la tecnología Claude de Anthropic.",
        "Jorge obtuvo en 2026 una certificación relacionada con Claude API y Anthropic.",
        "Su formación complementaria incluye una certificación relacionada con Claude API de Anthropic.",
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
    console.log("VALID JORGE:", containsValidName(normalized));

    if (containsValidName(normalized)) {
        return false;
    }

    const words = normalized.split(/\s+/);

    for (const word of words) {
        if (!word) continue;

        if (word === "sasha") {
            continue;
        }

        if (COMMON_WORDS.has(word)) {
            continue;
        }

        if (/^\d+$/.test(word)) {
            continue;
        }

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

    if (containsAnotherPersonName(message)) {
        return null;
    }

    const normalizedMessage = normalizeText(message);

    const generalTechnology = [
    // React
    "habla de react",
    "que es react",
    "dime que es react",
    "explicame react",
    "explica react",
    "sobre react",
    "react que es",
    "que significa react",
    "dime sobre react",
    "para que sirve react",

    // JavaScript
    "habla de javascript",
    "que es javascript",
    "dime que es javascript",
    "explicame javascript",
    "explica javascript",
    "sobre javascript",
    "javascript que es",
    "que significa javascript",
    "dime sobre javascript",
    "para que sirve javascript",

    // Python
    "habla de python",
    "que es python",
    "dime que es python",
    "explicame python",
    "explica python",
    "sobre python",
    "python que es",
    "que significa python",
    "dime sobre python",
    "para que sirve python",

    // Django
    "habla de django",
    "que es django",
    "dime que es django",
    "explicame django",
    "explica django",
    "sobre django",
    "django que es",
    "que significa django",
    "dime sobre django",
    "para que sirve django",

    // Java
    "habla de java",
    "que es java",
    "dime que es java",
    "explicame java",
    "explica java",
    "sobre java",
    "java que es",
    "que significa java",
    "dime sobre java",
    "para que sirve java",

    // PostgreSQL
    "habla de postgresql",
    "que es postgresql",
    "dime que es postgresql",
    "explicame postgresql",
    "explica postgresql",
    "sobre postgresql",
    "postgresql que es",
    "que significa postgresql",
    "dime sobre postgresql",
    "para que sirve postgresql",

    // MySQL
    "habla de mysql",
    "que es mysql",
    "dime que es mysql",
    "explicame mysql",
    "explica mysql",
    "sobre mysql",
    "mysql que es",
    "que significa mysql",
    "dime sobre mysql",
    "para que sirve mysql",
        // Python
"habla de python",
"que es python",
"dime que es python",
"explicame python",
"explica python",
"sobre python",
"python que es",
"que significa python",
"dime sobre python",
"para que sirve python",
        
// mcp
"habla de mcp",
"que es mcp",
"dime que es mcp",
"explicame mcp",
"explica mcp",
"sobre mcp",
"mcp que es",
"que significa mcp",
"dime sobre mcp",
"para que sirve mcp",
    // AWS
    "habla de aws",
    "que es aws",
    "dime que es aws",
    "explicame aws",
    "explica aws",
    "sobre aws",
    "aws que es",
    "que significa aws",
    "dime sobre aws",
    "para que sirve aws",

    // Azure
    "habla de azure",
    "que es azure",
    "dime que es azure",
    "explicame azure",
    "explica azure",
    "sobre azure",
    "azure que es",
    "que significa azure",
    "dime sobre azure",
    "para que sirve azure",

    // Linux
    "habla de linux",
    "que es linux",
    "dime que es linux",
    "explicame linux",
    "explica linux",
    "sobre linux",
    "linux que es",
    "que significa linux",
    "dime sobre linux",
    "para que sirve linux",

    // Git
    "habla de git",
    "que es git",
    "dime que es git",
    "explicame git",
    "explica git",
    "sobre git",
    "git que es",
    "que significa git",
    "dime sobre git",
    "para que sirve git",

    // Vercel
    "habla de vercel",
    "que es vercel",
    "dime que es vercel",
    "explicame vercel",
    "explica vercel",
    "sobre vercel",
    "vercel que es",
    "que significa vercel",
    "dime sobre vercel",
    "para que sirve vercel",

    // Render
    "habla de render",
    "que es render",
    "dime que es render",
    "explicame render",
    "explica render",
    "sobre render",
    "render que es",
    "que significa render",
    "dime sobre render",
    "para que sirve render",

    // Spring Boot
    "habla de spring boot",
    "que es spring boot",
    "dime que es spring boot",
    "explicame spring boot",
    "explica spring boot",
    "sobre spring boot",
    "spring boot que es",
    "que significa spring boot",
    "dime sobre spring boot",
    "para que sirve spring boot",

];

    if (
        generalTechnology.some((phrase) =>
            normalizedMessage.includes(phrase)
        )
    ) {
        return null;
    }


const profileTechnology = [
    "linux",
    "ibm",
    "azure",
    "az900",
    "mcp",
    "claude",
    "anthropic",
];

const hasJorge = containsValidName(normalizedMessage);

const hasProfileTechnology = profileTechnology.some((technology) =>
    normalizedMessage.includes(technology)
);

const isGeneralJorgeFormation =
    hasJorge &&
    (
        normalizedMessage === "formacion de jorge" ||
        normalizedMessage === "formacion jorge" ||
        normalizedMessage === "educacion de jorge" ||
        normalizedMessage === "educacion jorge" ||
        normalizedMessage === "estudios de jorge" ||
        normalizedMessage === "estudios jorge" ||
        normalizedMessage === "preparacion de jorge" ||
        normalizedMessage === "preparacion jorge" ||
        normalizedMessage === "trayectoria de jorge" ||
        normalizedMessage === "trayectoria jorge"
    );

const mentionsFormation =
    normalizedMessage.includes("formacion") ||
    normalizedMessage.includes("educacion") ||
    normalizedMessage.includes("estudios") ||
    normalizedMessage.includes("preparacion") ||
    normalizedMessage.includes("trayectoria");

if (
    hasJorge &&
    mentionsFormation &&
    !hasProfileTechnology &&
    !isGeneralJorgeFormation
) {
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
