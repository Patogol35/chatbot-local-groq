import { JORGE } from "./jorgeInfo.js";

/* =========================================================
   NORMALIZACIÓN
========================================================= */

const normalizeText = (text = "") => {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?¡!.,;:()[\]{}"'`]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
};

/* =========================================================
   UTILIDADES
========================================================= */

const containsAny = (text, words) => {
    return words.some((word) => text.includes(word));
};

const randomResponse = (responses) => {
    return responses[
        Math.floor(Math.random() * responses.length)
    ];
};

/* =========================================================
   RESPUESTAS GENERALES
========================================================= */

const responses = {
    sasha: [
        "Soy Sasha, la asistente virtual del portfolio de Jorge. Puedo contarte sobre su formación, tecnologías, certificaciones y proyectos.",
        "Me llamo Sasha y soy la asistente virtual del portfolio de Jorge Patricio. Puedo ayudarte a conocer su perfil profesional.",
        "Soy Sasha, la asistente virtual de Jorge. Puedes preguntarme sobre sus estudios, tecnologías, proyectos o trayectoria.",
        "Soy Sasha, el asistente virtual del portfolio de Jorge. Estoy aquí para ayudarte a conocer su trabajo y perfil profesional.",
    ],

    greetings: [
        "¡Hola! Soy Sasha. ¿Qué te gustaría conocer sobre Jorge?",
        "¡Hola! 👋 Soy Sasha, la asistente virtual del portfolio de Jorge. ¿En qué puedo ayudarte?",
        "¡Hola! Encantada de ayudarte. Puedes preguntarme sobre Jorge, sus proyectos, estudios o tecnologías.",
        "¡Hola! Soy Sasha. Dime qué quieres saber y trataré de ayudarte.",
    ],

    profile: [
        `Jorge Patricio Santamaría Cherrez es ${JORGE.perfil}`,
        `Jorge es ${JORGE.perfil}`,
        `Profesionalmente, Jorge es ${JORGE.perfil}`,
        `El perfil de Jorge corresponde a un ${JORGE.perfil}`,
    ],

    engineering: [
        `Jorge es ${JORGE.estudios.ingenieria.titulo} por ${JORGE.estudios.ingenieria.universidad}, Ecuador. Su promedio final fue ${JORGE.estudios.ingenieria.promedio} y obtuvo ${JORGE.estudios.ingenieria.tesis} en su tesis.`,
        `Jorge estudió ${JORGE.estudios.ingenieria.titulo} en ${JORGE.estudios.ingenieria.universidad}. Terminó con un promedio de ${JORGE.estudios.ingenieria.promedio}.`,
        `En su formación de grado, Jorge obtuvo el título de ${JORGE.estudios.ingenieria.titulo}. Su tesis tuvo una nota de ${JORGE.estudios.ingenieria.tesis}.`,
    ],

    master: [
        `Jorge tiene un ${JORGE.estudios.master.titulo} de ${JORGE.estudios.master.universidad}, España. Su promedio final fue ${JORGE.estudios.master.promedio} y obtuvo ${JORGE.estudios.master.tfm} en el TFM.`,
        `Jorge realizó el ${JORGE.estudios.master.titulo} en ${JORGE.estudios.master.universidad}. Finalizó con un promedio de ${JORGE.estudios.master.promedio}.`,
        `Su formación de posgrado corresponde al ${JORGE.estudios.master.titulo}. En el TFM obtuvo ${JORGE.estudios.master.tfm}.`,
    ],

    education: [
        "Jorge es Ingeniero en Sistemas y cuenta además con un Máster en Ingeniería de Software y Sistemas Informáticos.",
        "Su formación académica combina Ingeniería en Sistemas en Ecuador y un Máster en Ingeniería de Software y Sistemas Informáticos en España.",
        "Jorge cuenta con formación universitaria y de posgrado orientada al desarrollo de software y sistemas informáticos.",
    ],

    certifications: [
        `Jorge cuenta con estas certificaciones y formaciones: ${JORGE.certificaciones.join("; ")}.`,
        `Entre las certificaciones de Jorge se encuentran: ${JORGE.certificaciones.join("; ")}.`,
        `Su formación complementaria incluye ${JORGE.certificaciones.join(", ")}.`,
    ],

    technologies: [
        `El stack de Jorge incluye ${JORGE.tecnologias.frontend.join(" y ")} en frontend, ${JORGE.tecnologias.backend.join(" y ")} en backend, ${JORGE.tecnologias.basesDatos.join(" y ")} en bases de datos y ${JORGE.tecnologias.deploy.join(", ")} para despliegue.`,
        `Jorge trabaja con React y JavaScript en frontend; Django y Java en backend; PostgreSQL y MySQL en bases de datos; y Render, Vercel y AWS para deploy.`,
        `Entre las principales tecnologías de Jorge están React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.`,
    ],

    frontend: [
        `En frontend, Jorge trabaja principalmente con ${JORGE.tecnologias.frontend.join(" y ")}.`,
        `Las principales tecnologías frontend de Jorge son ${JORGE.tecnologias.frontend.join(" y ")}.`,
        `Para desarrollo frontend, Jorge utiliza ${JORGE.tecnologias.frontend.join(" y ")}.`,
    ],

    backend: [
        `En backend, Jorge trabaja principalmente con ${JORGE.tecnologias.backend.join(" y ")}.`,
        `Las tecnologías backend que utiliza Jorge son ${JORGE.tecnologias.backend.join(" y ")}.`,
        `Su experiencia backend incluye ${JORGE.tecnologias.backend.join(" y ")}.`,
    ],

    databases: [
        `Jorge trabaja con ${JORGE.tecnologias.basesDatos.join(" y ")} como principales bases de datos.`,
        `En bases de datos, Jorge utiliza ${JORGE.tecnologias.basesDatos.join(" y ")}.`,
        `Su experiencia con bases de datos incluye ${JORGE.tecnologias.basesDatos.join(" y ")}.`,
    ],

    deploy: [
        `Para despliegue, Jorge utiliza ${JORGE.tecnologias.deploy.join(", ")}.`,
        `Jorge tiene experiencia desplegando aplicaciones con ${JORGE.tecnologias.deploy.join(", ")}.`,
        `En deployment, su stack incluye ${JORGE.tecnologias.deploy.join(", ")}.`,
    ],

    areas: [
        `Las principales áreas de Jorge son ${JORGE.areas.join(", ")}.`,
        `Jorge tiene experiencia en ${JORGE.areas.join(", ")}.`,
        `Su perfil profesional abarca ${JORGE.areas.join(", ")}.`,
    ],

    interests: [
        `Entre los intereses de Jorge están ${JORGE.intereses.join(", ")}.`,
        `Fuera del ámbito profesional, Jorge disfruta de ${JORGE.intereses.join(", ")}.`,
        `Jorge tiene interés por ${JORGE.intereses.join(", ")}.`,
    ],

    contact: [
        JORGE.contacto,
        'Puedes contactar a Jorge desde la sección "Contacto" de su portfolio.',
        'La mejor forma de contactar a Jorge es utilizando la sección "Contacto" de su portfolio.',
    ],
};

/* =========================================================
   RESPUESTAS ESPECÍFICAS DE PROYECTOS
========================================================= */

const projectResponses = {
    "portfolio react": [
        "El Portfolio React es el sitio personal de Jorge. Está diseñado para presentar su perfil profesional, formación, certificaciones, habilidades y proyectos.",
        "El portfolio de Jorge está desarrollado con React y funciona como su carta de presentación profesional. Incluye información académica, proyectos y la asistente virtual Sasha.",
        "En su Portfolio React, Jorge presenta su trayectoria profesional mediante una interfaz moderna con soporte para temas claro y oscuro, cambio de idioma y diferentes animaciones.",
        "El Portfolio React reúne el perfil profesional de Jorge, sus estudios, certificaciones, tecnologías y proyectos en una experiencia web interactiva.",
    ],

    "quiz sobre ecuador": [
        "El Quiz sobre Ecuador es una aplicación interactiva de preguntas y respuestas pensada para poner a prueba los conocimientos sobre Ecuador.",
        "Este proyecto combina aprendizaje y entretenimiento mediante preguntas relacionadas con Ecuador y una experiencia interactiva.",
        "El Quiz sobre Ecuador permite al usuario responder preguntas y comprobar cuánto conoce sobre diferentes aspectos del país.",
        "Es una aplicación enfocada en crear una experiencia dinámica de preguntas y respuestas sobre Ecuador.",
    ],

    "aplicacion del clima": [
        "La Aplicación del clima permite consultar información meteorológica de diferentes ubicaciones mediante una interfaz web dinámica.",
        "Este proyecto muestra cómo consumir información meteorológica externa mediante una API y presentarla de forma clara al usuario.",
        "La aplicación del clima está enfocada en consultar datos meteorológicos y mostrarlos mediante una experiencia sencilla e interactiva.",
        "Es un proyecto práctico centrado en el consumo de APIs y la presentación dinámica de información meteorológica.",
    ],

    "chatbot": [
        "El Chatbot es un asistente virtual integrado en el portfolio de Jorge. Se llama Sasha y puede responder preguntas sobre su perfil, formación, tecnologías, certificaciones y proyectos.",
        "Sasha es el chatbot del portfolio de Jorge. Utiliza respuestas locales para las preguntas conocidas y puede utilizar Groq cuando necesita responder preguntas más abiertas.",
        "El proyecto Chatbot integra una asistente virtual llamada Sasha dentro del portfolio. Su función es facilitar al visitante el acceso a información sobre Jorge.",
        "El chatbot combina respuestas locales sin consumo de tokens con inteligencia artificial mediante Groq para preguntas que no están contempladas en la base de conocimiento.",
    ],

    "ajedrez": [
        "El proyecto Ajedrez es una aplicación web interactiva que lleva la lógica del juego de ajedrez al navegador.",
        "En el proyecto de Ajedrez, Jorge trabaja con la representación del tablero, interacción del usuario y gestión de movimientos.",
        "Ajedrez es un proyecto orientado a implementar una experiencia interactiva de juego dentro de una aplicación web.",
        "Este proyecto demuestra el uso de lógica e interacción para construir una experiencia de ajedrez en el navegador.",
    ],

    "e-commerce con react y django": [
        "El E-commerce con React y Django es una plataforma de comercio electrónico desarrollada separando frontend y backend.",
        "El proyecto E-commerce combina React en el frontend con Django y Django REST Framework en el backend. Incluye productos, categorías, variantes, carrito y pedidos.",
        "Es una plataforma de comercio electrónico en la que Jorge trabaja con React para la interfaz y Django para la API y la lógica del backend.",
        "El E-commerce incluye funcionalidades como gestión de productos, variantes, imágenes, autenticación, carrito de compras y pedidos.",
    ],
};

/* =========================================================
   PALABRAS CLAVE
========================================================= */

const INTENTS = {
    sasha: [
        "quien eres",
        "quien es sasha",
        "que eres",
        "que haces",
        "como te llamas",
        "tu nombre",
        "eres una ia",
        "eres humana",
    ],

    greetings: [
        "hola",
        "buenas",
        "buenos dias",
        "buenas tardes",
        "buenas noches",
        "hey",
        "hello",
        "hi",
        "saludos",
    ],

    profile: [
        "quien es jorge",
        "quien es jorge patricio",
        "sobre jorge",
        "acerca de jorge",
        "perfil de jorge",
        "perfil profesional",
        "a que se dedica jorge",
        "que hace jorge",
        "profesion de jorge",
        "informacion de jorge",
    ],

    education: [
        "formacion",
        "formacion academica",
        "estudios",
        "estudios de jorge",
        "que estudio",
        "que ha estudiado",
        "educacion",
        "titulos",
        "grado academico",
    ],

    engineering: [
        "ingenieria",
        "ingeniero",
        "carrera universitaria",
        "universidad indoamerica",
        "tesis",
        "nota de tesis",
        "promedio de ingenieria",
    ],

    master: [
        "master",
        "maestria",
        "posgrado",
        "unir",
        "universidad internacional de la rioja",
        "tfm",
        "trabajo fin de master",
        "nota del tfm",
        "promedio del master",
    ],

    certifications: [
        "certificaciones",
        "certificados",
        "certificacion",
        "certificado",
        "cursos",
        "curso",
        "formacion complementaria",
        "badges",
        "insignias",
    ],

    technologies: [
        "tecnologias",
        "tecnologia",
        "stack tecnologico",
        "stack",
        "herramientas",
        "lenguajes",
        "lenguaje de programacion",
        "programacion",
        "que tecnologias usa",
        "que tecnologias utiliza",
        "con que trabaja",
    ],

    frontend: [
        "frontend",
        "front end",
        "front-end",
        "react",
        "javascript",
        "desarrollo frontend",
    ],

    backend: [
        "backend",
        "back end",
        "back-end",
        "django",
        "java",
        "desarrollo backend",
    ],

    databases: [
        "base de datos",
        "bases de datos",
        "postgresql",
        "postgres",
        "mysql",
        "database",
    ],

    deploy: [
        "deploy",
        "deployment",
        "despliegue",
        "desplegar",
        "hosting",
        "vercel",
        "render",
        "aws",
    ],

    areas: [
        "areas",
        "area profesional",
        "especialidad",
        "especialidades",
        "en que se especializa",
        "campo profesional",
        "habilidades profesionales",
    ],

    projects: [
        "proyectos",
        "proyecto",
        "portfolio",
        "portafolio",
        "que ha desarrollado",
        "que desarrolla",
        "trabajos realizados",
        "aplicaciones",
    ],

    interests: [
        "intereses",
        "que le gusta",
        "que le gusta hacer",
        "hobbies",
        "pasatiempos",
        "lectura",
        "libros",
        "musica",
        "dan brown",
    ],

    contact: [
        "contacto",
        "contactar",
        "contactarlo",
        "correo",
        "email",
        "telefono",
        "whatsapp",
        "como puedo contactar",
        "como contacto",
    ],
};

/* =========================================================
   DETECCIÓN DE OTROS NOMBRES
========================================================= */

const JORGE_NAMES = [
    "jorge",
    "jorge patricio",
    "patricio",
    "santamaria",
    "santamaria cherrez",
];

const NON_PERSON_WORDS = [
    ...JORGE_NAMES,

    "tecnologia",
    "tecnologias",
    "frontend",
    "backend",
    "javascript",
    "react",
    "django",
    "java",
    "postgresql",
    "postgres",
    "mysql",
    "aws",
    "vercel",
    "render",
    "proyectos",
    "proyecto",
    "formacion",
    "estudios",
    "ingenieria",
    "ingeniero",
    "master",
    "maestria",
    "unir",
    "tfm",
    "certificaciones",
    "certificacion",
    "areas",
    "intereses",
    "contacto",
    "portfolio",
    "portafolio",
    "perfil",
    "sistemas",
    "software",
    "informacion",
    "datos",
    "base",
    "bases",
    "desarrollo",
    "programacion",
    "documentacion",
    "seguridad",
    "virtualizacion",
];

/* =========================================================
   DETECTAR OTRA PERSONA
========================================================= */

const containsOtherPersonReference = (originalMessage) => {
    const message = originalMessage.trim();
    const normalized = normalizeText(message);

    if (
        JORGE_NAMES.some((name) =>
            normalized.includes(normalizeText(name))
        )
    ) {
        return false;
    }

    const capitalizedPattern =
        /\b(?:de|del|sobre|para|con|acerca de|hablame de|hablame sobre)\s+([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)(?:\s+([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+))?/;

    const capitalizedMatch =
        message.match(capitalizedPattern);

    if (capitalizedMatch) {
        const candidate = normalizeText(
            capitalizedMatch[1]
        );

        if (
            !NON_PERSON_WORDS.includes(candidate)
        ) {
            return true;
        }
    }

    const genericPattern =
        /\b(?:de|del|sobre|para|acerca de)\s+([a-záéíóúñ]+)/g;

    let match;

    while (
        (match = genericPattern.exec(normalized)) !== null
    ) {
        const candidate = match[1];

        if (
            candidate &&
            !NON_PERSON_WORDS.includes(candidate)
        ) {
            return true;
        }
    }

    return false;
};

/* =========================================================
   ¿ES SOBRE JORGE?
========================================================= */

const isAboutJorge = (originalMessage) => {
    const text = normalizeText(originalMessage);

    if (
        containsOtherPersonReference(originalMessage)
    ) {
        return false;
    }

    if (
        JORGE_NAMES.some((name) =>
            text.includes(normalizeText(name))
        )
    ) {
        return true;
    }

    const contextualWords = [
        "que tecnologias usa",
        "que tecnologias utiliza",
        "tecnologias usa",
        "tecnologias utiliza",
        "donde estudio",
        "que estudio",
        "que ha estudiado",
        "que proyectos tiene",
        "que proyectos ha hecho",
        "que certificaciones tiene",
        "que certificaciones posee",
        "que le gusta",
        "cuales son sus proyectos",
        "cuales son sus tecnologias",
        "cual es su perfil",
        "cual es su formacion",
        "con que trabaja",
        "que herramientas usa",
        "que habilidades tiene",
        "como puedo contactar",
        "como contacto",
    ];

    return containsAny(
        text,
        contextualWords
    );
};

/* =========================================================
   RESPUESTA ESPECÍFICA DE PROYECTO
========================================================= */

const getProjectResponse = (text) => {
    for (const project of JORGE.proyectos) {
        const projectName =
            normalizeText(project.nombre);

        if (text.includes(projectName)) {
            const projectAnswers =
                projectResponses[projectName];

            if (projectAnswers) {
                return randomResponse(
                    projectAnswers
                );
            }

            return `${project.nombre}: ${project.descripcion} Tecnologías: ${project.tecnologias.join(", ")}.`;
        }
    }

    /* Alias comunes */

    if (
        text.includes("ecommerce") ||
        text.includes("e commerce") ||
        text.includes("tienda")
    ) {
        return randomResponse(
            projectResponses[
                "e-commerce con react y django"
            ]
        );
    }

    if (
        text.includes("clima") ||
        text.includes("tiempo meteorologico")
    ) {
        return randomResponse(
            projectResponses[
                "aplicacion del clima"
            ]
        );
    }

    if (
        text.includes("quiz") ||
        text.includes("ecuador")
    ) {
        return randomResponse(
            projectResponses[
                "quiz sobre ecuador"
            ]
        );
    }

    return null;
};

/* =========================================================
   DETECTAR INTENCIÓN
========================================================= */

const matchesIntent = (text, intent) => {
    return containsAny(
        text,
        INTENTS[intent]
    );
};

/* =========================================================
   RESPUESTA POR INTENCIÓN
========================================================= */

const getIntentResponse = (intent) => {
    return randomResponse(
        responses[intent]
    );
};

/* =========================================================
   RESPUESTAS COMBINADAS
========================================================= */

const getCombinedResponse = (text) => {
    const matchedIntents = [];

    const orderedIntents = [
        "profile",
        "education",
        "engineering",
        "master",
        "certifications",
        "technologies",
        "frontend",
        "backend",
        "databases",
        "deploy",
        "areas",
        "projects",
        "interests",
        "contact",
    ];

    for (const intent of orderedIntents) {
        if (
            matchesIntent(
                text,
                intent
            )
        ) {
            matchedIntents.push(intent);
        }
    }

    if (
        matchedIntents.length < 2
    ) {
        return null;
    }

    const selected =
        matchedIntents.slice(0, 3);

    const parts =
        selected.map((intent) =>
            getIntentResponse(intent)
        );

    return parts.join(" ");
};

/* =========================================================
   FUNCIÓN PRINCIPAL
========================================================= */

export const getLocalResponse = (
    message
) => {
    if (
        typeof message !== "string" ||
        !message.trim()
    ) {
        return null;
    }

    const originalMessage =
        message.trim();

    const text =
        normalizeText(
            originalMessage
        );

    /* Otra persona → Groq */
    if (
        containsOtherPersonReference(
            originalMessage
        )
    ) {
        return null;
    }

    /* Saludos */
    if (
        matchesIntent(
            text,
            "greetings"
        ) &&
        text.length < 60
    ) {
        return getIntentResponse(
            "greetings"
        );
    }

    /* Sasha */
    if (
        matchesIntent(
            text,
            "sasha"
        )
    ) {
        return getIntentResponse(
            "sasha"
        );
    }

    /* Debe ser información de Jorge */
    if (
        !isAboutJorge(
            originalMessage
        )
    ) {
        return null;
    }

    /* Proyecto específico */
    const projectResponse =
        getProjectResponse(text);

    if (projectResponse) {
        return projectResponse;
    }

    /* Combinaciones */
    const combinedResponse =
        getCombinedResponse(text);

    if (combinedResponse) {
        return combinedResponse;
    }

    /* Intenciones individuales */
    const priorityIntents = [
        "master",
        "engineering",
        "certifications",
        "frontend",
        "backend",
        "databases",
        "deploy",
        "technologies",
        "projects",
        "education",
        "areas",
        "interests",
        "contact",
        "profile",
    ];

    for (
        const intent
        of priorityIntents
    ) {
        if (
            matchesIntent(
                text,
                intent
            )
        ) {
            return getIntentResponse(
                intent
            );
        }
    }

    return null;
};
