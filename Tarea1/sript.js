function calcularIMC() {
    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const peso = document.getElementById("peso").value;
    const estatura = document.getElementById("estatura").value;

    // Validar que todos los campos estén llenos
    if (nombre === "" || edad === "" || peso === "" || estatura === "") {
        console.log("Por favor, completa todos los campos.");
        return;
    }

    // Calcular el IMC
    const imc = peso / (estatura * estatura);

    // Mostrar los resultados en la consola
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad} años`);
    console.log(`Peso: ${peso} kg`);
    console.log(`Estatura: ${estatura} m`);
    console.log(`Tu IMC es: ${imc.toFixed(2)}`);

    // Mensaje de clasificación según el IMC
    if (imc < 18.5) {
        console.log("Clasificación: Bajo peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Clasificación: Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Clasificación: Sobrepeso");
    } else {
        console.log("Clasificación: Obesidad");
    }
}