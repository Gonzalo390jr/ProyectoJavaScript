function darVuelta(cadena){
  let ret = new String("");
  for(let i=0; i<cadena.length; i++){
    ret= cadena.charAt(i) + ret;
  }
  return ret;
}

function decimalABinario(entero){
  let aux = Math.trunc(Number.parseFloat(entero));
  if(aux == 0){
    return 0;
  }
  let ret = new String("");
  while(aux != 1){
    if(aux%2 == 0){
      ret = ret + "0";
      aux = aux/2;
    }else{
      ret = ret + "1";
      aux = (aux/2)-0.5;
    }
  }
  return darVuelta(ret+"1"); 
}

function esBinario(binario){
  ret = true;
  for(let i=0; i<binario.length; i++){
    if(binario.charAt(i) != "1"){
      if(binario.charAt(i) != "0"){
        ret = false;
      }
    }
  }
  return ret;
}

function deBinarioADecimal(binario){
  if(!esBinario(binario)){
    return "no es binario";
  }
  binario = darVuelta(binario);
  let ret = 0;
  for(let i=0; i<binario.length; i++){
    ret = ret + (parseInt(binario.charAt(i))*Math.pow(2, i));
  }
  return ret;
}

// esto estaria vinculado a un boton del html, no se como hacer eso
function botonDecimalaBinario(){
  let numero = prompt("ingrese el numero a transformar");
  alert("el numero "+ numero + " es en binario: " + decimalABinario(numero));
}

//este tambien a otro boton
function botonBinarioaDecimal(){
  let numero = prompt("ingrese el numero a transformar");
  alert("el binario " + numero + " es en decimal: " + deBinarioADecimal(numero));
}

botonDecimalaBinario();
botonBinarioaDecimal();