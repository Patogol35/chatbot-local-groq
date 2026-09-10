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
    // SOLO INFORMACIÓN DE JORGE / PATRICIO
    // OTRA PERSONA → GROQ
    // ============================================================

    const isJorge = /\b(jorge|patricio)\b/.test(text);

    if (!isJorge) {
        return null;
    }

    // ============================================================
    // PERFIL
    // ============================================================

    if (
        /\b(
            quien es|
            perfil|
            perfil profesional|
            sobre jorge|
            hablame de jorge|
            dime quien es jorge|
            que sabes de jorge|
            perfil de jorge
        )\b/.test(text)
    ) {
        return randomResponse([
            "Jorge Patricio Santamaría Cherrez es Ingeniero en Sistemas y Máster en Ingeniería de Software, especializado en desarrollo Full Stack, virtualización y ciberseguridad.",
            "Jorge es un profesional de tecnología con formación en Ingeniería en Sistemas y un Máster en Ingeniería de Software.",
            "Jorge Patricio es Ingeniero en Sistemas y Máster en Ingeniería de Software, con un perfil orientado al desarrollo Full Stack.",
            "Jorge combina su formación en Ingeniería en Sistemas con un Máster en Ingeniería de Software y conocimientos tecnológicos diversos.",
            "Jorge es un profesional del área de software, formado como Ingeniero en Sistemas y Máster en Ingeniería de Software.",
            "Su perfil profesional está enfocado principalmente en desarrollo Full Stack, virtualización y ciberseguridad.",
            "Jorge Patricio Santamaría Cherrez cuenta con formación en Ingeniería en Sistemas y una especialización de posgrado en Ingeniería de Software.",
            "Jorge es un profesional tecnológico orientado al desarrollo de soluciones de software.",
            "Su perfil combina ingeniería de software, desarrollo Full Stack, virtualización y ciberseguridad.",
            "En resumen, Jorge es Ingeniero en Sistemas y Máster en Ingeniería de Software, con enfoque en tecnología y desarrollo."
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
            "Jorge posee un Máster en Ingeniería de Software obtenido en la Universidad Internacional de La Rioja."
        ]);
    }

    // ============================================================
    // NOTA DEL MÁSTER
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
    // NOTA DE INGENIERÍA
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
    // ============================================================
    // PROYECTOS INDIVIDUALES
    // ============================================================
    // ============================================================

    // ------------------------------------------------------------
    // PORTFOLIO
    // ------------------------------------------------------------

    if (
        /\b(portfolio|portafolio|pagina personal|sitio personal|web personal|portfolio de jorge)\b/.test(text)
    ) {
        return randomResponse([
            "El Portfolio de Jorge es una aplicación web desarrollada con React para presentar su perfil profesional, habilidades, certificaciones y proyectos.",
            "El portfolio funciona como su carta de presentación profesional y reúne información sobre su formación, experiencia tecnológica y proyectos.",
            "Jorge utiliza su Portfolio para mostrar su perfil como Ingeniero en Sistemas y desarrollador Full Stack.",
            "Su portfolio es una aplicación web donde presenta sus conocimientos, certificaciones, proyectos y medios de contacto.",
            "El Portfolio de Jorge está orientado a mostrar de forma profesional su trayectoria y trabajo tecnológico.",
            "En su Portfolio puedes conocer el perfil profesional de Jorge, sus tecnologías, certificaciones y proyectos.",
            "El sitio personal de Jorge está desarrollado con tecnologías modernas de Frontend y sirve como presentación profesional.",
            "Su Portfolio reúne diferentes secciones dedicadas a su perfil, habilidades, certificaciones, proyectos y contacto.",
            "El Portfolio es uno de los principales proyectos personales de Jorge y está enfocado en su presentación profesional.",
            "La página personal de Jorge funciona como un espacio para mostrar su experiencia, formación y proyectos de software."
        ]);
    }

    // ------------------------------------------------------------
    // QUIZ ECUADOR
    // ------------------------------------------------------------

    if (
        /\b(quiz ecuador|quiz sobre ecuador|quiz de ecuador)\b/.test(text)
    ) {
        return randomResponse([
            "Quiz Ecuador es un proyecto interactivo enfocado en preguntas y conocimientos relacionados con Ecuador.",
            "Quiz Ecuador es una aplicación tipo cuestionario diseñada alrededor de contenido relacionado con Ecuador.",
            "El proyecto Quiz Ecuador propone una experiencia de preguntas y respuestas sobre temas ecuatorianos.",
            "Quiz Ecuador es uno de los proyectos de Jorge y está orientado al aprendizaje mediante preguntas interactivas.",
            "En Quiz Ecuador, la idea principal es poner a prueba los conocimientos del usuario sobre Ecuador.",
            "Quiz Ecuador combina tecnología y entretenimiento mediante una dinámica de preguntas y respuestas.",
            "Este proyecto está enfocado en crear una experiencia interactiva relacionada con conocimientos sobre Ecuador.",
            "Quiz Ecuador forma parte de los proyectos web desarrollados por Jorge.",
            "El proyecto utiliza el formato de quiz para presentar contenido relacionado con Ecuador de manera interactiva.",
            "Quiz Ecuador busca ofrecer una forma entretenida de aprender y comprobar conocimientos sobre el país."
        ]);
    }

    // ------------------------------------------------------------
    // APP DEL CLIMA
    // ------------------------------------------------------------

    if (
        /\b(app del clima|aplicacion del clima|aplicacion clima|app clima|clima)\b/.test(text)
    ) {
        return randomResponse([
            "La App del clima es un proyecto orientado a consultar información meteorológica mediante una interfaz web.",
            "Jorge desarrolló una aplicación relacionada con el clima para consultar información meteorológica.",
            "La aplicación del clima permite trabajar con información meteorológica desde una interfaz digital.",
            "Este proyecto está enfocado en mostrar información relacionada con las condiciones climáticas.",
            "La App del clima es uno de los proyectos prácticos incluidos en el portfolio de Jorge.",
            "El proyecto utiliza una interfaz web para presentar información relacionada con el clima.",
            "La aplicación busca ofrecer al usuario una forma sencilla de consultar información meteorológica.",
            "El proyecto del clima forma parte de las aplicaciones desarrolladas por Jorge.",
            "La App del clima demuestra el trabajo de Jorge en el desarrollo de aplicaciones web interactivas.",
            "Es una aplicación centrada en la consulta y presentación de información meteorológica."
        ]);
    }

    // ------------------------------------------------------------
    // CHATBOT
    // ------------------------------------------------------------

    if (
        /\b(chatbot|chat bot|asistente virtual|bot de jorge|sasha)\b/.test(text)
    ) {
        return randomResponse([
            "El Chatbot es un proyecto de asistente virtual desarrollado para interactuar con los visitantes del portfolio.",
            "Sasha es la asistente virtual de IA del portfolio de Jorge.",
            "El chatbot permite a los visitantes interactuar mediante preguntas y obtener información sobre Jorge y tecnología.",
            "Este proyecto incorpora inteligencia artificial para ofrecer una experiencia conversacional dentro del portfolio.",
            "Sasha funciona como asistente virtual del portfolio y puede responder preguntas sobre el perfil profesional de Jorge.",
            "El Chatbot es una de las funcionalidades inteligentes desarrolladas para el portfolio de Jorge.",
            "La asistente Sasha está diseñada para conversar con los visitantes y proporcionar información de manera interactiva.",
            "El proyecto combina desarrollo web con inteligencia artificial para crear una experiencia conversacional.",
            "Sasha ayuda a los visitantes a conocer el perfil, proyectos y tecnologías de Jorge mediante conversación.",
            "El chatbot representa la integración de inteligencia artificial dentro del portfolio profesional de Jorge."
        ]);
    }

    // ------------------------------------------------------------
    // AJEDREZ
    // ------------------------------------------------------------

    if (
        /\b(ajedrez|chess|juego de ajedrez)\b/.test(text)
    ) {
        return randomResponse([
            "Ajedrez es un proyecto relacionado con el desarrollo de un juego de ajedrez.",
            "Jorge desarrolló un proyecto de Ajedrez como parte de sus aplicaciones prácticas.",
            "El proyecto Ajedrez lleva la lógica de un juego de tablero al entorno digital.",
            "Ajedrez es una aplicación enfocada en representar el clásico juego de estrategia de forma digital.",
            "Este proyecto demuestra trabajo con lógica de programación mediante un juego de ajedrez.",
            "El proyecto de Ajedrez forma parte de las aplicaciones desarrolladas por Jorge.",
            "Jorge incluyó un juego de Ajedrez entre sus proyectos tecnológicos.",
            "Ajedrez es un proyecto práctico centrado en la interacción y lógica propia de un juego.",
            "La aplicación busca trasladar la experiencia del ajedrez a una interfaz digital.",
            "El proyecto Ajedrez permite demostrar conocimientos de desarrollo mediante la implementación de un juego."
        ]);
    }

       // ------------------------------------------------------------
    // E-COMMERCE
    // ------------------------------------------------------------

    if (
        /\b(ecommerce|e-commerce|tienda online|tienda virtual|comercio electronico|e commerce)\b/.test(text)
    ) {
        return randomResponse([
            "El E-commerce es una aplicación de comercio electrónico desarrollada con React en Frontend y Django en Backend.",
            "El proyecto E-commerce permite trabajar con una tienda online utilizando React y Django.",
            "Jorge desarrolló un E-commerce combinando React para la interfaz y Django para el Backend.",
            "Su proyecto de comercio electrónico integra tecnologías Frontend y Backend para construir una tienda virtual.",
            "El E-commerce es uno de los proyectos Full Stack de Jorge y utiliza React junto con Django.",
            "Este proyecto está orientado al comercio electrónico y combina un Frontend desarrollado con React con un Backend en Django.",
            "La tienda virtual demuestra la integración entre React y Django en una aplicación Full Stack.",
            "Jorge desarrolló una solución de comercio electrónico utilizando React y Django.",
            "El proyecto E-commerce representa una aplicación Full Stack enfocada en una tienda online.",
            "La aplicación de comercio electrónico utiliza React y Django para cubrir las diferentes partes de la plataforma."
        ]);
    }

    // ============================================================
    // LISTA GENERAL DE PROYECTOS
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
    // ============================================================
    // CERTIFICACIONES INDIVIDUALES
    // ============================================================
    // ============================================================

    // ------------------------------------------------------------
    // MCP
    // ------------------------------------------------------------

    if (
        /\b(mcp|model context protocol)\b/.test(text)
    ) {
        return randomResponse([
            "Model Context Protocol (MCP) es una certificación de Anthropic obtenida por Jorge en 2026, relacionada con el ecosistema de herramientas y contexto para aplicaciones de IA.",
            "Jorge cuenta con una certificación de Model Context Protocol (MCP) de Anthropic, obtenida en 2026.",
            "La certificación MCP corresponde a Model Context Protocol y forma parte de las credenciales de IA de Jorge.",
            "En 2026, Jorge obtuvo una certificación de Anthropic relacionada con Model Context Protocol.",
            "MCP significa Model Context Protocol y es una de las certificaciones de Anthropic que Jorge incorporó a su perfil.",
            "Jorge tiene formación certificada en Model Context Protocol por Anthropic desde 2026.",
            "La certificación de MCP demuestra formación de Jorge en una tecnología del ecosistema de inteligencia artificial de Anthropic.",
            "Model Context Protocol es una de las certificaciones recientes que Jorge presenta en su perfil profesional.",
            "Jorge obtuvo la certificación MCP de Anthropic en 2026 como parte de su formación en tecnologías de IA.",
            "La credencial Model Context Protocol pertenece a Anthropic y fue obtenida por Jorge en 2026."
        ]);
    }

    // ------------------------------------------------------------
    // CLAUDE API
    // ------------------------------------------------------------

    if (
        /\b(claude api|api de claude|anthropic api)\b/.test(text)
    ) {
        return randomResponse([
            "Claude API es una certificación de Anthropic que Jorge obtuvo en 2026, relacionada con el uso de la API de Claude.",
            "Jorge cuenta con una certificación de Claude API de Anthropic, obtenida en 2026.",
            "La certificación Claude API forma parte de las credenciales de inteligencia artificial de Jorge.",
            "En 2026, Jorge obtuvo una certificación de Anthropic enfocada en Claude API.",
            "Claude API es una de las certificaciones de IA que Jorge presenta en su perfil profesional.",
            "Jorge tiene formación certificada en el uso de Claude API por Anthropic.",
            "La credencial Claude API corresponde a Anthropic y fue obtenida por Jorge en 2026.",
            "Esta certificación está relacionada con el ecosistema de Claude y su API.",
            "Jorge incorporó la certificación Claude API a su perfil como parte de su formación en IA.",
            "Claude API es una certificación de Anthropic que forma parte de la preparación tecnológica reciente de Jorge."
        ]);
    }

    // ------------------------------------------------------------
    // FUNDAMENTALS OF AI
    // ------------------------------------------------------------

    if (
        /\b(fundamentals of ai|fundamentos de ai|fundamentos de inteligencia artificial|ibm ai)\b/.test(text)
    ) {
        return randomResponse([
            "Fundamentals of AI es una certificación de IBM obtenida por Jorge en 2025, enfocada en fundamentos de inteligencia artificial.",
            "Jorge cuenta con la certificación Fundamentals of AI de IBM, obtenida en 2025.",
            "Esta certificación acredita formación de Jorge en fundamentos relacionados con Inteligencia Artificial.",
            "En 2025, Jorge obtuvo Fundamentals of AI de IBM como parte de su formación en inteligencia artificial.",
            "Fundamentals of AI es una credencial de IBM relacionada con los conceptos fundamentales de la inteligencia artificial.",
            "Jorge incorporó a su perfil la certificación Fundamentals of AI de IBM.",
            "La certificación Fundamentals of AI forma parte de la preparación de Jorge en tecnologías de inteligencia artificial.",
            "IBM otorgó a Jorge la certificación Fundamentals of AI en 2025.",
            "Esta credencial demuestra formación en conceptos fundamentales de IA dentro del perfil profesional de Jorge.",
            "Fundamentals of AI es una de las certificaciones de inteligencia artificial que Jorge obtuvo en 2025."
        ]);
    }

    // ------------------------------------------------------------
    // LINUX
    // ------------------------------------------------------------

    if (
        /\b(linux|certificacion linux|certificado linux|curso linux)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge cuenta con una certificación de Linux realizada en Udemy en 2024.",
            "La certificación de Linux de Jorge corresponde a Udemy y fue obtenida en 2024.",
            "En 2024, Jorge realizó una formación certificada relacionada con Linux en Udemy.",
            "Linux forma parte de las certificaciones técnicas que Jorge presenta en su perfil.",
            "Jorge tiene una certificación de Linux obtenida mediante Udemy en 2024.",
            "La formación en Linux complementa el perfil técnico de Jorge y corresponde a una certificación de Udemy.",
            "Jorge incorporó conocimientos de Linux a su formación mediante una certificación de Udemy.",
            "Su certificación de Linux fue realizada en Udemy durante 2024.",
            "Linux es una de las tecnologías de infraestructura que forma parte de la formación certificada de Jorge.",
            "Jorge cuenta con formación certificada en Linux desde 2024."
        ]);
    }

    // ------------------------------------------------------------
    // AZ-900
    // ------------------------------------------------------------

    if (
        /\b(az-900|az900|azure fundamentals|microsoft azure|azure)\b/.test(text)
    ) {
        return randomResponse([
            "AZ-900 es una certificación relacionada con los fundamentos de Microsoft Azure que Jorge obtuvo mediante UNIR en 2023.",
            "Jorge cuenta con la certificación AZ-900, obtenida en UNIR en 2023.",
            "La certificación AZ-900 está relacionada con los fundamentos de Cloud y Microsoft Azure.",
            "En 2023, Jorge obtuvo AZ-900 a través de UNIR.",
            "AZ-900 forma parte de las credenciales de Cloud que Jorge presenta en su perfil.",
            "Jorge tiene formación en fundamentos de Azure mediante la certificación AZ-900.",
            "La certificación AZ-900 complementa el perfil de Jorge en tecnologías Cloud.",
            "Jorge obtuvo su certificación AZ-900 en 2023 mediante UNIR.",
            "AZ-900 es una certificación enfocada en conceptos fundamentales de Microsoft Azure.",
            "Dentro de su formación Cloud, Jorge cuenta con la certificación AZ-900 de 2023."
        ]);
    }

    // ============================================================
    // LISTA GENERAL DE CERTIFICACIONES
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
            "Su lista de certificaciones incluye MCP, Claude API, Fundamentals of AI, Linux y AZ-900.",
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
            'La información de contacto está disponible en la sección "Contacto" del portfolio.',
            'Para contactar a Jorge, revisa la sección "Contacto" de su sitio web.',
            'En el portfolio de Jorge encontrarás una sección llamada "Contacto".',
            'Puedes encontrar los medios para contactar a Jorge dentro de la sección "Contacto".',
            'La sección "Contacto" del portfolio contiene la información necesaria para comunicarte con Jorge.',
            'Si deseas comunicarte con Jorge, puedes hacerlo mediante la sección "Contacto" de su portfolio.'
        ]);
    }

    // ============================================================
    // SI NO EXISTE RESPUESTA LOCAL → GROQ
    // ============================================================

    return null;
};
