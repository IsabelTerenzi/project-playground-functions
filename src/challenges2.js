// Desafio 11
function generatePhoneNumber(numeros) {
  let i = 0;
  let x = 0;
  let numeroTelefone =
    '(' +
    numeros[0] +
    numeros[1] +
    ')' +
    ' ' +
    numeros[2] +
    numeros[3] +
    numeros[4] +
    numeros[5] +
    numeros[6] +
    '-' +
    numeros[7] +
    numeros[8] +
    numeros[9] +
    numeros[10];

  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (i = 0; i < numeros.length; i += 1) {
    let contador = 0;
    for (x = 0; x < numeros.length; x += 1) {
      if (numeros[i] === numeros[x]) {
        contador += 1;
      }
      if (numeros[i] < 0 || numeros[i] > 9 || contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return numeroTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(bebidas) {
  let numeros = bebidas.match(/\d+/g).map(Number);
  let somaNumeros = 0;

  for (i = 0; i < numeros.length; i += 1) {
    somaNumeros += numeros[i];
  }
  if (somaNumeros === 1){
    return ('1 copo de água');
  }
  return (somaNumeros + ' copos de água');
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
