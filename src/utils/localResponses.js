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
        .replace(/[-_/]/g, " ")
        .replace(/[¿?¡!.,;:()[\]{}"'`]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
};

/*
|--------------------------------------------------------------------------
| UTILIDADES
|--------------------------------------------------------------------------
*/

const containsAny = (text, keywords = []) => {
    return keywords.some((keyword) =>
        text.includes(normalizeText(keyword))
    );
};

const randomPick = (responses = []) => {
    if (!responses.length) return null;

    return responses[
        Math.floor(Math.random() * responses.length)
    ];
};

/*
|--------------------------------------------------------------------------
| RESPUESTAS LOCALES
|--------------------------------------------------------------------------
|
| Estas respuestas NO utilizan Groq.
|
|--------------------------------------------------------------------------
*/

const LOCAL_RESPONSES = [

    /*
    |--------------------------------------------------------------------------
    | SALUDOS
    |--------------------------------------------------------------------------
    */

    {
        category: "saludos",
        keywords: [
            "hola",
            "hola sasha",
            "hola a sasha",
            "buenos dias",
            "buenas tardes",
            "buenas noches",
            "buenas",
            "hey",
            "hey sasha",
            "hello",
            "hello sasha",
            "holi",
            "holi sasha",
        ],
        responses: [
            "¡Hola! Soy Sasha, la asistente virtual del portfolio de Jorge. ¿En qué puedo ayudarte?",
            "¡Hola! Soy Sasha. ¿Qué te gustaría saber sobre Jorge o sus proyectos?",
            "¡Hola! 😊 Soy Sasha, la IA del portfolio de Jorge. ¿En qué puedo ayudarte?",
            "¡Hola! Encantada de ayudarte. Puedes preguntarme sobre Jorge, sus estudios, tecnologías o proyectos."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | ESTADO DE SASHA
    |--------------------------------------------------------------------------
    */

    {
        category: "estado",
        keywords: [
            "como estas",
            "como estas sasha",
            "como te encuentras",
            "como te encuentras sasha",
            "estas bien",
            "estas bien sasha",
            "que tal estas",
            "que tal sasha",
        ],
        responses: [
            "¡Muy bien, gracias! Estoy lista para ayudarte con información sobre Jorge y su portfolio.",
            "Todo bien por aquí. Soy Sasha y estoy lista para ayudarte.",
            "¡Estoy muy bien! ¿Qué te gustaría saber sobre Jorge?",
            "Funcionando correctamente y lista para ayudarte. 😊"
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | AGRADECIMIENTOS
    |--------------------------------------------------------------------------
    */

    {
        category: "agradecimientos",
        keywords: [
            "gracias",
            "muchas gracias",
            "te agradezco",
            "gracias sasha",
            "muchas gracias sasha",
            "gracias por ayudarme",
            "gracias por la ayuda",
        ],
        responses: [
            "¡De nada! Estoy aquí para ayudarte.",
            "¡Con gusto! 😊",
            "No hay de qué. Cuando quieras, puedes preguntarme algo más.",
            "¡Encantada de ayudarte!"
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | DESPEDIDAS
    |--------------------------------------------------------------------------
    */

    {
        category: "despedidas",
        keywords: [
            "adios",
            "adios sasha",
            "hasta luego",
            "hasta luego sasha",
            "nos vemos",
            "nos vemos sasha",
            "chao",
            "chao sasha",
            "bye",
            "bye sasha",
            "me voy",
            "hasta pronto",
        ],
        responses: [
            "¡Hasta luego! Fue un gusto ayudarte.",
            "¡Adiós! Cuando quieras volver, aquí estará Sasha.",
            "¡Nos vemos! Espero que hayas encontrado lo que buscabas.",
            "¡Hasta pronto! 👋"
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | IDENTIDAD
    |--------------------------------------------------------------------------
    */

    {
        category: "identidad",
        keywords: [
            "quien es jorge",
            "quien es jorge patricio",
            "quien es jorge patricio santamaria",
            "quien es santamaria",
            "quien es santamaria cherrez",
            "quien es jorge santamaria",
            "presentame a jorge",
            "presenta a jorge",
            "presentame",
            "hablame de jorge",
            "habla de jorge",
            "sobre jorge",
            "informacion sobre jorge",
            "informacion de jorge",
            "dime sobre jorge",
        ],
        responses: [
            "Jorge Patricio Santamaría Cherrez es Ingeniero en Sistemas y Máster en Ingeniería de Software.",
            "Jorge Patricio Santamaría Cherrez es un profesional de Ingeniería de Software, con formación en Ingeniería en Sistemas y un Máster en esta área.",
            "Jorge es Ingeniero en Sistemas por la Universidad Indoamérica y Máster en Ingeniería de Software y Sistemas Informáticos por la UNIR.",
            "Jorge Patricio Santamaría Cherrez cuenta con formación en Ingeniería en Sistemas y un Máster en Ingeniería de Software y Sistemas Informáticos."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | FORMACIÓN
    |--------------------------------------------------------------------------
    */

    {
        category: "formacion",
        keywords: [
            "donde estudio",
            "donde estudia",
            "en que universidad",
            "universidad de jorge",
            "universidades donde estudio",
            "estudios universitarios",
        ],
        responses: [
            "Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica, Ecuador. Posteriormente realizó un Máster en Ingeniería de Software y Sistemas Informáticos en la UNIR, España.",
            "Su formación universitaria comenzó con Ingeniería en Sistemas en la Universidad Indoamérica y continuó con un Máster en Ingeniería de Software y Sistemas Informáticos en la UNIR.",
            "Jorge cursó Ingeniería en Sistemas en Ecuador y posteriormente realizó un Máster en Ingeniería de Software y Sistemas Informáticos en España.",
            "A nivel universitario, Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica y después obtuvo un Máster en Ingeniería de Software y Sistemas Informáticos en la UNIR."
        ]
    },

    {
        category: "formacion",
        keywords: [
            "que estudio",
            "que carrera estudio",
            "que carrera tiene",
            "que profesion tiene",
            "que profesion es",
            "ingenieria en sistemas",
            "ingeniero en sistemas",
            "carrera de jorge",
        ],
        responses: [
            "Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica, Ecuador.",
            "La carrera universitaria de Jorge es Ingeniería en Sistemas.",
            "Jorge es Ingeniero en Sistemas, titulado por la Universidad Indoamérica.",
            "Su formación de grado corresponde a Ingeniería en Sistemas en la Universidad Indoamérica, Ecuador."
        ]
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
            "estudio un master",
            "tiene un master",
            "tiene maestria",
        ],
        responses: [
            "Jorge realizó un Máster en Ingeniería de Software y Sistemas Informáticos en la Universidad Internacional de La Rioja (UNIR), España.",
            "Jorge tiene un Máster en Ingeniería de Software y Sistemas Informáticos realizado en la UNIR.",
            "A nivel de posgrado, Jorge cuenta con un Máster en Ingeniería de Software y Sistemas Informáticos por la UNIR, España.",
            "Jorge continuó su formación con un Máster en Ingeniería de Software y Sistemas Informáticos en la Universidad Internacional de La Rioja."
        ]
    },

    {
        category: "formacion",
        keywords: [
            "formacion",
            "formacion academica",
            "educacion",
            "trayectoria academica",
            "perfil academico",
            "historial academico",
        ],
        responses: [
            "La formación académica de Jorge incluye Ingeniería en Sistemas por la Universidad Indoamérica y un Máster en Ingeniería de Software y Sistemas Informáticos por la UNIR, España.",
            "Jorge tiene formación de grado en Ingeniería en Sistemas y formación de posgrado en Ingeniería de Software y Sistemas Informáticos.",
            "Su trayectoria académica comprende una Ingeniería en Sistemas en Ecuador y un Máster en Ingeniería de Software y Sistemas Informáticos en España.",
            "En cuanto a formación académica, Jorge cuenta con una Ingeniería en Sistemas y posteriormente realizó un Máster especializado en Ingeniería de Software y Sistemas Informáticos."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | NOTA DE INGENIERÍA
    |--------------------------------------------------------------------------
    */

    {
        category: "nota_ingenieria",
        keywords: [
            "promedio ingenieria",
            "promedio de ingenieria",
            "promedio en ingenieria",
            "nota ingenieria",
            "nota de ingenieria",
            "nota en ingenieria",
            "calificacion ingenieria",
            "calificacion de ingenieria",
            "calificacion en ingenieria",
            "promedio universidad",
            "nota universidad",
            "promedio carrera",
            "nota carrera",
            "promedio de la carrera",
            "nota de la carrera",
        ],
        responses: [
            "Jorge obtuvo un promedio de 9 en Ingeniería en Sistemas.",
            "En Ingeniería en Sistemas, Jorge obtuvo un promedio final de 9.",
            "La nota promedio de Jorge en Ingeniería en Sistemas fue de 9.",
            "Jorge terminó su Ingeniería en Sistemas con un promedio de 9."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | NOTA DEL MÁSTER
    |--------------------------------------------------------------------------
    */

    {
        category: "nota_master",
        keywords: [
            "promedio master",
            "promedio del master",
            "promedio en el master",
            "nota master",
            "nota del master",
            "nota en el master",
            "calificacion master",
            "calificacion del master",
            "calificacion en el master",
            "promedio maestria",
            "promedio de la maestria",
            "promedio en la maestria",
            "nota maestria",
            "nota de la maestria",
            "nota en la maestria",
            "calificacion maestria",
            "calificacion de la maestria",
            "calificacion en la maestria",
            "promedio posgrado",
            "promedio del posgrado",
            "promedio en el posgrado",
            "nota posgrado",
            "nota del posgrado",
            "nota en el posgrado",
            "calificacion posgrado",
            "calificacion del posgrado",
            "calificacion en el posgrado",
        ],
        responses: [
            "Jorge obtuvo un promedio de 8.68 en el Máster en Ingeniería de Software y Sistemas Informáticos.",
            "En su Máster, Jorge obtuvo un promedio de 8.68.",
            "La media final de Jorge en el Máster en Ingeniería de Software y Sistemas Informáticos fue de 8.68.",
            "Jorge completó su Máster con un promedio de 8.68."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | NOTAS GENERALES
    |--------------------------------------------------------------------------
    */

    {
        category: "notas",
        keywords: [
            "promedio",
            "promedios",
            "notas",
            "nota",
            "calificacion",
            "calificaciones",
            "resultados academicos",
        ],
        responses: [
            "Jorge obtuvo un promedio de 9 en Ingeniería en Sistemas y un promedio de 8.68 en el Máster en Ingeniería de Software y Sistemas Informáticos.",
            "En su formación universitaria, Jorge obtuvo un 9 de promedio en Ingeniería en Sistemas y 8.68 en el Máster.",
            "Sus promedios registrados son 9 en Ingeniería en Sistemas y 8.68 en el Máster en Ingeniería de Software y Sistemas Informáticos.",
            "Jorge obtuvo un promedio de 9 en su Ingeniería en Sistemas y 8.68 en su Máster."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | TECNOLOGÍAS - FRONTEND
    |--------------------------------------------------------------------------
    */

    {
        category: "tecnologias_frontend",
        keywords: [
            "frontend",
            "front end",
            "react",
            "javascript",
            "desarrollo frontend",
            "tecnologias frontend",
        ],
        responses: [
            "En frontend, Jorge trabaja principalmente con React y JavaScript.",
            "Para desarrollo frontend, Jorge utiliza principalmente React y JavaScript.",
            "Jorge tiene experiencia en frontend utilizando React y JavaScript.",
            "En la parte visual de sus proyectos, Jorge trabaja con React y JavaScript."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | TECNOLOGÍAS - BACKEND
    |--------------------------------------------------------------------------
    */

    {
        category: "tecnologias_backend",
        keywords: [
            "backend",
            "back end",
            "django",
            "java",
            "desarrollo backend",
            "tecnologias backend",
        ],
        responses: [
            "En backend, Jorge trabaja principalmente con Django y Java.",
            "Para el desarrollo backend, Jorge utiliza Django y Java.",
            "Jorge cuenta con experiencia en backend utilizando Django y Java.",
            "En el lado del servidor, Jorge trabaja principalmente con Django y Java."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | BASES DE DATOS
    |--------------------------------------------------------------------------
    */

    {
        category: "bases_datos",
        keywords: [
            "base de datos",
            "bases de datos",
            "postgresql",
            "mysql",
            "base datos",
            "bases datos",
        ],
        responses: [
            "Jorge trabaja con PostgreSQL y MySQL.",
            "En bases de datos, Jorge utiliza principalmente PostgreSQL y MySQL.",
            "Jorge tiene experiencia trabajando con PostgreSQL y MySQL.",
            "Entre las tecnologías de bases de datos que utiliza Jorge están PostgreSQL y MySQL."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | DEPLOY / HOSTING
    |--------------------------------------------------------------------------
    */

    {
        category: "deploy",
        keywords: [
            "deploy",
            "deployment",
            "despliegue",
            "hosting",
            "donde despliega",
            "donde aloja",
            "publicar aplicaciones",
        ],
        responses: [
            "Para despliegue, Jorge trabaja con servicios como Render, Vercel y AWS.",
            "Jorge utiliza Render, Vercel y AWS para desplegar sus aplicaciones.",
            "En cuanto a deployment, Jorge trabaja con plataformas como Render, Vercel y AWS.",
            "Para publicar sus proyectos, Jorge utiliza servicios como Render, Vercel y AWS."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | STACK
    |--------------------------------------------------------------------------
    */

    {
        category: "tecnologias",
        keywords: [
            "tecnologias",
            "tecnologia",
            "stack",
            "tech stack",
            "herramientas",
            "lenguajes",
            "que tecnologias usa",
            "que tecnologias utiliza",
            "con que tecnologias trabaja",
        ],
        responses: [
            "Jorge trabaja principalmente con React, JavaScript, Django, Java, PostgreSQL y MySQL. También utiliza Render, Vercel y AWS.",
            "Su stack incluye React y JavaScript en frontend, Django y Java en backend, además de PostgreSQL y MySQL.",
            "Entre las principales tecnologías de Jorge están React, JavaScript, Django, Java, PostgreSQL y MySQL, junto con Render, Vercel y AWS.",
            "Jorge cuenta con experiencia en frontend, backend, bases de datos y deployment utilizando React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | PROYECTO - PORTFOLIO
    |--------------------------------------------------------------------------
    */

    {
        category: "proyecto_portfolio",
        keywords: [
            "portfolio",
            "portafolio",
            "portfolio react",
            "portafolio react",
            "sitio web",
            "pagina web",
        ],
        responses: [
            "Jorge cuenta con un portfolio desarrollado con React para mostrar su formación, tecnologías y proyectos.",
            "Su portfolio está desarrollado con React y reúne información sobre su perfil profesional y sus proyectos.",
            "Jorge tiene un portfolio web creado con React donde presenta su experiencia, formación y proyectos.",
            "El portfolio de Jorge es una aplicación desarrollada con React para presentar su perfil profesional."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | PROYECTO - QUIZ
    |--------------------------------------------------------------------------
    */

    {
        category: "proyecto_quiz",
        keywords: [
            "quiz",
            "quiz ecuador",
            "quiz sobre ecuador",
            "preguntas ecuador",
            "juego ecuador",
        ],
        responses: [
            "Uno de los proyectos de Jorge es un Quiz sobre Ecuador.",
            "Jorge desarrolló un proyecto de preguntas y respuestas relacionado con Ecuador.",
            "Entre sus proyectos se encuentra un Quiz dedicado a temas relacionados con Ecuador.",
            "Jorge cuenta con una aplicación tipo Quiz enfocada en Ecuador."
        ]
    },

    |--------------------------------------------------------------------------
    | PROYECTO - CLIMA
    |--------------------------------------------------------------------------
    */

    {
        category: "proyecto_clima",
        keywords: [
            "clima",
            "app clima",
            "aplicacion clima",
            "app del clima",
            "aplicacion del clima",
            "meteorologia",
        ],
        responses: [
            "Jorge desarrolló una aplicación del clima que permite consultar información meteorológica.",
            "Entre sus proyectos está una aplicación para consultar información del clima.",
            "Jorge cuenta con una app meteorológica desarrollada como parte de sus proyectos.",
            "Uno de sus proyectos es una aplicación del clima que muestra información meteorológica."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | PROYECTO - CHATBOT
    |--------------------------------------------------------------------------
    */

    {
        category: "proyecto_chatbot",
        keywords: [
            "chatbot",
            "chat bot",
            "asistente virtual",
            "asistente de jorge",
        ],
        responses: [
            "Jorge desarrolló un chatbot y Sasha funciona como asistente virtual de su portfolio.",
            "Entre sus proyectos se encuentra este chatbot, donde Sasha actúa como asistente virtual.",
            "Jorge cuenta con un proyecto de chatbot integrado en su portfolio.",
            "Sasha forma parte del proyecto de chatbot desarrollado para el portfolio de Jorge."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | PROYECTO - AJEDREZ
    |--------------------------------------------------------------------------
    */

    {
        category: "proyecto_ajedrez",
        keywords: [
            "ajedrez",
            "chess",
            "juego de ajedrez",
            "proyecto de ajedrez",
        ],
        responses: [
            "Jorge cuenta con un proyecto relacionado con el juego de ajedrez.",
            "Entre sus proyectos se encuentra una aplicación relacionada con ajedrez.",
            "Jorge desarrolló también un proyecto basado en el juego de ajedrez.",
            "Otro de sus proyectos está relacionado con ajedrez."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | PROYECTO - E-COMMERCE
    |--------------------------------------------------------------------------
    */

    {
        category: "proyecto_ecommerce",
        keywords: [
            "ecommerce",
            "e commerce",
            "e-commerce",
            "tienda",
            "tienda online",
            "tienda en linea",
            "comercio electronico",
            "comercio en linea",
        ],
        responses: [
            "Jorge desarrolló un e-commerce utilizando React en frontend y Django en backend.",
            "Entre sus proyectos está una tienda online desarrollada con React y Django.",
            "Jorge cuenta con un proyecto de comercio electrónico utilizando React y Django.",
            "Su proyecto e-commerce combina React para el frontend y Django para el backend."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | PROYECTOS GENERALES
    |--------------------------------------------------------------------------
    */

    {
        category: "proyectos",
        keywords: [
            "proyectos",
            "proyecto",
            "que proyectos tiene",
            "que ha desarrollado",
            "que aplicaciones tiene",
            "aplicaciones",
            "trabajos realizados",
        ],
        responses: [
            "Entre los proyectos de Jorge se encuentran su Portfolio React, un Quiz sobre Ecuador, una aplicación del clima, un chatbot, un proyecto de ajedrez y un e-commerce con React y Django.",
            "Jorge ha desarrollado proyectos como un portfolio, un Quiz sobre Ecuador, una aplicación del clima, un chatbot, un proyecto de ajedrez y un e-commerce.",
            "Su portafolio de proyectos incluye aplicaciones web, un chatbot, una app del clima, un Quiz sobre Ecuador, ajedrez y un e-commerce.",
            "Entre sus principales proyectos destacan su portfolio React, Quiz sobre Ecuador, aplicación meteorológica, chatbot, ajedrez y e-commerce."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | CERTIFICACIÓN - MCP
    |--------------------------------------------------------------------------
    */

    {
        category: "certificacion_mcp",
        keywords: [
            "mcp",
            "certificacion mcp",
            "certificado mcp",
        ],
        responses: [
            "Jorge cuenta con una certificación relacionada con MCP de Anthropic, obtenida en 2026.",
            "En 2026, Jorge obtuvo una certificación relacionada con MCP de Anthropic.",
            "Jorge tiene una certificación de MCP asociada a Anthropic.",
            "Entre sus certificaciones se encuentra una relacionada con MCP de Anthropic, obtenida en 2026."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | CERTIFICACIÓN - LINUX
    |--------------------------------------------------------------------------
    */

    {
        category: "certificacion_linux",
        keywords: [
            "linux",
            "certificacion linux",
            "certificado linux",
        ],
        responses: [
            "Jorge cuenta con una certificación de Linux realizada en Udemy en 2024.",
            "En 2024, Jorge realizó una certificación de Linux en Udemy.",
            "Jorge tiene formación certificada en Linux mediante Udemy.",
            "Entre sus certificaciones se encuentra una relacionada con Linux, realizada en Udemy en 2024."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | CERTIFICACIÓN - FUNDAMENTALS OF AI
    |--------------------------------------------------------------------------
    */

    {
        category: "certificacion_ai",
        keywords: [
            "fundamentals of ai",
            "fundamentos de ia",
            "fundamentos de ai",
            "ibm",
            "certificacion ibm",
        ],
        responses: [
            "Jorge cuenta con la certificación Fundamentals of AI de IBM, obtenida en 2025.",
            "En 2025, Jorge obtuvo Fundamentals of AI de IBM.",
            "Jorge tiene una certificación de Fundamentals of AI otorgada por IBM.",
            "Entre sus certificaciones está Fundamentals of AI de IBM, correspondiente a 2025."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | CERTIFICACIÓN - AZ-900
    |--------------------------------------------------------------------------
    */

    {
        category: "certificacion_az900",
        keywords: [
            "az 900",
            "az900",
            "azure",
            "certificacion azure",
            "certificado azure",
        ],
        responses: [
            "Jorge cuenta con la certificación AZ-900 de UNIR, obtenida en 2023.",
            "En 2023, Jorge obtuvo la certificación AZ-900 de UNIR.",
            "Jorge tiene la certificación AZ-900 relacionada con Azure.",
            "Entre sus certificaciones se encuentra AZ-900, obtenida mediante UNIR en 2023."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | CERTIFICACIÓN - CLAUDE API
    |--------------------------------------------------------------------------
    */

    {
        category: "certificacion_claude",
        keywords: [
            "claude api",
            "certificacion claude",
            "certificado claude",
        ],
        responses: [
            "Jorge cuenta con una certificación relacionada con Claude API de Anthropic, obtenida en 2026.",
            "En 2026, Jorge obtuvo una certificación relacionada con Claude API de Anthropic.",
            "Jorge tiene una certificación relacionada con Claude API.",
            "Entre sus certificaciones está una relacionada con Claude API de Anthropic, correspondiente a 2026."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | CERTIFICACIONES GENERALES
    |--------------------------------------------------------------------------
    */

    {
        category: "certificaciones",
        keywords: [
            "certificaciones",
            "certificados",
            "certificacion",
            "certificado",
            "que certificaciones tiene",
            "que certificados tiene",
        ],
        responses: [
            "Jorge cuenta con certificaciones relacionadas con MCP, Linux, Fundamentals of AI, AZ-900 y Claude API.",
            "Entre las certificaciones de Jorge se encuentran MCP, Linux, Fundamentals of AI, AZ-900 y Claude API.",
            "Jorge tiene certificaciones en áreas como MCP, Linux, inteligencia artificial, Azure y Claude API.",
            "Su formación complementaria incluye certificaciones de MCP, Linux, Fundamentals of AI, AZ-900 y Claude API."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | INTERESES - LECTURA
    |--------------------------------------------------------------------------
    */

    {
        category: "intereses_lectura",
        keywords: [
            "lectura",
            "leer",
            "libros",
            "libro",
            "dan brown",
            "que libros lee",
            "que libros le gustan",
            "autor favorito",
        ],
        responses: [
            "A Jorge le gusta la lectura, especialmente las obras del escritor Dan Brown.",
            "Uno de los intereses de Jorge es la lectura, y disfruta especialmente de los libros de Dan Brown.",
            "Jorge tiene interés por la lectura y entre sus autores favoritos destaca Dan Brown.",
            "En cuanto a lectura, Jorge muestra especial interés por las obras de Dan Brown."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | INTERESES - MÚSICA
    |--------------------------------------------------------------------------
    */

    {
        category: "intereses_musica",
        keywords: [
            "musica",
            "que musica le gusta",
            "que musica escucha",
            "le gusta la musica",
            "escucha musica",
        ],
        responses: [
            "La música es uno de los intereses de Jorge.",
            "Jorge también tiene interés por la música.",
            "Entre las aficiones de Jorge se encuentra la música.",
            "La música forma parte de los intereses personales registrados de Jorge."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | INTERESES GENERALES
    |--------------------------------------------------------------------------
    */

    {
        category: "intereses",
        keywords: [
            "intereses",
            "hobbies",
            "pasatiempos",
            "aficiones",
            "que le gusta",
            "que le interesa",
        ],
        responses: [
            "Entre los intereses de Jorge están la lectura, especialmente las obras de Dan Brown, y la música.",
            "Jorge tiene interés por la lectura y la música. En literatura, muestra especial interés por Dan Brown.",
            "Entre sus principales intereses se encuentran la lectura y la música.",
            "Jorge disfruta de la lectura, especialmente de las obras de Dan Brown, y también tiene interés por la música."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | CONTACTO
    |--------------------------------------------------------------------------
    */

    {
        category: "contacto",
        keywords: [
            "contacto",
            "contactar",
            "contactar a jorge",
            "como contacto a jorge",
            "como puedo contactar",
            "como comunicarme con jorge",
            "correo de jorge",
            "email de jorge",
            "telefono de jorge",
        ],
        responses: [
            'Puedes contactar a Jorge desde la sección "Contacto" de su portfolio.',
            'Para comunicarte con Jorge, utiliza la sección "Contacto" de su portfolio.',
            'La forma indicada para contactar a Jorge es mediante la sección "Contacto" de su portfolio.',
            'Puedes encontrar las opciones de contacto de Jorge en la sección "Contacto" del portfolio.'
        ]
    },
];

/*
|--------------------------------------------------------------------------
| DETECCIÓN DE INTENCIONES ESPECIALES
|--------------------------------------------------------------------------
*/

const detectSpecialIntent = (text) => {

    /*
    |--------------------------------------------------------------------------
    | NOTA DEL MÁSTER
    |--------------------------------------------------------------------------
    */

    const asksForGrade = containsAny(text, [
        "nota",
        "promedio",
        "calificacion",
        "calificación",
        "media",
        "puntaje",
        "puntuacion",
        "puntuación",
    ]);

    const mentionsMaster = containsAny(text, [
        "master",
        "maestria",
        "posgrado",
        "unir",
    ]);

    if (asksForGrade && mentionsMaster) {
        return "nota_master";
    }

    /*
    |--------------------------------------------------------------------------
    | NOTA DE INGENIERÍA
    |--------------------------------------------------------------------------
    */

    const mentionsEngineering = containsAny(text, [
        "ingenieria",
        "ingenieria en sistemas",
        "carrera",
        "universidad indoamerica",
    ]);

    if (asksForGrade && mentionsEngineering) {
        return "nota_ingenieria";
    }

    /*
    |--------------------------------------------------------------------------
    | NOTAS GENERALES
    |--------------------------------------------------------------------------
    */

    if (asksForGrade) {
        return "notas";
    }

    return null;
};

/*
|--------------------------------------------------------------------------
| OBTENER RESPUESTA LOCAL
|--------------------------------------------------------------------------
*/

export const getLocalResponse = (message) => {
    if (typeof message !== "string") {
        return null;
    }

    const text = normalizeText(message);

    if (!text) {
        return null;
    }

    /*
    |--------------------------------------------------------------------------
    | 1. INTENCIONES ESPECIALES
    |--------------------------------------------------------------------------
    */

    const specialIntent = detectSpecialIntent(text);

    if (specialIntent) {
        const intent = LOCAL_RESPONSES.find(
            (item) => item.category === specialIntent
        );

        if (intent) {
            return randomPick(intent.responses);
        }
    }

    /*
    |--------------------------------------------------------------------------
    | 2. KEYWORDS NORMALES
    |--------------------------------------------------------------------------
    */

    for (const item of LOCAL_RESPONSES) {
        const matched = item.keywords.some((keyword) =>
            text.includes(normalizeText(keyword))
        );

        if (matched) {
            return randomPick(item.responses);
        }
    }

    /*
    |--------------------------------------------------------------------------
    | 3. NO HAY RESPUESTA LOCAL
    |--------------------------------------------------------------------------
    |
    | null = enviar la pregunta a Groq.
    |
    */

    return null;
};

export { normalizeText };
