let amigos = [];
let sorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let listaAmigos = document.getElementById('listaAmigos');
    // Limpiar la lista existente
    listaAmigos.innerHTML = '';

    // Repite bloque hasta que recorra todos los nombres ingresados
    // Añade un elemento a la lista de amigos por cada nombre ingresado
    for (let indice = 0; indice < amigos.length; indice++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = (`${indice + 1}. ${amigos[indice]}`);
        listaAmigos.appendChild(elementoLista);
    }
}

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nombre = document.getElementById('amigo').value.trim();

    // Validar la entrada: si el campo está vacío mostrar mensaje de alerta
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    // Actualizar array de amigos
    amigos.push(nombre);
    actualizarListaAmigos();
    // Limpiar resultado de sorteo
    asignarTextoElemento('#resultado', '');
    // Limpiar el campo de entrada
    limpiarCaja();
}

function sortearAmigo() {
    // Validación antes de sortear, si no hay datos no realiza la acción de sorteo
    if (amigos.length === 0) {
        return;
    }

    // Generar un índice aleatorio
    let indice = Math.floor(Math.random()*amigos.length);
    // Obtener el nombre sorteado
    let elegido = amigos[indice];

    // Actualiza el contenido del elemento de resultado
    // Muestra el amigo sorteado
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>El amigo secreto sorteado es: ${elegido}</li>`;

    sorteados.push(elegido);
    // Imprime los nombres sorteados en la consola
    console.log("Nombres sorteados:", sorteados);
}

