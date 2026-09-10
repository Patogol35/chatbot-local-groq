import { JORGE } from "./jorgeInfo.js";

/*
|--------------------------------------------------------------------------
| NORMALIZAR TEXTO
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

const containsAny = (text, words) =>
    words.some((word) => text.includes(word));

/*
|--------------------------------------------------------------------------
| RESPUESTAS
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
    | FORMACIÓN
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
        `Jorge cuenta con las siguientes certificaciones y formaciones: ${JORGE.certificaciones.join("; ")}.`,

    /*
    |--------------------------------------------------------------------------
    | TECNOLOGÍAS
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
    | ÁREAS
    |--------------------------------------------------------------------------
    */

    areas: () =>
        `Jorge se especializa en ${JORGE.areas.join(", ")}.`,

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
| Permite:
|
| "¿Qué estudió Jorge y qué tecnologías utiliza?"
|
| "¿Qué certificaciones tiene y qué proyectos ha realizado?"
|
|--------------------------------------------------------------------------
*/

const getCombinedResponse = (text) => {
    const parts = [];

    /*
    | Formación
    */

    if (
        containsAny(text, [
            "estudio",
            "estudios",
            "formacion",
            "educacion",
            "carrera",
            "titulo",
            "ingenieria",
            "master",
            "maestria",
            "universidad",
        ])
    ) {
        parts.push(responses.education());
    }

    /*
    | Tecnologías
    */

    if (
        containsAny(text, [
            "tecnologia",
            "tecnologias",
            "stack",
            "habilidades",
            "herramientas",
        ])
    ) {
        parts.push(responses.technologies());
    }

    /*
    | Proyectos
    */

    if (
        containsAny(text, [
            "proyecto",
            "proyectos",
            "desarrollado",
            "desarrollados",
            "desarrollo",
            "creado",
            "creados",
        ])
    ) {
        parts.push(responses.projects());
    }

    /*
    | Certificaciones
    */

    if (
        containsAny(text, [
            "certificacion",
            "certificaciones",
            "certificado",
            "certificados",
            "curso",
            "cursos",
        ])
    ) {
        parts.push(responses.certifications());
    }

    /*
    | Áreas
    */

    if (
        containsAny(text, [
            "especializa",
            "especialidad",
            "especialidades",
            "areas",
            "area profesional",
        ])
    ) {
        parts.push(responses.areas());
    }

    /*
    | Intereses
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
    | Solo devolver combinación si hay mínimo 2 categorías
    |--------------------------------------------------------------------------
    */

    const uniqueParts = [...new Set(parts)];

    if (uniqueParts.length >= 2) {
        return uniqueParts.join(" ");
    }

    return null;
};

/*
|--------------------------------------------------------------------------
| FUNCIÓN PRINCIPAL
|--------------------------------------------------------------------------
*/

export const getLocalResponse = (message) => {
    const text = normalize(message);

    if (!text) {
        return null;
    }

    /*
    |--------------------------------------------------------------------------
    | 1. PREGUNTAS COMBINADAS
    |--------------------------------------------------------------------------
    */

    const combinedResponse = getCombinedResponse(text);

    if (combinedResponse) {
        return combinedResponse;
    }

    /*
    |--------------------------------------------------------------------------
    | 2. SASHA
    |--------------------------------------------------------------------------
    */

    if (
        containsAny(text, [
            "quien eres",
            "quien es sasha",
            "que eres",
            "eres una ia",
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
            "donde estudio jorge",
            "formacion de jorge",
            "formacion academica",
            "formacion profesional",
            "carrera de jorge",
            "universidad de jorge",
            "titulos de jorge",
            "titulo de jorge",
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
            "que tecnologias usa",
            "que tecnologias conoce",
            "que tecnologias maneja",
            "tecnologias de jorge",
            "tecnologia de jorge",
            "cual es su stack",
            "cual es el stack",
            "stack tecnologico",
            "habilidades tecnicas",
            "herramientas que usa",
            "que herramientas conoce",
            "lenguajes que conoce",
            "technical skills",
            "what technologies does jorge use",
            "what technologies does he use",
            "tech stack",
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
    | 15. ÁREAS
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
    | NO HAY RESPUESTA LOCAL
    |--------------------------------------------------------------------------
    */

    return null;
};
