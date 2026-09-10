/*
|--------------------------------------------------------------------------
| NOMBRES VÁLIDOS DE JORGE
|--------------------------------------------------------------------------
*/

const JORGE_NAMES = [
    "jorge",
    "patricio",
    "jorge patricio",
    "jorge patricio santamaria cherrez",
];


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
        .trim();


/*
|--------------------------------------------------------------------------
| DETECTAR REFERENCIA A JORGE
|--------------------------------------------------------------------------
*/

const containsJorgeName = (text = "") => {
    const normalized = normalize(text);

    return JORGE_NAMES.some(name =>
        normalized.includes(name)
    );
};


/*
|--------------------------------------------------------------------------
| DETECTAR OTROS NOMBRES CONOCIDOS
|--------------------------------------------------------------------------
|
| Si aparece uno de estos nombres y NO aparece Jorge/Patricio,
| la pregunta se deriva a Groq.
|
|--------------------------------------------------------------------------
*/

const OTHER_NAMES = [
    "luis",
    "carlos",
    "pedro",
    "maria",
    "ana",
    "juan",
    "miguel",
    "andres",
    "diego",
    "fernando",
    "jose",
    "claudia",
    "paola",
    "daniel",
    "roberto",
    "ricardo",
    "gabriel",
    "alejandro",
    "sebastian",
    "sebastián",
    "lucia",
    "lucía",
    "sofia",
    "sofía",
];

const containsOtherName = (text = "") => {
    const normalized = normalize(text);

    return OTHER_NAMES.some(name => {
        const regex = new RegExp(`\\b${name}\\b`, "i");
        return regex.test(normalized);
    });
};


/*
|--------------------------------------------------------------------------
| CATEGORÍAS
|--------------------------------------------------------------------------
*/

const isMasterQuestion = (text = "") => {
    const q = normalize(text);

    return (
        q.includes("master") ||
        q.includes("maestria") ||
        q.includes("ingenieria de software") ||
        q.includes("unir")
    );
};


const isEngineeringQuestion = (text = "") => {
    const q = normalize(text);

    return (
        q.includes("ingenieria en sistemas") ||
        q.includes("indoamerica") ||
        q.includes("carrera")
    );
};


const isGradeQuestion = (text = "") => {
    const q = normalize(text);

    return (
        q.includes("nota") ||
        q.includes("notas") ||
        q.includes("calificacion") ||
        q.includes("calificaciones") ||
        q.includes("puntaje") ||
        q.includes("promedio")
    );
};


const isStudiesQuestion = (text = "") => {
    const q = normalize(text);

    return (
        q.includes("estudios") ||
        q.includes("estudio") ||
        q.includes("carrera") ||
        q.includes("ingenieria") ||
        q.includes("master") ||
        q.includes("maestria") ||
        q.includes("universidad") ||
        q.includes("titulo") ||
        q.includes("titulos") ||
        isGradeQuestion(text)
    );
};


const isCertificationQuestion = (text = "") => {
    const q = normalize(text);

    return (
        q.includes("certificacion") ||
        q.includes("certificaciones") ||
        q.includes("certificado") ||
        q.includes("certificados") ||
        q.includes("anthropic") ||
        q.includes("ibm") ||
        q.includes("linux") ||
        q.includes("az-900") ||
        q.includes("model context protocol") ||
        q.includes("claude api") ||
        q.includes("mcp")
    );
};


const isTechnologyQuestion = (text = "") => {
    const q = normalize(text);

    return (
        q.includes("tecnologia") ||
        q.includes("tecnologias") ||
        q.includes("stack") ||
        q.includes("react") ||
        q.includes("javascript") ||
        q.includes("django") ||
        q.includes("java") ||
        q.includes("postgresql") ||
        q.includes("mysql") ||
        q.includes("render") ||
        q.includes("vercel") ||
        q.includes("aws") ||
        q.includes("full stack") ||
        q.includes("desarrollo full stack") ||
        q.includes("virtualizacion") ||
        q.includes("ciberseguridad") ||
        q.includes("especialidad") ||
        q.includes("especialidades")
    );
};


const isProjectQuestion = (text = "") => {
    const q = normalize(text);

    return (
        q.includes("proyecto") ||
        q.includes("proyectos") ||
        q.includes("portfolio") ||
        q.includes("ecommerce") ||
        q.includes("e-commerce") ||
        q.includes("quiz") ||
        q.includes("clima") ||
        q.includes("chatbot") ||
        q.includes("ajedrez")
    );
};


const isInterestQuestion = (text = "") => {
    const q = normalize(text);

    return (
        q.includes("intereses") ||
        q.includes("interes") ||
        q.includes("hobbies") ||
        q.includes("hobby") ||
        q.includes("gusta") ||
        q.includes("leer") ||
        q.includes("lectura") ||
        q.includes("musica")
    );
};


const isContactQuestion = (text = "") => {
    const q = normalize(text);

    return (
        q.includes("contactar") ||
        q.includes("contacto") ||
        q.includes("comunicarme") ||
        q.includes("comunicar") ||
        q.includes("datos de contacto")
    );
};


/*
|--------------------------------------------------------------------------
| RESPUESTAS DE ESTUDIOS
|--------------------------------------------------------------------------
*/

const getStudiesResponse = (text = "") => {

    if (isMasterQuestion(text) && !isEngineeringQuestion(text)) {

        if (isGradeQuestion(text)) {
            return "Jorge tiene un Máster en Ingeniería de Software por la Universidad Internacional de La Rioja (UNIR), España, con una calificación de 8.68/10.";
        }

        return "Jorge tiene un Máster en Ingeniería de Software por la Universidad Internacional de La Rioja (UNIR), España, con una calificación de 8.68/10.";
    }


    if (isEngineeringQuestion(text) && !isMasterQuestion(text)) {

        if (isGradeQuestion(text)) {
            return "Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica, Ecuador, con una calificación de 9/10.";
        }

        return "Jorge estudió Ingeniería en Sistemas en la Universidad Indoamérica, Ecuador, con una calificación de 9/10.";
    }


    if (isGradeQuestion(text)) {
        return "Jorge obtuvo 9/10 en Ingeniería en Sistemas, cursada en la Universidad Indoamérica, Ecuador, y 8.68/10 en su Máster en Ingeniería de Software, realizado en la Universidad Internacional de La Rioja (UNIR), España.";
    }


    return "Jorge es Ingeniero en Sistemas por la Universidad Indoamérica, Ecuador, con una calificación de 9/10, y tiene un Máster en Ingeniería de Software por la Universidad Internacional de La Rioja (UNIR), España, con una calificación de 8.68/10.";
};


/*
|--------------------------------------------------------------------------
| CERTIFICACIONES
|--------------------------------------------------------------------------
*/

const getCertificationResponse = (text = "") => {

    const q = normalize(text);


    if (
        q.includes("model context protocol") ||
        q.includes("mcp")
    ) {
        return "Jorge cuenta con una certificación en Model Context Protocol de Anthropic, obtenida en 2026.";
    }


    if (q.includes("claude api")) {
        return "Jorge cuenta con una certificación en Claude API de Anthropic, obtenida en 2026.";
    }


    if (q.includes("anthropic")) {
        return "Jorge tiene dos certificaciones de Anthropic: Model Context Protocol y Claude API, ambas obtenidas en 2026.";
    }


    if (
        q.includes("fundamentals of ai") ||
        q.includes("ibm")
    ) {
        return "Jorge cuenta con la certificación Fundamentals of AI de IBM, obtenida en 2025.";
    }


    if (q.includes("linux")) {
        return "Jorge cuenta con una certificación en Linux de Udemy, obtenida en 2024.";
    }


    if (q.includes("az-900")) {
        return "Jorge cuenta con la certificación AZ-900 de UNIR, obtenida en 2023.";
    }


    if (q.includes("2026")) {
        return "En 2026, Jorge obtuvo las certificaciones Model Context Protocol y Claude API, ambas de Anthropic.";
    }


    return "Jorge cuenta con certificaciones en Model Context Protocol y Claude API de Anthropic (2026), Fundamentals of AI de IBM (2025), Linux de Udemy (2024) y AZ-900 de UNIR (2023).";
};


/*
|--------------------------------------------------------------------------
| TECNOLOGÍAS
|--------------------------------------------------------------------------
*/

const getTechnologyResponse = (text = "") => {

    const q = normalize(text);


    if (q.includes("react")) {
        return "Jorge utiliza React.";
    }


    if (q.includes("javascript")) {
        return "Jorge utiliza JavaScript.";
    }


    if (q.includes("django")) {
        return "Jorge trabaja con Django.";
    }


    if (q.includes("java")) {
        return "Jorge utiliza Java.";
    }


    if (q.includes("postgresql")) {
        return "Jorge utiliza PostgreSQL.";
    }


    if (q.includes("mysql")) {
        return "Jorge utiliza MySQL.";
    }


    if (q.includes("render")) {
        return "Jorge utiliza Render para despliegues.";
    }


    if (q.includes("vercel")) {
        return "Jorge utiliza Vercel para despliegues.";
    }


    if (q.includes("aws")) {
        return "Jorge utiliza AWS.";
    }


    if (q.includes("virtualizacion")) {
        return "Jorge tiene experiencia en virtualización.";
    }


    if (q.includes("ciberseguridad")) {
        return "Jorge tiene experiencia en ciberseguridad.";
    }


    if (q.includes("full stack")) {
        return "Jorge se especializa en desarrollo Full Stack.";
    }


    if (
        q.includes("especialidad") ||
        q.includes("especialidades")
    ) {
        return "Las principales especialidades de Jorge son desarrollo Full Stack, virtualización y ciberseguridad.";
    }


    return "El stack tecnológico de Jorge incluye React, JavaScript, Django, Java, PostgreSQL, MySQL, Render, Vercel y AWS.";
};


/*
|--------------------------------------------------------------------------
| PROYECTOS
|--------------------------------------------------------------------------
*/

const getProjectResponse = (text = "") => {

    const q = normalize(text);


    if (q.includes("portfolio")) {
        return "El portfolio de Jorge es un proyecto desarrollado con React y está orientado a presentar su perfil profesional, tecnologías, certificaciones y proyectos.";
    }


    if (
        q.includes("ecommerce") ||
        q.includes("e-commerce")
    ) {
        return "Jorge desarrolló un proyecto de E-commerce utilizando React en el frontend y Django en el backend.";
    }


    if (q.includes("quiz")) {
        return "Quiz Ecuador es uno de los proyectos desarrollados por Jorge.";
    }


    if (q.includes("clima")) {
        return "Jorge desarrolló una aplicación del clima.";
    }


    if (q.includes("chatbot")) {
        return "Jorge desarrolló un proyecto de chatbot.";
    }


    if (q.includes("ajedrez")) {
        return "Jorge desarrolló un proyecto de ajedrez.";
    }


    return "Entre los proyectos de Jorge se encuentran su Portfolio React, Quiz Ecuador, una App del clima, un Chatbot, un proyecto de Ajedrez y un E-commerce desarrollado con React y Django.";
};


/*
|--------------------------------------------------------------------------
| INTERESES
|--------------------------------------------------------------------------
*/

const getInterestResponse = (text = "") => {

    const q = normalize(text);


    if (
        q.includes("leer") ||
        q.includes("lectura")
    ) {
        return "A Jorge le gusta la lectura.";
    }


    if (q.includes("musica")) {
        return "A Jorge le interesa la música.";
    }


    return "Entre los intereses de Jorge están la lectura y la música.";
};


/*
|--------------------------------------------------------------------------
| CONTACTO
|--------------------------------------------------------------------------
*/

const getContactResponse = () => {
    return 'Para contactar a Jorge puedes utilizar la sección "Contacto" de su portfolio.';
};


/*
|--------------------------------------------------------------------------
| RESPUESTA LOCAL PRINCIPAL
|--------------------------------------------------------------------------
*/

export const getLocalResponse = (
    message,
    history = []
) => {

    const text = message.trim();


    /*
    |--------------------------------------------------------------
    | 1. SI MENCIONA OTRO NOMBRE → GROQ
    |--------------------------------------------------------------
    */

    if (
        containsOtherName(text) &&
        !containsJorgeName(text)
    ) {
        return null;
    }


    /*
    |--------------------------------------------------------------
    | 2. REFERENCIA DIRECTA A JORGE
    |--------------------------------------------------------------
    */

    if (containsJorgeName(text)) {

        if (isContactQuestion(text)) {
            return getContactResponse();
        }


        if (isStudiesQuestion(text)) {
            return getStudiesResponse(text);
        }


        if (isCertificationQuestion(text)) {
            return getCertificationResponse(text);
        }


        if (isTechnologyQuestion(text)) {
            return getTechnologyResponse(text);
        }


        if (isProjectQuestion(text)) {
            return getProjectResponse(text);
        }


        if (isInterestQuestion(text)) {
            return getInterestResponse(text);
        }
    }


    /*
    |--------------------------------------------------------------
    | 3. CONTEXTO DE CONVERSACIÓN
    |--------------------------------------------------------------
    */

    if (history.length > 0) {

        const previousMessages = history
            .map(item => item?.content || "")
            .join(" ");

        const previousMentionsJorge =
            containsJorgeName(previousMessages);


        if (previousMentionsJorge) {

            /*
            | Preguntas cortas como:
            | "¿Y el máster?"
            | "¿Y la nota?"
            | "¿Y sus certificaciones?"
            */

            const q = normalize(text);

            const contextualReference =
                /\b(y|su|sus|el|la|los|las|ese|esa)\b/.test(q);


            if (contextualReference) {

                if (isContactQuestion(text)) {
                    return getContactResponse();
                }


                if (isStudiesQuestion(text)) {
                    return getStudiesResponse(text);
                }


                if (isCertificationQuestion(text)) {
                    return getCertificationResponse(text);
                }


                if (isTechnologyQuestion(text)) {
                    return getTechnologyResponse(text);
                }


                if (isProjectQuestion(text)) {
                    return getProjectResponse(text);
                }


                if (isInterestQuestion(text)) {
                    return getInterestResponse(text);
                }
            }
        }
    }


    /*
    |--------------------------------------------------------------
    | 4. NO ES INFORMACIÓN LOCAL
    |--------------------------------------------------------------
    */

    return null;
};
