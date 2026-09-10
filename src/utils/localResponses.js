// utils/localResponse.js

const normalizeText = (text = "") =>
    text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

const randomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)];
};

export const getLocalResponse = (message) => {
    const text = normalizeText(message);

    // ============================================================
    // SOLO JORGE / PATRICIO
    // OTRA PERSONA → GROQ
    // ============================================================

    const isJorge = /\b(jorge|patricio)\b/.test(text);

    if (!isJorge) {
        return null;
    }
    // ============================================================
// EDUCACIÓN / FORMACIÓN
// ============================================================

if (
    /\b(educacion|educacion de jorge|formacion|formacion de jorge|estudios|estudios de jorge|preparacion academica|formacion academica|trayectoria academica)\b/.test(text)
) {
    return randomResponse([
        "Jorge es Ingeniero en Sistemas por la Universidad Indoamérica, Ecuador, y tiene un Máster en Ingeniería de Software por la UNIR, España.",
        "La formación de Jorge incluye Ingeniería en Sistemas en la Universidad Indoamérica y un Máster en Ingeniería de Software en la UNIR, España.",
        "Jorge cuenta con formación en Ingeniería en Sistemas y un Máster en Ingeniería de Software y Sistemas Informáticos.",
        "Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica y posteriormente realizó un Máster en Ingeniería de Software en la UNIR, España."
    ]);
}

    // ============================================================
    // PERFIL
    // ============================================================

    if (
        /\b(quien es|perfil|perfil profesional|sobre jorge|hablame de jorge|dime quien es jorge|que sabes de jorge|perfil de jorge)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge Patricio Santamaría Cherrez es Ingeniero en Sistemas y Máster en Ingeniería de Software, especializado en desarrollo Full Stack, virtualización y ciberseguridad.",
            "Jorge es un profesional de tecnología con formación en Ingeniería en Sistemas y un Máster en Ingeniería de Software.",
            "Jorge Patricio es Ingeniero en Sistemas y Máster en Ingeniería de Software. Su perfil está orientado principalmente al desarrollo Full Stack.",
            "Jorge combina su formación en Ingeniería en Sistemas con un Máster en Ingeniería de Software y experiencia en tecnologías Full Stack.",
            "Jorge es un profesional del área de software, con formación como Ingeniero en Sistemas y Máster en Ingeniería de Software.",
            "El perfil de Jorge está enfocado en ingeniería de software, desarrollo Full Stack, virtualización y ciberseguridad.",
            "Jorge Patricio Santamaría Cherrez es un Ingeniero en Sistemas especializado en el desarrollo de soluciones de software.",
            "Jorge cuenta con formación universitaria en Sistemas y una maestría relacionada con Ingeniería de Software.",
            "Jorge es un profesional tecnológico cuya especialización abarca desarrollo Full Stack, virtualización y ciberseguridad.",
            "En resumen, Jorge es Ingeniero en Sistemas y Máster en Ingeniería de Software, con enfoque en desarrollo tecnológico."
        ]);
    }

    // ============================================================
    // MÁSTER
    // ============================================================

    if (
        /\b(master|maestria|posgrado|estudios de master|estudios de maestria|master de jorge|maestria de jorge|que master tiene)\b/.test(text) &&
        !/\b(nota|calificacion|promedio|puntaje)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge tiene un Máster en Ingeniería de Software.",
            "Jorge realizó un Máster en Ingeniería de Software en la Universidad Internacional de La Rioja (UNIR), España.",
            "Su formación de posgrado corresponde a un Máster en Ingeniería de Software.",
            "Jorge cuenta con una maestría en Ingeniería de Software.",
            "El Máster de Jorge es en Ingeniería de Software y fue realizado en la UNIR, España.",
            "Jorge estudió un Máster en Ingeniería de Software en la Universidad Internacional de La Rioja.",
            "Su título de cuarto nivel es un Máster en Ingeniería de Software.",
            "Jorge completó sus estudios de Máster en Ingeniería de Software en España.",
            "La maestría de Jorge está enfocada en Ingeniería de Software.",
            "Jorge posee un Máster en Ingeniería de Software obtenido en la Universidad Internacional de La Rioja (UNIR)."
        ]);
    }

    // ============================================================
    // NOTA MÁSTER
    // ============================================================

    if (
        /\b(master|maestria)\b/.test(text) &&
        /\b(nota|calificacion|promedio|puntaje)\b/.test(text)
    ) {
        return randomResponse([
            "La nota final del Máster de Jorge fue 8.68/10.",
            "Jorge obtuvo una calificación final de 8.68 sobre 10 en su Máster.",
            "El promedio final de su Máster fue de 8.68/10.",
            "En el Máster en Ingeniería de Software, Jorge obtuvo 8.68/10.",
            "La calificación final de Jorge en la maestría fue 8.68 sobre 10.",
            "Jorge terminó su Máster con una nota de 8.68/10.",
            "Su resultado final en el Máster fue de 8.68 sobre 10.",
            "La nota obtenida por Jorge en el Máster fue 8.68/10.",
            "Jorge alcanzó un promedio final de 8.68/10 en su Máster.",
            "En sus estudios de Máster obtuvo una calificación final de 8.68/10."
        ]);
    }

    // ============================================================
    // INGENIERÍA
    // ============================================================

    if (
        /\b(ingenieria|ingeniero|carrera|titulo universitario|estudios universitarios|grado universitario)\b/.test(text) &&
        !/\b(nota|calificacion|promedio|puntaje|master|maestria)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge es Ingeniero en Sistemas.",
            "Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica, Ecuador.",
            "Su título universitario es de Ingeniero en Sistemas.",
            "Jorge realizó sus estudios de Ingeniería en Sistemas en la Universidad Indoamérica.",
            "La carrera universitaria de Jorge es Ingeniería en Sistemas.",
            "Jorge obtuvo el título de Ingeniero en Sistemas en Ecuador.",
            "Su formación de grado corresponde a Ingeniería en Sistemas.",
            "Jorge se graduó como Ingeniero en Sistemas en la Universidad Indoamérica.",
            "La Ingeniería en Sistemas forma parte de la formación profesional de Jorge.",
            "Jorge cuenta con un título de Ingeniería en Sistemas obtenido en la Universidad Indoamérica."
        ]);
    }

    // ============================================================
    // NOTA INGENIERÍA
    // ============================================================

    if (
        /\b(ingenieria|ingeniero|carrera|titulo)\b/.test(text) &&
        /\b(nota|calificacion|promedio|puntaje)\b/.test(text)
    ) {
        return randomResponse([
            "La nota final de Ingeniería en Sistemas fue 9/10.",
            "Jorge obtuvo 9 sobre 10 en su Ingeniería en Sistemas.",
            "Su calificación final de Ingeniería fue 9/10.",
            "Jorge terminó la carrera de Ingeniería en Sistemas con una nota de 9/10.",
            "El promedio final de su Ingeniería fue 9 sobre 10.",
            "En Ingeniería en Sistemas, Jorge obtuvo 9/10.",
            "Su resultado académico final en Ingeniería fue de 9/10.",
            "Jorge alcanzó una calificación de 9/10 en su carrera universitaria.",
            "La nota final que obtuvo Jorge como Ingeniero en Sistemas fue 9/10.",
            "Jorge culminó su Ingeniería con una calificación final de 9 sobre 10."
        ]);
    }

    // ============================================================
    // FRONTEND
    // ============================================================

    if (
        /\b(frontend|front end|front-end|desarrollo frontend|tecnologias frontend|tecnologia frontend|herramientas frontend|que usa en frontend|que utiliza en frontend)\b/.test(text)
    ) {
        return randomResponse([
            "En Frontend Jorge utiliza principalmente React y JavaScript.",
            "El desarrollo Frontend de Jorge está principalmente basado en React y JavaScript.",
            "Para Frontend, Jorge trabaja principalmente con React y JavaScript.",
            "React y JavaScript son tecnologías principales en el Frontend de Jorge.",
            "Jorge utiliza React junto con JavaScript para desarrollar interfaces web.",
            "Su stack Frontend incluye principalmente React y JavaScript.",
            "En la parte visual de sus aplicaciones, Jorge trabaja principalmente con React y JavaScript.",
            "Jorge tiene experiencia desarrollando Frontend con React y JavaScript.",
            "Las principales tecnologías Frontend de Jorge son React y JavaScript.",
            "Para construir interfaces web, Jorge utiliza principalmente React y JavaScript."
        ]);
    }

    // ============================================================
    // BACKEND
    // ============================================================

    if (
        /\b(backend|back end|back-end|desarrollo backend|tecnologias backend|tecnologia backend|herramientas backend|que usa en backend|que utiliza en backend)\b/.test(text)
    ) {
        return randomResponse([
            "En Backend Jorge utiliza principalmente Django y Java.",
            "El Backend de Jorge está enfocado principalmente en Django y Java.",
            "Jorge trabaja con Django y Java para el desarrollo Backend.",
            "Sus principales tecnologías Backend son Django y Java.",
            "Para Backend, Jorge utiliza principalmente Django y Java.",
            "Jorge tiene experiencia desarrollando servicios Backend con Django y Java.",
            "En el lado del servidor, Jorge trabaja principalmente con Django y Java.",
            "Su stack Backend incluye Django y Java.",
            "Jorge utiliza Django y Java como tecnologías principales para Backend.",
            "Para desarrollar la lógica del servidor, Jorge trabaja principalmente con Django y Java."
        ]);
    }

    // ============================================================
    // BASES DE DATOS
    // ============================================================

    if (
        /\b(base de datos|bases de datos|database|databases|bd|que base de datos usa|que bases de datos usa)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge trabaja con PostgreSQL y MySQL.",
            "Las principales bases de datos que utiliza Jorge son PostgreSQL y MySQL.",
            "En bases de datos, Jorge trabaja principalmente con PostgreSQL y MySQL.",
            "Su experiencia incluye PostgreSQL y MySQL.",
            "Jorge utiliza PostgreSQL y MySQL para sus proyectos.",
            "Entre sus tecnologías de bases de datos están PostgreSQL y MySQL.",
            "PostgreSQL y MySQL forman parte del stack tecnológico de Jorge.",
            "Jorge tiene experiencia trabajando con PostgreSQL y MySQL.",
            "Las bases de datos principales de su stack son PostgreSQL y MySQL.",
            "Para almacenamiento de datos, Jorge trabaja con PostgreSQL y MySQL."
        ]);
    }

    // ============================================================
    // CLOUD / DEPLOY
    // ============================================================

    if (
        /\b(cloud|nube|deploy|despliegue|hosting|servicios cloud|plataformas cloud|donde despliega|donde hace deploy|alojamiento)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge utiliza Render, Vercel y AWS para despliegue y servicios Cloud.",
            "En Cloud y despliegue trabaja principalmente con Render, Vercel y AWS.",
            "Sus principales plataformas de despliegue son Render, Vercel y AWS.",
            "Jorge utiliza Render y Vercel, además de AWS, para sus proyectos.",
            "Para alojar y desplegar aplicaciones, Jorge trabaja con Render, Vercel y AWS.",
            "Su stack Cloud incluye Render, Vercel y AWS.",
            "Jorge cuenta con experiencia utilizando servicios de Render, Vercel y AWS.",
            "En infraestructura Cloud utiliza principalmente Render, Vercel y AWS.",
            "Para deployment de sus proyectos utiliza Render, Vercel y AWS.",
            "Las principales plataformas Cloud presentes en su stack son Render, Vercel y AWS."
        ]);
    }

    // ============================================================
    // STACK
    // ============================================================

    if (
        /\b(stack|tecnologias|tecnologia|lenguajes|herramientas|stack tecnologico|tecnologias que usa|tecnologias que utiliza)\b/.test(text)
    ) {
        return randomResponse([
            "El Stack de Jorge incluye React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.",
            "Jorge trabaja con tecnologías como React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.",
            "Su stack tecnológico combina Frontend, Backend, bases de datos y Cloud con React, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.",
            "Entre las principales tecnologías de Jorge están React, JavaScript, Django y Java, además de PostgreSQL, MySQL, Render, Vercel y AWS.",
            "Jorge cuenta con un stack que incluye React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.",
            "Su stack abarca desarrollo web, bases de datos y Cloud mediante React, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.",
            "Las tecnologías principales de Jorge incluyen React, JavaScript, Django, Java, PostgreSQL y MySQL.",
            "Jorge utiliza un conjunto de tecnologías que incluye React, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.",
            "Su perfil tecnológico combina React y JavaScript en Frontend con Django y Java en Backend.",
            "El stack de Jorge está orientado al desarrollo Full Stack y utiliza tecnologías como React, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS."
        ]);
    }

    // ============================================================
    // ESPECIALIDADES
    // ============================================================

    if (
        /\b(especialidad|especialidades|especializa|especializado|en que se especializa|que especialidad tiene|areas de especializacion|fortalezas|perfil tecnico)\b/.test(text)
    ) {
        return randomResponse([
            "Sus especialidades son Desarrollo Full Stack, virtualización y ciberseguridad.",
            "Jorge se especializa principalmente en desarrollo Full Stack, virtualización y ciberseguridad.",
            "Su perfil técnico está orientado al desarrollo Full Stack, virtualización y ciberseguridad.",
            "Las principales áreas de especialización de Jorge son Full Stack, virtualización y ciberseguridad.",
            "Jorge tiene como principales especialidades el desarrollo de software Full Stack, la virtualización y la ciberseguridad.",
            "Su experiencia técnica se concentra en Full Stack, virtualización y seguridad informática.",
            "Jorge combina conocimientos de desarrollo Full Stack con virtualización y ciberseguridad.",
            "Entre sus fortalezas profesionales destacan el desarrollo Full Stack, la virtualización y la ciberseguridad.",
            "Su especialización tecnológica abarca desarrollo Full Stack, virtualización y ciberseguridad.",
            "Jorge orienta su perfil profesional hacia el desarrollo Full Stack, la virtualización y la ciberseguridad."
        ]);
    }

    // ============================================================
    // PROYECTOS
    // ============================================================

    if (
        /\b(proyecto|proyectos|proyectos de jorge|que proyectos tiene|que proyectos ha hecho|que proyectos desarrollo|proyectos realizados|trabajos realizados|aplicaciones que ha creado|aplicaciones de jorge)\b/.test(text)
    ) {
        return randomResponse([
            "Entre sus proyectos están Portfolio React, Quiz Ecuador, App del clima, Chatbot, Ajedrez y E-commerce React+Django.",
            "Jorge ha desarrollado proyectos como un Portfolio React, Quiz Ecuador, una App del clima, un Chatbot, Ajedrez y un E-commerce.",
            "Su portafolio de proyectos incluye aplicaciones web, un chatbot, un juego de ajedrez y un e-commerce React+Django.",
            "Entre los proyectos de Jorge destacan Portfolio React, Quiz Ecuador, App del clima, Chatbot, Ajedrez y E-commerce.",
            "Jorge cuenta con proyectos relacionados con React, aplicaciones web, chatbots, juegos y comercio electrónico.",
            "Algunos de sus proyectos son su Portfolio en React, Quiz Ecuador, una aplicación del clima, un Chatbot, Ajedrez y un E-commerce.",
            "Su experiencia práctica incluye proyectos de Portfolio, clima, cuestionarios, chatbot, ajedrez y comercio electrónico.",
            "Jorge ha trabajado en proyectos como Quiz Ecuador, aplicaciones del clima, Chatbot, Ajedrez y E-commerce.",
            "Entre sus trabajos se encuentra un E-commerce desarrollado con React y Django, además de otros proyectos web.",
            "Los proyectos destacados de Jorge abarcan Portfolio React, Quiz Ecuador, App del clima, Chatbot, Ajedrez y E-commerce React+Django."
        ]);
    }

    // ============================================================
    // CERTIFICACIONES
    // ============================================================

    if (
        /\b(certificacion|certificaciones|certificado|certificados|certificaciones de jorge|que certificaciones tiene|que certificados tiene|certificaciones profesionales|cursos certificados|credenciales)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge cuenta con certificaciones en Model Context Protocol, Claude API, Fundamentals of AI, Linux y AZ-900.",
            "Entre sus certificaciones están MCP y Claude API de Anthropic, Fundamentals of AI de IBM, Linux y AZ-900.",
            "Sus certificaciones incluyen credenciales de Anthropic, IBM, Udemy y UNIR.",
            "Jorge tiene certificaciones relacionadas con Inteligencia Artificial, MCP, Claude API, Linux y Azure.",
            "Entre sus certificaciones destacan Model Context Protocol, Claude API, Fundamentals of AI, Linux y AZ-900.",
            "Su formación complementaria incluye certificaciones de Anthropic, IBM, Udemy y UNIR.",
            "Jorge ha obtenido certificaciones en tecnologías de IA, Linux y Cloud.",
            "Su lista de certificaciones incluye MCP y Claude API de Anthropic, además de Fundamentals of AI, Linux y AZ-900.",
            "Jorge cuenta con certificaciones recientes relacionadas con IA y desarrollo tecnológico.",
            "Entre sus credenciales profesionales se encuentran MCP, Claude API, Fundamentals of AI, Linux y AZ-900."
        ]);
    }

    // ============================================================
    // INTERESES
    // ============================================================

    if (
        /\b(intereses|que le gusta|que le gustan|gustos|hobbies|pasatiempos|tiempo libre|aficiones|actividades favoritas|que hace en su tiempo libre|que disfruta)\b/.test(text)
    ) {
        return randomResponse([
            "Entre los intereses de Jorge están la lectura y la música.",
            "A Jorge le interesan principalmente la lectura y la música.",
            "Sus principales intereses personales son leer y disfrutar de la música.",
            "En su tiempo libre, Jorge disfruta de la lectura y la música.",
            "La lectura y la música forman parte de los intereses de Jorge.",
            "Jorge tiene interés por los libros y la música.",
            "Entre sus aficiones destacan la lectura y escuchar música.",
            "Jorge disfruta de actividades relacionadas con la lectura y la música.",
            "Sus gustos incluyen principalmente la lectura y la música.",
            "En cuanto a intereses personales, Jorge disfruta de la lectura y la música."
        ]);
    }

    // ============================================================
    // CONTACTO
    // ============================================================

    if (
        /\b(contactar|contacto|contactarme|comunicarme|correo|email|correo electronico|como contactar|como contacto a jorge|como comunicarme con jorge|donde puedo contactar)\b/.test(text)
    ) {
        return randomResponse([
            'Puedes contactar a Jorge desde la sección "Contacto" de su portfolio.',
            'Para comunicarte con Jorge, utiliza la sección "Contacto" del portfolio.',
            'Encontrarás las opciones de contacto de Jorge en la sección "Contacto".',
            'Puedes dirigirte a la sección "Contacto" del portfolio para comunicarte con Jorge.',
            'La forma de contacto está disponible en la sección "Contacto" del portfolio.',
            'Para contactar a Jorge, revisa la sección "Contacto" de su sitio web.',
            'En el portfolio de Jorge encontrarás una sección llamada "Contacto".',
            'Puedes encontrar los medios para contactar a Jorge dentro de la sección "Contacto".',
            'La sección "Contacto" del portfolio contiene la información necesaria para comunicarte con Jorge.',
            'Si deseas comunicarte con Jorge, puedes hacerlo mediante la sección "Contacto" de su portfolio.'
        ]);
    }

    // ============================================================
    // NO HAY RESPUESTA LOCAL
    // → GROQ
    // ============================================================

    return null;
};
