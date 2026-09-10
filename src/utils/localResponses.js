const JORGE_NAMES = [
    "jorge",
    "patricio",
    "jorge patricio",
];

const normalizeText = (text) => {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?!¡.,;:()[\]{}"']/g, " ")
        .replace(/\s+/g, " ")
        .trim();
};

const mentionsJorge = (text) => {
    const normalized = normalizeText(text);

    return JORGE_NAMES.some((name) =>
        new RegExp(`\\b${name}\\b`, "i").test(normalized)
    );
};

const isJorgeInformationQuestion = (text) => {
    const normalized = normalizeText(text);

    const keywords = [
        "quien es",
        "perfil",
        "sobre",
        "estudios",
        "estudio",
        "universidad",
        "master",
        "maestria",
        "ingenieria",
        "certificacion",
        "certificaciones",
        "habilidades",
        "skills",
        "stack",
        "tecnologias",
        "tecnologia",
        "experiencia",
        "especialidades",
        "especialidad",
        "proyecto",
        "proyectos",
        "portfolio",
        "portafolio",
        "intereses",
        "interes",
        "contacto",
    ];

    return keywords.some((keyword) =>
        normalized.includes(keyword)
    );
};

export const getLocalResponse = (message) => {
    const text = normalizeText(message);

    // Sasha
    if (
        text.includes("quien eres") ||
        text.includes("como te llamas")
    ) {
        return "Soy Sasha, la asistente virtual del portfolio de Jorge.";
    }

    // Perfil de Jorge
    if (
        text.includes("quien es") ||
        text.includes("sobre jorge") ||
        text.includes("sobre patricio") ||
        text.includes("sobre jorge patricio") ||
        text === "jorge" ||
        text === "patricio" ||
        text === "jorge patricio"
    ) {
        return "Jorge Patricio Santamaría Cherrez es Ingeniero en Sistemas y Máster en Ingeniería de Software y Sistemas Informáticos. Se especializa en desarrollo Full Stack.";
    }

    // Estudios
    if (
        text.includes("estudios") ||
        text.includes("estudio") ||
        text.includes("universidad") ||
        text.includes("master") ||
        text.includes("maestria") ||
        text.includes("ingenieria")
    ) {
        return "Jorge es Ingeniero en Sistemas por la Universidad Indoamérica, Ecuador, con una nota final de 9/10. También obtuvo un Máster en Ingeniería de Software y Sistemas Informáticos por UNIR, España, con un promedio final de 8.68/10.";
    }

    // Certificaciones
    if (
        text.includes("certificacion") ||
        text.includes("certificaciones")
    ) {
        return "Jorge cuenta con certificaciones en Model Context Protocol y Claude API de Anthropic (2026), Fundamentals of AI de IBM (2025), Linux de Udemy (2024) y AZ-900 de UNIR (2023).";
    }

    // Habilidades / Stack
    if (
        text.includes("habilidades") ||
        text.includes("skills") ||
        text.includes("stack") ||
        text.includes("tecnologias") ||
        text.includes("tecnologia")
    ) {
        return "Su stack incluye React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS. Sus principales especialidades son el desarrollo Full Stack, la virtualización y la ciberseguridad.";
    }

    // Proyectos
    if (
        text.includes("proyecto") ||
        text.includes("proyectos") ||
        text.includes("portfolio") ||
        text.includes("portafolio")
    ) {
        return "Entre sus proyectos están su Portfolio React, Quiz Ecuador, una aplicación del clima, un Chatbot, Ajedrez y un E-commerce desarrollado con React y Django.";
    }

    // Intereses
    if (
        text.includes("interes") ||
        text.includes("intereses")
    ) {
        return "Entre los intereses de Jorge están la lectura y la música.";
    }

    // Contacto
    if (text.includes("contacto")) {
        return "Puedes contactar a Jorge desde la sección «Contacto» de su portfolio.";
    }

    return null;
};

export const shouldUseLocalResponse = (message) => {
    return (
        mentionsJorge(message) ||
        isJorgeInformationQuestion(message)
    );
};
