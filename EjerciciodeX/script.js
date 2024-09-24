//Se genera X conforme a las necesidades del usuario
function generar() {
    let cantidad = Number(document.getElementById('numero').value);
    const simbolo = 'x';
    let salidaHorizontal = simbolo.repeat(cantidad);
    let salidaVertical = '';

    for (let i = 0; i < cantidad; i++) {
        salidaVertical += simbolo + '\n';
    }

    document.getElementById('resultado').textContent = salidaHorizontal + '\n' + salidaVertical;
    console.log("Resultado en consola:");
    console.log(salidaHorizontal);
    console.log(salidaVertical);
}


// Aqui se genera el cuadrado de X
function generarCuadrado() {
    const simbolo = 'x';
    let cuadrado = '';

    for (let i = 0; i < 4; i++) {
        cuadrado += simbolo.repeat(4) + '\n';
    }

    document.getElementById('cuadradoResultado').textContent = cuadrado;
    console.log("Cuadrado 4x4 en consola:");
    console.log(cuadrado);
}


//Aqui se generan las tablas de multiplicar
function generarTablas() {
    let tablas = '';

    
    for (let i = 1; i <= 10; i++) {
        tablas += `Tabla del ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            tablas += `${i} x ${j} = ${i * j}\n`;
        }
        tablas += '\n';
    }

    document.getElementById('tablasResultado').textContent = tablas;
    
    console.log("Tablas de multiplicar en consola:");
    console.log(tablas);
}
