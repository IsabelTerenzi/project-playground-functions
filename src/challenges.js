// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let quantPontos = wins * 3 + ties * 1;
  return quantPontos;
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  for (i = 1; i < numeros.length; i += 1) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }
  let quantMaior = 0;
  for (x = 0; x < numeros.length; x += 1) {
    if (numeros[x] === maiorNumero) {
      quantMaior += 1;
    }
  }
  return quantMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dcat1 = Math.abs(cat1 - mouse);
  let dcat2 = Math.abs(cat2 - mouse);
  if (dcat1 < dcat2) {
    return 'cat1';
  } else if (dcat1 > dcat2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  for (i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 !== 0) {
      numeros[i] = 'fizz';
    } else if (numeros[i] % 5 === 0 && numeros[i] % 3 !== 0) {
      numeros[i] = 'buzz';
    } else if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      numeros[i] = 'fizzBuzz';
    } else if (numeros[i] % 3 !== 0 && numeros[i] % 5 !== 0) {
      numeros[i] = 'bug!';
    }
  }
  return numeros;
}

// Desafio 9
function encode(string) {}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(nomes, name) {
  let tecnologias = [
    {
      tech: 'React',
      name: 'Lucas',
    },
    {
      tech: 'HTML',
      name: 'Claudio',
    },
    {
      tech: 'CSS',
      name: 'Gil',
    },
    {
      tech: 'Phyton',
      name: 'Rose',
    },
  ];
  return tecnologias.tech;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
