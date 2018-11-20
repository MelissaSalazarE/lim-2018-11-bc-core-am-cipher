function cifrar() {
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
ingresode.addEventListener("click", decifrar);
