// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


//funcion para agregar amigo al juego.
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombre === ""){
        alert("Por favor, inserte un nombre.")
    }else{
    amigos.push(nombre);
    console.log(amigos)
    limpiarCampo();
    }
}

//funcion que limpia la caja
function limpiarCampo(){
    document.getElementById('amigo').value ="";
}