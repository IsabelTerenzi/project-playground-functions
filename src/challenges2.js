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
  if (lineC < lineB + lineA && lineC > Math.abs(lineB-lineA)) {
    return true;
  }
  return false;
}
// Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck 
//que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores 
//apresentados de cada linha.
//Para tanto, tenha em mente algumas considerações:
//Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor 
//que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.
//Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.
//O retorno da sua função deverá ser um booleano.
//Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
