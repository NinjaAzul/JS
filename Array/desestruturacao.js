// let a = "A"; //
// let b = "B"; //
// let c = "B"; //

// const numeros = [1, 2, 3];

// [a, b, c] = numeros;

// console.log(a, b, c);

//=============================================================================

// const numeros = [100, 222, 333, 455, 566, 677, 788, 8999, 900];

// const [primeiroNumero, segundoNumero,,quartoNumero,,,setimoNumero ] = numeros;

// console.log(primeiroNumero);
// console.log(segundoNumero);
// console.log(quartoNumero);
// console.log(setimoNumero); // indice 7

// //=============================================================================

// //...rest , ...spread

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const [primeiroNumero, segundoNumero, ...resto] = numeros;

// console.log(primeiroNumero); //1000
// console.log(segundoNumero); //2000
// console.log(...resto); //return 3000 4000 5000 6000 7000 8000 9000

// //=============================================================================

//=============================================================================

// const numeros = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(numeros[0][2]);

//=============================================================================

//=============================================================================

const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [lista1,lista2,lista3] = numeros

console.log(lista1[1]);

//=============================================================================