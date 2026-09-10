// utils/localResponses.js

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
    // IDENTIFICACIÓN DEL USUARIO
    // ============================================================

    const mentionsOtherPerson =
        /\b(luis|carlos|juan|pedro|miguel|andres|fernando|jose|maria|ana|diego|alex)\b/.test(text);

    if (mentionsOtherPerson) {
        return "Solo tengo información sobre Jorge Patricio 🙂";
    }

    // ============================================================
    // PERFIL
    // ============================================================

    if (
        /\b(quien es|perfil|perfil profesional|sobre jorge|hablame de jorge|dime quien es jorge|que sabes de jorge|perfil de jorge|hablame de patricio|sobre patricio)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge Patricio Santamaría Cherrez es Ingeniero en Sistemas y Máster en Ingeniería de Software, con un perfil orientado al desarrollo Full Stack.",
            "Jorge es un profesional de tecnología formado como Ingeniero en Sistemas y Máster en Ingeniería de Software.",
            "Jorge Patricio es Ingeniero en Sistemas y Máster en Ingeniería de Software, con experiencia en desarrollo de aplicaciones y tecnologías web.",
            "Su perfil profesional combina Ingeniería en Sistemas, Ingeniería de Software y desarrollo Full Stack.",
            "Jorge es un profesional del área de software con formación universitaria y de posgrado en tecnología.",
            "Jorge Patricio cuenta con formación como Ingeniero en Sistemas y Máster en Ingeniería de Software.",
            "Su perfil está orientado principalmente al desarrollo de software, desarrollo Full Stack y tecnologías modernas.",
            "Jorge combina conocimientos de desarrollo Frontend, Backend, bases de datos, Cloud y otras tecnologías.",
            "Jorge es un Ingeniero en Sistemas con formación de posgrado en Ingeniería de Software y un perfil tecnológico multidisciplinario.",
            "En resumen, Jorge Patricio es Ingeniero en Sistemas y Máster en Ingeniería de Software, enfocado en el desarrollo de soluciones tecnológicas."
        ]);
    }

    // ============================================================
    // NOMBRE
    // ============================================================

    if (
        /\b(nombre|nombre completo|como se llama|cual es su nombre|como se llama jorge)\b/.test(text)
    ) {
        return randomResponse([
            "Su nombre completo es Jorge Patricio Santamaría Cherrez.",
            "El nombre completo de Jorge es Jorge Patricio Santamaría Cherrez.",
            "Jorge se llama Jorge Patricio Santamaría Cherrez.",
            "Su nombre completo es Jorge Patricio Santamaría Cherrez.",
            "El profesional que aparece en este portfolio es Jorge Patricio Santamaría Cherrez.",
            "Jorge Patricio Santamaría Cherrez es su nombre completo.",
            "El nombre completo del propietario del portfolio es Jorge Patricio Santamaría Cherrez.",
            "Se trata de Jorge Patricio Santamaría Cherrez.",
            "El nombre de Jorge es Jorge Patricio Santamaría Cherrez.",
            "Su nombre completo corresponde a Jorge Patricio Santamaría Cherrez."
        ]);
    }

    // ============================================================
    // PROFESIÓN
    // ============================================================

    if (
        /\b(profesion|profesional|a que se dedica|que hace|ocupacion|rol|cargo|puesto|trabajo)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge es Ingeniero en Sistemas y Máster en Ingeniería de Software, con perfil de desarrollador Full Stack.",
            "Profesionalmente, Jorge se orienta al desarrollo de software y al desarrollo Full Stack.",
            "Jorge trabaja en el área de tecnología y desarrollo de software.",
            "Su perfil profesional está enfocado en Ingeniería de Software y desarrollo Full Stack.",
            "Jorge es un profesional del área tecnológica especializado en desarrollo de aplicaciones.",
            "Su formación y perfil están orientados principalmente al desarrollo de software.",
            "Jorge combina conocimientos de Ingeniería de Software con desarrollo Frontend y Backend.",
            "Su perfil profesional corresponde al de un Ingeniero de Sistemas orientado al desarrollo de software.",
            "Jorge se desempeña dentro del área tecnológica con un enfoque en desarrollo Full Stack.",
            "Su especialidad profesional está relacionada con la creación y desarrollo de soluciones de software."
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
// EDUCACIÓN / FORMACIÓN ACADÉMICA
// ============================================================

if (
    /\b(educacion|formacion|formacion academica|estudios|estudios academicos|trayectoria academica|preparacion academica|formacion profesional|educacion de jorge|estudios de jorge)\b/.test(text)
) {
    return randomResponse([
        "Jorge tiene formación como Ingeniero en Sistemas y Máster en Ingeniería de Software.",
        "La formación académica de Jorge incluye Ingeniería en Sistemas y un Máster en Ingeniería de Software.",
        "Jorge es Ingeniero en Sistemas y posteriormente realizó un Máster en Ingeniería de Software.",
        "Su trayectoria académica comprende un título de Ingeniería en Sistemas y estudios de posgrado en Ingeniería de Software.",
        "Jorge cuenta con formación universitaria en Ingeniería en Sistemas y formación de posgrado en Ingeniería de Software.",
        "Académicamente, Jorge tiene un título de Ingeniero en Sistemas y un Máster en Ingeniería de Software.",
        "La preparación académica de Jorge está enfocada en Sistemas e Ingeniería de Software.",
        "Jorge inició su formación universitaria en Ingeniería en Sistemas y continuó con un Máster en Ingeniería de Software.",
        "Su formación profesional combina Ingeniería en Sistemas con un Máster en Ingeniería de Software.",
        "Jorge cuenta con estudios universitarios de Ingeniería en Sistemas y estudios de cuarto nivel en Ingeniería de Software."
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
    // UNIVERSIDAD DEL MÁSTER
    // ============================================================

    if (
        /\b(universidad|donde estudio|donde hizo|donde realizo|institucion)\b/.test(text) &&
        /\b(master|maestria|posgrado)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge realizó su Máster en Ingeniería de Software en la Universidad Internacional de La Rioja (UNIR), España.",
            "El Máster de Jorge fue realizado en la Universidad Internacional de La Rioja, conocida como UNIR.",
            "Jorge cursó su Máster en Ingeniería de Software en la UNIR, España.",
            "Su formación de posgrado fue realizada en la Universidad Internacional de La Rioja.",
            "Jorge estudió el Máster en Ingeniería de Software en la UNIR de España.",
            "La universidad donde realizó su Máster fue la Universidad Internacional de La Rioja.",
            "Jorge obtuvo su formación de cuarto nivel en la UNIR, España.",
            "Su Máster en Ingeniería de Software corresponde a la Universidad Internacional de La Rioja.",
            "Jorge realizó sus estudios de posgrado en la UNIR.",
            "La UNIR, en España, es la universidad donde Jorge realizó su Máster."
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
    // TESIS
    // ============================================================

    if (
        /\b(tesis|trabajo de titulacion|trabajo de grado|tfm)\b/.test(text)
    ) {
        if (/\b(master|maestria|tfm)\b/.test(text)) {
            return randomResponse([
                "Jorge obtuvo una nota de 9/10 en su TFM.",
                "La calificación del TFM de Jorge fue 9 sobre 10.",
                "Jorge obtuvo 9/10 en su Trabajo de Fin de Máster.",
                "Su TFM fue calificado con 9/10.",
                "La nota obtenida por Jorge en el TFM fue de 9 sobre 10.",
                "Jorge alcanzó una calificación de 9/10 en su trabajo final de Máster.",
                "El resultado del TFM de Jorge fue 9/10.",
                "En su Trabajo de Fin de Máster obtuvo una nota de 9/10.",
                "Jorge recibió una calificación de 9 sobre 10 en su TFM.",
                "Su TFM tuvo una calificación final de 9/10."
            ]);
        }

        return randomResponse([
            "Jorge obtuvo una nota de 9.50/10 en su tesis de Ingeniería.",
            "La tesis de Ingeniería de Jorge fue calificada con 9.50 sobre 10.",
            "Jorge obtuvo 9.50/10 en su trabajo de titulación.",
            "Su tesis universitaria tuvo una calificación de 9.50/10.",
            "La nota de la tesis de Jorge fue 9.50 sobre 10.",
            "Jorge consiguió una calificación de 9.50/10 en su tesis.",
            "Su trabajo de titulación fue evaluado con 9.50/10.",
            "Jorge obtuvo 9.50 sobre 10 en la tesis de Ingeniería en Sistemas.",
            "La calificación de su tesis fue de 9.50/10.",
            "Jorge culminó su trabajo de titulación con una nota de 9.50/10."
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
    // REACT
    // ============================================================

    if (
        /\b(react|reactjs|react js)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge utiliza React para desarrollar interfaces y aplicaciones web.",
            "React forma parte importante del stack Frontend de Jorge.",
            "Jorge tiene experiencia trabajando con React en sus proyectos web.",
            "Entre las tecnologías Frontend que utiliza Jorge se encuentra React.",
            "Jorge emplea React para construir interfaces modernas e interactivas.",
            "React es una de las principales tecnologías utilizadas por Jorge en Frontend.",
            "Jorge ha desarrollado proyectos web utilizando React.",
            "Su stack tecnológico incluye React para el desarrollo de interfaces.",
            "Jorge utiliza React como una de sus principales herramientas de desarrollo Frontend.",
            "React forma parte de las tecnologías que Jorge utiliza en sus aplicaciones."
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
    // DJANGO
    // ============================================================

    if (
        /\b(django|django rest|drf|django rest framework)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge utiliza Django y Django REST Framework para desarrollo Backend y APIs.",
            "Django forma parte del stack Backend de Jorge.",
            "Jorge trabaja con Django para desarrollar aplicaciones y servicios web.",
            "Django REST Framework también forma parte de las tecnologías Backend utilizadas por Jorge.",
            "Jorge utiliza Django para construir soluciones Backend y APIs.",
            "Su experiencia Backend incluye Django y Django REST Framework.",
            "Django es una de las principales tecnologías de servidor utilizadas por Jorge.",
            "Jorge ha desarrollado proyectos Backend utilizando Django.",
            "Dentro de su stack Python, Jorge trabaja con Django y Django REST Framework.",
            "Django y DRF forman parte de las herramientas Backend de Jorge."
        ]);
    }

    // ============================================================
    // JAVA
    // ============================================================

    if (
        /\b(java|spring|spring boot)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge utiliza Java como parte de su stack Backend.",
            "Java forma parte de las tecnologías Backend que conoce Jorge.",
            "Jorge tiene experiencia trabajando con Java para desarrollo de software.",
            "Java es una de las tecnologías utilizadas por Jorge en Backend.",
            "Su stack tecnológico incluye Java para el desarrollo del lado del servidor.",
            "Jorge trabaja con Java dentro de su perfil de desarrollo Backend.",
            "Java forma parte de los conocimientos de programación de Jorge.",
            "Jorge utiliza Java para desarrollar soluciones de software.",
            "Dentro de sus tecnologías Backend se encuentra Java.",
            "Jorge cuenta con experiencia utilizando Java en proyectos de software."
        ]);
    }

    // ============================================================
    // JAVASCRIPT
    // ============================================================

    if (
        /\b(javascript|js)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge utiliza JavaScript principalmente para desarrollo web.",
            "JavaScript forma parte del stack tecnológico de Jorge.",
            "Jorge trabaja con JavaScript para desarrollar aplicaciones e interfaces web.",
            "JavaScript es una de las principales tecnologías Frontend que utiliza Jorge.",
            "Jorge utiliza JavaScript junto con React en sus proyectos web.",
            "Su experiencia Frontend incluye JavaScript.",
            "JavaScript forma parte de las tecnologías principales de desarrollo de Jorge.",
            "Jorge emplea JavaScript para crear funcionalidades interactivas en sus aplicaciones.",
            "Dentro de su stack Frontend, Jorge trabaja con JavaScript y React.",
            "Jorge cuenta con experiencia utilizando JavaScript en desarrollo web."
        ]);
    }
// ============================================================
    // PYTHON
    // ============================================================

    if (
        /\b(python|python3)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge utiliza Python principalmente en desarrollo Backend y proyectos tecnológicos.",
            "Python forma parte del stack de programación de Jorge.",
            "Jorge tiene experiencia trabajando con Python.",
            "Python es una de las tecnologías utilizadas por Jorge para desarrollo de software.",
            "Jorge utiliza Python especialmente junto con tecnologías Backend como Django.",
            "Su stack tecnológico incluye Python.",
            "Jorge trabaja con Python para desarrollar soluciones de software.",
            "Python forma parte de los conocimientos de programación de Jorge.",
            "Jorge utiliza Python en proyectos relacionados con desarrollo Backend.",
            "Dentro de sus tecnologías de programación se encuentra Python."
        ]);
    }

    // ============================================================
    // BASES DE DATOS
    // ============================================================

    if (
        /\b(base de datos|bases de datos|database|databases|bd|que base de datos usa|que bases de datos usa|postgresql|postgres|mysql)\b/.test(text)
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
        /\b(cloud|nube|deploy|despliegue|hosting|servicios cloud|plataformas cloud|donde despliega|donde hace deploy|alojamiento|aws|vercel|render)\b/.test(text)
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
    // GIT / GITHUB
    // ============================================================

    if (
        /\b(git|github|repositorio|repositorios|control de versiones)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge utiliza Git y GitHub para gestionar y versionar sus proyectos.",
            "Git y GitHub forman parte de las herramientas de desarrollo utilizadas por Jorge.",
            "Jorge trabaja con Git para control de versiones y GitHub para alojar sus repositorios.",
            "Sus proyectos utilizan Git y GitHub como herramientas de control y colaboración.",
            "Jorge utiliza Git y GitHub dentro de su flujo de desarrollo.",
            "GitHub es utilizado por Jorge para almacenar y mostrar sus proyectos de software.",
            "Jorge tiene experiencia trabajando con repositorios Git y GitHub.",
            "El control de versiones de sus proyectos se realiza principalmente mediante Git.",
            "Jorge utiliza GitHub como plataforma para sus repositorios de código.",
            "Git y GitHub son parte habitual de las herramientas tecnológicas de Jorge."
        ]);
    }

    // ============================================================
    // LINUX
    // ============================================================

    if (
        /\b(linux|ubuntu|sistema operativo linux)\b/.test(text)
    ) {
        return randomResponse([
            "Linux forma parte de los conocimientos tecnológicos de Jorge.",
            "Jorge tiene conocimientos y experiencia trabajando con Linux.",
            "Linux es uno de los sistemas que forma parte del perfil tecnológico de Jorge.",
            "Jorge utiliza Linux dentro de sus herramientas y entornos tecnológicos.",
            "El stack tecnológico de Jorge incluye conocimientos de Linux.",
            "Jorge tiene experiencia trabajando en entornos Linux.",
            "Linux forma parte de las tecnologías y herramientas que Jorge conoce.",
            "Jorge utiliza conocimientos de Linux en su entorno de desarrollo.",
            "Dentro de sus conocimientos tecnológicos se encuentra Linux.",
            "Jorge cuenta con experiencia utilizando sistemas basados en Linux."
        ]);
    }

    // ============================================================
    // CIBERSEGURIDAD
    // ============================================================

    if (
        /\b(ciberseguridad|seguridad informatica|seguridad|cybersecurity)\b/.test(text)
    ) {
        return randomResponse([
            "La ciberseguridad forma parte de los conocimientos tecnológicos de Jorge.",
            "Jorge cuenta con conocimientos relacionados con ciberseguridad y seguridad informática.",
            "La seguridad informática es una de las áreas tecnológicas presentes en su perfil.",
            "Jorge tiene conocimientos en temas relacionados con ciberseguridad.",
            "Dentro de su perfil tecnológico se encuentra el área de seguridad informática.",
            "Jorge combina desarrollo de software con conocimientos de seguridad informática.",
            "La ciberseguridad forma parte de las áreas de interés tecnológico de Jorge.",
            "Su perfil incluye conocimientos relacionados con protección y seguridad de sistemas.",
            "Jorge posee conocimientos tecnológicos relacionados con seguridad informática.",
            "La seguridad informática es uno de los campos presentes dentro de sus conocimientos."
        ]);
    }

    // ============================================================
    // VIRTUALIZACIÓN
    // ============================================================

    if (
        /\b(virtualizacion|virtualizacion|virtualbox|maquinas virtuales|maquina virtual)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge cuenta con conocimientos en virtualización.",
            "La virtualización forma parte de los conocimientos tecnológicos de Jorge.",
            "Jorge tiene experiencia trabajando con entornos virtualizados.",
            "VirtualBox forma parte de las herramientas que Jorge conoce.",
            "Jorge utiliza conocimientos de virtualización dentro de su perfil tecnológico.",
            "La virtualización es una de las áreas técnicas presentes en su experiencia.",
            "Jorge conoce herramientas relacionadas con máquinas virtuales y virtualización.",
            "Dentro de sus conocimientos tecnológicos se encuentra la virtualización.",
            "Jorge tiene experiencia utilizando herramientas de virtualización como VirtualBox.",
            "La virtualización forma parte de las tecnologías y herramientas que Jorge maneja."
        ]);
    }

    // ============================================================
    // PORTFOLIO
    // ============================================================

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

    // ============================================================
    // QUIZ ECUADOR
    // ============================================================

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

    // ============================================================
    // APP DEL CLIMA
    // ============================================================

    if (
        /\b(app del clima|aplicacion del clima|aplicacion clima|app clima)\b/.test(text)
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

    // ============================================================
    // CHATBOT / SASHA
    // ============================================================

    if (
        /\b(chatbot|chat bot|asistente virtual|bot de jorge|sasha)\b/.test(text)
    ) {
        return randomResponse([
            "Sasha es la asistente virtual de IA del portfolio de Jorge.",
            "El Chatbot es un proyecto de asistente virtual desarrollado para interactuar con los visitantes del portfolio.",
            "Sasha permite a los visitantes interactuar mediante preguntas y obtener información sobre Jorge.",
            "Este proyecto incorpora inteligencia artificial para ofrecer una experiencia conversacional dentro del portfolio.",
            "Sasha funciona como asistente virtual del portfolio y puede responder preguntas sobre el perfil profesional de Jorge.",
            "El Chatbot es una de las funcionalidades inteligentes desarrolladas para el portfolio de Jorge.",
            "La asistente Sasha está diseñada para conversar con los visitantes y proporcionar información de manera interactiva.",
            "El proyecto combina desarrollo web con inteligencia artificial para crear una experiencia conversacional.",
            "Sasha ayuda a los visitantes a conocer el perfil, proyectos y tecnologías de Jorge mediante conversación.",
            "El chatbot representa la integración de inteligencia artificial dentro del portfolio profesional de Jorge."
        ]);
    }

    // ============================================================
    // AJEDREZ
    // ============================================================

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

    // ============================================================
    // E-COMMERCE
    // ============================================================

    if (
        /\b(ecommerce|e-commerce|tienda online|tienda virtual|comercio electronico|e commerce)\b/.test(text)
    ) {
        return randomResponse([
            "El proyecto E-commerce de Jorge es una tienda online desarrollada como aplicación Full Stack.",
            "Jorge desarrolló un E-commerce con funcionalidades de tienda virtual, productos, variantes y carrito.",
            "Su proyecto de comercio electrónico integra Frontend y Backend para gestionar una tienda online.",
            "El E-commerce es uno de los proyectos Full Stack de Jorge.",
            "En su E-commerce trabaja con funcionalidades relacionadas con productos, categorías, variantes y carrito de compras.",
            "El proyecto representa una aplicación de comercio electrónico desarrollada con tecnologías web modernas.",
            "Jorge creó una tienda virtual como proyecto Full Stack, integrando diferentes tecnologías de desarrollo.",
            "El E-commerce permite demostrar conocimientos de desarrollo Frontend, Backend, bases de datos y despliegue.",
            "Este proyecto está orientado a simular el funcionamiento de una tienda online completa.",
            "El E-commerce forma parte de los proyectos principales de Jorge y demuestra su capacidad para desarrollar aplicaciones Full Stack."
        ]);
    }

    // ============================================================
    // CERTIFICACIONES
    // ============================================================

    if (
        /\b(certificaciones|certificados|certificacion|certificado|cursos certificados)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge cuenta con certificaciones y formación complementaria relacionada con tecnología y desarrollo.",
            "En su portfolio, Jorge presenta diferentes certificaciones obtenidas durante su formación profesional.",
            "Las certificaciones de Jorge complementan su formación universitaria y de posgrado.",
            "Jorge ha realizado formación adicional respaldada mediante certificaciones.",
            "Su portfolio incluye una sección dedicada a mostrar sus certificaciones tecnológicas.",
            "Las certificaciones forman parte del perfil profesional que Jorge presenta en su portfolio.",
            "Jorge complementa su formación académica con cursos y certificaciones tecnológicas.",
            "En su trayectoria profesional también se incluyen certificaciones relacionadas con tecnología.",
            "La sección de certificaciones muestra parte de la formación complementaria de Jorge.",
            "Jorge utiliza sus certificaciones para respaldar conocimientos adquiridos en diferentes áreas tecnológicas."
        ]);
    }

    // ============================================================
    // CONTACTO
    // ============================================================

    if (
        /\b(contacto|contactar|contactarlo|email|correo|gmail|whatsapp|telefono)\b/.test(text)
    ) {
        return randomResponse([
            "Puedes contactar a Jorge mediante los medios de contacto disponibles en su portfolio.",
            "El portfolio de Jorge incluye una sección de contacto para comunicarse con él.",
            "Jorge dispone de medios de contacto como correo electrónico y WhatsApp.",
            "Para contactar con Jorge puedes utilizar los datos disponibles en la sección Contacto de su portfolio.",
            "La sección Contacto del portfolio contiene los medios disponibles para comunicarse con Jorge.",
            "Puedes encontrar las opciones de contacto de Jorge directamente en su portfolio profesional.",
            "Jorge ofrece diferentes canales para facilitar el contacto profesional.",
            "En su portfolio encontrarás sus medios de contacto y redes profesionales.",
            "La información de contacto de Jorge está disponible en la sección correspondiente de su página personal.",
            "Para establecer contacto profesional con Jorge, puedes utilizar los canales indicados en su portfolio."
        ]);
    }
 // ============================================================
    // UBICACIÓN
    // ============================================================

    if (
        /\b(donde vive|donde esta|ubicacion|ciudad|pais|de donde es|donde reside|ecuador|ambato)\b/.test(text)
    ) {
        return randomResponse([
            "Jorge está ubicado en Ambato, Ecuador.",
            "Jorge se encuentra en Ambato, Ecuador.",
            "Su ubicación indicada en el portfolio es Ambato, Ecuador.",
            "Jorge es de Ecuador y su ubicación profesional indicada es Ambato.",
            "Actualmente, la información de contacto de Jorge indica Ambato, Ecuador.",
            "Jorge tiene presencia profesional en Ambato, Ecuador.",
            "La ciudad asociada al perfil profesional de Jorge es Ambato, Ecuador.",
            "En su portfolio aparece Ambato, Ecuador como ubicación.",
            "Jorge se encuentra profesionalmente ubicado en Ambato, Ecuador.",
            "La información de su portfolio señala Ambato, Ecuador como su ubicación."
        ]);
    }

    // ============================================================
    // HABILIDADES / STACK
    // ============================================================

    if (
        /\b(stack|tecnologias|tecnologia|habilidades|skills|conocimientos|que tecnologias usa|que tecnologias conoce)\b/.test(text)
    ) {
        return randomResponse([
            "El stack de Jorge incluye React, JavaScript, Django, Java, Python, PostgreSQL, MySQL, AWS, Vercel, Render, Git y Linux.",
            "Entre las principales tecnologías de Jorge están React, JavaScript, Django, Java, Python y bases de datos como PostgreSQL y MySQL.",
            "Jorge cuenta con conocimientos en desarrollo Frontend, Backend, bases de datos, Cloud, Git y Linux.",
            "Su stack tecnológico combina React y JavaScript en Frontend con Django, Java y Python en Backend.",
            "Jorge trabaja con tecnologías web, Backend, bases de datos, Cloud y herramientas de desarrollo.",
            "Dentro de sus conocimientos se encuentran React, JavaScript, Django, Java, Python, PostgreSQL, MySQL, AWS, Vercel y Render.",
            "El perfil tecnológico de Jorge es multidisciplinario y abarca Frontend, Backend, bases de datos, Cloud y sistemas.",
            "Jorge maneja diferentes tecnologías para construir, almacenar, desplegar y mantener aplicaciones web.",
            "Su stack incluye tecnologías modernas de desarrollo y herramientas como Git, GitHub y Linux.",
            "Jorge combina tecnologías como React, JavaScript, Django, Java, Python, PostgreSQL, MySQL, AWS, Vercel y Render."
        ]);
    }

    // ============================================================
    // GITHUB
    // ============================================================

    if (
        /\b(github de jorge|github de patricio|repositorio de jorge)\b/.test(text)
    ) {
        return randomResponse([
            "El GitHub de Jorge está disponible desde su portfolio profesional.",
            "Jorge utiliza GitHub para publicar y gestionar sus proyectos de software.",
            "Puedes encontrar los proyectos de Jorge en su perfil de GitHub.",
            "GitHub forma parte de los canales profesionales donde Jorge muestra su código.",
            "Jorge utiliza GitHub como plataforma para sus repositorios de desarrollo.",
            "Sus proyectos de software pueden consultarse desde su perfil de GitHub.",
            "El perfil de GitHub de Jorge reúne diferentes proyectos tecnológicos.",
            "Jorge utiliza GitHub para mantener sus repositorios y mostrar su trabajo.",
            "Su GitHub es uno de los recursos disponibles para conocer sus proyectos.",
            "El portfolio de Jorge incluye acceso a su perfil de GitHub."
        ]);
    }

    // ============================================================
    // SI NO ES INFORMACIÓN LOCAL
    // ============================================================

    return null;
};
