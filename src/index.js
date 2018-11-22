//Ahora hallaremos el modelo que cifra

const btnCipher=document.getElementById('btn-encode-cifrar')
const message=document.getElementById('text-cifrar');
const codDes=document.getElementById('input-offset-cifrar');
const message2=document.getElementById('text-cifrar');

function hacerClick() {
  let mensaje = message.value;
  let numero = parseInt(codDes.value);
  let newMessage= cipher.encode(numero,mensaje);
return message2.value = newMessage;
}

btnCipher.addEventListener("click",hacerClick)

//Ahora hallaremos el modelo que decifra

const btnCipher1=document.getElementById('btn-encode-decifrar')
const message3=document.getElementById('text-decifrar');
const codDes1=document.getElementById('input-offset-decifrar');
const message4=document.getElementById('text-decifrar');

function hacerClick2() {
  let mensaje = message3.value;
  let numero = parseInt(codDes1.value);
  let newMessage = cipher.decode(numero,mensaje);
return message4.value = newMessage;
}

btnCipher1.addEventListener("click",hacerClick2)
