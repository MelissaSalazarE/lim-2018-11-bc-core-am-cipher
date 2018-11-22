// este es un modelo de cifrado mas basico que me sirvio para evaluar mis botones//
/*function cifrar() {
  //alert("hola")
  var palabra = document.getElementById("text-cifrar").value;
  var palabra_codificada = btoa(palabra);
  document.getElementById("text-cifrar").value = palabra_codificada;
}
function decifrar() {
  var palabra = document.getElementById("text-decifrar").value;
  var palabra_codificada = atob(palabra);
  document.getElementById("text-decifrar").value = palabra_codificada;
}

const ingreso = document.getElementById("btn-encode-cifrar");
ingreso.addEventListener("click", cifrar);

const ingresode = document.getElementById("btn-encode-decifrar");
ingresode.addEventListener("click", decifrar);*/
// Hallamos la funcion de decifrar utilizando el metodo Ascii para ello aplicamos un for y llamamos cuatro constatntes//
const btnCipher=document.getElementById('btn-encode-cifrar')
const message=document.getElementById('text-cifrar');
const codDes=document.getElementById('input-offset-cifrar');
const message2=document.getElementById('text-cifrar');

function hacerClick() {
  //console.log(typeof message.value);
  //console.log(typeof parseInt(codDes.value));
  let mensaje = message.value;
  let numero = parseInt(codDes.value);
  //cifrar(mensaje,numero);
  //message2.value=mensaje;
let newMessage=cipher.encode(numero,mensaje);
  //message2.value = cipher.encode(numero,mensaje);
  message2.value = newMessage;
  //console.log(newessage1);
}

btnCipher.addEventListener("click",hacerClick)

//Ahora hallaremos el modelo que decifra//

const btnCipher1=document.getElementById('btn-encode-decifrar')
const message3=document.getElementById('text-decifrar');
const codDes1=document.getElementById('input-offset-decifrar');
const message4=document.getElementById('text-decifrar');

function hacerClick2() {
  //console.log(typeof message.value);
  //console.log(typeof parseInt(codDes.value));
  let mensaje = message3.value;
  let numero = parseInt(codDes1.value);
  //cifrar(mensaje,numero);
  //message2.value=mensaje
let newMessage=cipher.decode(numero,mensaje);
  message4.value = newMessage;
}

btnCipher1.addEventListener("click",hacerClick2)
