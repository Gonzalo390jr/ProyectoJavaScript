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

class TipoNumero {
  constructor(tipo, numero) {
    this.tipo = tipo;
    this.num = numero;
  }
}

class VariosPasajes {
  constructor(numeros) {
    this.numeros = numeros;
  }
}

function pasarVariosNum(numero) {
  const numeros = [];
  numeros.push(new TipoNumero("Decimal", numero));
  numeros.push(new TipoNumero("Binario", decimalABinario(numero)));
  numeros.push(new TipoNumero("Octal", Number.parseInt(numero).toString(8)));
  numeros.push(
    new TipoNumero("Hexadecimal", Number.parseInt(numero).toString(16))
  );
  return new VariosPasajes(numeros);
}

let trad = document.getElementById("btnTraducir");

let historial = document.getElementById("btnHistorial");

let datoUsuario = document.getElementById("contDatos");

let mostrarResultado = document.getElementById("contResultado");
let CantOperaciones = 0;



function mostrarEnHTML(lista) {
  return `<p>${lista[0].tipo}: ${lista[0].num}</p><p>${lista[1].tipo}: ${lista[1].num}</p><p>${lista[2].tipo}: ${lista[2].num}</p><p>${lista[3].tipo}: ${lista[3].num}</p>`;
}

trad.onclick = () => {
  let guardar = `op${CantOperaciones++}`;

  let numero = datoUsuario.value;
  let traduccion = pasarVariosNum(numero);
  let lista = traduccion.numeros;

  
  mostrarResultado.innerHTML = "<h3>RESULTADO</h3>" + mostrarEnHTML(lista);

  sessionStorage.setItem(guardar, JSON.stringify(lista));
};


historial.onclick = () => {
  let mostrarTodo = "<h3>HISTORIAL</h3>";

  if (CantOperaciones != 0) {
     for (let i = 0; i < sessionStorage.length; i++) {
       let clave = sessionStorage.key(i);
       let info = JSON.parse(sessionStorage.getItem(clave));
       mostrarTodo =
         mostrarTodo + "<h4>Dato " + i + "</h4>" + mostrarEnHTML(info);
     }
     mostrarResultado.innerHTML = mostrarTodo;
   }
};
