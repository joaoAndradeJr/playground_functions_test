// Desafio 1
function compareTrue(param1, param2) {
  const one = param1;
  const two = param2;

  if (one === true && two === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  const valor = (base * height) / 2;
  return valor;
}

// Desafio 3
function splitSentence(sentence) {
  const new_array = sentence.split(' ');
  return new_array;
}

// Desafio 4
function concatName(array) {
  const size = array.length;
  const last = array[size - 1];
  const first = array[0];
  return last + ' ' + first;
}

// Desafio 5
function footballPoints(wins, ties) {
  const win_points = wins * 3;
  const total = win_points + ties;
  return total;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
