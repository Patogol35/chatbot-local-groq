/*
|--------------------------------------------------------------------------
| NORMALIZAR TEXTO
|--------------------------------------------------------------------------
*/

const normalizeText = (text) => {
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
| RESPUESTAS LOCALES
|--------------------------------------------------------------------------
|
| Cada tema puede tener hasta 4 respuestas.
| Se selecciona una de ellas de forma aleatoria.
|
*/

const LOCAL_RESPONSES = [

    /*
    |--------------------------------------------------------------------------
    | IDENTIDAD
    |--------------------------------------------------------------------------
    */
{
    category: "identidad",
    keywords: [
        // =========================================================
        // QUIÉN ES
        // =========================================================

        "quien es jorge",
        "quien es patricio",
        "quien es santamaria",
        "quien es cherrez",

        "quien es jorge patricio",
        "quien es jorge santamaria",
        "quien es jorge cherrez",
        "quien es patricio santamaria",
        "quien es patricio cherrez",
        "quien es santamaria cherrez",

        "quien es jorge patricio santamaria",
        "quien es jorge patricio cherrez",
        "quien es jorge santamaria cherrez",
        "quien es patricio santamaria cherrez",
        "quien es jorge patricio santamaria cherrez",


        // =========================================================
        // PRESÉNTAME
        // =========================================================

        "presentame a jorge",
        "presentame a patricio",
        "presentame a santamaria",
        "presentame a cherrez",

        "presentame a jorge patricio",
        "presentame a jorge santamaria",
        "presentame a jorge cherrez",
        "presentame a patricio santamaria",
        "presentame a patricio cherrez",
        "presentame a santamaria cherrez",

        "presentame a jorge patricio santamaria",
        "presentame a jorge patricio cherrez",
        "presentame a jorge santamaria cherrez",
        "presentame a patricio santamaria cherrez",
        "presentame a jorge patricio santamaria cherrez",


        // =========================================================
        // HÁBLAME / HABLA
        // =========================================================

        "hablame de jorge",
        "hablame de patricio",
        "hablame de santamaria",
        "hablame de cherrez",

        "hablame de jorge patricio",
        "hablame de jorge santamaria",
        "hablame de jorge cherrez",
        "hablame de patricio santamaria",
        "hablame de patricio cherrez",
        "hablame de santamaria cherrez",

        "hablame de jorge patricio santamaria",
        "hablame de jorge patricio cherrez",
        "hablame de jorge santamaria cherrez",
        "hablame de patricio santamaria cherrez",
        "hablame de jorge patricio santamaria cherrez",

        "habla de jorge",
        "habla de patricio",
        "habla de santamaria",
        "habla de cherrez",

        "habla de jorge patricio",
        "habla de jorge santamaria",
        "habla de jorge cherrez",
        "habla de patricio santamaria",
        "habla de patricio cherrez",
        "habla de santamaria cherrez",

        "habla de jorge patricio santamaria",
        "habla de jorge patricio cherrez",
        "habla de jorge santamaria cherrez",
        "habla de patricio santamaria cherrez",
        "habla de jorge patricio santamaria cherrez",


        // =========================================================
        // SOBRE
        // =========================================================

        "sobre jorge",
        "sobre patricio",
        "sobre santamaria",
        "sobre cherrez",

        "sobre jorge patricio",
        "sobre jorge santamaria",
        "sobre jorge cherrez",
        "sobre patricio santamaria",
        "sobre patricio cherrez",
        "sobre santamaria cherrez",

        "sobre jorge patricio santamaria",
        "sobre jorge patricio cherrez",
        "sobre jorge santamaria cherrez",
        "sobre patricio santamaria cherrez",
        "sobre jorge patricio santamaria cherrez",


        // =========================================================
        // PERFIL
        // =========================================================

        "perfil de jorge",
        "perfil de patricio",
        "perfil de santamaria",
        "perfil de cherrez",

        "perfil de jorge patricio",
        "perfil de jorge santamaria",
        "perfil de jorge cherrez",
        "perfil de patricio santamaria",
        "perfil de patricio cherrez",
        "perfil de santamaria cherrez",

        "perfil de jorge patricio santamaria",
        "perfil de jorge patricio cherrez",
        "perfil de jorge santamaria cherrez",
        "perfil de patricio santamaria cherrez",
        "perfil de jorge patricio santamaria cherrez",


        // =========================================================
        // DIME
        // =========================================================

        "dime de jorge",
        "dime de patricio",
        "dime de santamaria",
        "dime de cherrez",

        "dime sobre jorge",
        "dime sobre patricio",
        "dime sobre santamaria",
        "dime sobre cherrez",

        "dime sobre jorge patricio",
        "dime sobre jorge santamaria",
        "dime sobre jorge cherrez",
        "dime sobre patricio santamaria",
        "dime sobre patricio cherrez",
        "dime sobre santamaria cherrez",

        "dime sobre jorge patricio santamaria",
        "dime sobre jorge patricio cherrez",
        "dime sobre jorge santamaria cherrez",
        "dime sobre patricio santamaria cherrez",
        "dime sobre jorge patricio santamaria cherrez",

        "dime quien es jorge",
        "dime quien es patricio",
        "dime quien es jorge patricio",
        "dime quien es jorge santamaria",
        "dime quien es patricio santamaria",
        "dime quien es jorge patricio santamaria",
        "dime quien es jorge patricio cherrez",
        "dime quien es jorge santamaria cherrez",
        "dime quien es patricio santamaria cherrez",
        "dime quien es jorge patricio santamaria cherrez",


        // =========================================================
        // CUÉNTAME
        // =========================================================

        "cuentame de jorge",
        "cuentame de patricio",
        "cuentame de santamaria",
        "cuentame de cherrez",

        "cuentame sobre jorge",
        "cuentame sobre patricio",
        "cuentame sobre santamaria",
        "cuentame sobre cherrez",

        "cuentame sobre jorge patricio",
        "cuentame sobre jorge santamaria",
        "cuentame sobre jorge cherrez",
        "cuentame sobre patricio santamaria",
        "cuentame sobre patricio cherrez",
        "cuentame sobre santamaria cherrez",

        "cuentame sobre jorge patricio santamaria",
        "cuentame sobre jorge patricio cherrez",
        "cuentame sobre jorge santamaria cherrez",
        "cuentame sobre patricio santamaria cherrez",
        "cuentame sobre jorge patricio santamaria cherrez",

        "cuentame quien es jorge",
        "cuentame quien es patricio",
        "cuentame quien es jorge patricio",
        "cuentame quien es jorge santamaria",
        "cuentame quien es patricio santamaria",
        "cuentame quien es jorge patricio santamaria",
        "cuentame quien es jorge patricio cherrez",
        "cuentame quien es jorge santamaria cherrez",
        "cuentame quien es patricio santamaria cherrez",
        "cuentame quien es jorge patricio santamaria cherrez",


        // =========================================================
        // QUÉ SABES / INFORMACIÓN
        // =========================================================

        "que sabes de jorge",
        "que sabes de patricio",
        "que sabes de jorge patricio",
        "que sabes de jorge santamaria",
        "que sabes de patricio santamaria",
        "que sabes de jorge patricio santamaria",
        "que sabes de jorge patricio cherrez",
        "que sabes de jorge santamaria cherrez",
        "que sabes de patricio santamaria cherrez",
        "que sabes de jorge patricio santamaria cherrez",

        "informacion sobre jorge",
        "informacion sobre patricio",
        "informacion sobre jorge patricio",
        "informacion sobre jorge santamaria",
        "informacion sobre patricio santamaria",
        "informacion sobre jorge patricio santamaria",
        "informacion sobre jorge patricio cherrez",
        "informacion sobre jorge santamaria cherrez",
        "informacion sobre patricio santamaria cherrez",
        "informacion sobre jorge patricio santamaria cherrez",


        // =========================================================
        // QUIERO SABER
        // =========================================================

        "quiero saber quien es jorge",
        "quiero saber quien es patricio",
        "quiero saber quien es jorge patricio",
        "quiero saber quien es jorge santamaria",
        "quiero saber quien es patricio santamaria",
        "quiero saber quien es jorge patricio santamaria",
        "quiero saber quien es jorge patricio cherrez",
        "quiero saber quien es jorge santamaria cherrez",
        "quiero saber quien es patricio santamaria cherrez",
        "quiero saber quien es jorge patricio santamaria cherrez",


        // =========================================================
        // TODO SOBRE
        // =========================================================

        "todo sobre jorge",
        "todo sobre patricio",
        "todo sobre jorge patricio",
        "todo sobre jorge santamaria",
        "todo sobre patricio santamaria",
        "todo sobre jorge patricio santamaria",
        "todo sobre jorge patricio cherrez",
        "todo sobre jorge santamaria cherrez",
        "todo sobre patricio santamaria cherrez",
        "todo sobre jorge patricio santamaria cherrez",
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
        // Dónde estudió
        "donde estudio",
        "donde estudió",
        "en que universidad",
        "en qué universidad",
        "universidad de jorge",
        "universidad donde estudio",
        "universidad donde estudió",

        // Formación académica
        "formacion",
        "formación",
        "formacion academica",
        "formación académica",
        "educacion",
        "educación",
        "trayectoria academica",
        "trayectoria académica",
        "estudios de jorge",
        "estudios de jorge patricio",
        "que estudios tiene",
        "qué estudios tiene",

        // Preguntas generales
        "que estudio",
        "qué estudió",
        "que ha estudiado",
        "qué ha estudiado",
        "que carrera estudio",
        "qué carrera estudió",
        "que carrera tiene",
        "qué carrera tiene",
        "cual es su carrera",
        "cuál es su carrera",
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
        // Ingeniería
        "ingenieria",
        "ingeniería",
        "ingenieria en sistemas",
        "ingeniería en sistemas",
        "carrera de ingenieria",
        "carrera de ingeniería",
        "ingenieria que estudio",
        "ingeniería que estudió",
        "que ingenieria estudio",
        "qué ingeniería estudió",
        "donde estudio ingenieria",
        "dónde estudió ingeniería",
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
        // Máster / Maestría
        "master",
        "máster",
        "maestria",
        "maestría",
        "posgrado",
        "que master tiene",
        "qué máster tiene",
        "que maestria tiene",
        "qué maestría tiene",
        "que posgrado tiene",
        "qué posgrado tiene",
        "que estudio de posgrado tiene",
        "qué estudio de posgrado tiene",
        "donde hizo el master",
        "dónde hizo el máster",
        "donde estudio el master",
        "dónde estudió el máster",
    ],
    responses: [
        "Jorge realizó un Máster en Ingeniería de Software y Sistemas Informáticos en la Universidad Internacional de La Rioja (UNIR), España.",
        "Jorge tiene un Máster en Ingeniería de Software y Sistemas Informáticos realizado en la UNIR.",
        "A nivel de posgrado, Jorge cuenta con un Máster en Ingeniería de Software y Sistemas Informáticos por la UNIR, España.",
        "Jorge continuó su formación con un Máster en Ingeniería de Software y Sistemas Informáticos en la Universidad Internacional de La Rioja."
    ]
},
    /*
    |--------------------------------------------------------------------------
    | NOTAS
    |--------------------------------------------------------------------------
    */

    {
        category: "notas",
        keywords: [
    "promedio ingenieria",
    "promedio de ingenieria",
    "nota ingenieria",
    "nota de ingenieria",
    "promedio universidad",
],
        responses: [
            "Jorge obtuvo un promedio de 9 en Ingeniería en Sistemas.",
            "En Ingeniería en Sistemas, Jorge obtuvo un promedio final de 9.",
            "La nota promedio de Jorge en Ingeniería en Sistemas fue de 9.",
            "Jorge terminó su Ingeniería en Sistemas con un promedio de 9."
        ]
    },

    {
    category: "notas",
    keywords: [
        "promedio master",
        "nota master",
        "nota del master",
        "promedio del master",
        "promedio posgrado",
        "nota del posgrado",
        "promedio del posgrado",
    ],
    responses: [
        "Jorge obtuvo un promedio de 8.68 en el Máster en Ingeniería de Software y Sistemas Informáticos.",
        "En su Máster, Jorge obtuvo un promedio de 8.68.",
        "La media final de Jorge en el Máster en Ingeniería de Software y Sistemas Informáticos fue de 8.68.",
        "Jorge completó su Máster con un promedio de 8.68."
    ]
},

    {
        category: "notas",
        keywords: [
            "promedio",
            "notas",
            "nota",
            "calificacion",
            "calificaciones",
        ],
        responses: [
            "Jorge obtuvo un promedio de 9 en Ingeniería en Sistemas y un promedio de 8.68 en el Máster en Ingeniería de Software y Sistemas Informáticos.",
            "En su formación universitaria, Jorge obtuvo un 9 de promedio en Ingeniería en Sistemas y 8.68 en el Máster.",
            "Sus promedios registrados son 9 en Ingeniería en Sistemas y 8.68 en el Máster en Ingeniería de Software y Sistemas Informáticos.",
            "Jorge obtuvo excelentes resultados académicos: 9 en su Ingeniería en Sistemas y 8.68 en su Máster."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | TECNOLOGÍAS
    |--------------------------------------------------------------------------
    */


{
    category: "tecnologias",
    keywords: [
        // Frontend
        "frontend",
        "front end",
        "front-end",
        "desarrollo frontend",
        "desarrollo front end",
        "tecnologias frontend",
        "tecnologías frontend",
        "que usa en frontend",
        "qué usa en frontend",
        "que utiliza en frontend",
        "qué utiliza en frontend",

        "react",
        "react js",
        "reactjs",
        "javascript",
        "java script",
    ],
    responses: [
        "En frontend, Jorge trabaja principalmente con React y JavaScript.",
        "Para desarrollo frontend, Jorge utiliza principalmente React y JavaScript.",
        "Jorge tiene experiencia en frontend utilizando React y JavaScript.",
        "En la parte visual de sus proyectos, Jorge trabaja con React y JavaScript."
    ]
},

{
    category: "tecnologias",
    keywords: [
        // Backend
        "backend",
        "back end",
        "back-end",
        "desarrollo backend",
        "desarrollo back end",
        "tecnologias backend",
        "tecnologías backend",
        "que usa en backend",
        "qué usa en backend",
        "que utiliza en backend",
        "qué utiliza en backend",

        "django",
        "django python",
        "java",
        "spring",
        "spring boot",
    ],
    responses: [
        "En backend, Jorge trabaja principalmente con Django y Java.",
        "Para el desarrollo backend, Jorge utiliza Django y Java.",
        "Jorge cuenta con experiencia en backend utilizando Django y Java.",
        "En el lado del servidor, Jorge trabaja principalmente con Django y Java."
    ]
},

{
    category: "tecnologias",
    keywords: [
        // Bases de datos
        "base de datos",
        "bases de datos",
        "base datos",
        "bases datos",
        "tecnologias de base de datos",
        "tecnologías de base de datos",
        "que base de datos usa",
        "qué base de datos usa",
        "que bases de datos usa",
        "qué bases de datos usa",
        "que base de datos utiliza",
        "qué base de datos utiliza",

        "postgresql",
        "postgres",
        "mysql",
    ],
    responses: [
        "Jorge trabaja con PostgreSQL y MySQL.",
        "En bases de datos, Jorge utiliza principalmente PostgreSQL y MySQL.",
        "Jorge tiene experiencia trabajando con PostgreSQL y MySQL.",
        "Entre las tecnologías de bases de datos que utiliza Jorge están PostgreSQL y MySQL."
    ]
},

{
    category: "tecnologias",
    keywords: [
        // Deploy / Deployment
        "deploy",
        "deployment",
        "despliegue",
        "desplegar",
        "desplegar aplicaciones",
        "publicar aplicaciones",
        "hosting",
        "donde despliega",
        "dónde despliega",
        "donde aloja sus proyectos",
        "dónde aloja sus proyectos",
        "que usa para desplegar",
        "qué usa para desplegar",

        "render",
        "vercel",
        "aws",
    ],
    responses: [
        "Para despliegue, Jorge trabaja con servicios como Render, Vercel y AWS.",
        "Jorge utiliza Render, Vercel y AWS para desplegar sus aplicaciones.",
        "En cuanto a deployment, Jorge trabaja con plataformas como Render, Vercel y AWS.",
        "Para publicar sus proyectos, Jorge utiliza servicios como Render, Vercel y AWS."
    ]
},

{
    category: "tecnologias",
    keywords: [
        // Stack / tecnologías generales
        "tecnologias",
        "tecnología",
        "tecnologia",
        "stack",
        "tech stack",
        "stack tecnologico",
        "stack tecnológico",
        "herramientas",
        "herramientas que usa",
        "lenguajes",
        "lenguajes de programacion",
        "lenguajes de programación",

        "que tecnologias usa",
        "qué tecnologías usa",
        "que tecnologias utiliza",
        "qué tecnologías utiliza",
        "que herramientas usa",
        "qué herramientas usa",
        "con que tecnologias trabaja",
        "con qué tecnologías trabaja",
        "con que trabaja",
        "con qué trabaja",

        "tecnologias de jorge",
        "tecnologías de jorge",
        "stack de jorge",
        "herramientas de jorge",
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
    | PROYECTOS
    |--------------------------------------------------------------------------
    */

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
            "El portfolio de Jorge es una aplicación desarrollada con React para presentar su perfil profesional."
        ]
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
            "Jorge cuenta con una aplicación tipo Quiz enfocada en Ecuador."
        ]
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
            "Uno de sus proyectos es una aplicación del clima que muestra información meteorológica."
        ]
    },

    {
        category: "proyectos",
        keywords: [
            "chatbot",
            "chat bot",
            
        ],
        responses: [
            "Jorge desarrolló un chatbot y Sasha funciona como asistente virtual de su portfolio.",
            "Entre sus proyectos se encuentra este chatbot, donde Sasha actúa como asistente virtual.",
            "Jorge cuenta con un proyecto de chatbot integrado en su portfolio.",
            "Sasha forma parte del proyecto de chatbot desarrollado para el portfolio de Jorge."
        ]
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
            "Otro de sus proyectos está relacionado con ajedrez."
        ]
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
            "Su proyecto e-commerce combina React para el frontend y Django para el backend."
        ]
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
            "Entre sus principales proyectos destacan su portfolio React, Quiz sobre Ecuador, aplicación meteorológica, chatbot, ajedrez y e-commerce."
        ]
    },

    /*
    |--------------------------------------------------------------------------
    | CERTIFICACIONES
    |--------------------------------------------------------------------------
    */

    

{
    category: "certificaciones",
    keywords: [
        // MCP
        "mcp",
        "certificacion mcp",
        "certificación mcp",
        "certificado mcp",
        "certificado de mcp",
        "certificacion de mcp",
        "certificación de mcp",
        "que certificacion tiene de mcp",
        "qué certificación tiene de mcp",
        "cuando obtuvo mcp",
        "cuándo obtuvo mcp",
    ],
    responses: [
        "Jorge cuenta con una certificación relacionada con MCP de Anthropic, obtenida en 2026.",
        "En 2026, Jorge obtuvo una certificación relacionada con MCP de Anthropic.",
        "Jorge tiene una certificación de MCP asociada a Anthropic.",
        "Entre sus certificaciones se encuentra una relacionada con MCP de Anthropic, obtenida en 2026."
    ]
},

{
    category: "certificaciones",
    keywords: [
        // Linux
        "linux",
        "certificacion linux",
        "certificación linux",
        "certificado linux",
        "certificado de linux",
        "certificacion de linux",
        "certificación de linux",
        "que certificacion tiene de linux",
        "qué certificación tiene de linux",
        "cuando obtuvo linux",
        "cuándo obtuvo linux",
    ],
    responses: [
        "Jorge cuenta con una certificación de Linux realizada en Udemy en 2024.",
        "En 2024, Jorge realizó una certificación de Linux en Udemy.",
        "Jorge tiene formación certificada en Linux mediante Udemy.",
        "Entre sus certificaciones se encuentra una relacionada con Linux, realizada en Udemy en 2024."
    ]
},

{
    category: "certificaciones",
    keywords: [
        // Fundamentals of AI - IBM
        "fundamentals of ai",
        "fundamentos de ia",
        "fundamentos de inteligencia artificial",
        "fundamentals ai",
        "certificacion fundamentals of ai",
        "certificación fundamentals of ai",
        "certificado fundamentals of ai",
        "certificacion de fundamentals of ai",
        "certificación de fundamentals of ai",
        "ibm",
        "certificacion ibm",
        "certificación ibm",
        "certificado ibm",
        "certificacion de ibm",
        "certificación de ibm",
    ],
    responses: [
        "Jorge cuenta con la certificación Fundamentals of AI de IBM, obtenida en 2025.",
        "En 2025, Jorge obtuvo Fundamentals of AI de IBM.",
        "Jorge tiene una certificación de Fundamentals of AI otorgada por IBM.",
        "Entre sus certificaciones está Fundamentals of AI de IBM, correspondiente a 2025."
    ]
},

{
    category: "certificaciones",
    keywords: [
        // AZ-900 / Azure
        "az 900",
        "az-900",
        "az900",
        "azure",
        "certificacion az 900",
        "certificación az 900",
        "certificacion az-900",
        "certificación az-900",
        "certificado az 900",
        "certificado az-900",
        "certificacion azure",
        "certificación azure",
        "certificado azure",
        "certificado de azure",
        "que certificacion tiene de azure",
        "qué certificación tiene de azure",
    ],
    responses: [
        "Jorge cuenta con la certificación AZ-900 de UNIR, obtenida en 2023.",
        "En 2023, Jorge obtuvo la certificación AZ-900 de UNIR.",
        "Jorge tiene la certificación AZ-900 relacionada con Azure.",
        "Entre sus certificaciones se encuentra AZ-900, obtenida mediante UNIR en 2023."
    ]
},

{
    category: "certificaciones",
    keywords: [
        // Claude API
        "claude api",
        "claude",
        "certificacion claude api",
        "certificación claude api",
        "certificado claude api",
        "certificacion de claude api",
        "certificación de claude api",
        "certificacion claude",
        "certificación claude",
        "certificado claude",
        "que certificacion tiene de claude",
        "qué certificación tiene de claude",
    ],
    responses: [
        "Jorge cuenta con una certificación relacionada con Claude API de Anthropic, obtenida en 2026.",
        "En 2026, Jorge obtuvo una certificación relacionada con Claude API de Anthropic.",
        "Jorge tiene una certificación relacionada con Claude API.",
        "Entre sus certificaciones está una relacionada con Claude API de Anthropic, correspondiente a 2026."
    ]
},

{
    category: "certificaciones",
    keywords: [
        // Certificaciones en general
        "certificaciones",
        "certificados",
        "certificacion",
        "certificación",
        "que certificaciones tiene",
        "qué certificaciones tiene",
        "que certificados tiene",
        "qué certificados tiene",
        "que certificaciones posee",
        "qué certificaciones posee",
        "cuales son sus certificaciones",
        "cuáles son sus certificaciones",
        "que certificaciones ha obtenido",
        "qué certificaciones ha obtenido",
        "que certificados ha obtenido",
        "qué certificados ha obtenido",
        "que certificaciones tiene jorge",
        "qué certificaciones tiene jorge",
        "certificaciones de jorge",
        "certificados de jorge",
        "formacion certificada",
        "formación certificada",
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
    | INTERESES
    |--------------------------------------------------------------------------
    */

    {
        category: "intereses",
        keywords: [
            "lectura",
            "leer",
            "libros",
            "libro",
            "dan brown",
        ],
        responses: [
            "A Jorge le gusta la lectura, especialmente las obras del escritor Dan Brown.",
            "Uno de los intereses de Jorge es la lectura, y disfruta especialmente de los libros de Dan Brown.",
            "Jorge tiene interés por la lectura y entre sus autores favoritos destaca Dan Brown.",
            "En cuanto a lectura, Jorge muestra especial interés por las obras de Dan Brown."
        ]
    },

    {
        category: "intereses",
        keywords: [
            "musica",
            "que musica le gusta",
        ],
        responses: [
            "La música es uno de los intereses de Jorge.",
            "Jorge también tiene interés por la música.",
            "Entre las aficiones de Jorge se encuentra la música.",
            "La música forma parte de los intereses personales registrados de Jorge."
        ]
    },

    {
        category: "intereses",
        keywords: [
            "intereses",
            "hobbies",
            "pasatiempos",
            "aficiones",
            "que le gusta",
        ],
        responses: [
            "Entre los intereses de Jorge están la lectura, especialmente las obras de Dan Brown, y la música.",
            "Jorge disfruta de la lectura, particularmente de los libros de Dan Brown, y también tiene interés por la música.",
            "Sus principales intereses registrados son la lectura y la música, destacando especialmente su gusto por Dan Brown.",
            "Entre sus intereses se encuentran la literatura, especialmente Dan Brown, y la música."
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
        "contactarme",
        "comunicarme",
        "comunicar",
        "hablar con jorge",
        "contactar a jorge",
        "contactarme con jorge",
        "comunicarme con jorge",
        "como contacto",
        "como contactar",
        "como contactar a jorge",
        "como me contacto",
        "como me comunico",
        "como hablar con jorge",
        "donde contacto a jorge",
        "donde puedo contactar a jorge",
        "donde puedo comunicarme con jorge",
        "quiero contactar a jorge",
        "quiero hablar con jorge",
        "quiero comunicarme con jorge",
        "como escribirle a jorge",
        "donde escribirle a jorge",
        "redes sociales de jorge",
        "redes de jorge",
    ],
    responses: [
        'Puedes contactar a Jorge desde la sección "Contacto" de su portfolio.',
        'Para comunicarte con Jorge, utiliza la sección "Contacto" de su portfolio.',
        'Si quieres contactar a Jorge, encontrarás la opción correspondiente en la sección "Contacto".',
        'La forma indicada para contactar a Jorge es mediante la sección "Contacto" de su portfolio.'
    ]
},

    /*
|--------------------------------------------------------------------------
| SASHA
|--------------------------------------------------------------------------
*/

{
    category: "sasha",

    keywords: [
        "quien eres",
        "quien eres tu",
        "que eres",
        "que eres tu",
        "como te llamas",
        "cual es tu nombre",
        "tu nombre",
        "como te puedo llamar",
        "quien es sasha",
        "que es sasha",

        "que haces",
        "que haces tu",
        "para que sirves",
        "cual es tu funcion",
        "que funcion tienes",
        "para que fuiste creada",
        "para que te crearon",
        "que puedes hacer",
        "que puedes hacer tu",
        "en que puedes ayudarme",
        "como puedes ayudarme",

        "quien te creo",
        "quien te hizo",
        "quien te desarrollo",
        "quien es tu creador",
        "quien es tu desarrollador",
        "quien creo a sasha",
        "quien desarrollo a sasha",

        "eres una ia",
        "eres inteligencia artificial",
        "eres una inteligencia artificial",
        "eres un robot",
        "eres un chatbot",
        "eres un asistente virtual",
        "eres una asistente virtual",

        "como funcionas",
        "como trabajas",
        "como respondes",

        "que informacion tienes",
        "que informacion conoces",
        "que sabes",
        "que sabes tu"
    ],

    responses: [
        "Soy Sasha, la asistente virtual del portfolio de Jorge."
    ]
},
];

/*
|--------------------------------------------------------------------------
| NOMBRES VÁLIDOS DE JORGE
|--------------------------------------------------------------------------
*/

const JORGE_NAMES = [
    "jorge",
    "patricio",
    "jorge patricio",
    "jorge santamaria",
    "jorge cherrez",
    "patricio santamaria",
    "patricio cherrez",
    "santamaria cherrez",
    "jorge patricio santamaria",
    "jorge patricio cherrez",
    "jorge santamaria cherrez",
    "patricio santamaria cherrez",
    "jorge patricio santamaria cherrez",
];


/*
|--------------------------------------------------------------------------
| COMPROBAR SI ES JORGE
|--------------------------------------------------------------------------
*/

const isAboutJorge = (message) => {
    const normalized = normalizeText(message);

    return JORGE_NAMES.some((name) => {
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
| EXTRAER PERSONA DE LA CONSULTA
|--------------------------------------------------------------------------
|
| Ejemplos:
|
| "luis nota master"      → luis
| "carlos nota master"    → carlos
| "jorge nota master"     → jorge
| "que nota tiene luis"  → luis
|
|--------------------------------------------------------------------------
*/
const extractPersonName = (message) => {
    const normalized = normalizeText(message);
    const original = message.trim();

    /*
|--------------------------------------------------------------------------
| CONSULTAS GENERALES SIN NOMBRE
|--------------------------------------------------------------------------
*/

const generalQueries = [
    "nota del master",
    "promedio del master",
    "nota del posgrado",
    "promedio del posgrado",
];

if (generalQueries.includes(normalized)) {
    return null;
}

    /*
    |--------------------------------------------------------------------------
    | FORMATO: "nombre + pregunta"
    |--------------------------------------------------------------------------
    */

    const firstWordPatterns = [
        /^(.+?)\s+nota\s+master$/,
        /^(.+?)\s+promedio\s+master$/,
        /^(.+?)\s+nota$/,
        /^(.+?)\s+promedio$/,
        /^(.+?)\s+certificaciones$/,
        /^(.+?)\s+certificados$/,
        /^(.+?)\s+tecnologias$/,
        /^(.+?)\s+proyectos$/,
        /^(.+?)\s+estudio$/,
        /^(.+?)\s+master$/,
    ];

    for (const pattern of firstWordPatterns) {
        const match = normalized.match(pattern);

        if (match) {
            const name = match[1];
            const index = normalized.indexOf(name);

            return original.slice(index, index + name.length).trim();
        }
    }

    /*
    |--------------------------------------------------------------------------
    | FORMATO: "pregunta + nombre"
    |--------------------------------------------------------------------------
    */

    const questionPatterns = [
    /*
    |--------------------------------------------------------------------------
    | IDENTIDAD / INFORMACIÓN GENERAL
    |--------------------------------------------------------------------------
    */

    /^quien es (.+)$/,
    /^hablame de (.+)$/,
    /^dime sobre (.+)$/,
    /^informacion sobre (.+)$/,
    /^informacion de (.+)$/,
    /^datos de (.+)$/,
    /^que sabes de (.+)$/,
    /^que sabes sobre (.+)$/,

    /*
    |--------------------------------------------------------------------------
    | NOTAS
    |--------------------------------------------------------------------------
    */

    /^que nota tiene (.+)$/,
    /^cual es la nota de (.+)$/,
    /^cual es el promedio de (.+)$/,
    /^que promedio tiene (.+)$/,
    /^que nota obtuvo (.+)$/,
    /^que promedio obtuvo (.+)$/,
        /^nota del master de (.+)$/,
/^promedio del master de (.+)$/,
/^nota del posgrado de (.+)$/,
/^promedio del posgrado de (.+)$/,
        /^promedio de ingenieria de (.+)$/,
/^nota de ingenieria de (.+)$/,

    /*
|--------------------------------------------------------------------------
| FORMACIÓN
|--------------------------------------------------------------------------
*/

    /^que estudio (.+)$/,
    /^donde estudio (.+)$/,
    /^que carrera estudio (.+)$/,
    /^que ingenieria estudio (.+)$/,
    /^donde se graduo (.+)$/,
    /^educacion de (.+)$/,
        /^habla de la educacion de (.+)$/,
        /^habla de la formacion de (.+)$/,

    /*
    |--------------------------------------------------------------------------
    | MÁSTER
    |--------------------------------------------------------------------------
    */

    /^que master tiene (.+)$/,
    /^que maestria tiene (.+)$/,
    /^que posgrado tiene (.+)$/,
    /^donde hizo el master (.+)$/,
    /^donde hizo la maestria (.+)$/,

    /*
    |--------------------------------------------------------------------------
    | CERTIFICACIONES
    |--------------------------------------------------------------------------
    */

    /^que certificaciones tiene (.+)$/,
    /^que certificados tiene (.+)$/,
    /^que certificacion tiene (.+)$/,
    /^que certificacion obtuvo (.+)$/,
    /^que certificados obtuvo (.+)$/,

    /^certificado de (.+) del \d{4}$/,
    /^certificacion de (.+) del \d{4}$/,
    /^certificado de (.+)$/,
    /^certificacion de (.+)$/,

    /*
    |--------------------------------------------------------------------------
    | TECNOLOGÍAS
    |--------------------------------------------------------------------------
    */

    /^que tecnologias usa (.+)$/,
    /^que tecnologia usa (.+)$/,
    /^que stack usa (.+)$/,
    /^que lenguajes usa (.+)$/,

    /*
    |--------------------------------------------------------------------------
    | FRONTEND
    |--------------------------------------------------------------------------
    */

    /^que tecnologias frontend usa (.+)$/,
    /^que tecnologias front usa (.+)$/,
    /^que tecnologias de frontend usa (.+)$/,
    /^que tecnologias de front usa (.+)$/,

    /^que herramientas frontend usa (.+)$/,
    /^que herramientas front usa (.+)$/,
    /^que herramientas de frontend usa (.+)$/,
    /^que herramientas de front usa (.+)$/,

    /*
    |--------------------------------------------------------------------------
    | BACKEND
    |--------------------------------------------------------------------------
    */

    /^que tecnologias backend usa (.+)$/,
    /^que tecnologias back usa (.+)$/,
    /^que tecnologias de backend usa (.+)$/,
    /^que tecnologias de back usa (.+)$/,

    /^que herramientas backend usa (.+)$/,
    /^que herramientas back usa (.+)$/,
    /^que herramientas de backend usa (.+)$/,
    /^que herramientas de back usa (.+)$/,

    /*
    |--------------------------------------------------------------------------
    | PROYECTOS
    |--------------------------------------------------------------------------
    */

    /^que proyectos tiene (.+)$/,
    /^que proyectos ha realizado (.+)$/,
    /^que proyectos ha desarrollado (.+)$/,
    /^que ha desarrollado (.+)$/,
    /^que aplicaciones tiene (.+)$/,
];

    for (const pattern of questionPatterns) {
        const match = normalized.match(pattern);

        if (match) {
            const name = match[1];
            const index = normalized.indexOf(name);

            return original.slice(index, index + name.length).trim();
        }
    }

    return null;
};


/*
|--------------------------------------------------------------------------
| BUSCAR RESPUESTA LOCAL
|--------------------------------------------------------------------------
*/
export const getLocalResponse = (message) => {

    const personName = extractPersonName(message);

    /*
    |--------------------------------------------------------------------------
    | SI HAY UNA PERSONA
    |--------------------------------------------------------------------------
    */

    if (personName) {

        if (!isAboutJorge(personName)) {

            const responses = [
                `No tengo información sobre ${personName}.`,
                `No tengo datos registrados sobre ${personName}.`,
                `No dispongo de información sobre ${personName}.`,
                `No tengo información disponible sobre ${personName}.`
            ];

            const randomIndex = Math.floor(
                Math.random() * responses.length
            );

            return responses[randomIndex];
        }
    }

    const normalizedMessage = normalizeText(message);





    

    


    /*
|--------------------------------------------------------------------------
| RESPUESTAS ESPECÍFICAS DE SASHA
|--------------------------------------------------------------------------
*/

const sashaResponses = [

    {
    keywords: [
        "hola sasha",
        
        "hey sasha",
        "oye sasha",
        "buenas sasha",
        "buenos dias sasha",
        "buenas tardes sasha",
        "buenas noches sasha"
    ],
    responses: [
        "¡Hola! Soy Sasha 😊 ¿En qué puedo ayudarte?",
        "¡Hola! 👋 Soy Sasha, la asistente virtual del portfolio de Jorge. ¿Qué te gustaría saber?",
        "¡Hola! 😄 Soy Sasha. Pregúntame lo que quieras sobre el portfolio de Jorge.",
        "Hola soy Sasha y soy la asistente de mi gran amigo Jorge",
    ]
},

    {
        keywords: [
            "quien eres",
            "quien eres tu",
            "como te llamas",
            "cual es tu nombre",
            "tu nombre",
            "quien es sasha",
            "que es sasha"
        ],
        responses: [
            "Soy Sasha, la asistente virtual del portfolio de Jorge.",
            "Me llamo Sasha y soy la asistente virtual del portfolio de Jorge.",
            "Soy Sasha, una asistente virtual creada para acompañarte mientras exploras el portfolio de Jorge."
        ]
    },

    {
        keywords: [
            "que haces",
            "que haces tu",
            "para que sirves",
            "cual es tu funcion",
            "que funcion tienes",
            "que puedes hacer",
            "que puedes hacer tu",
            "en que puedes ayudarme",
            "como puedes ayudarme"
        ],
        responses: [
            "Mi función es ayudarte a conocer mejor el portfolio de Jorge y responder preguntas sobre su perfil, formación, tecnologías, proyectos y certificaciones.",
            "Estoy aquí para ayudarte a explorar el portfolio de Jorge de una manera más interactiva.",
            "Puedo ayudarte a encontrar información sobre Jorge, sus estudios, proyectos, tecnologías, certificaciones y otros aspectos de su perfil profesional."
        ]
    },

    {
        keywords: [
            "quien te creo",
            "quien te hizo",
            "quien te desarrollo",
            "quien es tu creador",
            "quien es tu desarrollador",
            "quien creo a sasha",
            "quien desarrollo a sasha"
        ],
        responses: [
            "Fui creada y desarrollada por Jorge como parte de su portfolio.",
            "Jorge es el desarrollador y creador de Sasha dentro de su portfolio.",
            "Fui desarrollada por Jorge para funcionar como asistente virtual de su portfolio.",
            "Jorge fue mi creador por eso lo admiro"
        ]
    },

    {
        keywords: [
            "eres una ia",
            "eres inteligencia artificial",
            "eres una inteligencia artificial",
            "eres un robot",
            "eres un chatbot",
            "eres un asistente virtual",
            "eres una asistente virtual"
        ],
        responses: [
            "Sí, soy una asistente virtual basada en inteligencia artificial.",
            "Soy una IA integrada en el portfolio de Jorge para interactuar con sus visitantes.",
            "No soy una persona ni un robot físico; soy una asistente virtual diseñada para este portfolio."
        ]
    },

    {
        keywords: [
            "que informacion tienes",
            "que informacion conoces",
            "que sabes",
            "que sabes tu",
            "que puedes contarme",
            "que me puedes contar",
            "que informacion puedes darme"
        ],
        responses: [
            "Puedo proporcionarte información sobre Jorge, incluyendo su formación, tecnologías, proyectos, certificaciones y contacto.",
            "Tengo información preparada sobre el perfil profesional de Jorge y puedo ayudarte a consultarla mediante preguntas.",
            "Puedes preguntarme directamente sobre los estudios, proyectos, tecnologías o certificaciones de Jorge."
        ]
    },

    {
        keywords: [
            "como funcionas",
            "como trabajas",
            "como respondes",
            "como sabes las cosas",
            "de donde obtienes la informacion",
            "como obtienes la informacion"
        ],
        responses: [
            "Funciono combinando respuestas preparadas específicamente para el portfolio con inteligencia artificial para responder preguntas que no estén contempladas localmente.",
            "Mi sistema prioriza la información del portfolio y utiliza inteligencia artificial cuando una pregunta necesita una respuesta más abierta.",
            "Analizo lo que preguntas y, cuando existe información disponible localmente, puedo responder directamente con ella."
        ]
    },

    {
        keywords: [
            "que haces en el portfolio",
            "que haces en el portafolio",
            "para que estas en el portfolio",
            "para que estas en el portafolio",
            "cual es tu funcion en el portfolio",
            "eres la asistente del portfolio",
            "eres la asistente del portafolio"
        ],
        responses: [
            "Estoy integrada en el portfolio de Jorge para ofrecer una forma más interactiva de conocer su perfil profesional.",
            "Soy la asistente virtual de este portfolio y estoy aquí para ayudarte a descubrir su contenido.",
            "Mi función dentro del portfolio es ayudarte a encontrar información sobre Jorge y sus proyectos de una manera más interactiva."
        ]
    }

];


/*
|--------------------------------------------------------------------------
| BUSCAR RESPUESTA ESPECÍFICA DE SASHA
|--------------------------------------------------------------------------
*/

for (const group of sashaResponses) {

    for (const keyword of group.keywords) {

        const normalizedKeyword = normalizeText(keyword);

        const regex = new RegExp(
            `(^|\\s)${normalizedKeyword.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            )}(?=\\s|$)`
        );

        if (regex.test(normalizedMessage)) {

            const responses = group.responses;

            const randomIndex = Math.floor(
                Math.random() * responses.length
            );

            return responses[randomIndex];
        }
    }
}




/*
|--------------------------------------------------------------------------
| PREGUNTAS TÉCNICAS / CONCEPTUALES
|--------------------------------------------------------------------------
*/

const technicalPatterns = [
    // PREGUNTAS CONCEPTUALES
    "de que trata",
    "de que se trata",
    "que trata",
    "que es",
    "que significa",
    "para que sirve",
    "para que se usa",
    "en que consiste",
    "en que consiste la certificacion",
    "en que consiste el certificado",
    "que se aprende",
    "que enseñan",
    "que temas incluye",
    "que contenido tiene",
    "que incluye la certificacion",
    "que incluye el certificado",

    // FORMAS ABREVIADAS
    "de q trata",
    "de q se trata",
    "q trata",
    "q es",
    "q significa",
    "para q sirve",
    "para q se usa",
    "en q consiste",
    "q se aprende",
    "q enseñan",
    "q temas incluye",
    "q contenido tiene",
    "q incluye la certificacion",
    "q incluye el certificado",

    // PROGRAMACIÓN
    "como programar",
    "como hacer",
    "como se hace",
    "como puedo hacer",
    "como puedo programar",
    "como imprimir",
    "como mostrar",
    "como declarar",
    "como crear",
    "como ejecutar",
    "como usar",
    "como utilizar",
    "como funciona",

    // CÓDIGO
    "ejemplo de codigo",
    "ejemplo de codigo en",
    "imprimir",
    "impresion",
    "codigo en",
    "programar en",
    "programacion en",
    "programacion",
    "codigo",
    "bucle",
    "variable",
    "funcion",
    "metodo",
    "clase",
    "array",
    "arreglo",
    "error de codigo",
    "error en el codigo"
];

const isTechnicalQuestion = technicalPatterns.some(pattern =>
    normalizedMessage.includes(pattern)
);

if (isTechnicalQuestion) {
    return null;
}
    


    

    

    
/*
|--------------------------------------------------------------------------
| CERTIFICACIONES POR AÑO
|--------------------------------------------------------------------------
*/

const certificationYears = {
    "2023": [
        "En 2023, Jorge obtuvo la certificación AZ-900 de UNIR."
    ],

    "2024": [
        "En 2024, Jorge realizó una certificación de Linux en Udemy."
    ],

    "2025": [
        "En 2025, Jorge obtuvo la certificación Fundamentals of AI de IBM."
    ],

    "2026": [
        "En 2026, Jorge obtuvo certificaciones relacionadas con MCP y Claude API de Anthropic."
    ]
};

const isCertificationQuery =
    normalizedMessage.includes("certificacion") ||
    normalizedMessage.includes("certificaciones") ||
    normalizedMessage.includes("certificado") ||
    normalizedMessage.includes("certificados");

if (isCertificationQuery) {

    const year = Object.keys(certificationYears).find(
        year => normalizedMessage.includes(year)
    );

    if (year) {

        const responses = certificationYears[year];

        const randomIndex = Math.floor(
            Math.random() * responses.length
        );

        return responses[randomIndex];
    }
}


let bestMatch = null;
let bestScore = 0;


/*
|--------------------------------------------------------------------------
| BUSCAR LA MEJOR RESPUESTA
|--------------------------------------------------------------------------
*/

for (const item of LOCAL_RESPONSES) {
    let score = 0;

    for (const keyword of item.keywords) {
        const normalizedKeyword = normalizeText(keyword);

        const regex = new RegExp(
            `(^|\\s)${normalizedKeyword.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            )}(?=\\s|$)`
        );

        if (regex.test(normalizedMessage)) {
            const words = normalizedKeyword.split(" ").length;

            score += words * 10;
        }
    }

    if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
    }
}
    

    /*
    |--------------------------------------------------------------------------
    | RESPUESTA LOCAL
    |--------------------------------------------------------------------------
    */

    if (bestMatch && bestScore >= 10) {
        const responses = bestMatch.responses;

        const randomIndex = Math.floor(
            Math.random() * responses.length
        );

        return responses[randomIndex];
    }

    return null;
};
