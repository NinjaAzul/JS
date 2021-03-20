//working with Break and Continue!

//==============================================================================

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
//   if (numero === 2) {
//     console.log("Pulei");
//     continue;
//   }

//   if (numero === 7) {
//     console.log("achei");
//     break;
//   }

//   console.log(numero);
// }

//==============================================================================

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let i = 0;

// while (i < numeros.length) {
//   let numero = numeros[i];

//   if (numero === 2) {
//     console.log("Pulei");
//     i++;
//     continue;
//   }

//   if (numero === 7) {
//     console.log("achei");
//     i++; 
//     break;
//   }

//   console.log(numero);

//   i++;
// }

//==============================================================================

//Continue prox Interação

// Break Sai do Laço


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

do  {
  let numero = numeros[i];

  if (numero === 2) {
    console.log("Pulei");
    i++;
    continue;
  }

  if (numero === 7) {
    console.log("achei");
    i++;
    break;
  }

  console.log(numero);

  i++;
} while (i < numeros.length);

//==============================================================================