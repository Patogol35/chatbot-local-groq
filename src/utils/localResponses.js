import { JORGE } from "./jorgeInfo.js";

/*
|--------------------------------------------------------------------------
| NORMALIZACIÓN
|--------------------------------------------------------------------------
*/

const normalize = (text = "") =>
    text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?¡!.,;:()[\]{}"'`]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

/*
|--------------------------------------------------------------------------
| COMPROBAR PALABRAS
|--------------------------------------------------------------------------
*/

const containsAny = (text, words = []) =>
    words.some((word) => text.includes(word));

/*
|--------------------------------------------------------------------------
| DETECTAR SI HABLA DE OTRA PERSONA
|--------------------------------------------------------------------------
|
| Si la pregunta menciona explícitamente a otra persona,
| NO respondemos localmente.
|
| Ejemplo:
|
| "¿Qué tecnologías usa Luis?"
| → false
| → Groq
|
| "¿Qué tecnologías usa Jorge?"
| → true
| → Local
|
| "¿Qué tecnologías usa?"
| → true
| → Local
|
|--------------------------------------------------------------------------
*/

const isAboutJorge = (text) => {
    /*
    |--------------------------------------------------------------------------
    | REFERENCIAS DIRECTAS A JORGE
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "jorge",
            "jorge patricio",
            "patricio",
            "santamaria",
            "santamaria cherrez",
        ])
    ) {
        return true;
    }

    /*
    |--------------------------------------------------------------------------
    | NOMBRES / PERSONAS DISTINTAS
    |--------------------------------------------------------------------------
    |
    | Si el usuario escribe "de Luis", "de Carlos", etc.,
    | la pregunta debe pasar a Groq.
    |
    | Esta lista puede ampliarse cuando quieras.
    |
    |--------------------------------------------------------------------------
    */

    const otherNames = [
        "luis",
        "juan",
        "pedro",
        "carlos",
        "miguel",
        "ana",
        "maria",
        "jose",
        "andres",
        "diego",
        "fernando",
        "ricardo",
        "david",
        "alex",
        "alexander",
        "daniel",
        "gabriel",
        "sofia",
        "lucia",
        "laura",
        "paula",
        "carmen",
        "roberto",
        "alejandro",
        "manuel",
        "sergio",
        "pablo",
        "mateo",
        "martin",
        "martín",
    ];

    /*
    |--------------------------------------------------------------------------
    | SI APARECE OTRO NOMBRE
    |--------------------------------------------------------------------------
    */

    if (containsAny(text, otherNames)) {
        return false;
    }

    /*
    |--------------------------------------------------------------------------
    | SI NO MENCIONA NINGÚN NOMBRE
    |--------------------------------------------------------------------------
    |
    | Por defecto asumimos que está hablando de Jorge,
    | porque Sasha pertenece al portfolio de Jorge.
    |
    |--------------------------------------------------------------------------
    */

    return true;
};

/*
|--------------------------------------------------------------------------
| RESPUESTAS LOCALES
|--------------------------------------------------------------------------
*/

const responses = {

    /*
    |--------------------------------------------------------------------------
    | SASHA
    |--------------------------------------------------------------------------
    */

    sasha: () =>
        "Soy Sasha, la asistente virtual del portfolio de Jorge. Puedo ayudarte con información sobre Jorge, sus estudios, certificaciones, tecnologías, proyectos e intereses. También puedo responder preguntas generales de tecnología.",

    /*
    |--------------------------------------------------------------------------
    | JORGE
    |--------------------------------------------------------------------------
    */

    jorge: () =>
        `${JORGE.nombre} es ${JORGE.perfil}`,

    /*
    |--------------------------------------------------------------------------
    | FORMACIÓN COMPLETA
    |--------------------------------------------------------------------------
    */

    education: () =>
        `Jorge es ${JORGE.estudios.ingenieria.titulo} por la ${JORGE.estudios.ingenieria.universidad}, ${JORGE.estudios.ingenieria.pais}, con un promedio final de ${JORGE.estudios.ingenieria.promedio}. También tiene un ${JORGE.estudios.master.titulo} por la ${JORGE.estudios.master.universidad}, ${JORGE.estudios.master.pais}, con un promedio final de ${JORGE.estudios.master.promedio}.`,

    /*
    |--------------------------------------------------------------------------
    | INGENIERÍA
    |--------------------------------------------------------------------------
    */

    engineering: () =>
        `Jorge es ${JORGE.estudios.ingenieria.titulo} por la ${JORGE.estudios.ingenieria.universidad}, Ecuador. Obtuvo un promedio final de ${JORGE.estudios.ingenieria.promedio} y una nota de ${JORGE.estudios.ingenieria.tesis} en su tesis.`,

    /*
    |--------------------------------------------------------------------------
    | MÁSTER
    |--------------------------------------------------------------------------
    */

    master: () =>
        `Jorge tiene un ${JORGE.estudios.master.titulo} por la ${JORGE.estudios.master.universidad}, España. Su promedio final fue ${JORGE.estudios.master.promedio} y obtuvo una nota de ${JORGE.estudios.master.tfm} en su TFM.`,

    /*
    |--------------------------------------------------------------------------
    | CERTIFICACIONES
    |--------------------------------------------------------------------------
    */

    certifications: () =>
        `Jorge cuenta con las siguientes certificaciones y formaciones: ${JORGE.certificaciones.join(
            "; "
        )}.`,

    /*
    |--------------------------------------------------------------------------
    | TODAS LAS TECNOLOGÍAS
    |--------------------------------------------------------------------------
    */

    technologies: () =>
        `Jorge trabaja con ${JORGE.tecnologias.frontend.join(
            ", "
        )} en frontend; ${JORGE.tecnologias.backend.join(
            ", "
        )} en backend; ${JORGE.tecnologias.basesDatos.join(
            ", "
        )} en bases de datos; y ${JORGE.tecnologias.deploy.join(
            ", "
        )} para despliegue.`,

    /*
    |--------------------------------------------------------------------------
    | FRONTEND
    |--------------------------------------------------------------------------
    */

    frontend: () =>
        `En frontend, Jorge trabaja principalmente con ${JORGE.tecnologias.frontend.join(
            " y "
        )}.`,

    /*
    |--------------------------------------------------------------------------
    | BACKEND
    |--------------------------------------------------------------------------
    */

    backend: () =>
        `En backend, Jorge trabaja principalmente con ${JORGE.tecnologias.backend.join(
            " y "
        )}.`,

    /*
    |--------------------------------------------------------------------------
    | BASES DE DATOS
    |--------------------------------------------------------------------------
    */

    databases: () =>
        `Jorge trabaja con ${JORGE.tecnologias.basesDatos.join(
            " y "
        )} como tecnologías de bases de datos.`,

    /*
    |--------------------------------------------------------------------------
    | DEPLOY
    |--------------------------------------------------------------------------
    */

    deploy: () =>
        `Jorge tiene experiencia realizando despliegues con ${JORGE.tecnologias.deploy.join(
            ", "
        )}.`,

    /*
    |--------------------------------------------------------------------------
    | ÁREAS PROFESIONALES
    |--------------------------------------------------------------------------
    */

    areas: () =>
        `Jorge se especializa en ${JORGE.areas.join(
            ", "
        )}.`,

    /*
    |--------------------------------------------------------------------------
    | PROYECTOS
    |--------------------------------------------------------------------------
    */

    projects: () =>
        `Entre los proyectos de Jorge se encuentran: ${JORGE.proyectos.join(
            ", "
        )}.`,

    /*
    |--------------------------------------------------------------------------
    | INTERESES
    |--------------------------------------------------------------------------
    */

    interests: () =>
        `Entre los intereses de Jorge están ${JORGE.intereses.join(
            ", "
        )}.`,

    /*
    |--------------------------------------------------------------------------
    | CONTACTO
    |--------------------------------------------------------------------------
    */

    contact: () =>
        JORGE.contacto,
};

/*
|--------------------------------------------------------------------------
| RESPUESTAS COMBINADAS
|--------------------------------------------------------------------------
|
| Ejemplos:
|
| "¿Qué estudió y qué tecnologías utiliza?"
|
| "¿Qué certificaciones tiene y qué proyectos ha realizado?"
|
| "¿Qué tecnologías usa y en qué áreas se especializa?"
|
|--------------------------------------------------------------------------
*/

const getCombinedResponse = (text) => {
    const parts = [];

    /*
    |--------------------------------------------------------------------------
    | FORMACIÓN
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "estudio",
            "estudios",
            "estudiado",
            "formacion",
            "educacion",
            "carrera",
            "titulo",
            "titulos",
            "ingenieria",
            "ingeniero",
            "master",
            "maestria",
            "universidad",
        ])
    ) {
        parts.push(responses.education());
    }

    /*
    |--------------------------------------------------------------------------
    | TECNOLOGÍAS
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "tecnologia",
            "tecnologias",
            "tecnologico",
            "tecnologica",
            "tecnologicos",
            "tecnologicas",
            "stack",
            "stack tecnologico",
            "tech stack",
            "habilidades",
            "habilidades tecnicas",
            "herramientas",
            "herramientas tecnicas",
            "lenguajes",
            "lenguajes de programacion",
            "programacion",
            "programacion web",
            "que tecnologias usa",
            "que tecnologias utiliza",
            "que tecnologias conoce",
            "que tecnologias maneja",
            "que herramientas usa",
            "que herramientas utiliza",
            "que stack usa",
            "que stack utiliza",
            "con que tecnologias trabaja",
            "con que tecnologia trabaja",
            "tecnologias que usa",
            "tecnologias que utiliza",
            "tecnologias de jorge",
            "tecnologia de jorge",
            "stack de jorge",
            "technical skills",
            "technologies",
            "technology",
            "what technologies does jorge use",
            "what technologies does he use",
        ])
    ) {
        parts.push(responses.technologies());
    }

    /*
    |--------------------------------------------------------------------------
    | PROYECTOS
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "proyecto",
            "proyectos",
            "desarrollado",
            "desarrollados",
            "desarrollo",
            "desarrolla",
            "creado",
            "creados",
            "ha hecho",
            "ha desarrollado",
            "ha creado",
            "trabajos realizados",
        ])
    ) {
        parts.push(responses.projects());
    }

    /*
    |--------------------------------------------------------------------------
    | CERTIFICACIONES
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "certificacion",
            "certificaciones",
            "certificado",
            "certificados",
            "credenciales",
            "curso",
            "cursos",
            "formacion profesional",
        ])
    ) {
        parts.push(responses.certifications());
    }

    /*
    |--------------------------------------------------------------------------
    | ÁREAS
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "especializa",
            "especialidad",
            "especialidades",
            "areas",
            "area profesional",
            "areas profesionales",
        ])
    ) {
        parts.push(responses.areas());
    }

    /*
    |--------------------------------------------------------------------------
    | INTERESES
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "intereses",
            "interes",
            "gustos",
            "gusta",
            "hobbies",
            "pasatiempos",
        ])
    ) {
        parts.push(responses.interests());
    }

    /*
    |--------------------------------------------------------------------------
    | ELIMINAR DUPLICADOS
    |--------------------------------------------------------------------------
    */

    const uniqueParts = [...new Set(parts)];

    /*
    |--------------------------------------------------------------------------
    | SOLO COMBINAR SI HAY 2 O MÁS CATEGORÍAS
    |--------------------------------------------------------------------------
    */

    if (uniqueParts.length >= 2) {
        return uniqueParts.join(" ");
    }

    return null;
};

/*
|--------------------------------------------------------------------------
| RESPUESTA LOCAL PRINCIPAL
|--------------------------------------------------------------------------
*/

export const getLocalResponse = (message) => {
    /*
    |--------------------------------------------------------------------------
    | NORMALIZAR
    |--------------------------------------------------------------------------
    */

    const text = normalize(message);

    if (!text) {
        return null;
    }

    /*
    |--------------------------------------------------------------------------
    | VERIFICAR PERSONA
    |--------------------------------------------------------------------------
    |
    | Si pregunta por otra persona:
    |
    | return null
    |
    | El controlador enviará la pregunta a Groq.
    |--------------------------------------------------------------------------
    */

    if (!isAboutJorge(text)) {
        console.log(
            "🧠 Pregunta sobre otra persona → Groq"
        );

        return null;
    }

    /*
    |--------------------------------------------------------------------------
    | 1. PREGUNTAS COMBINADAS
    |--------------------------------------------------------------------------
    */

    const combinedResponse =
        getCombinedResponse(text);

    if (combinedResponse) {
        return combinedResponse;
    }

    /*
    |--------------------------------------------------------------------------
    | 2. QUIÉN ES SASHA
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "quien eres",
            "quien es sasha",
            "que eres",
            "eres una ia",
            "eres inteligencia artificial",
            "eres humano",
            "eres humana",
            "presentate",
            "hablame de ti",
            "cuentame sobre ti",
            "who are you",
            "who is sasha",
            "what are you",
            "are you ai",
        ])
    ) {
        return responses.sasha();
    }

    /*
    |--------------------------------------------------------------------------
    | 3. SALUDOS
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "hola",
            "hola sasha",
            "buenos dias",
            "buenas tardes",
            "buenas noches",
            "hello",
            "hi",
            "hey",
            "hey sasha",
            "good morning",
            "good afternoon",
            "good evening",
        ])
    ) {
        return "Hola, soy Sasha. ¿Qué te gustaría saber sobre Jorge o sobre su trabajo?";
    }

    /*
    |--------------------------------------------------------------------------
    | 4. QUIÉN ES JORGE
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "quien es jorge",
            "quien es jorge patricio",
            "hablame de jorge",
            "habla de jorge",
            "dime sobre jorge",
            "cuentame sobre jorge",
            "informacion de jorge",
            "informacion sobre jorge",
            "perfil de jorge",
            "who is jorge",
            "tell me about jorge",
            "who is jorge patricio",
        ])
    ) {
        return responses.jorge();
    }

    /*
    |--------------------------------------------------------------------------
    | 5. CONTACTO
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "contacto",
            "contactar",
            "contactar a jorge",
            "como contacto a jorge",
            "como puedo contactar",
            "como hablar con jorge",
            "hablar con jorge",
            "comunicarme con jorge",
            "correo de jorge",
            "email de jorge",
            "contact information",
            "how can i contact jorge",
            "how to contact jorge",
            "contact jorge",
        ])
    ) {
        return responses.contact();
    }

    /*
    |--------------------------------------------------------------------------
    | 6. CERTIFICACIONES
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "certificacion",
            "certificaciones",
            "certificado",
            "certificados",
            "credenciales",
            "cursos realizados",
            "cursos ha realizado",
            "que cursos tiene",
            "que certificaciones tiene",
            "certifications",
            "certificates",
            "what certifications",
        ])
    ) {
        return responses.certifications();
    }

/*
    |--------------------------------------------------------------------------
    | 7. FORMACIÓN
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "estudios de jorge",
            "que estudio jorge",
            "que ha estudiado",
            "que estudio",
            "donde estudio jorge",
            "donde estudio",
            "formacion de jorge",
            "formacion academica",
            "formacion profesional",
            "carrera de jorge",
            "carrera",
            "universidad de jorge",
            "universidad",
            "titulos de jorge",
            "titulos",
            "titulo de jorge",
            "titulo",
            "que carrera estudio",
            "que carrera hizo",
            "educacion de jorge",
            "educacion",
            "education",
            "what did jorge study",
            "where did jorge study",
            "what is jorge education",
            "what did he study",
        ])
    ) {
        return responses.education();
    }

    /*
    |--------------------------------------------------------------------------
    | 8. INGENIERÍA
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "es ingeniero",
            "es ingeniero de sistemas",
            "ingeniero en sistemas",
            "ingenieria de sistemas",
            "estudio sistemas",
            "universidad indoamerica",
            "indoamerica",
            "nota de tesis",
            "calificacion de tesis",
            "promedio de ingenieria",
            "tesis",
            "engineering degree",
            "systems engineer",
        ])
    ) {
        return responses.engineering();
    }

    /*
    |--------------------------------------------------------------------------
    | 9. MÁSTER
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "tiene master",
            "tiene un master",
            "tiene maestria",
            "que master tiene",
            "que maestria tiene",
            "master de jorge",
            "maestria de jorge",
            "donde hizo el master",
            "donde hizo la maestria",
            "estudio un master",
            "estudio una maestria",
            "unir",
            "tfm",
            "nota del tfm",
            "promedio del master",
            "masters degree",
            "master degree",
            "what master does jorge have",
        ])
    ) {
        return responses.master();
    }

    /*
    |--------------------------------------------------------------------------
    | 10. TECNOLOGÍAS
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "tecnologia",
            "tecnologias",
            "tecnologico",
            "tecnologica",
            "tecnologicos",
            "tecnologicas",
            "stack",
            "stack tecnologico",
            "tech stack",
            "habilidades",
            "habilidades tecnicas",
            "herramientas",
            "herramientas tecnicas",
            "lenguajes",
            "lenguajes de programacion",
            "programacion",
            "que tecnologias usa",
            "que tecnologias utiliza",
            "que tecnologias conoce",
            "que tecnologias maneja",
            "que herramientas usa",
            "que herramientas utiliza",
            "que stack usa",
            "que stack utiliza",
            "con que tecnologias trabaja",
            "con que tecnologia trabaja",
            "tecnologias que usa",
            "tecnologias que utiliza",
            "tecnologias de jorge",
            "tecnologia de jorge",
            "stack de jorge",
            "technical skills",
            "technologies",
            "technology",
            "what technologies does jorge use",
            "what technologies does he use",
        ])
    ) {
        return responses.technologies();
    }

    /*
    |--------------------------------------------------------------------------
    | 11. FRONTEND
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "frontend",
            "front end",
            "front-end",
            "react",
            "javascript",
            "que usa para frontend",
            "tecnologias frontend",
            "frontend technologies",
            "does he know react",
        ])
    ) {
        return responses.frontend();
    }

    /*
    |--------------------------------------------------------------------------
    | 12. BACKEND
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "backend",
            "back end",
            "back-end",
            "django",
            "java",
            "que usa para backend",
            "tecnologias backend",
            "backend technologies",
            "does he know django",
        ])
    ) {
        return responses.backend();
    }

    /*
    |--------------------------------------------------------------------------
    | 13. BASES DE DATOS
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "base de datos",
            "bases de datos",
            "postgresql",
            "mysql",
            "que base de datos usa",
            "que bases de datos conoce",
            "database",
            "databases",
            "what database does he use",
        ])
    ) {
        return responses.databases();
    }

    /*
    |--------------------------------------------------------------------------
    | 14. DEPLOY
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "deploy",
            "despliegue",
            "deployment",
            "hosting",
            "donde despliega",
            "donde aloja",
            "vercel",
            "render",
            "aws",
            "cloud",
            "where does he deploy",
        ])
    ) {
        return responses.deploy();
    }

    /*
    |--------------------------------------------------------------------------
    | 15. ÁREAS PROFESIONALES
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "en que se especializa",
            "en que area trabaja",
            "areas de trabajo",
            "areas profesionales",
            "especialidad",
            "especialidades",
            "area profesional",
            "professional areas",
            "specialties",
            "what does he specialize in",
        ])
    ) {
        return responses.areas();
    }

    /*
    |--------------------------------------------------------------------------
    | 16. PROYECTOS
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "proyectos",
            "proyecto de jorge",
            "proyectos de jorge",
            "que proyectos tiene",
            "que proyectos ha hecho",
            "que proyectos ha desarrollado",
            "que ha desarrollado",
            "que ha creado",
            "trabajos realizados",
            "portfolio projects",
            "projects",
            "what projects has jorge built",
            "what projects has he made",
        ])
    ) {
        return responses.projects();
    }

    /*
    |--------------------------------------------------------------------------
    | 17. INTERESES
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "intereses",
            "que le gusta",
            "que le interesa",
            "gustos de jorge",
            "hobbies",
            "pasatiempos",
            "tiempo libre",
            "que hace en su tiempo libre",
            "lectura",
            "dan brown",
            "musica",
            "interests",
            "what does jorge like",
        ])
    ) {
        return responses.interests();
    }

    /*
    |--------------------------------------------------------------------------
    | NO EXISTE RESPUESTA LOCAL
    |--------------------------------------------------------------------------
    |
    | El controlador enviará la pregunta a Groq.
    |
    |--------------------------------------------------------------------------
    */

    return null;
};
