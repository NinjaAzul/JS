//Function Return

//==============================================================================

// function funcFala(comeco) {
//   function falaResto(resto) {
//     return comeco + resto;
//   }
//   return falaResto;
// }

// const fala = funcFala("Olá");
// const resto = fala("Mundo");
// console.log(resto);

//==============================================================================

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(3));
console.log(quadruplica(3));
//==============================================================================

//==============================================================================

//==============================================================================

//==============================================================================

//==============================================================================
