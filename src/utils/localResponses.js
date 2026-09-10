const VALID_NAMES = [
    "jorge",
    "patricio",
    "jorge patricio",
];

const OTHER_NAME_WORDS = [
    "quien es",
    "quién es",
    "hablame de",
    "háblame de",
    "informacion de",
    "información de",
    "datos de",
    "perfil de",
];

const normalizeText = (text = "") => {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?!¡.,;:()[\]{}"'`]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
};

/*
|--------------------------------------------------------------------------
| Detectar nombres válidos
|--------------------------------------------------------------------------
*/

const containsValidName = (text) => {
    const normalized = normalizeText(text);

    return VALID_NAMES.some((name) => {
        return new RegExp(`\\b${name}\\b`, "i").test(
            normalized
        );
    });
};

/*
|--------------------------------------------------------------------------
| Detectar si la pregunta parece preguntar por OTRA PERSONA
|--------------------------------------------------------------------------
|
| Ejemplos:
|
| "Quién es Carlos"
| "Háblame de Elon Musk"
| "Información de María"
|
| Esto NO se responde localmente.
|--------------------------------------------------------------------------
*/

const asksAboutAnotherPerson = (text) => {
    const normalized = normalizeText(text);

    const asksPerson = OTHER_NAME_WORDS.some((phrase) =>
        normalized.includes(normalizeText(phrase))
    );

    if (!asksPerson) {
        return false;
    }

    /*
     * Si menciona explícitamente un nombre válido,
     * NO es otra persona.
     */

    if (containsValidName(normalized)) {
        return false;
    }

    return true;
};

/*
|--------------------------------------------------------------------------
| Preguntas de información sobre Jorge
|--------------------------------------------------------------------------
*/

const isJorgeInformationQuestion = (text) => {
    const normalized = normalizeText(text);

    const keywords = [
        "educacion",
        "educación",
        "estudios",
        "estudio",
        "formacion",
        "formación",
        "universidad",
        "master",
        "máster",
        "maestria",
        "maestría",
        "ingenieria",
        "ingeniería",

        "certificacion",
        "certificación",
        "certificaciones",

        "habilidades",
        "skills",
        "stack",
        "tecnologias",
        "tecnologías",

        "experiencia",
        "especialidad",
        "especialidades",

        "proyecto",
        "proyectos",

        "portfolio",
        "portafolio",

        "intereses",
        "interes",

        "contacto",

        "github",
        "linkedin",
    ];

    return keywords.some((keyword) =>
        normalized.includes(normalizeText(keyword))
    );
};

/*
|--------------------------------------------------------------------------
| Respuesta local
|--------------------------------------------------------------------------
*/

export const getLocalResponse = (message) => {
    const text = normalizeText(message);

    /*
     * Sasha
     */

    if (
        text.includes("quien eres") ||
        text.includes("como te llamas")
    ) {
        return "Soy Sasha, la asistente virtual del portfolio de Jorge.";
    }

    /*
     * Perfil
     */

    if (
        text.includes("quien es jorge") ||
        text.includes("quien es patricio") ||
        text.includes("quien es jorge patricio") ||
        text.includes("sobre jorge") ||
        text.includes("sobre patricio") ||
        text.includes("sobre jorge patricio") ||
        text === "jorge" ||
        text === "patricio" ||
        text === "jorge patricio"
    ) {
        return "Jorge Patricio Santamaría Cherrez es Ingeniero en Sistemas y Máster en Ingeniería de Software y Sistemas Informáticos. Se especializa en desarrollo Full Stack.";
    }

    /*
     * Educación / Estudios
     */

    if (
        text.includes("educacion") ||
        text.includes("estudios") ||
        text.includes("estudio") ||
        text.includes("formacion") ||
        text.includes("universidad") ||
        text.includes("master") ||
        text.includes("maestria") ||
        text.includes("ingenieria")
    ) {
        return "Jorge es Ingeniero en Sistemas por la Universidad Indoamérica, Ecuador, con una nota final de 9/10. También obtuvo un Máster en Ingeniería de Software y Sistemas Informáticos por UNIR, España, con un promedio final de 8.68/10.";
    }

    /*
     * Certificaciones
     */

    if (
        text.includes("certificacion") ||
        text.includes("certificaciones")
    ) {
        return "Jorge cuenta con certificaciones en Model Context Protocol y Claude API de Anthropic (2026), Fundamentals of AI de IBM (2025), Linux de Udemy (2024) y AZ-900 de UNIR (2023).";
    }

    /*
     * Habilidades / Stack
     */

    if (
        text.includes("habilidades") ||
        text.includes("skills") ||
        text.includes("stack") ||
        text.includes("tecnologias") ||
        text.includes("tecnologia")
    ) {
        return "Su stack incluye React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS. Sus principales especialidades son el desarrollo Full Stack, la virtualización y la ciberseguridad.";
    }

    /*
     * Proyectos
     */

    if (
        text.includes("proyecto") ||
        text.includes("proyectos") ||
        text.includes("portfolio") ||
        text.includes("portafolio")
    ) {
        return "Entre sus proyectos están su Portfolio React, Quiz Ecuador, una aplicación del clima, un Chatbot, Ajedrez y un E-commerce desarrollado con React y Django.";
    }

    /*
     * Intereses
     */

    if (
        text.includes("interes") ||
        text.includes("intereses")
    ) {
        return "Entre los intereses de Jorge están la lectura y la música.";
    }

    /*
     * Contacto
     */

    if (text.includes("contacto")) {
        return "Puedes contactar a Jorge desde la sección «Contacto» de su portfolio.";
    }

    return null;
};

/*
|--------------------------------------------------------------------------
| Decidir si se debe utilizar respuesta local
|--------------------------------------------------------------------------
*/

export const shouldUseLocalResponse = (message) => {
    /*
     * Si pregunta explícitamente por otra persona,
     * SIEMPRE va a Groq.
     */

    if (asksAboutAnotherPerson(message)) {
        return false;
    }

    /*
     * Si menciona Jorge, Patricio o Jorge Patricio,
     * puede responder localmente.
     */

    if (containsValidName(message)) {
        return true;
    }

    /*
     * Si no menciona nombre pero pregunta por información
     * típica del portfolio, también respondemos localmente.
     *
     * Ejemplo:
     * "¿Qué estudios tiene?"
     * "¿Qué educación tiene?"
     * "¿Cuáles son sus proyectos?"
     */

    if (isJorgeInformationQuestion(message)) {
        return true;
    }

    return false;
};
