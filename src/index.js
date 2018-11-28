//Mostrando solo la pantalla inicio
document.getElementById('pantalla-inicio').style.display='block';
document.getElementById('pantalla-cifrar').style.display='none';
document.getElementById('pantalla-descifrar').style.display='none';

// botones para separar las paginas
const btnirCifrar = document.getElementById('btn-ircifrar');
const btnirDescifrar = document.getElementById('btn-irdescifrar');
const btnirInicio = document.getElementById('btn-inicio');
const btnirInicio1 = document.getElementById('btn-inicio1');

//Ahora hallaremos el modelo que cifra

const btnCipher=document.getElementById('btn-encode-cifrar')
const message=document.getElementById('text-cifrar');
const codDes=document.getElementById('input-offset-cifrar');
const message2=document.getElementById('text-cifrar');

function hacerClickCifrar() {
  let mensaje = message.value;
  let numero = parseInt(codDes.value);
  let newMessage= cipher.encode(numero,mensaje);
return message2.value = newMessage;
}

btnCipher.addEventListener("click",hacerClickCifrar)

//Ahora hallaremos el modelo que decifra

const btnCipher1=document.getElementById('btn-encode-decifrar')
const message3=document.getElementById('text-decifrar');
const codDes1=document.getElementById('input-offset-decifrar');
const message4=document.getElementById('text-decifrar');

function hacerClickDecifrar() {
  let mensaje = message3.value;
  let numero = parseInt(codDes1.value);
  let newMessage = cipher.decode(numero,mensaje);
return message4.value = newMessage;
}

btnCipher1.addEventListener("click",hacerClickDecifrar);
//**************************************************
const irCifrar = () =>{
  document.getElementById('pantalla-inicio').style.display='none';
  document.getElementById('pantalla-cifrar').style.display='block';
  document.getElementById('pantalla-descifrar').style.display='none';
}
const irDescifrar = () =>{
  document.getElementById('pantalla-inicio').style.display='none';
  document.getElementById('pantalla-cifrar').style.display='none';
  document.getElementById('pantalla-descifrar').style.display='block';
}
let irInicio = () =>{
  document.getElementById('pantalla-inicio').style.display='block';
  document.getElementById('pantalla-cifrar').style.display='none';
  document.getElementById('pantalla-descifrar').style.display='none';
}

btnirCifrar.addEventListener('click',irCifrar);
btnirDescifrar.addEventListener('click',irDescifrar);
btnirInicio.addEventListener('click',irInicio);
btnirInicio1.addEventListener('click',irInicio);
//**************************************************
