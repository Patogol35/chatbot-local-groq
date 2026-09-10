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

            
            "quien es",

            // =========================================================
            // PRESÉNTAME
            // =========================================================

            "presentame a",

            // =========================================================
            // HÁBLAME / HABLA
            // =========================================================

          //  "hablame de",
           // "habla de",

            // =========================================================
            // SOBRE
            // =========================================================

          //  "sobre",

            // =========================================================
            // PERFIL
            // =========================================================

            "perfil de",
            "perfil profesional de",

            // =========================================================
            // DIME
            // =========================================================

            "dime de",
            "dime sobre",
            "dime quien es",


            // =========================================================
            // CUÉNTAME
            // =========================================================

            "cuentame de",
            "cuentame sobre",
            "cuentame quien es",

            // =========================================================
            // QUÉ SABES / INFORMACIÓN
            // =========================================================

            "que sabes de",
            "informacion sobre",
            
            // =========================================================
            // QUIERO SABER
            // =========================================================

            "quiero saber quien es",

            // =========================================================
            // TODO SOBRE
            // =========================================================

            "todo sobre",

            // =========================================================
            // FORMAS NATURALES
            // =========================================================

            "hablame un poco de",
            "cuentame un poco de",
            "quiero conocer a",
            "me puedes hablar de",
            "puedes hablarme de",
            "puedes contarme sobre",
            "puedes contarme de",
            "me puedes contar sobre",
            "me puedes contar de",
            "quiero informacion de",
            "quiero informacion sobre",
            "dame informacion de",
            "dame informacion sobre",
            "dame datos de",
            "dame datos sobre",
            "conoces a",
            "sabes quien",

            // =========================================================
            // PROFESIÓN
            // =========================================================

            "a que se dedica jorge",
            "a que se dedica patricio",
            "a que se dedica jorge patricio",
            "que hace jorge profesionalmente",
            "que hace patricio profesionalmente",
            "profesion de jorge",
            "profesion de patricio",
            "profesionalmente quien es jorge",
            "profesionalmente quien es patricio",
            "que profesion tiene jorge",
            "que profesion tiene patricio",
            "cual es la profesion de jorge",
            "cual es la profesion de patricio"
        ],

        responses: [
            "Jorge Patricio Santamaría Cherrez es Ingeniero en Sistemas y Máster en Ingeniería de Software y Sistemas Informáticos.",
            "Jorge es Ingeniero en Sistemas por la Universidad Indoamérica y Máster en Ingeniería de Software y Sistemas Informáticos por la UNIR.",
            "Jorge Patricio es un profesional del área tecnológica enfocado en el desarrollo de software y sistemas informáticos.",
            "Jorge cuenta con formación en Ingeniería en Sistemas y un Máster en Ingeniería de Software y Sistemas Informáticos.",
            "Jorge es un profesional de software con formación universitaria y de posgrado orientada a la Ingeniería de Software.",
            "Jorge Patricio Santamaría Cherrez es el profesional detrás de este portfolio, donde presenta su formación, tecnologías y proyectos.",
            "Jorge es Ingeniero en Sistemas y Máster en Ingeniería de Software y Sistemas Informáticos, con interés en el desarrollo de soluciones tecnológicas.",
            "Si quieres conocer mejor a Jorge, puedo contarte sobre su formación, tecnologías, proyectos, certificaciones o experiencia profesional. 👨‍💻"
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

            "formacion",
            "su formacion",
            "formacion academica",
            "educacion",
            "educacion de",
            "su educacion",
            "formacion de",
            "formacion profesional",
            "trayectoria academica",
            "trayectoria profesional",

            "donde estudio",
            "en que universidad",
            "universidad de jorge",
            "universidad donde estudio",
            "en que universidad estudio",

            "estudios de",
            "que estudios tiene",
            "que ha estudiado",
            "que estudio",
            "que carrera estudio",
            "que carrera tiene",
            "cual es su carrera",
            "cual es la carrera de",

            "estudios universitarios",
            "estudios universitarios de",
            "formacion universitaria",
            "formacion universitaria de",
            "educacion universitaria",
            "educacion universitaria de",
            "trayectoria universitaria",
            "trayectoria universitaria de"
        ],

        responses: [
            "Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica, Ecuador. Posteriormente realizó un Máster en Ingeniería de Software y Sistemas Informáticos en la UNIR, España.",
            "Su formación universitaria comenzó con Ingeniería en Sistemas en la Universidad Indoamérica y continuó con un Máster en Ingeniería de Software y Sistemas Informáticos en la UNIR.",
            "Jorge cursó Ingeniería en Sistemas en Ecuador y posteriormente realizó un Máster en Ingeniería de Software y Sistemas Informáticos en España.",
            "A nivel universitario, Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica y después obtuvo un Máster en Ingeniería de Software y Sistemas Informáticos en la UNIR.",
            "La formación académica de Jorge combina Ingeniería en Sistemas y estudios de posgrado especializados en Ingeniería de Software.",
            "Jorge cuenta con formación universitaria en Ecuador y formación de posgrado en España."
        ]
    },


    {
        category: "formacion",
        keywords: [

            "ingenieria",
            "ingenieria en sistemas",
            "carrera de ingenieria",
            "carrera de ingenieria en sistemas",
            "ingenieria que estudio",
            "que ingenieria estudio",
            "que ingenieria tiene",
            "que carrera de ingenieria tiene",
            "donde estudio ingenieria",
            "donde estudio ingenieria en sistemas",
            "estudio ingenieria",
            "estudio ingenieria en sistemas",
            "es ingeniero",
            "es ingeniero en sistemas",
            "titulo de ingeniero",
            "titulo de ingenieria",
            "titulo universitario",
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
            "que estudio de posgrado tiene",

            "donde hizo el master",
            "donde estudio el master",
            "donde hizo la maestria",
            "donde estudio la maestria",
            "donde hizo el posgrado",
            "donde estudio el posgrado",

            "master de",
            "maestria de",
            "posgrado de",
            "master en ingenieria de software",
            "maestria en ingenieria de software",
            "ingenieria de software y sistemas informaticos",

            "que master estudio",
            "que maestria estudio",
            "que posgrado estudio",
            "que titulo de posgrado tiene",
            "que titulo tiene de posgrado"
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
            "promedio de universidad",
            "nota universidad",
            "nota de universidad",
            "promedio carrera",
            "promedio de carrera",
            "nota carrera",
            "nota de carrera",
            "promedio grado",
            "nota de grado"
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
            "nota maestria",
            "promedio maestria",
            "nota de maestria",
            "promedio de maestria",
            "promedio de la maestria",
            "nota de la maestria",
            "calificacion del master",
            "calificacion de la maestria"
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
            "notas de jorge",
            "promedio de jorge",
            "calificaciones de jorge",
            "resultado academico",
            "resultados academicos",
            "rendimiento academico",
            "rendimiento universitario"
        ],

        responses: [
            "Jorge obtuvo un promedio de 9 en Ingeniería en Sistemas y un promedio de 8.68 en el Máster en Ingeniería de Software y Sistemas Informáticos.",
            "En su formación universitaria, Jorge obtuvo un 9 de promedio en Ingeniería en Sistemas y 8.68 en el Máster.",
            "Sus promedios registrados son 9 en Ingeniería en Sistemas y 8.68 en el Máster en Ingeniería de Software y Sistemas Informáticos.",
            "Jorge obtuvo buenos resultados académicos: 9 en su Ingeniería en Sistemas y 8.68 en su Máster."
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

            "frontend",
            "front end",
            "front-end",
            "desarrollo frontend",
            "desarrollo front end",
            "tecnologias frontend",
            "que usa en frontend",
            "que utiliza en frontend",
            "tecnologias de frontend",
            "herramientas frontend",

            "react",
            "react js",
            "reactjs",
            "javascript",
            "java script",
            "js",

            "que usa para frontend",
            "que utiliza para frontend",
            "con que hace frontend",
            "con que desarrolla frontend",
            "tecnologias para frontend"
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

            "backend",
            "back end",
            "back-end",
            "desarrollo backend",
            "desarrollo back end",
            "tecnologias backend",
            "tecnologias de backend",
            "que usa en backend",
            "que utiliza en backend",
            "herramientas backend",

            "django",
            "django python",
            "python",
            "java",
            "spring",
            "spring boot",

            "que usa para backend",
            "que utiliza para backend",
            "con que hace backend",
            "con que desarrolla backend",
            "tecnologias para backend"
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

            "base de datos",
            "bases de datos",
            "base datos",
            "bases datos",

            "tecnologias de base de datos",
            "tecnologias de bases de datos",
            "herramientas de base de datos",

            "que base de datos usa",
            "que bases de datos usa",
            "que base de datos utiliza",
            "que bases de datos utiliza",

            "con que base de datos trabaja",
            "con que bases de datos trabaja",
            "que base de datos maneja",
            "que bases de datos maneja",

            "postgresql",
            "postgres",
            "mysql",

            "base de datos de",
            "bases de datos de"
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

            "deploy",
            "deployment",
            "despliegue",
            "desplegar",
            "desplegar aplicaciones",
            "publicar aplicaciones",
            "publicar proyectos",
            "hosting",

            "donde despliega",
            "donde aloja sus proyectos",
            "donde publica sus proyectos",
            "que usa para desplegar",
            "que usa para publicar",
            "que plataforma usa para desplegar",
            "que plataforma usa para publicar",

            "render",
            "vercel",
            "aws"
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

            "tecnologias",
            "tecnologia",
            "stack",
            "tech stack",
            "stack tecnologico",
            "herramientas",
            "herramientas que usa",
            "lenguajes",
            "lenguajes de programacion",

            "que tecnologias usa",
            "que tecnologias utiliza",
            "que herramientas usa",
            "que herramientas utiliza",
            "con que tecnologias trabaja",
            "con que trabaja",
            "con que herramientas trabaja",

            "tecnologias de",
            "stack de",
            "herramientas de",
            "lenguajes de",
            "stack tecnologico de",
            "tecnologias que domina",
            "tecnologias que conoce",
            "tecnologias con las que trabaja"
        ],

        responses: [
            "Jorge trabaja principalmente con React, JavaScript, Django, Java, PostgreSQL y MySQL. También utiliza Render, Vercel y AWS.",
            "Su stack incluye React y JavaScript en frontend, Django y Java en backend, además de PostgreSQL y MySQL.",
            "Entre las principales tecnologías de Jorge están React, JavaScript, Django, Java, PostgreSQL y MySQL, junto con Render, Vercel y AWS.",
            "Jorge cuenta con experiencia en frontend, backend, bases de datos y deployment utilizando diferentes tecnologías y herramientas modernas."
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
            "portafolio react",
            "portfolio de",
            "sitio web de",
            "pagina de",
            "pagina web de",
            "web de"
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
            "juego de preguntas",
            "juego de preguntas sobre ecuador",
            "preguntas sobre ecuador",
            "quiz de ecuador",
            "aplicacion quiz",
            "proyecto quiz"
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
            "aplicacion del clima",
            "app del clima",
            "weather app",
            "aplicacion meteorologica",
            "app meteorologica",
            "proyecto clima"
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
            "bot",
            "asistente virtual",
            "asistente de jorge",
            "sasha",
            "proyecto chatbot",
            "proyecto chat",
            "chatbot de"
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
            "juego de ajedrez",
            "aplicacion de ajedrez",
            "proyecto ajedrez",
            "proyecto de ajedrez",
            "chess app"
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
            "tienda virtual",
            "comercio electronico",
            "comercio digital",
            "aplicacion ecommerce",
            "proyecto ecommerce",
            "proyecto tienda",
            "tienda de"
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
            "que proyectos ha hecho",
            "que proyectos ha desarrollado",
            "que ha desarrollado",
            "que aplicaciones tiene",
            "que aplicaciones ha desarrollado",
            "aplicaciones",
            "trabajos realizados",
            "proyectos realizados",
            "proyectos de",
            "aplicaciones de",
            "principales proyectos",
            "principales aplicaciones"
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
            "mcp",
            "certificacion mcp",
            "certificado mcp",
            "certificado de mcp",
            "certificacion de mcp",
            "que certificacion tiene de mcp",
            "cuando obtuvo mcp",
            "certificacion anthropic",
            "certificado anthropic",
            "anthropic mcp"
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
            "linux",
            "certificacion linux",
            "certificado linux",
            "certificado de linux",
            "certificacion de linux",
            "que certificacion tiene de linux",
            "cuando obtuvo linux",
            "certificado linux udemy",
            "linux udemy",
            "certificacion linux udemy"
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
            "fundamentals of ai",
            "fundamentos de ia",
            "fundamentos de inteligencia artificial",
            "fundamentals ai",
            "certificacion fundamentals of ai",
            "certificado fundamentals of ai",
            "certificacion de fundamentals of ai",
            "ibm",
            "certificacion ibm",
            "certificado ibm",
            "certificacion de ibm",
            "certificado de ibm",
            "ia ibm",
            "inteligencia artificial ibm"
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
            "az 900",
            "az-900",
            "az900",
            "azure",
            "certificacion az 900",
            "certificacion az-900",
            "certificado az 900",
            "certificado az-900",
            "certificacion azure",
            "certificado azure",
            "certificado de azure",
            "que certificacion tiene de azure",
            "certificacion microsoft azure",
            "azure certification"
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
            "claude api",
            "claude",
            "certificacion claude api",
            "certificado claude api",
            "certificacion de claude api",
            "certificacion claude",
            "certificado claude",
            "que certificacion tiene de claude",
            "anthropic claude",
            "certificacion anthropic claude"
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
            "certificaciones",
            "certificados",
            "certificacion",
            "certificado",
            "que certificaciones tiene",
            "que certificados tiene",
            "que certificaciones posee",
            "cuales son sus certificaciones",
            "que certificaciones ha obtenido",
            "que certificados ha obtenido",
            "que certificaciones tiene",
            "certificaciones de",
            "certificados de",
            "formacion certificada",
            "certificaciones profesionales",
            "certificados profesionales"
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
            "daniel brown",
            "autor dan brown",
            "escritor dan brown",
            "que libros le gustan",
            "que libro le gusta",
            "que autores le gustan",
            "autores favoritos",
            "libros favoritos",
            "lecturas favoritas",
            "le gusta leer",
            "le gusta la lectura"
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
            "musica favorita",
            "que musica escucha",
            "que tipo de musica le gusta",
            "que genero musical le gusta",
            "generos musicales",
            "le gusta la musica",
            "interes por la musica"
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
            "que le gusta hacer",
            "que hace en su tiempo libre",
            "tiempo libre",
            "intereses personales",
            "gustos personales",
            "aficiones de jorge",
            "hobbies de jorge",
            "pasatiempos de jorge",
            "intereses de jorge"
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

            "hablar con",
            "contactar a",
            "contactarme con",
            "comunicarme con",

            "como contacto",
            "como contactar",
            "como contactar a",
            "como me contacto",
            "como me comunico",
            "como hablar con",

            "donde contacto a",
            "donde puedo contactar a",
            "donde puedo comunicarme con",

            "quiero contactar a",
            "quiero hablar con",
            "quiero comunicarme con",

            "como escribirle a",
            "donde escribirle a",
            "como puedo escribirle a",

            "redes sociales de",
            "redes de",
            "redes sociales",
            "redes profesionales de jorge",
             "tiene correo",
"tiene email",
"tiene correo electronico",
            "correo de jorge",
            "email de jorge",
            "correo electronico de jorge",
            "como enviarle un mensaje a",
            "como enviar mensaje a",
            "como comunicarme con el",
            "como contactar con el"
        ],

        responses: [
            'Puedes contactar a Jorge desde la sección "Contacto" de su portfolio.',
            'Para comunicarte con Jorge, utiliza la sección "Contacto" de su portfolio.',
            'Si quieres contactar a Jorge, encontrarás la opción correspondiente en la sección "Contacto".',
            'La forma indicada para contactar a Jorge es mediante la sección "Contacto" de su portfolio.',
            'Puedes encontrar las opciones de contacto de Jorge directamente en su portfolio.',
            'Si deseas comunicarte con Jorge, revisa la sección "Contacto", donde encontrarás los medios disponibles.'
        ]
    }

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
    // ============================================================
// PREGUNTAS TÉCNICAS: NO TRATAR COMO PERSONA
// ============================================================

    const technicalPrefixes = [
    // ============================================================
    // PROGRAMACIÓN GENERAL
    // ============================================================
    "programa",
    "programar",
    "programacion",
    "codigo",
    "codifica",
    "codificar",
    "ejemplo de codigo",
    "codigo en",
    "programar en",
    "programacion en",

    // ============================================================
    // MOSTRAR / IMPRIMIR
    // ============================================================
    "imprime",
    "imprimir",
    "impresion",
    "muestra",
    "mostrar",
    "escribe",
    "escribir",
    "como imprimir",
    "como mostrar",
    "como escribir",

    // ============================================================
    // CREAR / DECLARAR / DEFINIR
    // ============================================================
    "como crear",
    "como declarar",
    "como definir",
    "como ejecutar",

    "crea un",
    "crea una",
    "crear un",
    "crear una",
    "declara un",
    "declara una",
    "declarar un",
    "declarar una",
    "define un",
    "define una",
    "definir un",
    "definir una",

    // ============================================================
    // EJECUTAR / USAR
    // ============================================================
    "como ejecutar",
    "ejecuta un",
    "ejecuta una",
    "ejecutar un",
    "ejecutar una",

    "como usar",
    "como utilizar",
    "como se usa",
    "como se utiliza",

    // ============================================================
    // OPERACIONES MATEMÁTICAS
    // ============================================================
    "suma dos",
    "sumar dos",
    "suma tres",
    "sumar tres",
    "resta dos",
    "restar dos",
    "resta tres",
    "restar tres",
    "multiplica dos",
    "multiplicar dos",
    "divide dos",
    "dividir dos",
    "calcula el",
    "calcular el",
    "calcula la",
    "calcular la",

    // ============================================================
    // VARIABLES Y ESTRUCTURAS
    // ============================================================
    "declara una variable",
    "declarar una variable",
    "crear una variable",
    "crear un array",
    "crear un arreglo",
    "crear una lista",
    "variable",
    "variables",
    "array",
    "arreglo",
    "lista",
    "bucle",
    "ciclo",
    "for",
    "while",
    "if",
    "condicional",
    "funcion",
    "función",
    "metodo",
    "método",
    "clase",
    "objeto",

    // ============================================================
    // ERRORES / DEPURACIÓN
    // ============================================================
    "error de codigo",
    "error en el codigo",
    "error de código",
    "error en el código",
    "depura",
    "depurar",
    "debug",
    "debuggear",

    // ============================================================
    // PREGUNTAS TÉCNICAS
    // ============================================================
    "como programar",
    "como hacer",
    "como se hace",
    "como puedo hacer",
    "como puedo programar",
    "como funciona",
    "ejemplo de",
    "ejemplo"
];

const isTechnicalMessage = technicalPrefixes.some(prefix =>
    normalized === prefix ||
    normalized.startsWith(prefix + " ")
);

if (isTechnicalMessage) {
    return null;
}

    
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
    | TEMAS GENERALES SIN PERSONA
    |--------------------------------------------------------------------------
    */

    const generalTopics = [
    "ajedrez",
    "chess",
    "ecommerce",
    "e-commerce",
    "quiz",
    "clima",
    "chatbot",
    "chat bot",
    "portfolio",
    "portafolio",
    "proyecto de ajedrez",
    "proyecto ajedrez",
    "proyecto ecommerce",
    "proyecto quiz",
    "proyecto clima",
    "proyecto chatbot"
];

const generalPrefixes = [
    "habla de",
    "habla del",
    "hablame de",
    "hablame del",
    "habla sobre",
    "hablame sobre",
    "dime sobre",
    "dime del",
    "informacion sobre",
    "informacion de",
    "datos de",
    "que sabes de",
    "que sabes sobre",
    "quiero saber sobre"
];

for (const prefix of generalPrefixes) {
    if (normalized.startsWith(prefix + " ")) {

        const topic = normalized
            .slice(prefix.length)
            .trim();

        if (generalTopics.includes(topic)) {
            return null;
        }
    }
}

/*
|--------------------------------------------------------------------------
| FORMATO: "nombre + pregunta"
|--------------------------------------------------------------------------
*/

const firstWordPatterns = [
// ============================================================
// IDENTIDAD
// ============================================================

// Formas directas
/^(.+?)\s+quien\s+es$/,
/^(.+?)\s+informacion$/,
/^(.+?)\s+datos$/,
/^(.+?)\s+perfil$/,

// Formas naturales
/^(.+?)\s+presentame$/,
/^(.+?)\s+presentame\s+a$/,
/^(.+?)\s+hablame$/,
/^(.+?)\s+hablame\s+de$/,
/^(.+?)\s+habla\s+de$/,
/^(.+?)\s+cuentame$/,
/^(.+?)\s+cuentame\s+de$/,
/^(.+?)\s+cuentame\s+sobre$/,
/^(.+?)\s+dime\s+de$/,
/^(.+?)\s+dime\s+sobre$/,
/^(.+?)\s+que\s+sabes$/,
/^(.+?)\s+que\s+sabes\s+de$/,
/^(.+?)\s+quiero\s+saber$/,
/^(.+?)\s+quiero\s+saber\s+quien\s+es$/,
/^(.+?)\s+todo\s+sobre$/,

// Perfil
/^(.+?)\s+perfil\s+profesional$/,
/^(.+?)\s+perfil\s+profesional\s+de$/,

// Profesión
/^(.+?)\s+profesion$/,
/^(.+?)\s+profesionalmente$/,
/^(.+?)\s+que\s+hace$/,
/^(.+?)\s+a\s+que\s+se\s+dedica$/,

// ============================================================
// NOTAS / PROMEDIOS
// ============================================================

// ============================================================
// PERSONA + NOTA / PROMEDIO
// ============================================================

// Notas / promedios generales
/^(.+?)\s+tiene\s+nota$/,
/^(.+?)\s+tiene\s+notas$/,
/^(.+?)\s+tiene\s+promedio$/,
/^(.+?)\s+tiene\s+promedios$/,
/^(.+?)\s+tiene\s+calificacion$/,
/^(.+?)\s+tiene\s+calificaciones$/,

// Ingeniería
/^(.+?)\s+nota\s+ingenieria$/,
/^(.+?)\s+notas\s+ingenieria$/,
/^(.+?)\s+nota\s+de\s+ingenieria$/,
/^(.+?)\s+notas\s+de\s+ingenieria$/,
/^(.+?)\s+promedio\s+ingenieria$/,
/^(.+?)\s+promedios\s+ingenieria$/,
/^(.+?)\s+promedio\s+de\s+ingenieria$/,
/^(.+?)\s+promedios\s+de\s+ingenieria$/,

// Universidad
/^(.+?)\s+nota\s+universidad$/,
/^(.+?)\s+notas\s+universidad$/,
/^(.+?)\s+nota\s+de\s+universidad$/,
/^(.+?)\s+notas\s+de\s+universidad$/,
/^(.+?)\s+promedio\s+universidad$/,
/^(.+?)\s+promedios\s+universidad$/,
/^(.+?)\s+promedio\s+de\s+universidad$/,
/^(.+?)\s+promedios\s+de\s+universidad$/,

// Carrera
/^(.+?)\s+nota\s+carrera$/,
/^(.+?)\s+notas\s+carrera$/,
/^(.+?)\s+nota\s+de\s+carrera$/,
/^(.+?)\s+notas\s+de\s+carrera$/,
/^(.+?)\s+promedio\s+carrera$/,
/^(.+?)\s+promedios\s+carrera$/,
/^(.+?)\s+promedio\s+de\s+carrera$/,
/^(.+?)\s+promedios\s+de\s+carrera$/,

// Tercer nivel
/^(.+?)\s+nota\s+tercer\s+nivel$/,
/^(.+?)\s+notas\s+tercer\s+nivel$/,
/^(.+?)\s+nota\s+de\s+tercer\s+nivel$/,
/^(.+?)\s+notas\s+de\s+tercer\s+nivel$/,
/^(.+?)\s+promedio\s+tercer\s+nivel$/,
/^(.+?)\s+promedios\s+tercer\s+nivel$/,
/^(.+?)\s+promedio\s+de\s+tercer\s+nivel$/,
/^(.+?)\s+promedios\s+de\s+tercer\s+nivel$/,

// Cuarto nivel
/^(.+?)\s+nota\s+cuarto\s+nivel$/,
/^(.+?)\s+notas\s+cuarto\s+nivel$/,
/^(.+?)\s+nota\s+de\s+cuarto\s+nivel$/,
/^(.+?)\s+notas\s+de\s+cuarto\s+nivel$/,
/^(.+?)\s+promedio\s+cuarto\s+nivel$/,
/^(.+?)\s+promedios\s+cuarto\s+nivel$/,
/^(.+?)\s+promedio\s+de\s+cuarto\s+nivel$/,
/^(.+?)\s+promedios\s+de\s+cuarto\s+nivel$/,

// Máster
/^(.+?)\s+nota\s+master$/,
/^(.+?)\s+notas\s+master$/,
/^(.+?)\s+nota\s+del\s+master$/,
/^(.+?)\s+notas\s+del\s+master$/,
/^(.+?)\s+promedio\s+master$/,
/^(.+?)\s+promedios\s+master$/,
/^(.+?)\s+promedio\s+del\s+master$/,
/^(.+?)\s+promedios\s+del\s+master$/,

// Maestría
/^(.+?)\s+nota\s+maestria$/,
/^(.+?)\s+notas\s+maestria$/,
/^(.+?)\s+nota\s+de\s+la\s+maestria$/,
/^(.+?)\s+notas\s+de\s+la\s+maestria$/,
/^(.+?)\s+promedio\s+maestria$/,
/^(.+?)\s+promedios\s+maestria$/,
/^(.+?)\s+promedio\s+de\s+la\s+maestria$/,
/^(.+?)\s+promedios\s+de\s+la\s+maestria$/,

// Posgrado
/^(.+?)\s+nota\s+posgrado$/,
/^(.+?)\s+notas\s+posgrado$/,
/^(.+?)\s+nota\s+del\s+posgrado$/,
/^(.+?)\s+notas\s+del\s+posgrado$/,
/^(.+?)\s+nota\s+de\s+posgrado$/,
/^(.+?)\s+notas\s+de\s+posgrado$/,
/^(.+?)\s+promedio\s+posgrado$/,
/^(.+?)\s+promedios\s+posgrado$/,
/^(.+?)\s+promedio\s+del\s+posgrado$/,
/^(.+?)\s+promedios\s+del\s+posgrado$/,
/^(.+?)\s+promedio\s+de\s+posgrado$/,
/^(.+?)\s+promedios\s+de\s+posgrado$/,

// ============================================================
// NOTA / PROMEDIO + PERSONA
// ============================================================

// Ingeniería
/^nota\s+ingenieria\s+(.+)$/,
/^notas\s+ingenieria\s+(.+)$/,
/^nota\s+de\s+ingenieria\s+(.+)$/,
/^notas\s+de\s+ingenieria\s+(.+)$/,
/^promedio\s+ingenieria\s+(.+)$/,
/^promedios\s+ingenieria\s+(.+)$/,
/^promedio\s+de\s+ingenieria\s+(.+)$/,
/^promedios\s+de\s+ingenieria\s+(.+)$/,

// Máster
/^nota\s+master\s+(.+)$/,
/^notas\s+master\s+(.+)$/,
/^nota\s+del\s+master\s+(.+)$/,
/^notas\s+del\s+master\s+(.+)$/,
/^promedio\s+master\s+(.+)$/,
/^promedios\s+master\s+(.+)$/,
/^promedio\s+del\s+master\s+(.+)$/,
/^promedios\s+del\s+master\s+(.+)$/,

// Maestría
/^nota\s+maestria\s+(.+)$/,
/^notas\s+maestria\s+(.+)$/,
/^nota\s+de\s+la\s+maestria\s+(.+)$/,
/^notas\s+de\s+la\s+maestria\s+(.+)$/,
/^promedio\s+maestria\s+(.+)$/,
/^promedios\s+maestria\s+(.+)$/,
/^promedio\s+de\s+la\s+maestria\s+(.+)$/,
/^promedios\s+de\s+la\s+maestria\s+(.+)$/,

// Posgrado
/^nota\s+posgrado\s+(.+)$/,
/^notas\s+posgrado\s+(.+)$/,
/^nota\s+del\s+posgrado\s+(.+)$/,
/^notas\s+del\s+posgrado\s+(.+)$/,
/^nota\s+de\s+posgrado\s+(.+)$/,
/^notas\s+de\s+posgrado\s+(.+)$/,
/^promedio\s+posgrado\s+(.+)$/,
/^promedios\s+posgrado\s+(.+)$/,
/^promedio\s+del\s+posgrado\s+(.+)$/,
/^promedios\s+del\s+posgrado\s+(.+)$/,
/^promedio\s+de\s+posgrado\s+(.+)$/,
/^promedios\s+de\s+posgrado\s+(.+)$/,

// ============================================================
// FORMAS COLOQUIALES
// ============================================================

/^(.+?)\s+saco\s+de\s+promedio$/,
/^(.+?)\s+saco\s+de\s+nota$/,
/^(.+?)\s+obtuvo\s+de\s+promedio$/,
/^(.+?)\s+obtuvo\s+un\s+promedio$/,
/^(.+?)\s+obtuvo\s+una\s+calificacion$/,


// ============================================================
// FORMACIÓN / ESTUDIOS
// ============================================================

// Con su / sus
/^(.+?)\s+su\s+formacion$/,
/^(.+?)\s+su\s+formacion\s+academica$/,
/^(.+?)\s+su\s+educacion$/,
/^(.+?)\s+su\s+educacion\s+academica$/,
/^(.+?)\s+su\s+trayectoria$/,
/^(.+?)\s+su\s+trayectoria\s+academica$/,
/^(.+?)\s+sus\s+estudios$/,
/^(.+?)\s+su\s+carrera$/,
/^(.+?)\s+su\s+titulo$/,
/^(.+?)\s+su\s+titulo\s+universitario$/,

// Formas directas
/^(.+?)\s+estudio$/,
/^(.+?)\s+estudia$/,
/^(.+?)\s+ha\s+estudiado$/,
/^(.+?)\s+tiene\s+estudios$/,
/^(.+?)\s+tiene\s+carrera$/,
/^(.+?)\s+tiene\s+ingenieria$/,
/^(.+?)\s+tiene\s+titulo$/,
/^(.+?)\s+formacion$/,
/^(.+?)\s+educacion$/,
/^(.+?)\s+estudios$/,
/^(.+?)\s+formacion\s+academica$/,
/^(.+?)\s+educacion\s+academica$/,
/^(.+?)\s+trayectoria\s+academica$/,


// ============================================================
// MÁSTER / MAESTRÍA / POSGRADO
// ============================================================

// Directas
/^(.+?)\s+tiene\s+master$/,
/^(.+?)\s+tiene\s+maestria$/,
/^(.+?)\s+tiene\s+posgrado$/,
/^(.+?)\s+estudio\s+master$/,
/^(.+?)\s+estudio\s+maestria$/,
/^(.+?)\s+estudio\s+posgrado$/,
/^(.+?)\s+hizo\s+el\s+master$/,
/^(.+?)\s+hizo\s+la\s+maestria$/,
/^(.+?)\s+hizo\s+el\s+posgrado$/,
/^(.+?)\s+estudio\s+un\s+master$/,
/^(.+?)\s+estudio\s+una\s+maestria$/,
/^(.+?)\s+realizo\s+un\s+master$/,
/^(.+?)\s+realizo\s+una\s+maestria$/,
/^(.+?)\s+realizo\s+el\s+posgrado$/,
/^(.+?)\s+realizo\s+un\s+posgrado$/,

// Con su / sus
/^(.+?)\s+su\s+master$/,
/^(.+?)\s+su\s+maestria$/,
/^(.+?)\s+su\s+posgrado$/,
/^(.+?)\s+su\s+estudio$/,


    
// ============================================================
// CERTIFICACIONES
// ============================================================

// Certificaciones con año + persona
/^certificados\s+de\s+(.+?)\s+del\s+\d{4}$/,
/^certificaciones\s+de\s+(.+?)\s+del\s+\d{4}$/,
/^certificados\s+de\s+(.+?)\s+en\s+el\s+\d{4}$/,
/^certificaciones\s+de\s+(.+?)\s+en\s+el\s+\d{4}$/,
/^certificados\s+de\s+(.+?)\s+en\s+\d{4}$/,
/^certificaciones\s+de\s+(.+?)\s+en\s+\d{4}$/,

// Persona + certificaciones + año
/^(.+?)\s+certificados\s+\d{4}$/,
/^(.+?)\s+certificaciones\s+\d{4}$/,
/^(.+?)\s+certificado\s+\d{4}$/,
/^(.+?)\s+certificacion\s+\d{4}$/,

// Certificaciones con año + persona
/^certificados\s+del\s+\d{4}\s+de\s+(.+)$/,
/^certificaciones\s+del\s+\d{4}\s+de\s+(.+)$/,
/^certificado\s+del\s+\d{4}\s+de\s+(.+)$/,
/^certificacion\s+del\s+\d{4}\s+de\s+(.+)$/,

// Persona + certificaciones
/^(.+?)\s+su\s+certificado$/,
/^(.+?)\s+su\s+certificacion$/,
/^(.+?)\s+sus\s+certificados$/,
/^(.+?)\s+sus\s+certificaciones$/,
/^(.+?)\s+tiene\s+certificaciones$/,
/^(.+?)\s+tiene\s+certificacion$/,
/^(.+?)\s+tiene\s+certificados$/,
/^(.+?)\s+tiene\s+certificado$/,
/^(.+?)\s+obtuvo\s+certificaciones$/,
/^(.+?)\s+obtuvo\s+certificacion$/,
/^(.+?)\s+obtuvo\s+certificados$/,
/^(.+?)\s+obtuvo\s+certificado$/,
/^(.+?)\s+ha\s+obtenido\s+certificaciones$/,
/^(.+?)\s+ha\s+realizado\s+certificaciones$/,
/^(.+?)\s+cuenta\s+con\s+certificaciones$/,

// Certificaciones genéricas
/^(.+?)\s+certificados$/,
/^(.+?)\s+certificaciones$/,
/^(.+?)\s+certificado$/,
/^(.+?)\s+certificacion$/,


// ============================================================
// TECNOLOGÍAS / STACK
// ============================================================

/^(.+?)\s+tecnologias$/,
/^(.+?)\s+tecnologia$/,
/^(.+?)\s+sus\s+tecnologias$/,
/^(.+?)\s+sus\s+tecnologia$/,
/^(.+?)\s+su\s+stack$/,
/^(.+?)\s+sus\s+herramientas$/,
/^(.+?)\s+sus\s+lenguajes$/,
/^(.+?)\s+usa\s+tecnologias$/,
/^(.+?)\s+usa\s+tecnologia$/,
/^(.+?)\s+utiliza\s+tecnologias$/,
/^(.+?)\s+utiliza\s+tecnologia$/,
/^(.+?)\s+conoce\s+tecnologias$/,
/^(.+?)\s+maneja\s+tecnologias$/,
/^(.+?)\s+domina\s+tecnologias$/,
/^(.+?)\s+usa\s+stack$/,
/^(.+?)\s+utiliza\s+stack$/,
/^(.+?)\s+usa\s+lenguajes$/,
/^(.+?)\s+utiliza\s+lenguajes$/,
/^(.+?)\s+trabaja\s+con\s+tecnologias$/,
/^(.+?)\s+trabaja\s+con\s+herramientas$/,

// ============================================================
// TECNOLOGÍAS CONCRETAS
// ============================================================

/^(.+?)\s+react$/,
/^(.+?)\s+react\s+js$/,
/^(.+?)\s+reactjs$/,
/^(.+?)\s+javascript$/,
/^(.+?)\s+typescript$/,
/^(.+?)\s+python$/,
/^(.+?)\s+django$/,
/^(.+?)\s+java$/,
/^(.+?)\s+spring$/,
/^(.+?)\s+spring\s+boot$/,
/^(.+?)\s+postgresql$/,
/^(.+?)\s+postgres$/,
/^(.+?)\s+mysql$/,
/^(.+?)\s+render$/,
/^(.+?)\s+vercel$/,
/^(.+?)\s+aws$/,
/^(.+?)\s+html$/,
/^(.+?)\s+css$/,

// ============================================================
// HERRAMIENTAS
// ============================================================

/^(.+?)\s+postman$/,
/^(.+?)\s+linux$/,
/^(.+?)\s+virtualbox$/,
/^(.+?)\s+nextdns$/,
/^(.+?)\s+anydesk$/,
/^(.+?)\s+microsoft\s+office$/,
/^(.+?)\s+office$/,
/^(.+?)\s+git$/,

// ============================================================
// FRONTEND
// ============================================================

/^(.+?)\s+frontend$/,
/^(.+?)\s+usa\s+frontend$/,
/^(.+?)\s+usa\s+tecnologias\s+frontend$/,
/^(.+?)\s+usa\s+tecnologias\s+de\s+frontend$/,
/^(.+?)\s+usa\s+herramientas\s+frontend$/,
/^(.+?)\s+usa\s+herramientas\s+de\s+frontend$/,
/^(.+?)\s+usa\s+framework\s+frontend$/,
/^(.+?)\s+usa\s+frameworks\s+frontend$/,
/^(.+?)\s+trabaja\s+en\s+frontend$/,
/^(.+?)\s+trabaja\s+con\s+frontend$/,
/^(.+?)\s+tiene\s+experiencia\s+en\s+frontend$/,
/^(.+?)\s+experiencia\s+en\s+frontend$/,

// ============================================================
// BACKEND
// ============================================================

/^(.+?)\s+backend$/,
/^(.+?)\s+usa\s+backend$/,
/^(.+?)\s+usa\s+tecnologias\s+backend$/,
/^(.+?)\s+usa\s+tecnologias\s+de\s+backend$/,
/^(.+?)\s+usa\s+herramientas\s+backend$/,
/^(.+?)\s+usa\s+herramientas\s+de\s+backend$/,
/^(.+?)\s+usa\s+framework\s+backend$/,
/^(.+?)\s+usa\s+frameworks\s+backend$/,
/^(.+?)\s+trabaja\s+en\s+backend$/,
/^(.+?)\s+trabaja\s+con\s+backend$/,
/^(.+?)\s+tiene\s+experiencia\s+en\s+backend$/,
/^(.+?)\s+experiencia\s+en\s+backend$/,
// ============================================================
// PROYECTOS / APLICACIONES
// ============================================================

// Proyecto + nombre
/^(.+?)\s+proyecto\s+ajedrez$/,
/^(.+?)\s+proyecto\s+de\s+ajedrez$/,
/^(.+?)\s+proyecto\s+chatbot$/,
/^(.+?)\s+proyecto\s+chat\s+bot$/,
/^(.+?)\s+proyecto\s+ecommerce$/,
/^(.+?)\s+proyecto\s+e-commerce$/,
/^(.+?)\s+proyecto\s+quiz$/,
/^(.+?)\s+proyecto\s+clima$/,
/^(.+?)\s+proyecto$/,

// Proyectos concretos
/^(.+?)\s+ecommerce$/,
/^(.+?)\s+e-commerce$/,
/^(.+?)\s+tienda$/,
/^(.+?)\s+tienda\s+online$/,
/^(.+?)\s+tienda\s+virtual$/,
/^(.+?)\s+quiz$/,
/^(.+?)\s+clima$/,
/^(.+?)\s+chatbot$/,
/^(.+?)\s+chat\s+bot$/,
/^(.+?)\s+ajedrez$/,

// Proyectos / aplicaciones
/^(.+?)\s+proyectos$/,
/^(.+?)\s+sus\s+proyectos$/,
/^(.+?)\s+su\s+proyecto$/,
/^(.+?)\s+sus\s+aplicaciones$/,
/^(.+?)\s+sus\s+programas$/,
/^(.+?)\s+tiene\s+proyectos$/,
/^(.+?)\s+tiene\s+aplicaciones$/,
/^(.+?)\s+tiene\s+programas$/,
/^(.+?)\s+ha\s+realizado\s+proyectos$/,
/^(.+?)\s+ha\s+desarrollado\s+proyectos$/,
/^(.+?)\s+desarrollo\s+proyectos$/,
/^(.+?)\s+realizo\s+proyectos$/,
/^(.+?)\s+desarrollo\s+aplicaciones$/,
/^(.+?)\s+ha\s+desarrollado\s+aplicaciones$/,
/^(.+?)\s+ha\s+realizado\s+aplicaciones$/,
/^(.+?)\s+tiene\s+software$/,
/^(.+?)\s+ha\s+desarrollado\s+software$/,

// ============================================================
// CONTACTO
// ============================================================

// Contacto general
/^(.+?)\s+contacto$/,
/^(.+?)\s+contactar$/,
/^(.+?)\s+contactarme$/,
/^(.+?)\s+comunicar$/,
/^(.+?)\s+comunicarme$/,

// Correo / email
/^(.+?)\s+tiene\s+correo$/,
/^(.+?)\s+tiene\s+email$/,
/^(.+?)\s+tiene\s+correo\s+electronico$/,
/^(.+?)\s+correo$/,
/^(.+?)\s+email$/,
/^(.+?)\s+correo\s+electronico$/,
/^(.+?)\s+correo\s+electronico\s+de$/,

// Redes sociales
/^(.+?)\s+tiene\s+redes\s+sociales$/,
/^(.+?)\s+redes\s+sociales$/,
/^(.+?)\s+redes$/,
/^(.+?)\s+redes\s+sociales\s+de$/,

// Formas de contactar
/^(.+?)\s+como\s+contacto$/,
/^(.+?)\s+como\s+contactar$/,
/^(.+?)\s+como\s+contactar\s+a$/,
/^(.+?)\s+como\s+me\s+contacto$/,
/^(.+?)\s+como\s+me\s+comunico$/,
/^(.+?)\s+como\s+hablar\s+con$/,

// Comunicación
/^(.+?)\s+como\s+comunicarme$/,
/^(.+?)\s+como\s+comunicarme\s+con$/,
/^(.+?)\s+como\s+escribirle$/,
/^(.+?)\s+como\s+escribir$/,
/^(.+?)\s+como\s+puedo\s+escribirle$/,
/^(.+?)\s+como\s+puedo\s+contactar$/,
/^(.+?)\s+como\s+puedo\s+contactarme$/,

// Mensajes
/^(.+?)\s+como\s+enviarle\s+un\s+mensaje$/,
/^(.+?)\s+como\s+enviarle\s+un\s+mensaje$/,
/^(.+?)\s+como\s+enviar\s+mensaje$/,
/^(.+?)\s+como\s+enviarle\s+mensaje$/,

// Tiene información de contacto
/^(.+?)\s+tiene\s+contacto$/,
/^(.+?)\s+tiene\s+informacion\s+de\s+contacto$/,
/^(.+?)\s+tiene\s+datos\s+de\s+contacto$/,
/^(.+?)\s+tiene\s+medios\s+de\s+contacto$/,
/^(.+?)\s+tiene\s+formas\s+de\s+contacto$/,

// Contactar / comunicarse
/^(.+?)\s+quiero\s+contactar$/,
/^(.+?)\s+quiero\s+contactar\s+a$/,
/^(.+?)\s+quiero\s+hablar\s+con$/,
/^(.+?)\s+quiero\s+comunicarme$/,
/^(.+?)\s+quiero\s+comunicarme\s+con$/,
/^(.+?)\s+quiero\s+escribirle$/,
];


for (const pattern of firstWordPatterns) {

    const match = normalized.match(pattern);

    if (match) {

        const name = match[1].trim();

        const index = normalized.indexOf(name);

        return original
            .slice(index, index + name.length)
            .trim();
    }
}


// AQUÍ VA topicPersonPatterns
// ============================================================
// TEMA + PERSONA
// ============================================================

const topicPersonPatterns = [
    /^habla del (.+?) de (.+)$/,
    /^habla de (.+?) de (.+)$/,
    /^hablame del (.+?) de (.+)$/,
    /^hablame de (.+?) de (.+)$/,
];

for (const pattern of topicPersonPatterns) {

    const match = normalized.match(pattern);

    if (match) {

        const topic = match[1].trim();
        const name = match[2].trim();

        const knownTopics = [

            // Proyectos
            "ajedrez",
            "proyecto de ajedrez",
            "proyecto ajedrez",
            "ecommerce",
            "e-commerce",
            "proyecto ecommerce",
            "proyecto e-commerce",
            "quiz",
            "proyecto quiz",
            "clima",
            "proyecto clima",
            "chatbot",
            "chat bot",
            "proyecto chatbot",
            "proyecto chat bot",
            "portfolio",
            "portafolio",

            // Certificaciones
            "certificado",
            "certificados",
            "certificacion",
            "certificaciones",
            "certificado de",
            "certificacion de",

            // Diplomas
            "diploma",
            "diplomas"
        ];

        if (
            knownTopics.includes(topic) ||
            topic.startsWith("certificado ") ||
            topic.startsWith("certificacion ") ||
            topic.startsWith("diploma ")
        ) {

            const index = normalized.lastIndexOf(name);

            return original
                .slice(index, index + name.length)
                .trim();
        }
    }
}




    

    /*
    |--------------------------------------------------------------------------
    | FORMATO: "pregunta + nombre"
    |--------------------------------------------------------------------------
    */

    const questionPatterns = [

    // ============================================================
    // IDENTIDAD / INFORMACIÓN GENERAL
    // ============================================================

    // Pregunta + nombre
    /^quien es (.+)$/,
    /^habla de (.+)$/,
    /^hablame de (.+)$/,
    /^dime sobre (.+)$/,
    /^dime quien es (.+)$/,
    /^informacion sobre (.+)$/,
    /^informacion de (.+)$/,
    /^datos de (.+)$/,
    /^que sabes de (.+)$/,
    /^que sabes sobre (.+)$/,
    /^que informacion tienes de (.+)$/,
    /^que datos tienes de (.+)$/,
    /^conoces a (.+)$/,
    /^puedes hablarme de (.+)$/,
    /^puedes hablar de (.+)$/,
    /^quiero saber sobre (.+)$/,

    // Nombre + pregunta
    /^(.+) quien es$/,
    /^(.+) informacion$/,
    /^(.+) datos$/,
    /^(.+) perfil$/,


    // ============================================================
    // NOTAS / PROMEDIOS
    // ============================================================

    // Pregunta + nombre
    /^que nota tiene (.+)$/,
    /^cual es la nota de (.+)$/,
    /^que promedio tiene (.+)$/,
    /^cual es el promedio de (.+)$/,
    /^que nota obtuvo (.+)$/,
    /^que promedio obtuvo (.+)$/,
    /^que calificacion tiene (.+)$/,
    /^que calificacion obtuvo (.+)$/,
    /^cuanto saco (.+)$/,
    /^cuanto obtuvo (.+)$/,
    /^cuanto obtuvo de promedio (.+)$/,
    /^cuanto saco de promedio (.+)$/,
    /^nota del master de (.+)$/,
    /^nota de la maestria de (.+)$/,
    /^nota del posgrado de (.+)$/,
    /^promedio del master de (.+)$/,
    /^promedio de la maestria de (.+)$/,
    /^promedio del posgrado de (.+)$/,
    /^promedio de ingenieria de (.+)$/,
    /^nota de ingenieria de (.+)$/,

    // Nombre + pregunta
    /^(.+) tiene nota$/,
    /^(.+) tiene promedio$/,
    /^(.+) tiene calificacion$/,
    /^(.+) tiene nota del master$/,
    /^(.+) tiene nota de la maestria$/,
    /^(.+) tiene promedio del master$/,
    /^(.+) tiene promedio de la maestria$/,
    /^(.+) tiene nota del posgrado$/,
    /^(.+) tiene promedio del posgrado$/,
    /^(.+) saco de promedio$/,
    /^(.+) obtuvo de promedio$/,


    // ============================================================
    // FORMACIÓN / ESTUDIOS
    // ============================================================

    // Pregunta + nombre
    /^que estudio (.+)$/,
    /^que estudia (.+)$/,
    /^que ha estudiado (.+)$/,
    /^donde estudio (.+)$/,
    /^donde se graduo (.+)$/,
    /^donde se formo (.+)$/,
    /^que carrera estudio (.+)$/,
    /^que carrera tiene (.+)$/,
    /^que ingenieria estudio (.+)$/,
    /^que titulo tiene (.+)$/,
    /^que estudios tiene (.+)$/,
    /^cuales son sus estudios (.+)$/,
    /^formacion de (.+)$/,
    /^formacion (.+)$/,
    /^educacion de (.+)$/,
    /^educacion (.+)$/,
    /^estudios de (.+)$/,
    /^habla de la educacion de (.+)$/,
    /^habla de la formacion de (.+)$/,

    // Nombre + pregunta
    /^(.+) estudio$/,
    /^(.+) estudia$/,
    /^(.+) ha estudiado$/,
    /^(.+) tiene estudios$/,
    /^(.+) tiene carrera$/,
    /^(.+) tiene ingenieria$/,
    /^(.+) tiene titulo$/,
    /^(.+) su formacion$/,
    /^(.+) su educacion$/,
    /^(.+) su trayectoria$/,
    /^(.+) sus estudios$/,
    /^(.+) su carrera$/,
    /^(.+) su titulo$/,
    /^(.+) formacion$/,
    /^(.+) educacion$/,
    /^(.+) estudios$/,


    // ============================================================
    // MÁSTER / MAESTRÍA / POSGRADO
    // ============================================================

    // Pregunta + nombre
    /^que master tiene (.+)$/,
    /^que maestria tiene (.+)$/,
    /^que posgrado tiene (.+)$/,
    /^que master estudio (.+)$/,
    /^que maestria estudio (.+)$/,
    /^que posgrado estudio (.+)$/,
    /^donde hizo el master (.+)$/,
    /^donde hizo la maestria (.+)$/,
    /^donde estudio el master (.+)$/,
    /^donde estudio la maestria (.+)$/,
    /^tiene master (.+)$/,
    /^tiene maestria (.+)$/,
    /^tiene posgrado (.+)$/,
    /^master de (.+)$/,
    /^maestria de (.+)$/,
    /^posgrado de (.+)$/,

    // Nombre + pregunta
    /^(.+) tiene master$/,
    /^(.+) tiene maestria$/,
    /^(.+) tiene posgrado$/,
    /^(.+) estudio master$/,
    /^(.+) estudio maestria$/,
    /^(.+) estudio posgrado$/,
    /^(.+) hizo el master$/,
    /^(.+) hizo la maestria$/,
    /^(.+) hizo el posgrado$/,
    /^(.+) estudio un master$/,
    /^(.+) estudio una maestria$/,
    /^(.+) su master$/,
    /^(.+) su maestria$/,
    /^(.+) su posgrado$/,
    /^(.+) su estudio$/,


    // ============================================================
    // CERTIFICACIONES
    // ============================================================

    // Pregunta + nombre
    /^que certificaciones tiene (.+)$/,
    /^que certificacion tiene (.+)$/,
    /^que certificaciones obtuvo (.+)$/,
    /^que certificacion obtuvo (.+)$/,
    /^que certificados tiene (.+)$/,
    /^que certificado tiene (.+)$/,
    /^que certificados obtuvo (.+)$/,
    /^que certificado obtuvo (.+)$/,
    /^que certificaciones ha obtenido (.+)$/,
    /^que certificaciones ha realizado (.+)$/,
    /^cuales son sus certificaciones (.+)$/,
    /^cuales son los certificados de (.+)$/,
    /^certificados de (.+)$/,
    /^certificaciones de (.+)$/,
    /^certificado de (.+) del \d{4}$/,
    /^certificacion de (.+) del \d{4}$/,
    /^certificado de (.+)$/,
    /^certificacion de (.+)$/,

    // Nombre + pregunta
    /^(.+) tiene certificaciones$/,
    /^(.+) tiene certificacion$/,
    /^(.+) tiene certificados$/,
    /^(.+) tiene certificado$/,
    /^(.+) obtuvo certificaciones$/,
    /^(.+) obtuvo certificacion$/,
    /^(.+) obtuvo certificados$/,
    /^(.+) ha obtenido certificaciones$/,
    /^(.+) ha realizado certificaciones$/,
    /^(.+) cuenta con certificaciones$/,
    /^(.+) sus certificados$/,
    /^(.+) sus certificaciones$/,
    /^(.+) su certificado$/,
    /^(.+) su certificacion$/,
    /^(.+) certificados$/,
    /^(.+) certificaciones$/,


    // ============================================================
    // TECNOLOGÍAS / STACK
    // ============================================================

    // Pregunta + nombre
    /^que tecnologias usa (.+)$/,
    /^que tecnologia usa (.+)$/,
    /^que tecnologias utiliza (.+)$/,
    /^que tecnologia utiliza (.+)$/,
    /^que tecnologias conoce (.+)$/,
    /^que tecnologias maneja (.+)$/,
    /^que tecnologias domina (.+)$/,
    /^que stack usa (.+)$/,
    /^que stack utiliza (.+)$/,
    /^que lenguajes usa (.+)$/,
    /^que lenguajes utiliza (.+)$/,
    /^con que tecnologias trabaja (.+)$/,
    /^con que tecnologia trabaja (.+)$/,
    /^con que herramientas trabaja (.+)$/,
    /^tecnologias de (.+)$/,
    /^tecnologia de (.+)$/,
    /^stack de (.+)$/,
    /^herramientas de (.+)$/,
    /^lenguajes de (.+)$/,

    // Nombre + pregunta
    /^(.+) usa tecnologias$/,
    /^(.+) usa tecnologia$/,
    /^(.+) utiliza tecnologias$/,
    /^(.+) utiliza tecnologia$/,
    /^(.+) conoce tecnologias$/,
    /^(.+) maneja tecnologias$/,
    /^(.+) domina tecnologias$/,
    /^(.+) usa stack$/,
    /^(.+) utiliza stack$/,
    /^(.+) usa lenguajes$/,
    /^(.+) utiliza lenguajes$/,
    /^(.+) trabaja con tecnologias$/,
    /^(.+) trabaja con herramientas$/,
    /^(.+) sus tecnologias$/,
    /^(.+) sus tecnologia$/,
    /^(.+) su stack$/,
    /^(.+) sus herramientas$/,
    /^(.+) sus lenguajes$/,
    /^(.+) tecnologias$/,
    /^(.+) tecnologia$/,


    // ============================================================
    // FRONTEND
    // ============================================================

    // Pregunta + nombre
    /^que tecnologias frontend usa (.+)$/,
    /^que tecnologias front usa (.+)$/,
    /^que tecnologias de frontend usa (.+)$/,
    /^que tecnologias de front usa (.+)$/,
    /^que herramientas frontend usa (.+)$/,
    /^que herramientas front usa (.+)$/,
    /^que herramientas de frontend usa (.+)$/,
    /^que herramientas de front usa (.+)$/,
    /^que framework frontend usa (.+)$/,
    /^que frameworks frontend usa (.+)$/,
    /^que usa para frontend (.+)$/,
    /^que usa para el frontend (.+)$/,
    /^que usa para desarrollar frontend (.+)$/,

    // Nombre + pregunta
    /^(.+) usa frontend$/,
    /^(.+) usa tecnologias frontend$/,
    /^(.+) usa tecnologias de frontend$/,
    /^(.+) usa herramientas frontend$/,
    /^(.+) usa herramientas de frontend$/,
    /^(.+) usa framework frontend$/,
    /^(.+) usa frameworks frontend$/,


    // ============================================================
    // BACKEND
    // ============================================================

    // Pregunta + nombre
    /^que tecnologias backend usa (.+)$/,
    /^que tecnologias back usa (.+)$/,
    /^que tecnologias de backend usa (.+)$/,
    /^que tecnologias de back usa (.+)$/,
    /^que herramientas backend usa (.+)$/,
    /^que herramientas back usa (.+)$/,
    /^que herramientas de backend usa (.+)$/,
    /^que herramientas de back usa (.+)$/,
    /^que framework backend usa (.+)$/,
    /^que frameworks backend usa (.+)$/,
    /^que usa para backend (.+)$/,
    /^que usa para el backend (.+)$/,
    /^que usa para desarrollar backend (.+)$/,

    // Nombre + pregunta
    /^(.+) usa backend$/,
    /^(.+) usa tecnologias backend$/,
    /^(.+) usa tecnologias de backend$/,
    /^(.+) usa herramientas backend$/,
    /^(.+) usa herramientas de backend$/,
    /^(.+) usa framework backend$/,
    /^(.+) usa frameworks backend$/,


    // ============================================================
    // PROYECTOS / APLICACIONES
    // ============================================================

    // Pregunta + nombre
    /^que proyectos tiene (.+)$/,
    /^que proyectos ha realizado (.+)$/,
    /^que proyectos ha desarrollado (.+)$/,
    /^que proyectos desarrollo (.+)$/,
    /^que proyectos realizo (.+)$/,
    /^que ha desarrollado (.+)$/,
    /^que ha realizado (.+)$/,
    /^que aplicaciones tiene (.+)$/,
    /^que aplicaciones ha desarrollado (.+)$/,
    /^que aplicaciones ha realizado (.+)$/,
    /^que programas ha desarrollado (.+)$/,
    /^que software ha desarrollado (.+)$/,
    /^cuales son sus proyectos (.+)$/,
    /^cuales son los proyectos de (.+)$/,
    /^proyectos de (.+)$/,
    /^aplicaciones de (.+)$/,
    /^software de (.+)$/,

    // Nombre + pregunta
    /^(.+) tiene proyectos$/,
    /^(.+) tiene aplicaciones$/,
    /^(.+) tiene programas$/,
    /^(.+) ha realizado proyectos$/,
    /^(.+) ha desarrollado proyectos$/,
    /^(.+) desarrollo proyectos$/,
    /^(.+) realizo proyectos$/,
    /^(.+) desarrollo aplicaciones$/,
    /^(.+) ha desarrollado aplicaciones$/,
    /^(.+) ha realizado aplicaciones$/,
    /^(.+) tiene software$/,
    /^(.+) ha desarrollado software$/,
    /^(.+) sus proyectos$/,
    /^(.+) su proyecto$/,
    /^(.+) sus aplicaciones$/,
    /^(.+) sus programas$/,
    /^(.+) proyectos$/,

        // Proyecto + persona al final
/^ajedrez\s+de\s+(.+)$/,
/^proyecto\s+ajedrez\s+de\s+(.+)$/,
/^chatbot\s+de\s+(.+)$/,
/^chat\s+bot\s+de\s+(.+)$/,
/^ecommerce\s+de\s+(.+)$/,
/^e-commerce\s+de\s+(.+)$/,
/^quiz\s+de\s+(.+)$/,
/^clima\s+de\s+(.+)$/,


    // ============================================================
    // CONTACTO
    // ============================================================

    // Pregunta + nombre
    /^como contacto a (.+)$/,
    /^como contactar a (.+)$/,
    /^como puedo contactar a (.+)$/,
    /^como puedo comunicarme con (.+)$/,
    /^como me comunico con (.+)$/,
    /^como comunicarme con (.+)$/,
    /^donde puedo contactar a (.+)$/,
    /^donde contacto a (.+)$/,
    /^como contactar con (.+)$/,
    /^como puedo contactar con (.+)$/,
    /^tiene correo (.+)$/,
    /^cual es el correo de (.+)$/,
    /^cual es su correo (.+)$/,
    /^cual es el email de (.+)$/,
    /^cual es su email (.+)$/,
    /^cual es el correo electronico de (.+)$/,
    /^cual es su correo electronico (.+)$/,
    /^tiene email (.+)$/,
    /^tiene correo electronico (.+)$/,
    /^donde puedo escribirle a (.+)$/,
    /^donde puedo escribir a (.+)$/,
    /^como escribirle a (.+)$/,
    /^como escribir a (.+)$/,
    /^redes sociales de (.+)$/,
    /^cuales son sus redes sociales (.+)$/,
    /^como encontrar a (.+)$/,
    /^donde encontrar a (.+)$/,

    // Nombre + pregunta
/^(.+) tiene correo$/,
/^(.+) tiene email$/,
/^(.+) tiene correo electronico$/,
/^(.+) tiene redes sociales$/,
/^(.+) tiene contacto$/,
/^(.+) tiene informacion de contacto$/,
/^(.+) tiene datos de contacto$/,
/^(.+) tiene medios de contacto$/,
/^(.+) tiene formas de contacto$/,

/^(.+) como contacto$/,
/^(.+) como contactar$/,
/^(.+) como contactar a$/,
/^(.+) como me contacto$/,
/^(.+) como me comunico$/,
/^(.+) como me comunico con$/,
/^(.+) como hablar con$/,
/^(.+) como comunicarme$/,
/^(.+) como comunicarme con$/,
/^(.+) como escribirle$/,
/^(.+) como escribir$/,
/^(.+) como puedo escribirle$/,
/^(.+) como puedo contactar$/,
/^(.+) como puedo contactarme$/,

/^(.+) quiero contactar$/,
/^(.+) quiero contactar a$/,
/^(.+) quiero hablar con$/,
/^(.+) quiero comunicarme$/,
/^(.+) quiero comunicarme con$/,
/^(.+) quiero escribirle$/,
];


for (const pattern of questionPatterns) {

    const match = normalized.match(pattern);

    if (match) {

        const name = match[1];

        const index = normalized.indexOf(name);

        return original
            .slice(index, index + name.length)
            .trim();
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
        "estás bien",
        "estas bien sasha",
        "estás bien sasha",
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
        "cómo amaneciste",

        // 😄 Otras formas naturales
        "como te encuentras hoy",
        "cómo te encuentras hoy",
        "como te sientes hoy",
        "cómo te sientes hoy",
        "todo esta bien",
        "todo está bien",
        "todo bien por ahi",
        "todo bien por ahí",
        "como va",
        "cómo va",
        "que tal vas",
        "qué tal vas",
        "como sigues",
        "cómo sigues"
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

        "Estoy funcionando perfectamente y con muchas ganas de ayudarte. 😊 ¿Qué quieres saber?",

        "¡Todo en orden! 😎 Sasha está funcionando perfectamente y lista para ayudarte.",

        "Muy bien por aquí 🤖✨. Gracias por preguntar. ¿Qué quieres descubrir sobre Jorge?",

        "¡De maravilla! 🚀 Lista, activa y preparada para responder tus preguntas."
    ]
},

];


/*
|--------------------------------------------------------------------------
| BUSCAR LA MEJOR RESPUESTA DE SASHA
|--------------------------------------------------------------------------
*/

let bestSashaMatch = null;
let bestSashaScore = 0;

for (const group of sashaResponses) {

    for (const keyword of group.keywords) {

        const normalizedKeyword = normalizeText(keyword);

        const escapedKeyword = normalizedKeyword.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

        const regex = new RegExp(
            `(^|\\s)${escapedKeyword}(?=\\s|$)`
        );

        if (regex.test(normalizedMessage)) {

            const words = normalizedKeyword.split(/\s+/).length;

            /*
            | Más palabras = coincidencia más específica
            */
            const score = words * 10 + normalizedKeyword.length;

            if (score > bestSashaScore) {

                bestSashaScore = score;
                bestSashaMatch = group;
            }
        }
    }
}

if (bestSashaMatch) {

    const responses = bestSashaMatch.responses;

    const randomIndex = Math.floor(
        Math.random() * responses.length
    );

    return responses[randomIndex];
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

// Imprimir / mostrar
"como imprimir",
"imprime",
"imprimir",
"impresion",
"como mostrar",
"muestra",
"mostrar",

// Crear / declarar
"como crear",
"crear",
"crea",
"como declarar",
"declarar",
"declara",
"definir",
"define",

// Ejecutar / usar
"como ejecutar",
"ejecutar",
"ejecuta",
"como usar",
"usar",
"utiliza",
"utilizar",

// Operaciones
"suma",
"sumar",
"resta",
"restar",
"multiplica",
"multiplicar",
"divide",
"dividir",
"calcula",
"calcular",
"operacion",
"operaciones",

// Estructuras de programación
"variable",
"variables",
"array",
"arreglo",
"lista",
"bucle",
"ciclo",
"for",
"while",
"if",
"condicional",
"funcion",
"función",
"metodo",
"método",
"clase",
"objeto",

// Código / errores
"codigo",
"código",
"codificar",
"codifica",
"ejemplo",
"ejemplo de codigo",
"codigo en",
"programar en",
"programacion en",
"error de codigo",
"error en el codigo",
"depurar",
"debug",
"debuggear",

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
        "En 2023, Jorge obtuvo la certificación AZ-900 de UNIR.",
        "Durante 2023, Jorge consiguió la certificación AZ-900 de UNIR.",
        "En el año 2023, Jorge completó la certificación AZ-900 de UNIR.",
        "Jorge obtuvo en 2023 la certificación AZ-900 de UNIR."
    ],

    "2024": [
        "En 2024, Jorge realizó una certificación de Linux en Udemy.",
        "Durante 2024, Jorge completó una certificación de Linux en Udemy.",
        "En 2024, Jorge obtuvo una certificación relacionada con Linux mediante Udemy.",
        "Jorge realizó en 2024 su certificación de Linux en Udemy."
    ],

    "2025": [
        "En 2025, Jorge obtuvo la certificación Fundamentals of AI de IBM.",
        "Durante 2025, Jorge consiguió la certificación Fundamentals of AI de IBM.",
        "En el año 2025, Jorge completó la certificación Fundamentals of AI de IBM.",
        "Jorge obtuvo en 2025 la certificación Fundamentals of AI, otorgada por IBM."
    ],

    "2026": [
        "En 2026, Jorge obtuvo certificaciones relacionadas con MCP y Claude API de Anthropic.",
        "Durante 2026, Jorge consiguió certificaciones relacionadas con MCP y Claude API de Anthropic.",
        "En 2026, Jorge completó certificaciones enfocadas en MCP y Claude API de Anthropic.",
        "Jorge cuenta en 2026 con certificaciones relacionadas con MCP y Claude API de Anthropic."
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

    // Si el año está registrado
    if (year) {

        const responses = certificationYears[year];

        const randomIndex = Math.floor(
            Math.random() * responses.length
        );

        return responses[randomIndex];
    }

    // Detectar si preguntó por un año que no está registrado
    const requestedYear = normalizedMessage.match(/\b20\d{2}\b/);

    if (requestedYear) {

        const noCertificationResponses = [
            `No tengo certificaciones de Jorge registradas para ${requestedYear[0]}.`,
            `No encuentro certificaciones de Jorge correspondientes al año ${requestedYear[0]}.`,
            `No tengo datos de certificaciones de Jorge para ${requestedYear[0]}.`,
            `No aparece ninguna certificación de Jorge registrada en ${requestedYear[0]}.`
        ];

        const randomIndex = Math.floor(
            Math.random() * noCertificationResponses.length
        );

        return noCertificationResponses[randomIndex];
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
