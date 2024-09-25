// Inicializacion de los arreglos para el programa
let carrito = []; // Inicializacion de los articulos
let total = []; // Inicializacion de los precios de los articulos

// Manejo de las opciones del programa
function menu(){
    return parseInt(prompt(
        `MiTiendita La Favorita
        Elige una opción:

        1. Catálogo.
        2. ¿Que llevo en mi carrito y cuanto me ha costado?.
        3. Eliminar Producto del carrito.
        
        4. Salir.`));
}

// Funcionamiento del programa
function iniciarprograma(){
    let continuar = true;
    while (continuar){
        let opcion = menu();
        if (isNaN(opcion) || opcion === "") {
            opcion = 4;
        }
        switch(opcion){
            case 1:
                catalog();
                continuar = false;
                break;
            case 2:
                carritocompra();
                break;
            case 3:
                eliminar();
                continuar = false;
                break;
            case 4:
                continuar = false;
                alert("Espero vuelva pronto");
                break;
            default:
                alert("Opcion no valida");
                
        }
    }
}


function catalogmenu(){
    return parseInt(prompt(
        `Selecciona un Producto

        1. Brassiere -  $720
        2. Thong - $200
        3. Babydoll -    $1000
        4. Pijama -    $500

        5. Regresar al Menú.`));
}
// Se agregan los articulos al carrito
function catalog(){
    let continuar = true;
    while (continuar){
        let opcion = catalogmenu();
        if (isNaN(opcion) || opcion === "") {
            iniciarprograma();
            break;
        }
        switch(opcion){
            case 1:
                var producto = {
                    nombre:"Brassiere",
                    precio:720
                };
                carrito.push(producto);
                alert("Agregado al carrito.");
                console.log(`${producto.nombre} agregado al carrito`)
                total.push(producto.precio);
                console.log(total);
                break;
            case 2:
                var producto = {
                    nombre:"Thong",
                    precio:200
                };
                carrito.push(producto);
                alert("Agregado al carrito.");
                console.log(`"${producto.nombre}" agregado al carrito`)
                total.push(producto.precio);
                console.log(total);
                break;
            case 3:
                var producto = {
                    nombre:"Babydoll",
                    precio:1000
                };
                carrito.push(producto);
                alert("Agregado al carrito.");
                total.push(producto.precio);
                
                console.log(`"${producto.nombre}" agregado al carrito`)
                console.log(total);
                break;
            case 4:
                var producto = {
                    nombre:"Pijama",
                    precio:500
                };
                carrito.push(producto);
                alert("Agregado al carrito.");
                total.push(producto.precio);
                
                console.log(`"${producto.nombre}" agregado al carrito`)
                console.log(total);
                break;
            case 5:
                continuar= false;
                iniciarprograma();
                break;
            default:
                alert("Opción no válida")
        }
    }
}

// Se pueden ver los articulos seleccionados en el carrito

function carritocompra(){
    let sum = 0; 

    for (let value in total) { 
        sum += total[value];
      }
    if(carrito.length === 0){ 
        alert("Carrito vacio.");
        console.log("Carrito vacio.");
    }else{ 
        console.log(sum);
        let mensaje = "Carrito de Compras: \n";
        carrito.forEach((producto,index)=>{
            mensaje += `${index+1}. ${producto.nombre} == $${producto.precio} \n`
        });
        mensaje += `\n Total: $${sum} \n`
        
        alert(mensaje);
        console.log(mensaje);
    }
    
}

// Se eliminan los articulos del carrito

function eliminarmenu(){ 
    if(carrito.length === 0){
        alert("Carrito vacio.");
        console.log("Carrito vacio.");
        iniciarprograma();
    }else{
        let mensaje = "Selecciona el Producto que desee Eliminar: \n";
        carrito.forEach((producto,index)=>{
            mensaje += `${index+1}. ${producto.nombre}\n`
        });
        return parseInt(prompt(mensaje));
    }
}

function eliminar(){
    let opcion = eliminarmenu();

    if (isNaN(opcion) || opcion === "") {
        iniciarprograma();

    } else if(opcion > 0 && opcion <= carrito.length){
        alert(`"${carrito[opcion-1].nombre}"Eliminado.`);
        console.log(`"${carrito[opcion-1].nombre}"Eliminado.`);
        carrito.splice((opcion-1), 1); 
        total.splice((opcion-1), 1); 
        iniciarprograma(); 
        
        console.log(carrito);
        console.log(total);
    }else{
        alert("Número de producto no válido.");
        eliminar();

    }
}