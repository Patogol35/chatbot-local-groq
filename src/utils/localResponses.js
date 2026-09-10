// utils/localResponse.js

const normalizeText = (text = "") =>
    text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

export const getLocalResponse = (message) => {
    const text = normalizeText(message);

    // ============================================================
    // IDENTIFICAR SI LA PREGUNTA ES SOBRE JORGE / PATRICIO
    // ============================================================

    const isJorge =
        /\b(jorge|patricio)\b/.test(text);

    // Si pregunta por otra persona, NO responder localmente.
    // La pregunta continuará hacia Groq.
    if (!isJorge) {
        return null;
    }

    // ============================================================
    // PERFIL
    // ============================================================

    if (
        /\b(quien es|quien es jorge|perfil|perfil de jorge|perfil profesional|sobre jorge|hablame de jorge)\b/
            .test(text)
    ) {
        return "Jorge Patricio Santamaría Cherrez es Ingeniero en Sistemas y Máster en Ingeniería de Software. Se especializa en desarrollo Full Stack, virtualización y ciberseguridad.";
    }

    // ============================================================
    // MÁSTER
    // ============================================================

    if (
        /\b(master|maestria)\b/.test(text) &&
        !/\b(nota|calificacion|promedio)\b/.test(text)
    ) {
        return "Jorge tiene un Máster en Ingeniería de Software, realizado en la Universidad Internacional de La Rioja (UNIR), España.";
    }

    // ============================================================
    // NOTA DEL MÁSTER
    // ============================================================

    if (
        /\b(master|maestria)\b/.test(text) &&
        /\b(nota|calificacion|promedio)\b/.test(text)
    ) {
        return "La nota final del Máster en Ingeniería de Software fue 8.68/10.";
    }

    // ============================================================
    // INGENIERÍA
    // ============================================================

    if (
        /\b(ingenieria|ingeniero)\b/.test(text) &&
        !/\b(nota|calificacion|promedio)\b/.test(text)
    ) {
        return "Jorge es Ingeniero en Sistemas, título obtenido en la Universidad Indoamérica, Ecuador.";
    }

    // ============================================================
    // NOTA DE INGENIERÍA
    // ============================================================

    if (
        /\b(ingenieria|ingeniero)\b/.test(text) &&
        /\b(nota|calificacion|promedio)\b/.test(text)
    ) {
        return "La nota final de Ingeniería en Sistemas fue 9/10.";
    }

    // ============================================================
    // FRONTEND
    // ============================================================

    if (
        /\b(frontend|front end|desarrollo frontend)\b/.test(text)
    ) {
        return "En Frontend utiliza principalmente React y JavaScript.";
    }

    // ============================================================
    // BACKEND
    // ============================================================

    if (
        /\b(backend|back end|desarrollo backend)\b/.test(text)
    ) {
        return "En Backend utiliza principalmente Django y Java.";
    }

    // ============================================================
    // BASES DE DATOS
    // ============================================================

    if (
        /\b(base de datos|bases de datos|database|databases|bd)\b/.test(text)
    ) {
        return "Trabaja con PostgreSQL y MySQL.";
    }

    // ============================================================
    // CLOUD / DEPLOY
    // ============================================================

    if (
        /\b(cloud|nube|deploy|despliegue|hosting)\b/.test(text)
    ) {
        return "Utiliza Render, Vercel y AWS para despliegue y servicios Cloud.";
    }

    // ============================================================
    // STACK / TECNOLOGÍAS
    // ============================================================

    if (
        /\b(stack|tecnologias|tecnologia|lenguajes|herramientas)\b/.test(text)
    ) {
        return "Su Stack incluye React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.";
    }

    // ============================================================
    // ESPECIALIDADES
    // ============================================================

    if (
        /\b(especialidad|especialidades|especializa|especializado)\b/.test(text)
    ) {
        return "Sus especialidades son Desarrollo Full Stack, virtualización y ciberseguridad.";
    }

    // ============================================================
    // PROYECTOS
    // ============================================================

    if (
        /\b(proyecto|proyectos)\b/.test(text)
    ) {
        return "Entre sus proyectos están Portfolio React, Quiz Ecuador, App del clima, Chatbot, Ajedrez y E-commerce React+Django.";
    }

    // ============================================================
    // CERTIFICACIONES
    // ============================================================

    if (
        /\b(certificacion|certificaciones|certificado|certificados)\b/.test(text)
    ) {
        return "Sus certificaciones incluyen Model Context Protocol y Claude API de Anthropic (2026), Fundamentals of AI de IBM (2025), Linux de Udemy (2024) y AZ-900 de UNIR (2023).";
    }

    // ============================================================
    // INTERESES
    // ============================================================

    if (
        /\b(intereses|que le gusta|gustos|hobbies|pasatiempos)\b/.test(text)
    ) {
        return "Entre sus intereses están la lectura y la música.";
    }

    // ============================================================
    // CONTACTO
    // ============================================================

    if (
        /\b(contactar|contacto|contactarme|comunicarme|correo|email)\b/.test(text)
    ) {
        return 'Puedes contactar a Jorge desde la sección "Contacto" del portfolio.';
    }

    // ============================================================
    // SI MENCIONÓ JORGE/PATRICIO PERO NO HAY RESPUESTA LOCAL
    // → GROQ
    // ============================================================

    return null;
};
