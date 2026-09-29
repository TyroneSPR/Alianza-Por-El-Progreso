const resultTitle = document.getElementById("simulador-resultado-titulo");
const resultText = document.getElementById("simulador-resultado-texto");
const resultButton = document.getElementById("simulador-resultado-boton");
const storedResult = localStorage.getItem("simuladorResultado");

if (storedResult === "painted") {
  resultTitle.textContent = "¡Buen trabajo! Completaste la práctica de marcado de cédula.";
  resultText.textContent = "Practicase cómo marcar una opción en la cédula.";
  resultButton.textContent = "Volver al inicio";
  resultButton.href = "index.html";
} else if (storedResult === "blank") {
  resultTitle.textContent = "Tu voto quedó en blanco.";
  resultText.textContent =
    "No marcaste ninguna opción. En esta práctica, eso se registra como una cédula sin marcas.";
  resultButton.textContent = "Reintentar";
  resultButton.href = "simulador-cedula.html";
} else {
  resultTitle.textContent = "Resultado de tu práctica";
  resultText.textContent = "No se encontró una práctica reciente. Puedes volver a intentarlo desde el simulador.";
  resultButton.textContent = "Ir al inicio";
  resultButton.href = "index.html";
}

localStorage.removeItem("simuladorResultado");
