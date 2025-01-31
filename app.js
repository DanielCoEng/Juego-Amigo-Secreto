// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


//funcion para agregar amigo al juego.
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombre === ""){
        alert("Por favor, inserte un nombre.")
    }else{
    amigos.push(nombre);
    actualizarListaAmigos();
    limpiarCampo();
    
    }
}

//funcion que limpia la caja al ingresar el nombre. 
function limpiarCampo(){
    document.getElementById('amigo').value ="";
}


//funcion para generar la lista 
function actualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML ="";
    let fragmento = document.createDocumentFragment(); //creacion de fragmento en memoria

    amigos.forEach(amigo => {
    let li = document.createElement('li'); //crea elemento li
    li.textContent = amigo; // agrega el texto
    fragmento.appendChild(li);
    });
    lista.appendChild(fragmento);
}

//funcion para elegir el amigo secreto
function sortearAmigo(){
    if(amigos.length == 0 || amigos.length ==1){
        alert(`${ amigos.length>0 ? 'ingresa mas amigos' : 'no hay amigos incluidos para sortear'}`);
    }else{
        let incideSecreto = Math.floor(Math.random()*amigos.length); //genera el indice de la 
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigos[incideSecreto];
    }
}