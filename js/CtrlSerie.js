"use strict";
var forma = document.getElementById("forma"),
resultado = document.getElementById("resultado");
forma.addEventListener("submit", procesa, false);
function procesa(){
  var base = parseInt(forma["base"].value);
  var a=0;
  var b=1;
  var c=0;
  var res="0\n1\n";
  for (var i = 0; i < base-2; i++) {
    c = a + b;
    res = res + c +"\n";
    a=b;
    b=c;
  }
  forma["resultado"].value=res;
}
