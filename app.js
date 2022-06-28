var contador = 0;

window.onload = function () {
  console.log('Sorting stuff out');
  //BOTON GENERAR CARTAS
  let boton = document.getElementById("draw");
  let amount = document.getElementById("cards");
  boton.addEventListener('click', (e) => {
    otracarta(amount.value);
    amount.value = "";
  });
};

//FUNCION QUE ENTREGA NUMERO
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
//FUNCION QUE CREA CARTA
function otracarta(num){

  let cuerpo = document.querySelector('.row');

  for (let i = 0; i < num; i++) {

    let nuevacarta = document.createElement("div");
    nuevacarta.classList.add("carta", "col-3");
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
    contador++;
  }
  let arr = document.querySelectorAll(".carta");
  for(let i = 0; i < arr.length; i++){
  console.log(arr[i].childNodes[1].lastChild.nodeValue);
  }
  // if(arr[i].childNodes[1].lastChild.nodeValue > arr[i+1].childNodes[1].lastChild.nodeValue){
  //   let aux = arr[i].childNodes[1].lastChild.nodeValue;
  //   arr[i].childNodes[1].lastChild.nodeValue = arr[i+1].childNodes[1].lastChild.nodeValue;
  //   arr[i+1].childNodes[1].lastChild.nodeValue = aux;
  // }
}
