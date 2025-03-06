// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
let amigos = [];

//Implementa una función para agregar amigos
 function agregarAmigo() {
     let agregaAmigo = document.getElementById('amigo').value;      //Capturar el valor del campo de entrada
     //Validar la entrada, si el campo está vacío, mostrar un alert con un mensaje de error
     if(agregaAmigo == '') {
         alert('Por favor, ingrese un nombre válido');    
     //de lo contrario, añadirlo al arreglo que almacena los nombre de amigos usando el método.push()
     } else {
        amigos.push(agregaAmigo);
        agregaLista();   //llama a la funcion para mostrar lista de amigos
     }
     limpiarCaja();     //llama a la función para limpiar el campo de entrada
     return amigos;
    }         

 // Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía
 function limpiarCaja() {
     document.querySelector('#amigo').value = '';
 }

//Implementa una función para actualizar la lista de amigos 
function agregaLista() {
    let listaHTML = document.getElementById('listaAmigos'); //Obtener el elemento de la lista: Utilizar document.getElementById() para seleccionar la lista donde se mostrarán los amigos
    listaHTML.innerHTML = "";
    for(i=0; i<=amigos.length-1; i++) {
        listaHTML.innerHTML += `<li>${amigos[i]}</li>`;
    } 
}

//Implementa una función para sortear los amigos
function sortearAmigo() {
    // alidar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío
    if(amigos.length == 0) {
        alert('Ingresa los nombres de tus amigos');
    } else {
        indexAleatorio = Math.floor(Math.random()*amigos.length); //genera un indice aleatoria
        let resultadoHTML = document.getElementById('resultado');
        resultadoHTML.innerHTML = `El amigo secreto sorteado es: ${amigos[indexAleatorio]}`;
        document.getElementById('listaAmigos').innerHTML = ""; //limpia la lista de amigos
        amigos.splice(indexAleatorio,1); //extra: elimina el amigo secreto seleccionado del array
    }
}

