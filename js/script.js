const preguntas = [
    {
        texto: "¿Qué es una red informática?",
        opciones: [
            "Un programa para crear documentos.",
            "Un conjunto de dispositivos conectados que intercambian información.",
            "Un sistema operativo.",
            "Un único dispositivo sin conexión."
        ],
        correcta: "Un conjunto de dispositivos conectados que intercambian información."
    },
    {
        texto: "¿Qué capa del modelo OSI busca el camino para enviar los datos a su destino?",
        opciones: ["Física.", "Sesión.", "Red.", "Presentación."],
        correcta: "Red."
    },
    {
        texto: "¿Qué protocolo busca que los datos lleguen completos y ordenados?",
        opciones: ["UDP.", "TCP.", "ICMP.", "IP."],
        correcta: "TCP."
    },
    {
        texto: "¿Para qué se utiliza el comando ping?",
        opciones: [
            "Para comprobar la comunicación con otro dispositivo.",
            "Para crear una carpeta.",
            "Para eliminar una conexión.",
            "Para modificar un archivo."
        ],
        correcta: "Para comprobar la comunicación con otro dispositivo."
    },
    {
        texto: "¿Qué permite consultar el comando nslookup?",
        opciones: [
            "La cantidad de archivos de una computadora.",
            "La memoria disponible del sistema.",
            "La dirección IP asociada a un nombre de dominio.",
            "Los usuarios conectados al equipo."
        ],
        correcta: "La dirección IP asociada a un nombre de dominio."
    }
];

let preguntaActual = 0;
let puntaje = 0;

const progreso = document.querySelector("#progreso");
const preguntaElemento = document.querySelector("#pregunta");
const opcionesElemento = document.querySelector("#opciones");
const mensaje = document.querySelector("#mensaje");
const botonSiguiente = document.querySelector("#siguiente");
const cuestionario = document.querySelector("#cuestionario");
const resultado = document.querySelector("#resultado");
const puntajeFinal = document.querySelector("#puntaje-final");
const botonReiniciar = document.querySelector("#reiniciar");

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];

    progreso.textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
    preguntaElemento.textContent = pregunta.texto;
    opcionesElemento.textContent = "";
    mensaje.textContent = "";
    botonSiguiente.disabled = true;

    pregunta.opciones.forEach(function (opcion) {
        const botonOpcion = document.createElement("button");
        botonOpcion.type = "button";
        botonOpcion.classList.add("opcion-quiz");
        botonOpcion.textContent = opcion;

        botonOpcion.addEventListener("click", function () {
            comprobarRespuesta(opcion, botonOpcion);
        });

        opcionesElemento.appendChild(botonOpcion);
    });
}

function comprobarRespuesta(opcionElegida, botonElegido) {
    const pregunta = preguntas[preguntaActual];
    const botonesOpciones = document.querySelectorAll(".opcion-quiz");

    botonesOpciones.forEach(function (boton) {
        boton.disabled = true;

        if (boton.textContent === pregunta.correcta) {
            boton.classList.add("respuesta-correcta");
        }
    });

    if (opcionElegida === pregunta.correcta) {
        puntaje++;
        mensaje.textContent = "Respuesta correcta.";
    } else {
        botonElegido.classList.add("respuesta-incorrecta");
        mensaje.textContent = `Respuesta incorrecta. La respuesta correcta es: ${pregunta.correcta}`;
    }

    botonSiguiente.disabled = false;
}

function avanzarPregunta() {
    preguntaActual++;

    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    cuestionario.hidden = true;
    resultado.hidden = false;
    puntajeFinal.textContent = `Obtuviste ${puntaje} de ${preguntas.length} respuestas correctas.`;
}

function reiniciarCuestionario() {
    preguntaActual = 0;
    puntaje = 0;
    cuestionario.hidden = false;
    resultado.hidden = true;
    mostrarPregunta();
}

botonSiguiente.addEventListener("click", avanzarPregunta);
botonReiniciar.addEventListener("click", reiniciarCuestionario);

mostrarPregunta();
