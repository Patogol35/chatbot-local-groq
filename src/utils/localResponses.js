// utils/localResponse.js

const normalizeText = (text = "") =>
    text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

const randomResponse = (responses) =>
    responses[Math.floor(Math.random() * responses.length)];

export const getLocalResponse = (message) => {
    const text = normalizeText(message);

    // ============================================================
    // OTRAS PERSONAS → GROQ
    // ============================================================

    const otherPerson =
        /\b(elon|musk|messi|lionel|brais|moure|bill|gates|mark|zuckerberg|steve|jobs)\b/.test(text);

    if (otherPerson) {
        return null;
    }

    // ============================================================
    // JORGE / PATRICIO
    // ============================================================

    const isJorge =
        /\b(jorge|patricio|santamaria|santamaría)\b/.test(text);

    // ============================================================
    // EDUCACIÓN / FORMACIÓN
    // ============================================================

    if (
        isJorge &&
        /\b(educacion|formacion|estudios|estudio|academica|academico|preparacion)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge es Ingeniero en Sistemas por la Universidad Indoamérica, Ecuador, y tiene un Máster en Ingeniería de Software por la UNIR, España.",
            "La formación académica de Jorge incluye Ingeniería en Sistemas en la Universidad Indoamérica y un Máster en Ingeniería de Software en la UNIR, España.",
            "Jorge cuenta con formación universitaria en Ingeniería en Sistemas y estudios de Máster en Ingeniería de Software.",
            "La educación de Jorge comprende una Ingeniería en Sistemas y un Máster en Ingeniería de Software y Sistemas Informáticos.",
            "Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica y posteriormente realizó un Máster en Ingeniería de Software en la UNIR, España."
        ]);
    }

    // ============================================================
    // PERFIL
    // ============================================================

    if (
        isJorge &&
        /\b(quien es|perfil|sobre jorge|hablame de jorge|dime quien es jorge|que sabes de jorge)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge Patricio Santamaría Cherrez es Ingeniero en Sistemas y Máster en Ingeniería de Software, especializado en desarrollo Full Stack, virtualización y ciberseguridad.",
            "Jorge es un profesional de tecnología con formación en Ingeniería en Sistemas y un Máster en Ingeniería de Software.",
            "Jorge Patricio es Ingeniero en Sistemas y Máster en Ingeniería de Software. Su perfil está orientado principalmente al desarrollo Full Stack.",
            "Jorge es un profesional del área de software, con formación como Ingeniero en Sistemas y Máster en Ingeniería de Software.",
            "El perfil de Jorge está enfocado en ingeniería de software, desarrollo Full Stack, virtualización y ciberseguridad."
        ]);
    }

    // ============================================================
    // MÁSTER
    // ============================================================

    if (
        isJorge &&
        /\b(master|maestria|posgrado)\b/.test(text) &&
        !/\b(nota|calificacion|promedio|puntaje)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge tiene un Máster en Ingeniería de Software.",
            "Jorge realizó un Máster en Ingeniería de Software en la Universidad Internacional de La Rioja (UNIR), España.",
            "Su formación de posgrado corresponde a un Máster en Ingeniería de Software.",
            "Jorge cuenta con una maestría en Ingeniería de Software.",
            "El Máster de Jorge es en Ingeniería de Software y fue realizado en la UNIR, España."
        ]);
    }

    // ============================================================
    // NOTA MÁSTER
    // ============================================================

    if (
        isJorge &&
        /\b(master|maestria)\b/.test(text) &&
        /\b(nota|calificacion|promedio|puntaje)\b/.test(text)
    ) {
        return randomResponse([
            "La nota final del Máster de Jorge fue 8.68/10.",
            "Jorge obtuvo una calificación final de 8.68 sobre 10 en su Máster.",
            "El promedio final de su Máster fue de 8.68/10.",
            "En el Máster en Ingeniería de Software, Jorge obtuvo 8.68/10.",
            "La calificación final de Jorge en la maestría fue 8.68 sobre 10."
        ]);
    }

    // ============================================================
    // INGENIERÍA
    // ============================================================

    if (
        isJorge &&
        /\b(ingenieria|ingeniero|carrera|titulo|grado)\b/.test(text) &&
        !/\b(nota|calificacion|promedio|puntaje|master|maestria)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge es Ingeniero en Sistemas.",
            "Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica, Ecuador.",
            "Su título universitario es de Ingeniero en Sistemas.",
            "Jorge realizó sus estudios de Ingeniería en Sistemas en la Universidad Indoamérica.",
            "La carrera universitaria de Jorge es Ingeniería en Sistemas."
        ]);
    }

    // ============================================================
    // NOTA INGENIERÍA
    // ============================================================

    if (
        isJorge &&
        /\b(ingenieria|ingeniero|carrera|titulo)\b/.test(text) &&
        /\b(nota|calificacion|promedio|puntaje)\b/.test(text)
    ) {
        return randomResponse([
            "La nota final de Ingeniería en Sistemas fue 9/10.",
            "Jorge obtuvo 9 sobre 10 en su Ingeniería en Sistemas.",
            "Su calificación final de Ingeniería fue 9/10.",
            "Jorge terminó la carrera de Ingeniería en Sistemas con una nota de 9/10.",
            "El promedio final de su Ingeniería fue 9 sobre 10."
        ]);
    }

    // ============================================================
    // FRONTEND
    // ============================================================

    if (
        isJorge &&
        /\b(frontend|front end|front-end)\b/.test(text)
    ) {
        return randomResponse([
            "En Frontend Jorge utiliza principalmente React y JavaScript.",
            "El desarrollo Frontend de Jorge está principalmente basado en React y JavaScript.",
            "Para Frontend, Jorge trabaja principalmente con React y JavaScript.",
            "React y JavaScript son tecnologías principales en el Frontend de Jorge.",
            "Jorge utiliza React junto con JavaScript para desarrollar interfaces web."
        ]);
    }

    // ============================================================
    // BACKEND
    // ============================================================

    if (
        isJorge &&
        /\b(backend|back end|back-end)\b/.test(text)
    ) {
        return randomResponse([
            "En Backend Jorge utiliza principalmente Django y Java.",
            "El Backend de Jorge está enfocado principalmente en Django y Java.",
            "Jorge trabaja con Django y Java para el desarrollo Backend.",
            "Sus principales tecnologías Backend son Django y Java.",
            "Para Backend, Jorge utiliza principalmente Django y Java."
        ]);
    }

    // ============================================================
    // BASES DE DATOS
    // ============================================================

    if (
        isJorge &&
        /\b(base de datos|bases de datos|database|databases|bd)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge trabaja con PostgreSQL y MySQL.",
            "Las principales bases de datos que utiliza Jorge son PostgreSQL y MySQL.",
            "En bases de datos, Jorge trabaja principalmente con PostgreSQL y MySQL.",
            "Su experiencia incluye PostgreSQL y MySQL.",
            "Jorge utiliza PostgreSQL y MySQL para sus proyectos."
        ]);
    }

    // ============================================================
    // CLOUD / DEPLOY
    // ============================================================

    if (
        isJorge &&
        /\b(cloud|nube|deploy|despliegue|hosting|alojamiento)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge utiliza Render, Vercel y AWS para despliegue y servicios Cloud.",
            "En Cloud y despliegue trabaja principalmente con Render, Vercel y AWS.",
            "Sus principales plataformas de despliegue son Render, Vercel y AWS.",
            "Jorge utiliza Render y Vercel, además de AWS, para sus proyectos.",
            "Para alojar y desplegar aplicaciones, Jorge trabaja con Render, Vercel y AWS."
        ]);
    }

    // ============================================================
    // STACK
    // ============================================================

    if (
        isJorge &&
        /\b(stack|tecnologias|tecnologia|lenguajes|herramientas)\b/.test(text)
    ) {
        return randomResponse([
            "El Stack de Jorge incluye React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.",
            "Jorge trabaja con tecnologías como React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.",
            "Su stack tecnológico combina Frontend, Backend, bases de datos y Cloud.",
            "Entre las principales tecnologías de Jorge están React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS."
        ]);
    }

    // ============================================================
    // ESPECIALIDADES
    // ============================================================

    if (
        isJorge &&
        /\b(especialidad|especialidades|especializa|especializado|fortalezas|perfil tecnico)\b/.test(text)
    ) {
        return randomResponse([
            "Sus especialidades son Desarrollo Full Stack, virtualización y ciberseguridad.",
            "Jorge se especializa principalmente en desarrollo Full Stack, virtualización y ciberseguridad.",
            "Su perfil técnico está orientado al desarrollo Full Stack, virtualización y ciberseguridad.",
            "Las principales áreas de especialización de Jorge son Full Stack, virtualización y ciberseguridad."
        ]);
    }

    // ============================================================
    // PROYECTOS
    // ============================================================

    if (
        isJorge &&
        /\b(proyecto|proyectos|aplicaciones|trabajos realizados)\b/.test(text)
    ) {
        return randomResponse([
            "Entre sus proyectos están Portfolio React, Quiz Ecuador, App del clima, Chatbot, Ajedrez y E-commerce React+Django.",
            "Jorge ha desarrollado proyectos como un Portfolio React, Quiz Ecuador, una App del clima, un Chatbot, Ajedrez y un E-commerce.",
            "Su portafolio de proyectos incluye aplicaciones web, un chatbot, un juego de ajedrez y un e-commerce React+Django.",
            "Entre los proyectos de Jorge destacan Portfolio React, Quiz Ecuador, App del clima, Chatbot, Ajedrez y E-commerce."
        ]);
    }

    // ============================================================
    // CERTIFICACIONES
    // ============================================================

    if (
        isJorge &&
        /\b(certificacion|certificaciones|certificado|certificados|credenciales)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge cuenta con certificaciones en Model Context Protocol, Claude API, Fundamentals of AI, Linux y AZ-900.",
            "Entre sus certificaciones están MCP y Claude API de Anthropic, Fundamentals of AI de IBM, Linux y AZ-900.",
            "Sus certificaciones incluyen credenciales de Anthropic, IBM, Udemy y UNIR.",
            "Jorge tiene certificaciones relacionadas con Inteligencia Artificial, MCP, Claude API, Linux y Azure."
        ]);
    }

    // ============================================================
    // MCP ESPECÍFICO DE JORGE
    // ============================================================

    if (
        isJorge &&
        /\b(mcp|model context protocol)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge cuenta con una certificación en Model Context Protocol (MCP) de Anthropic.",
            "Jorge tiene certificación en Model Context Protocol (MCP), otorgada por Anthropic.",
            "Entre las certificaciones de Jorge se encuentra Model Context Protocol (MCP) de Anthropic."
        ]);
    }

    // ============================================================
    // CLAUDE API
    // ============================================================

    if (
        isJorge &&
        /\b(claude api|api de claude)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge cuenta con una certificación en Claude API de Anthropic.",
            "Jorge tiene una certificación de Claude API otorgada por Anthropic.",
            "Entre sus certificaciones se encuentra Claude API de Anthropic."
        ]);
    }

    // ============================================================
    // INTERESES
    // ============================================================

    if (
        isJorge &&
        /\b(intereses|que le gusta|que le gustan|gustos|hobbies|pasatiempos|tiempo libre|aficiones)\b/.test(text)
    ) {
        return randomResponse([
            "Entre los intereses de Jorge están la lectura y la música.",
            "A Jorge le interesan principalmente la lectura y la música.",
            "Sus principales intereses personales son leer y disfrutar de la música.",
            "En su tiempo libre, Jorge disfruta de la lectura y la música."
        ]);
    }

    // ============================================================
    // CONTACTO
    // ============================================================

    if (
        isJorge &&
        /\b(contactar|contacto|correo|email|comunicarme)\b/.test(text)
    ) {
        return randomResponse([
            'Puedes contactar a Jorge desde la sección "Contacto" de su portfolio.',
            'Para comunicarte con Jorge, utiliza la sección "Contacto" del portfolio.',
            'Encontrarás las opciones de contacto de Jorge en la sección "Contacto".'
        ]);
    }

    // ============================================================
    // NO RESPUESTA LOCAL → GROQ
    // ============================================================

    return null;
};
