function Cifrar(elemto) {
  var palabra = document.getElementsByTagName('imput')[0].value;
  var palabra_codificada = btoa(palabra);
  document.getElementsById("resultado").innerHTML = palabra_codificada;
}
function Decifrar(elemto) {
  var palabra = document.getElementsByTagName('imput')[0].value;
  var palabra_codificada = atob(palabra);
  document.getElementsById("resultado").innerHTML = palabra_codificada;
}
