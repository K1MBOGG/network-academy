const formulario = document.querySelector("#formulario-contacto");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const motivo = document.querySelector("#motivo");
const mensajeContacto = document.querySelector("#mensaje");
const resultadoFormulario = document.querySelector("#resultado-formulario");

function mostrarMensajeFormulario(texto, clase) {
    resultadoFormulario.textContent = texto;
    resultadoFormulario.classList.remove("mensaje-error", "mensaje-exito");
    resultadoFormulario.classList.add(clase);
}

function validarFormulario(evento) {
    evento.preventDefault();

    if (nombre.value === "" || correo.value === "" || motivo.value === "" || mensajeContacto.value === "") {
        mostrarMensajeFormulario("Completá todos los campos antes de continuar.", "mensaje-error");
    } else if (correo.value.indexOf("@") === -1 || correo.value.indexOf(".") === -1) {
        mostrarMensajeFormulario("Ingresá un correo electrónico válido.", "mensaje-error");
    } else {
        mostrarMensajeFormulario(
            "Los datos fueron validados correctamente. El formulario no envía información a un servidor.",
            "mensaje-exito"
        );
    }
}

function limpiarMensajeFormulario() {
    resultadoFormulario.textContent = "";
    resultadoFormulario.classList.remove("mensaje-error", "mensaje-exito");
}

formulario.addEventListener("submit", validarFormulario);
formulario.addEventListener("reset", limpiarMensajeFormulario);
