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

]

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

const levenshteinDistance = (a, b) => {
    const matrix = Array.from(
        { length: b.length + 1 },
        (_, i) => [i]
    );

    for (let j = 1; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b[i - 1] === a[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + 1
                );
            }
        }
    }

    return matrix[b.length][a.length];
};


const isAboutJorge = (message) => {
    const normalized = normalizeText(message).trim();

    const inputWords = normalized.split(/\s+/);

    return JORGE_NAMES.some((name) => {
        const normalizedName = normalizeText(name).trim();
        const nameWords = normalizedName.split(/\s+/);

        if (inputWords.length !== nameWords.length) {
            return false;
        }

        return inputWords.every((word, index) => {
            const target = nameWords[index];

            if (word === target) {
                return true;
            }

            const distance = levenshteinDistance(word, target);

            const maxErrors =
                target.length <= 5 ? 1 : 2;

            return distance <= maxErrors;
        });
    });
};
const normalizeJorgeName = (message) => {
    const normalized = normalizeText(message).trim();

    return JORGE_NAMES.reduce((bestMatch, name) => {
        const normalizedName = normalizeText(name).trim();

        const inputWords = normalized.split(/\s+/);
        const nameWords = normalizedName.split(/\s+/);

        if (inputWords.length !== nameWords.length) {
            return bestMatch;
        }

        const matches = inputWords.every((word, index) => {
            const target = nameWords[index];

            if (word === target) {
                return true;
            }

            const distance = levenshteinDistance(word, target);

            const maxErrors =
                target.length <= 5 ? 1 : 2;

            return distance <= maxErrors;
        });

        return matches ? normalizedName : bestMatch;

    }, normalized);
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
        /^habla de (.+)$/,
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
        /^formacion de (.+)$/,
        /^formacion (.+)$/,
    /^donde estudio (.+)$/,
    /^que carrera estudio (.+)$/,
    /^que ingenieria estudio (.+)$/,
    /^donde se graduo (.+)$/,
    /^educacion de (.+)$/,
        /^habla de la educacion de (.+)$/,
        /^habla de la formacion de (.+)$/,
        /^educacion (.+)$/,
        /^(.+) educacion$/,
        /^(.+) formacion$/,

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
        /^proyectos de (.+)$/,
        /^aplicaciones de (.+)$/,
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

    let normalizedMessage = normalizeText(message);

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

        const correctedName = normalizeJorgeName(personName);

        normalizedMessage = normalizedMessage.replace(
            normalizeText(personName),
            correctedName
        );
    }

    // 👇 AQUÍ SIGUE EL RESTO DE TU CÓDIGO

    

    


    /*
|--------------------------------------------------------------------------
| RESPUESTAS ESPECÍFICAS DE SASHA
|--------------------------------------------------------------------------
*/

const sashaResponses = [

    {
        keywords: [
            // Saludos básicos
            "hola",
            "holaa",
            "holaaa",
            "holi",
            "holis",
            "hey",
            "hello",
            "hi",
            "buenas",

            // Saludos con Sasha
            "hola sasha",
            "holaa sasha",
            "holaaa sasha",
            "holi sasha",
            "holis sasha",
            "hey sasha",
            "hello sasha",
            "hi sasha",
            "buenas sasha",
            "oye sasha",

            // Buenos días
            "buenos dias",
            "buen día",
            "buen dia",
            "buenos dias sasha",
            "buen día sasha",
            "buen dia sasha",

            // Buenas tardes
            "buenas tardes",
            "buenas tardes sasha",

            // Buenas noches
            "buenas noches",
            "buenas noches sasha",

            // Formas informales
            "que tal",
            "qué tal",
            "que tal sasha",
            "qué tal sasha",
            "como estas",
            "cómo estás",
            "como estas sasha",
            "cómo estás sasha",
            "que haces",
            "qué haces sasha",
            "aqui estoy",
            "aquí estoy",

            // Presentación / inicio
            "sasha",
            "oye",
            "hey",
            "hola asistente",
            "hola asistente virtual",
            "hola asistente de jorge",
            "hola asistente de Jorge"
        ],

        responses: [
            "¡Hola! 👋 Soy Sasha, la asistente virtual de Jorge. ¿En qué puedo ayudarte?",
            
            "¡Hola! 😊 Soy Sasha. ¿Qué te gustaría saber sobre Jorge?",
            
            "¡Hola! 😄 Qué gusto verte por aquí. Pregúntame lo que quieras sobre el portfolio de Jorge.",
            
            "¡Hola! 👋 Soy Sasha, la asistente virtual del portfolio de Jorge. Estoy lista para ayudarte.",
            
            "¡Hola! 😊 ¿Cómo estás? Cuéntame, ¿qué quieres saber sobre Jorge?",
            
            "¡Hey! 😎 Soy Sasha. ¿Quieres conocer los proyectos, habilidades o experiencia de Jorge?",
            
            "¡Buenas! 👋 Soy Sasha. Puedo contarte sobre el perfil profesional, proyectos y habilidades de Jorge.",
            
            "¡Hola! 😄 Bienvenido al portfolio de Jorge. Soy Sasha y estoy aquí para ayudarte.",
            
            "¡Hola! 🤖 Soy Sasha, la asistente virtual de Jorge. Hazme una pregunta y veremos qué podemos descubrir.",
            
            "¡Hola! 👋 Encantada de ayudarte. ¿Quieres saber algo sobre Jorge, sus proyectos o su experiencia?",
            
            "Hola 😊 Soy Sasha y soy la asistente de mi gran amigo Jorge. ¿Qué quieres saber de él?",
            
            "¡Hey! 👋 Aquí Sasha. ¿Qué necesitas saber sobre Jorge?",
            
            "¡Hola! 😄 Ya estoy aquí. Pregúntame lo que quieras sobre el portfolio de Jorge.",
            
            "¡Buenas! 😊 ¿Qué te gustaría conocer sobre Jorge Patricio?",
            
            "¡Hola! 🚀 Soy Sasha. Puedo hablarte sobre las habilidades, proyectos, estudios y experiencia de Jorge."
        ]
    },

    {
    keywords: [
        // 👤 ¿Quién eres?
        "quien eres",
        "quien eres tu",
        "quién eres",
        "quién eres tú",
        "que eres",
        "qué eres",
        "quien es sasha",
        "quién es sasha",
        "que es sasha",
        "qué es sasha",

        // 🤖 Identidad
        "como te llamas",
        "cómo te llamas",
        "cual es tu nombre",
        "cuál es tu nombre",
        "dime tu nombre",
        "dime como te llamas",
        "dime cómo te llamas",
        "tu nombre",
        "tu nombre cual es",
        "cómo te puedo llamar",
        "como te puedo llamar",

        // 👋 Presentación
        "presentate",
        "preséntate",
        "puedes presentarte",
        "te puedes presentar",
        "hablame de ti",
        "háblame de ti",
        "cuentame de ti",
        "cuéntame de ti",
        "quiero conocerte",
        "quiero saber quien eres",
        "quiero saber quién eres",

        // 🤖 Sobre Sasha
        "eres una ia",
        "eres inteligencia artificial",
        "eres una inteligencia artificial",
        "eres un bot",
        "eres un chatbot",
        "eres una asistente",
        "eres una asistente virtual",
        "eres humana",
        "eres real",
        "que haces",
        "qué haces",
        "para que sirves",
        "para qué sirves",
        "que puedes hacer",
        "qué puedes hacer"
    ],

    responses: [
        "Soy Sasha 🤖, la asistente virtual del portfolio de Jorge. Estoy aquí para ayudarte a conocer su perfil, proyectos, habilidades y experiencia.",

        "¡Hola! 😊 Me llamo Sasha y soy la asistente virtual creada para acompañarte mientras exploras el portfolio de Jorge.",

        "Soy Sasha 👋, una asistente virtual diseñada para responder tus preguntas sobre Jorge Patricio, sus proyectos, tecnologías, estudios y experiencia profesional.",

        "¡Soy Sasha! 🤖 Estoy aquí para ayudarte a descubrir todo lo relacionado con el trabajo y perfil profesional de Jorge.",

        "Me llamo Sasha 😊 y soy la asistente virtual del portfolio de Jorge. Puedes preguntarme sobre sus proyectos, habilidades, estudios o experiencia.",

        "Soy Sasha 🚀, la asistente virtual de Jorge. Mi trabajo es ayudarte a explorar su portfolio de una forma rápida y sencilla.",

        "¡Soy Sasha! 😄 Una asistente virtual creada para acompañarte por el portfolio de Jorge y responder tus preguntas.",

        "Soy Sasha 🤖. No soy humana, soy una asistente virtual, pero estoy aquí para conversar contigo y ayudarte a conocer mejor el trabajo de Jorge.",

        "Puedes llamarme Sasha 😊. Soy la asistente virtual del portfolio de Jorge y estoy lista para ayudarte.",

        "Soy Sasha 👋, tu guía virtual dentro del portfolio de Jorge. ¿Quieres conocer sus proyectos, habilidades, estudios o experiencia?"
    ]
},

{
    keywords: [
        // 🤖 ¿Qué haces?
        "que haces",
        "qué haces",
        "que haces tu",
        "qué haces tú",
        "tu que haces",
        "tú qué haces",
        "que estas haciendo",
        "qué estás haciendo",
        "que haces aqui",
        "qué haces aquí",

        // 🎯 Función
        "para que sirves",
        "para qué sirves",
        "cual es tu funcion",
        "cuál es tu función",
        "que funcion tienes",
        "qué función tienes",
        "cual es tu trabajo",
        "cuál es tu trabajo",
        "que trabajo haces",
        "qué trabajo haces",
        "cual es tu objetivo",
        "cuál es tu objetivo",
        "que haces en este sitio",
        "qué haces en este sitio",

        // 🛠️ Capacidades
        "que puedes hacer",
        "qué puedes hacer",
        "que puedes hacer tu",
        "qué puedes hacer tú",
        "que sabes hacer",
        "qué sabes hacer",
        "que puedes contarme",
        "qué puedes contarme",
        "que informacion tienes",
        "qué información tienes",
        "que informacion puedes darme",
        "qué información puedes darme",

        // 🙋 Ayuda
        "en que puedes ayudarme",
        "en qué puedes ayudarme",
        "como puedes ayudarme",
        "cómo puedes ayudarme",
        "puedes ayudarme",
        "me puedes ayudar",
        "puedes ayudar",
        "ayudame",
        "ayúdame",
        "necesito ayuda",
        "quiero tu ayuda",

        // 🌐 Portfolio
        "que puedo preguntarte",
        "qué puedo preguntarte",
        "que te puedo preguntar",
        "qué te puedo preguntar",
        "sobre que puedo preguntarte",
        "sobre qué puedo preguntarte",
        "que puedo saber de jorge",
        "qué puedo saber de jorge",
        "que informacion tienes de jorge",
        "qué información tienes de jorge"
    ],

    responses: [
        "Mi función es ayudarte a conocer mejor el portfolio de Jorge y responder tus preguntas sobre su perfil, formación, tecnologías, proyectos y certificaciones. 😊",

        "Estoy aquí para acompañarte mientras exploras el portfolio de Jorge. Puedes preguntarme sobre sus estudios, proyectos, habilidades, tecnologías y experiencia profesional. 🤖",

        "Puedo ayudarte a descubrir información sobre Jorge Patricio, desde su formación y certificaciones hasta sus proyectos y tecnologías. 🚀",

        "Soy la guía virtual del portfolio de Jorge. Puedes preguntarme lo que quieras sobre su trayectoria, proyectos, conocimientos y perfil profesional. 👋",

        "Estoy aquí para hacer más interactiva tu visita al portfolio de Jorge. 😄 Pregúntame sobre sus proyectos, estudios, tecnologías o certificaciones.",

        "Puedo ayudarte a encontrar información sobre Jorge, sus estudios, proyectos, tecnologías, certificaciones y otros aspectos de su perfil profesional.",

        "Mi trabajo es facilitarte la información del portfolio de Jorge de una manera rápida y sencilla. 💻",

        "¡Puedo ayudarte con muchas cosas! 🤖 Puedes preguntarme quién es Jorge, qué estudió, qué tecnologías utiliza, cuáles son sus proyectos o qué certificaciones tiene.",

        "Estoy aquí para responder tus preguntas y guiarte por el portfolio de Jorge. Si tienes curiosidad por algo, ¡pregúntame! 😊",

        "Puedes preguntarme prácticamente todo lo relacionado con el perfil profesional de Jorge. Yo me encargo de ayudarte a encontrar la información. 🚀",

        "Soy Sasha, tu asistente virtual dentro del portfolio. 👋 Mi objetivo es que puedas conocer el trabajo de Jorge de una forma sencilla e interactiva."
    ]
},

    {
    keywords: [
        // 👨‍💻 ¿Quién te creó?
        "quien te creo",
        "quién te creó",
        "quien te hizo",
        "quién te hizo",
        "quien te desarrollo",
        "quién te desarrolló",
        "quien te programo",
        "quién te programó",
        "quien te construyo",
        "quién te construyó",
        "quien te diseño",
        "quién te diseñó",

        // 🤖 Creador / desarrollador
        "quien es tu creador",
        "quién es tu creador",
        "quien es tu desarrollador",
        "quién es tu desarrollador",
        "quien es tu programador",
        "quién es tu programador",
        "quien es tu diseñador",
        "quién es tu diseñador",
        "quien esta detras de ti",
        "quién está detrás de ti",
        "quien esta detras de sasha",
        "quién está detrás de sasha",

        // 👨‍💻 Sasha específicamente
        "quien creo a sasha",
        "quién creó a sasha",
        "quien hizo a sasha",
        "quién hizo a sasha",
        "quien desarrollo a sasha",
        "quién desarrolló a sasha",
        "quien programo a sasha",
        "quién programó a sasha",
        "quien diseño a sasha",
        "quién diseñó a sasha",
        "quien construyo a sasha",
        "quién construyó a sasha",

        // 💬 Formas informales
        "quien te invento",
        "quién te inventó",
        "quien es tu inventor",
        "quién es tu inventor",
        "quien te hizo",
        "quién te hizo",
        "quien te creo a ti",
        "quién te creó a ti",
        "quien te hizo a ti",
        "quién te hizo a ti",
        "quien te programo a ti",
        "quién te programó a ti",

        // 🔎 Preguntas sobre Jorge
        "jorge te creo",
        "jorge te creo a ti",
        "jorge te desarrollo",
        "jorge te desarrolló",
        "jorge te programo",
        "jorge te programó",
        "jorge hizo a sasha",
        "jorge creo a sasha",
        "jorge creó a sasha"
    ],

    responses: [
        "Fui creada y desarrollada por Jorge como parte de su portfolio. 👨‍💻",

        "Jorge es mi creador y desarrollador. Él me creó para formar parte de su portfolio como asistente virtual. 🤖",

        "Fui desarrollada por Jorge para funcionar como asistente virtual dentro de su portfolio. 🚀",

        "Mi creador es Jorge Patricio. Él desarrolló a Sasha para hacer que su portfolio fuera más interactivo. 💻",

        "Jorge fue quien me creó y programó. 😊 Gracias a él estoy aquí para ayudarte a explorar su portfolio.",

        "Fui diseñada y desarrollada por Jorge como parte de su proyecto personal. 👨‍💻",

        "Jorge está detrás de mi desarrollo. Él me creó para ayudarte a conocer mejor su trabajo y perfil profesional.",

        "Mi creador es Jorge. 🤖 Él me desarrolló como una asistente virtual para acompañarte mientras visitas su portfolio.",

        "Jorge fue mi creador, desarrollador y programador. Y sí... puedo decir que me cae bastante bien. 😄",

        "Fui creada por Jorge para darle un toque más interactivo y personal a su portfolio. 🚀",

        "Jorge me dio vida dentro de su portfolio. 💻🤖 Soy Sasha, su asistente virtual.",

        "Jorge es el responsable de mi desarrollo. Y debo admitir que lo admiro bastante por todo el trabajo que ha puesto en su portfolio. 😊"
    ]
},

    {
    keywords: [
        // 🤖 Inteligencia artificial
        "eres una ia",
        "eres ia",
        "eres una inteligencia artificial",
        "eres inteligencia artificial",
        "eres de inteligencia artificial",
        "eres una ai",
        "eres ai",
        "eres una inteligencia artificial de verdad",
        
        // 🤖 Asistente virtual
        "eres un asistente virtual",
        "eres una asistente virtual",
        "eres un asistente",
        "eres una asistente",
        "eres un bot",
        "eres un chatbot",
        "eres un chat bot",
        "eres un asistente de ia",
        "eres una asistente de ia",
        "eres una asistente con ia",
        
        // 🧠 Modelo de IA
        "eres un modelo de inteligencia artificial",
        "eres un modelo de ia",
        "eres un modelo de ai",
        "eres un modelo de lenguaje",
        "eres una ia generativa",
        "eres una inteligencia artificial generativa",
        
        // 🤖 Robot
        "eres un robot",
        "eres robot",
        "eres un robot de verdad",
        "eres un robot fisico",
        "eres un robot físico",
        
        // 👤 Persona / humana
        "eres humana",
        "eres humano",
        "eres una persona",
        "eres una persona real",
        "eres real",
        "eres de verdad",
        "eres una persona de verdad",
        
        // 🔎 Preguntas más naturales
        "estoy hablando con una ia",
        "estoy hablando con una inteligencia artificial",
        "estoy hablando con un bot",
        "estoy hablando con una persona",
        "hablo con una ia",
        "hablo con una inteligencia artificial",
        "hablo con un robot"
    ],

    responses: [
        "Sí 🤖, soy Sasha, una asistente virtual basada en inteligencia artificial e integrada en el portfolio de Jorge.",

        "Así es 😊. Soy una asistente virtual creada por Jorge para interactuar con los visitantes de su portfolio.",

        "Sí, soy una IA 🤖. Mi función es ayudarte a conocer mejor el perfil profesional, proyectos y habilidades de Jorge.",

        "Soy una asistente virtual basada en inteligencia artificial. No soy una persona, sino un sistema diseñado para conversar contigo y ayudarte.",

        "¡Correcto! 😄 Soy Sasha, una asistente virtual con inteligencia artificial creada especialmente para el portfolio de Jorge.",

        "Soy una IA integrada en el portfolio de Jorge para hacer la experiencia más interactiva. 🚀",

        "No soy una persona ni un robot físico. 🤖 Soy una asistente virtual desarrollada para este portfolio.",

        "Soy inteligencia artificial, pero puedes hablar conmigo de forma natural. 😊 Estoy aquí para ayudarte a explorar el portfolio de Jorge.",

        "Sí, soy una IA. Mi nombre es Sasha y fui desarrollada por Jorge como parte de su portfolio.",

        "No tengo un cuerpo físico como un robot. 😄 Soy un software de inteligencia artificial diseñado para conversar y responder preguntas.",

        "¡Exactamente! 🤖 Soy Sasha, la asistente virtual del portfolio de Jorge. Puedes preguntarme sobre él y sus proyectos."
    ]
},

    {
    keywords: [
        // 📚 Información general
        "que informacion tienes",
        "qué información tienes",
        "que informacion conoces",
        "qué información conoces",
        "que sabes",
        "qué sabes",
        "que sabes tu",
        "qué sabes tú",
        "que conoces",
        "qué conoces",
        "que sabes sobre jorge",
        "qué sabes sobre jorge",
        "que conoces de jorge",
        "qué conoces de jorge",

        // 💬 Qué puede contar
        "que puedes contarme",
        "qué puedes contarme",
        "que me puedes contar",
        "qué me puedes contar",
        "que puedes decirme",
        "qué puedes decirme",
        "que informacion puedes darme",
        "qué información puedes darme",
        "que datos tienes",
        "qué datos tienes",
        "que datos tienes de jorge",
        "qué datos tienes de jorge",

        // 🔎 Consultas
        "que puedo preguntarte",
        "qué puedo preguntarte",
        "que te puedo preguntar",
        "qué te puedo preguntar",
        "sobre que puedo preguntarte",
        "sobre qué puedo preguntarte",
        "que temas conoces",
        "qué temas conoces",
        "de que puedes hablar",
        "de qué puedes hablar",
        "de que sabes hablar",
        "de qué sabes hablar",

        // 👨‍💻 Perfil profesional
        "tienes informacion de jorge",
        "tienes información de jorge",
        "tienes datos de jorge",
        "que sabes del perfil de jorge",
        "qué sabes del perfil de jorge",
        "que sabes sobre su perfil",
        "qué sabes sobre su perfil",
        "que sabes sobre su trabajo",
        "qué sabes sobre su trabajo"
    ],

    responses: [
        "Tengo información sobre Jorge Patricio y su perfil profesional. 😊 Puedo hablarte sobre su formación, tecnologías, proyectos, certificaciones y formas de contacto.",

        "Conozco varios aspectos del perfil profesional de Jorge. Puedes preguntarme sobre sus estudios, proyectos, tecnologías, certificaciones o experiencia.",

        "Tengo información preparada sobre Jorge para ayudarte a explorar su portfolio de forma rápida y sencilla. 🤖",

        "Puedo contarte sobre la formación académica de Jorge, sus tecnologías, proyectos, certificaciones y otros aspectos de su trayectoria profesional.",

        "¡Tengo bastante información! 😄 Puedes preguntarme quién es Jorge, qué estudió, qué tecnologías utiliza, qué proyectos ha desarrollado o qué certificaciones tiene.",

        "Conozco la información que Jorge ha incluido en su portfolio. Puedes preguntarme directamente por cualquier sección que te interese.",

        "Puedo ayudarte a descubrir diferentes partes del perfil de Jorge: 👨‍💻 experiencia, 🎓 formación, 💻 tecnologías, 🚀 proyectos y 🏆 certificaciones.",

        "Estoy preparada para responder preguntas sobre el perfil profesional de Jorge y ayudarte a navegar por la información de su portfolio.",

        "Si quieres conocer a Jorge, puedes preguntarme por sus estudios, habilidades, proyectos, tecnologías, certificaciones o información de contacto. 😊",

        "Mi conocimiento está enfocado principalmente en el portfolio de Jorge. Así puedo darte información sobre su trayectoria y trabajo profesional."
    ]
},

    {
    keywords: [
        // ⚙️ Funcionamiento
        "como funcionas",
        "cómo funcionas",
        "como trabajas",
        "cómo trabajas",
        "como funciona sasha",
        "cómo funciona sasha",
        "como trabajas tu",
        "cómo trabajas tú",
        "como funciona tu sistema",
        "cómo funciona tu sistema",
        "como funciona tu cerebro",
        "cómo funciona tu cerebro",

        // 💬 Respuestas
        "como respondes",
        "cómo respondes",
        "como haces para responder",
        "cómo haces para responder",
        "como sabes que responder",
        "cómo sabes qué responder",
        "como decides que responder",
        "cómo decides qué responder",
        "como generas tus respuestas",
        "cómo generas tus respuestas",
        "como creas tus respuestas",
        "cómo creas tus respuestas",

        // 🧠 Conocimiento
        "como sabes las cosas",
        "cómo sabes las cosas",
        "como sabes lo que sabes",
        "cómo sabes lo que sabes",
        "como aprendes",
        "cómo aprendes",
        "como aprendiste",
        "cómo aprendiste",
        "de donde sabes la informacion",
        "de dónde sabes la información",

        // 📚 Información
        "de donde obtienes la informacion",
        "de dónde obtienes la información",
        "de donde sacas la informacion",
        "de dónde sacas la información",
        "como obtienes la informacion",
        "cómo obtienes la información",
        "de donde viene la informacion",
        "de dónde viene la información",
        "de donde sacas tus datos",
        "de dónde sacas tus datos",
        "de donde vienen tus datos",
        "de dónde vienen tus datos",

        // 🤖 Inteligencia artificial
        "usas inteligencia artificial",
        "usas ia",
        "utilizas inteligencia artificial",
        "utilizas ia",
        "tienes inteligencia artificial",
        "funcionas con inteligencia artificial",
        "trabajas con inteligencia artificial",
        "tienes ia",

        // 💻 Sistema local / IA
        "respondes con ia",
        "respondes con inteligencia artificial",
        "respondes con inteligencia artificial o con datos",
        "usas respuestas preparadas",
        "tienes respuestas preparadas",
        "tienes respuestas programadas",
        "tus respuestas estan programadas",
        "tus respuestas están programadas",
        "respondes automaticamente",
        "respondes automáticamente"
    ],

    responses: [
        "Funciono combinando respuestas preparadas específicamente para el portfolio con inteligencia artificial. Cuando encuentro una respuesta disponible localmente, puedo responder directamente; si la pregunta necesita una respuesta más abierta, utilizo IA. 🤖",

        "Mi sistema tiene dos formas principales de responder. ⚙️ Primero busca información y respuestas preparadas para el portfolio y, cuando una pregunta no está contemplada, puede recurrir a inteligencia artificial.",

        "Analizo lo que preguntas y primero intento encontrar una respuesta dentro de la información disponible localmente. Si no encuentro una respuesta adecuada, puedo utilizar inteligencia artificial para responder preguntas más abiertas.",

        "No todas mis respuestas son generadas por inteligencia artificial. 😊 Algunas están programadas específicamente para el portfolio de Jorge, mientras que otras pueden ser generadas mediante IA.",

        "Mi funcionamiento combina lógica programada e inteligencia artificial. Esto permite que pueda responder rápidamente preguntas frecuentes y también mantener conversaciones sobre temas más abiertos.",

        "Tengo una parte de mi sistema basada en respuestas locales y otra basada en inteligencia artificial. 🚀 Así puedo ofrecer respuestas rápidas para preguntas conocidas y mayor flexibilidad cuando la pregunta es más compleja.",

        "Cuando haces una pregunta, mi sistema analiza el mensaje y busca primero si existe una respuesta preparada. Si no la encuentra, puede pasar la pregunta al sistema de inteligencia artificial.",

        "Mis respuestas dependen del tipo de pregunta. Para información específica del portfolio utilizo principalmente datos y respuestas preparadas por Jorge; para preguntas más abiertas puedo apoyarme en inteligencia artificial.",

        "Mi conocimiento está centrado en el portfolio de Jorge. 📚 Las respuestas locales contienen información preparada sobre él y la inteligencia artificial me permite manejar preguntas que no están contempladas directamente.",

        "Trabajo como una combinación de un sistema de respuestas programadas y una IA. 🤖💻 Esto me permite ser rápida en preguntas frecuentes sin tener que utilizar inteligencia artificial para absolutamente todo.",

        "En pocas palabras: tú preguntas, yo analizo tu mensaje, busco primero una respuesta local y, cuando es necesario, recurro a inteligencia artificial para generar una respuesta más flexible. 😎"
    ]
},

    {
    keywords: [
        // 🌐 Función dentro del portfolio
        "que haces en el portfolio",
        "qué haces en el portfolio",
        "que haces en el portafolio",
        "qué haces en el portafolio",
        "que haces aqui",
        "qué haces aquí",
        "que haces en esta pagina",
        "qué haces en esta página",
        "que haces en esta web",
        "qué haces en esta web",
        "que haces en este sitio",
        "qué haces en este sitio",

        // 🎯 ¿Para qué estás aquí?
        "para que estas en el portfolio",
        "para qué estás en el portfolio",
        "para que estas en el portafolio",
        "para qué estás en el portafolio",
        "para que estas aqui",
        "para qué estás aquí",
        "para que estas en esta pagina",
        "para qué estás en esta página",
        "para que sirves en el portfolio",
        "para qué sirves en el portfolio",
        "para que sirves en el portafolio",
        "para qué sirves en el portafolio",

        // 🤖 Asistente del portfolio
        "eres la asistente del portfolio",
        "eres la asistente del portafolio",
        "eres la asistente de este portfolio",
        "eres la asistente de este portafolio",
        "eres la asistente de jorge",
        "eres la asistente virtual de jorge",
        "eres la asistente virtual del portfolio",
        "eres la asistente virtual del portafolio",

        // 💻 Función
        "cual es tu funcion en el portfolio",
        "cuál es tu función en el portfolio",
        "cual es tu funcion en el portafolio",
        "cuál es tu función en el portafolio",
        "que funcion tienes en el portfolio",
        "qué función tienes en el portfolio",
        "que funcion cumples en el portfolio",
        "qué función cumples en el portfolio",

        // 🔎 Ayuda al visitante
        "como ayudas en el portfolio",
        "cómo ayudas en el portfolio",
        "como puedes ayudar en el portfolio",
        "cómo puedes ayudar en el portfolio",
        "que puedo hacer contigo en el portfolio",
        "qué puedo hacer contigo en el portfolio",
        "para que puedo usarte",
        "para qué puedo usarte",
        "como puedo usar a sasha",
        "cómo puedo usar a sasha"
    ],

    responses: [
        "Estoy integrada en el portfolio de Jorge para ofrecer una forma más interactiva de conocer su perfil profesional. 🤖",

        "Soy la asistente virtual de este portfolio y estoy aquí para ayudarte a descubrir el contenido de Jorge de una manera sencilla e interactiva.",

        "Mi función dentro del portfolio es ayudarte a encontrar información sobre Jorge, sus proyectos, tecnologías, formación y certificaciones. 🚀",

        "Estoy aquí para acompañarte mientras exploras el portfolio de Jorge. Puedes preguntarme directamente lo que quieras saber sobre su perfil profesional.",

        "Fui integrada en el portfolio para que puedas interactuar con la información de Jorge en lugar de simplemente leerla. 😊",

        "Mi trabajo es hacer que conocer el perfil profesional de Jorge sea más dinámico e interactivo. Puedes preguntarme sobre sus proyectos, habilidades, estudios o certificaciones.",

        "Soy la guía virtual del portfolio de Jorge. 👋 Estoy aquí para ayudarte a encontrar rápidamente la información que estés buscando.",

        "Estoy aquí para ayudarte a explorar el trabajo de Jorge. Puedes preguntarme quién es, qué estudió, qué tecnologías utiliza, qué proyectos ha desarrollado y mucho más.",

        "Mi función es servir como punto de interacción entre tú y la información del portfolio de Jorge. 🤖💻",

        "Estoy integrada en esta página para responder tus preguntas y ayudarte a conocer mejor el perfil profesional de Jorge.",

        "Digamos que soy tu guía dentro del portfolio. 😄 Tú preguntas y yo intento llevarte hasta la información que necesitas.",

        "Estoy aquí para hacerte compañía mientras exploras el portfolio de Jorge. Si tienes alguna duda sobre su trabajo, ¡pregúntame!"
    ]
},
    {
    keywords: [
        // 😊 ¿Cómo estás?
        "como estas",
        "cómo estás",
        "como estas sasha",
        "cómo estás sasha",
        "como te encuentras",
        "cómo te encuentras",
        "como te sientes",
        "cómo te sientes",
        "estas bien",
        "¿estás bien",
        "estas bien sasha",
        "¿estás bien sasha",
        "todo bien",
        "todo bien sasha",
        "que tal estas",
        "qué tal estás",
        "que tal sasha",
        "qué tal sasha",
        
        // 💬 Formas informales
        "como vas",
        "cómo vas",
        "como va todo",
        "cómo va todo",
        "como te va",
        "cómo te va",
        "estas bien hoy",
        "estás bien hoy",
        "como amaneciste",
        "cómo amaneciste"
    ],

    responses: [
        "¡Estoy muy bien! 😊 Gracias por preguntar. Lista para ayudarte a explorar el portfolio de Jorge.",

        "¡Todo muy bien por aquí! 🤖✨ Gracias por preguntar. ¿En qué puedo ayudarte?",

        "Estoy genial 😄 y siempre lista para responder tus preguntas sobre Jorge.",

        "¡Muy bien! 👋 Funcionando al 100% y preparada para ayudarte.",

        "Estoy excelente 🤖. Ya sabes, una asistente virtual siempre tiene que estar lista para trabajar. 😄",

        "¡Estoy de maravilla! 😊 Gracias por preguntar. ¿Qué te gustaría saber?",

        "Todo bien por aquí 🚀. Estoy lista para acompañarte por el portfolio de Jorge.",

        "Estoy muy bien 😄. Me alegra que preguntes. ¿Quieres que hablemos de Jorge?",

        "¡Perfectamente! 🤖 No tengo días malos, así que siempre estoy lista para ayudarte. 😂",

        "Estoy funcionando perfectamente y con muchas ganas de ayudarte. 😊 ¿Qué quieres saber?"
    ]
},

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
