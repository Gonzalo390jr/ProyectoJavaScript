function darVuelta(cadena) {
  let ret = new String("");
  for (let i = 0; i < cadena.length; i++) {
    ret = cadena.charAt(i) + ret;
  }
  return ret;
}

function decimalABinario(entero) {
  let aux = Math.trunc(Number.parseFloat(entero));
  if (aux == 0) {
    return 0;
  }
  let ret = new String("");
  while (aux != 1) {
    if (aux % 2 == 0) {
      ret = ret + "0";
      aux = aux / 2;
    } else {
      ret = ret + "1";
      aux = aux / 2 - 0.5;
    }
  }
  return darVuelta(ret + "1");
}

function esBinario(binario) {
  ret = true;
  for (let i = 0; i < binario.length; i++) {
    if (binario.charAt(i) != "1") {
      if (binario.charAt(i) != "0") {
        ret = false;
      }
    }
  }
  return ret;
}

function deBinarioADecimal(binario) {
  if (!esBinario(binario)) {
    return "no es binario";
  }
  binario = darVuelta(binario);
  let ret = 0;
  for (let i = 0; i < binario.length; i++) {
    ret = ret + parseInt(binario.charAt(i)) * Math.pow(2, i);
  }
  return ret;
}

// esto estaria vinculado a un boton del html, no se como hacer eso
function botonDecimalaBinario() {
  let numero = prompt("ingrese el numero a transformar");
  alert("el numero " + numero + " es en binario: " + decimalABinario(numero));
  console.log(
    "el numero " + numero + " es en binario: " + decimalABinario(numero)
  );
}

//este tambien a otro boton
function botonBinarioaDecimal() {
  let numero = prompt("ingrese el numero a transformar");
  alert(
    "el binario " + numero + " es en decimal: " + deBinarioADecimal(numero)
  );
  console.log(
    "el binario " + numero + " es en decimal: " + deBinarioADecimal(numero)
  );
}

botonDecimalaBinario();
botonBinarioaDecimal();

/* Secciones nuevas */
/* binario a hexa
0000 = 0  |  0001 = 1  |  0010 = 2  |  0011 = 3  |  0100 = 4  |  0101 = 5  |  0110 = 6  |  0111 = 7
1000 = 8  |  1001 = 9  |  1010 = A  |  1011 = B  |  1100 = C  |  1101 = D  |  1110 = E  |  1111 = F
*/
// function traducirDelBinario(formato, secBinario) {
//   if (formato == 3) {
//     secBinario = "0" + secBinario;
//   }
//   switch (Number.parseInt(secBinario)) {
//     case 0000:
//       return "0";
//       break;
//     case 0001:
//       return "1";
//       break;
//     case 0010:
//       return "2";
//       break;
//     case 0011:
//       return "3";
//       break;
//     case 0100:
//       return "4";
//       break;
//     case 0101:
//       return "5";
//       break;
//     case 0110:
//       return "6";
//       break;
//     case 0111:
//       return "7";
//       break;
//     case 1000:
//       return "8";
//       break;
//     case 1001:
//       return "9";
//       break;
//     case 1010:
//       return "A";
//       break;
//     case 1011:
//       return "B";
//       break;
//     case 1100:
//       return "C";
//       break;
//     case 1101:
//       return "D";
//       break;
//     case 1110:
//       return "E";
//       break;
//     case 1111:
//       return "F";
//       break;
//     default:
//       return "-"
//       break;
//   }
// }

// function pasarAOtroFormato(formato, numero) {
//   let entrada = numero;
//   if (!esBinario(numero)) {
//     entrada = decimalABinario(numero);
//   }
//   let aux = "";
//   let salida = "";
//   let cont = 0;
  
//   while(entrada.length%formato != 0){
//     entrada = "0" + entrada;
//   }

//   for (let i = 0; i < entrada.length; i++) {
//     aux = aux + entrada.charAt(i);
//     cont++;
//     if (cont == formato) {
//       salida = salida + traducirDelBinario(formato, aux);
//       aux = "";
//       cont = 0;
//     }
//   }
//   return salida;
// }



class TipoNumero {
  constructor(tipo, numero) {
    this.tipo = tipo;
    this.num = numero;
  }
  mostrar(){
    alert(this.tipo + ": " + this.num);
    console.log(this.tipo + ": " + this.num);
  }
}

function mostrarNumeros(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    numeros[i].mostrar();
  }
}

function botonPasarDecimalAOtrosFormato() {
  let numero = prompt("ingrese el numero a transformar");
  const numeros = [];
  numeros.push(new TipoNumero("Decimal", numero));
  numeros.push(new TipoNumero("Binario", decimalABinario(numero)));
  // numeros.push(new TipoNumero("Octal", pasarAOtroFormato(3, numero)));
  // numeros.push(new TipoNumero("Hexadecimal", pasarAOtroFormato(4, numero)));
  numeros.push(new TipoNumero("Octal", Number.parseInt(numero).toString(8)))
  numeros.push(new TipoNumero("Hexadecimal", Number.parseInt(numero).toString(16)))

  mostrarNumeros(numeros);
}

botonPasarDecimalAOtrosFormato();
