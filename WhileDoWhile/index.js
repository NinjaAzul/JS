//Working With While and Do While

//==============================================================================

// const nome = "Erick";

// let i = 1;

// while (i <= 5) {
//   console.log("Hoje é dia", i); // return Hoje é dia 1,2,3,4,5
//   i++;
// }

//==============================================================================

// function NumRandom(min, max) {
//   //Número aleatório 1 a 50
//   const NumR = Math.round(Math.random() * (min - max) + max);
//   return NumR;
// }
// const min = 1;
// const max = 50;
// let Random = NumRandom(min, max);

// while (Random != 10) {
//   Random = NumRandom(min, max);
//   console.log(Random);
// }

//==============================================================================

function NumRandom(min, max) {
  //Número aleatório 1 a 50
  const NumR = Math.round(Math.random() * (min - max) + max);
  return NumR;
}
const min = 1;
const max = 50;
let Random = NumRandom(min, max);
//checa a condição depois ou seja irá execuar a função ao menos 1 vez
do {
  Random = NumRandom(min, max);
  console.log(Random);
} while (Random != 10);

//==============================================================================
