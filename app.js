var contador = 0;

window.onload = function () {
  console.log('What are we playing today?');
  //FUNCION PARA NUMERO
  let valor = document.querySelector('#center');
  valor.appendChild(getnumber());

  //FUNCION PARA PINTA
  var pinta = document.querySelectorAll('.suit');
  let selectorpinta = Math.floor(Math.random() * 4);

  if (selectorpinta == 0 || selectorpinta == 1) {
    document.querySelector('#center').style.color = 'red';
    if (selectorpinta == 0) {
      for (let i = 0; i < pinta.length; i++) {
        pinta[i].innerHTML = '♥';
        pinta[i].style.color = "red";
      }
    }
    else {
      for (let i = 0; i < pinta.length; i++) {
        pinta[i].innerHTML = '♦';
        pinta[i].style.color = 'red';
      }
    }
  }
  else if (selectorpinta == 2) {
    for (let i = 0; i < pinta.length; i++) {
      pinta[i].innerHTML = '♠';
    }
  }
  else {
    for (let i = 0; i < pinta.length; i++) {
      pinta[i].innerHTML = '♣';
    }
  }

  //BOTON NUEVA CARTA
  var boton = document.getElementById("boton");
  boton.addEventListener('click', (e) => {
    otracarta();
  });

  //CONTADOR 
  var timmer = document.getElementById("start");
  timmer.addEventListener('click', (e) => {
    let interval = window.setInterval(otracarta, 10000);
  });

  var detener = document.getElementById("stop");
  detener.addEventListener('click', (e) => {
    clearInterval(interval);
  });

  //CAMBIO DE MEDIDAS CARTA
  let ancho = document.getElementById("width");
  let carta = document.getElementsByClassName("carta");
  let alto = document.getElementById("height");

  ancho.addEventListener('change', (e) => {
    if (ancho.value != null) {
      for(var i = 0; i < carta.length; i++){
      carta[i].style.width = ancho.value + `px`;
      }
      ancho.value = "";
    }
  });
  
  alto.addEventListener('change', (e) => {
    if (alto.value != null) {
      for(var i = 0; i < carta.length; i++){
      carta[i].style.height = alto.value + `px`;
      }
      alto.value = "";
    }
  });

//FIN ONLOAD
};

function getnumber() {
  let number = Math.floor(Math.random() * 13 + 1);
  if (number == 13) {
    let K = document.createTextNode('K');
    return K;
  }
  else if (number == 12) {
    let Q = document.createTextNode('Q');
    return Q;
  }
  else if (number == 11) {
    let J = document.createTextNode('J');
    return J;
  }
  else if (number == 1) {
    let A = document.createTextNode('A');
    return A;
  }
  else {
    let text = document.createTextNode(`${number}`);
    return text;
  }
}

function otracarta(){
  contador++;

  var cuerpo = document.querySelector('.row');
  let nuevacarta = document.createElement("div");
  nuevacarta.classList.add("carta", "col-6");
  let top = document.createElement("div");
  top.classList.add(`suit${contador}`);
  top.setAttribute("id", "top");
  nuevacarta.appendChild(top);
  let mid = document.createElement("div");
  mid.setAttribute("id", `center${contador}`);
  nuevacarta.appendChild(mid);
  let btm = document.createElement("div");
  btm.classList.add(`suit${contador}`);
  btm.setAttribute("id", "bottom");
  nuevacarta.appendChild(btm);
  cuerpo.appendChild(nuevacarta);

  //DAR NUMERO A LA CARTA NUEVA
  var valor1 = document.getElementById(`center${contador}`);
  valor1.appendChild(getnumber());

  //DAR PINTA A LA CARTA NUEVA
  var pinta = document.querySelectorAll(`.suit${contador}`);
  let selectorpinta = Math.floor(Math.random() * 4);
  if (selectorpinta == 0 || selectorpinta == 1) {
    document.querySelector(`#center${contador}`).style.color = 'red';
    if (selectorpinta == 0) {
      for (var i = 0; i < pinta.length; i++) {
        pinta[i].innerHTML = '♥';
        pinta[i].style.color = "red";
      }
    }
    else {
      for (let i = 0; i < pinta.length; i++) {
        pinta[i].innerHTML = '♦';
        pinta[i].style.color = 'red';
      }
    }
  }
  else if (selectorpinta == 2) {
    for (let i = 0; i < pinta.length; i++) {
      pinta[i].innerHTML = '♠';
    }
  }
  else {
    for (let i = 0; i < pinta.length; i++) {
      pinta[i].innerHTML = '♣';
    }
  }
}
