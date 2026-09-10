import { JORGE } from "./jorgeInfo.js";

/*
|--------------------------------------------------------------------------
| NORMALIZACIÓN
|--------------------------------------------------------------------------
*/

const normalize = (text) => {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?¡!.,;:()[\]{}]/g, "")
        .replace(/\s+/g, " ")
        .trim();
};

const includesAny = (text, keywords) => {
    return keywords.some((keyword) => text.includes(keyword));
};

/*
|--------------------------------------------------------------------------
| RESPUESTAS LOCALES
|--------------------------------------------------------------------------
*/

export const getLocalResponse = (message) => {
    const text = normalize(message);

    /*
    |--------------------------------------------------------------------------
    | SASHA
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "quien eres",
            "quien es sasha",
            "que eres",
            "presentate",
            "hablame de ti",
        ])
    ) {
        return "Soy Sasha, la asistente virtual del portfolio de Jorge. Puedo ayudarte con información sobre Jorge y también con preguntas generales de tecnología.";
    }

    /*
    |--------------------------------------------------------------------------
    | QUIÉN ES JORGE
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "quien es jorge",
            "quien es jorge patricio",
            "hablame de jorge",
            "dime sobre jorge",
            "informacion de jorge",
            "informacion sobre jorge",
            "perfil de jorge",
        ])
    ) {
        return `${JORGE.nombre} es ${JORGE.perfil}`;
    }

    /*
    |--------------------------------------------------------------------------
    | FORMACIÓN ACADÉMICA
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "estudios de jorge",
            "formacion de jorge",
            "formacion academica",
            "que estudio jorge",
            "donde estudio jorge",
            "carrera de jorge",
            "universidad de jorge",
            "titulos de jorge",
            "titulo de jorge",
            "formacion profesional",
        ])
    ) {
        return `Jorge es ${JORGE.estudios.ingenieria.titulo} por la ${JORGE.estudios.ingenieria.universidad}, Ecuador, con un promedio final de ${JORGE.estudios.ingenieria.promedio}. También tiene un ${JORGE.estudios.master.titulo} por la ${JORGE.estudios.master.universidad}, España, con un promedio final de ${JORGE.estudios.master.promedio}.`;
    }

    /*
    |--------------------------------------------------------------------------
    | INGENIERÍA
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "ingenieria",
            "ingeniero",
            "sistemas",
            "indoamerica",
            "tesis",
        ])
    ) {
        return `Jorge es ${JORGE.estudios.ingenieria.titulo} por la ${JORGE.estudios.ingenieria.universidad}, Ecuador. Su promedio final fue ${JORGE.estudios.ingenieria.promedio} y obtuvo una nota de ${JORGE.estudios.ingenieria.tesis} en su tesis.`;
    }

    /*
    |--------------------------------------------------------------------------
    | MÁSTER
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "master",
            "maestria",
            "posgrado",
            "unir",
            "tfm",
        ])
    ) {
        return `Jorge tiene un ${JORGE.estudios.master.titulo} por la ${JORGE.estudios.master.universidad}, España. Su promedio final fue ${JORGE.estudios.master.promedio} y obtuvo una nota de ${JORGE.estudios.master.tfm} en su TFM.`;
    }

    /*
    |--------------------------------------------------------------------------
    | CERTIFICACIONES
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "certificaciones",
            "certificados",
            "certificaciones de jorge",
            "cursos",
            "credenciales",
        ])
    ) {
        return `Las certificaciones y formaciones de Jorge incluyen: ${JORGE.certificaciones.join(
            "; "
        )}.`;
    }

    /*
    |--------------------------------------------------------------------------
    | TECNOLOGÍAS
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "tecnologias",
            "tecnologia",
            "stack",
            "habilidades tecnicas",
            "que sabe",
            "que tecnologias usa",
            "herramientas",
        ])
    ) {
        return `Jorge trabaja con ${JORGE.tecnologias.frontend.join(
            ", "
        )} en frontend; ${JORGE.tecnologias.backend.join(
            ", "
        )} en backend; ${JORGE.tecnologias.basesDatos.join(
            ", "
        )} en bases de datos; y ${JORGE.tecnologias.deploy.join(
            ", "
        )} para despliegue.`;
    }

    /*
    |--------------------------------------------------------------------------
    | FRONTEND
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "frontend",
            "front end",
            "react",
            "javascript",
        ])
    ) {
        return `En frontend, Jorge trabaja principalmente con ${JORGE.tecnologias.frontend.join(
            " y "
        )}.`;
    }

    /*
    |--------------------------------------------------------------------------
    | BACKEND
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "backend",
            "back end",
            "django",
            "java",
        ])
    ) {
        return `En backend, Jorge trabaja principalmente con ${JORGE.tecnologias.backend.join(
            " y "
        )}.`;
    }

    /*
    |--------------------------------------------------------------------------
    | BASES DE DATOS
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "base de datos",
            "bases de datos",
            "postgresql",
            "mysql",
        ])
    ) {
        return `Jorge trabaja con ${JORGE.tecnologias.basesDatos.join(
            " y "
        )} como tecnologías de bases de datos.`;
    }

    /*
    |--------------------------------------------------------------------------
    | DEPLOY
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "deploy",
            "despliegue",
            "hosting",
            "vercel",
            "render",
            "aws",
        ])
    ) {
        return `Jorge tiene experiencia realizando despliegues con ${JORGE.tecnologias.deploy.join(
            ", "
        )}.`;
    }

    /*
    |--------------------------------------------------------------------------
    | ÁREAS
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "areas",
            "area de trabajo",
            "especialidad",
            "especialidades",
            "en que se especializa",
        ])
    ) {
        return `Jorge se especializa en ${JORGE.areas.join(
            ", "
        )}.`;
    }

    /*
    |--------------------------------------------------------------------------
    | PROYECTOS
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "proyectos",
            "proyectos de jorge",
            "que proyectos",
            "trabajos realizados",
            "que ha desarrollado",
        ])
    ) {
        return `Entre los proyectos de Jorge se encuentran: ${JORGE.proyectos.join(
            ", "
        )}.`;
    }

    /*
    |--------------------------------------------------------------------------
    | INTERESES
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "intereses",
            "que le gusta",
            "gustos",
            "hobbies",
            "pasatiempos",
            "tiempo libre",
        ])
    ) {
        return `A Jorge le interesa ${JORGE.intereses.join(
            ", "
        )}.`;
    }

    /*
    |--------------------------------------------------------------------------
    | CONTACTO
    |--------------------------------------------------------------------------
    */

    if (
        includesAny(text, [
            "contacto",
            "contactar",
            "contactar a jorge",
            "como contacto a jorge",
            "como hablar con jorge",
            "correo de jorge",
            "email de jorge",
        ])
    ) {
        return JORGE.contacto;
    }

    /*
    |--------------------------------------------------------------------------
    | NO EXISTE RESPUESTA LOCAL
    |--------------------------------------------------------------------------
    */

    return null;
};
