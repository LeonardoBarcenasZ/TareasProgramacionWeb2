let numeroSecreto;
let vidas;
let intentosUsados;

document.getElementById("iniciarJuego").addEventListener("click", function() {
    configurarJuego();
});

document.getElementById("botonAdivinar").addEventListener("click", function() {
    let intentoJugador = parseInt(document.getElementById("campoAdivinanza").value);
    if (intentoJugador === null || isNaN(intentoJugador)) {
        alert("Por favor, introduce un número válido.");
        return;
    }
    validarNumero();
    actualizarIntentos();
    darPista();
    if (intentoJugador == numeroSecreto || vidas == 0) {
        verificarResultado();
    }
});

function configurarJuego() {
    generarNumeroSecreto();
    vidas = 5;
    intentosUsados = 0;
    document.getElementById("campoAdivinanza").value = "";
    document.getElementById("vidasRestantes").textContent = "Intentos restantes: " + vidas;
    document.getElementById("mensaje").textContent = "";

    document.getElementById("juego").style.display = "block";
    document.getElementById("botonAdivinar").disabled = false;

    let botonInicio = document.getElementById("iniciarJuego");
    botonInicio.textContent = "Reiniciar Juego";
    botonInicio.classList.add("activo");
}

function generarNumeroSecreto() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
}

function darPista() {
    let intentoJugador = parseInt(document.getElementById("campoAdivinanza").value);
    if (intentoJugador < numeroSecreto) {
        document.getElementById("mensaje").textContent = "El número secreto es mayor.";
    } else if (intentoJugador > numeroSecreto) {
        document.getElementById("mensaje").textContent = "El número secreto es menor.";
    }
}

function verificarResultado() {
    let intentoJugador = parseInt(document.getElementById("campoAdivinanza").value);
    if (intentoJugador != numeroSecreto) {
        alert("Has perdido. El número correcto era: " + numeroSecreto);
    } else {
        alert("¡Felicidades! Adivinaste el número en " + intentosUsados + " intentos.");
    }
    document.getElementById("botonAdivinar").disabled = true;
}

function validarNumero() {
    let intentoJugador = parseInt(document.getElementById("campoAdivinanza").value);
    if (isNaN(intentoJugador) || intentoJugador === "") {
        alert("Debes ingresar un número.");
        vidas++;
        intentosUsados--;
    }
}

function actualizarIntentos() {
    let intentoJugador = parseInt(document.getElementById("campoAdivinanza").value);
    if (intentoJugador != numeroSecreto) {
        vidas--;
        intentosUsados++;
        document.getElementById("vidasRestantes").textContent = "Intentos restantes: " + vidas;
    } else {
        intentosUsados++;
    }
}