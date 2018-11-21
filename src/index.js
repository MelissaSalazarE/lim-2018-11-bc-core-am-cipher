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
const btnCipher=document.getElementById('btn-encode-cifrar')
const message=document.getElementById('text-cifrar');
const codDes=document.getElementById('input-offset-cifrar');
let message2=document.getElementById('text-decifrar');


function cifrar(word,descod)
{

let newMessage="";

  for (let i = 0; i < word.length; i++) {
    let numberAscii =((word[i].charCodeAt())-65+descod)%26+65;
     //alert(numberAscii);
    let lettercipher =String.fromCharCode(numberAscii);
    // alert(lettercipher);
    newMessage = newMessage+lettercipher;
  }
  //return newMessage;
  //alert(newMessage);
  console.log(newMessage);
}

function hacerClick() {
  //console.log(typeof message.value);
  //console.log(typeof parseInt(codDes.value));
  let mensaje = message.value;
  let numero = parseInt(codDes.value);
  //cifrar(mensaje,numero);
  //message2.value=mensaje;
  message2 = cifrar(mensaje, numero);

}

btnCipher.addEventListener("click",hacerClick)
