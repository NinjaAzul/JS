//Working Array

//=============================================================================

// Os Arrays vão ser os mesmos!!! Logo se pudar o dado em um mudara no outro.
// Mesmo Local na Memoria

// const a = [1, 2, 3, 4];

// const b = a;

// a.push("ERICK");

// console.log(a, b);  //[ 1, 2, 3, 4, 'ERICK' ] [ 1, 2, 3, 4, 'ERICK' ]

//==============================================================================

//=============================================================================

//Os Arrays são diferentes com os mesmos dados copiados!!!
//logo se mudar o dado em um não mudara no outro!!

// const a = [1, 2, 3, 4];

// const b = [...a];

// a.push("ERICK");

// b.pop();

// console.log(a, b); //  Array A = [ 1, 2, 3, 4, 'ERICK' ]   Array A = [ 1, 2, 3 ]

//==============================================================================

//=============================================================================

// Os Objects vão ser os mesmos!!! Logo se pudar o dado em um mudara no outro.
// Mesmo Local na Memoria

// const a = {
//   nome: "Erick",
//   sobrenome: "Freitas",
// };

// a.nome = "joão"

// const b = a;

// console.log(a, b); // { nome: 'joão', sobrenome: 'Freitas' } { nome: 'joão', sobrenome: 'Freitas' }

//==============================================================================

//=============================================================================

//Os Arrays são diferentes com os mesmos dados copiados!!!
//logo se mudar o dado em um não mudara no outro!!.
//  Locais diferentes  na Memoria

const a = {
  nome: "Erick",
  sobrenome: "Freitas",
};

const b = { ...a }; //

a.nome = "joão";

console.log(a, b); // Object A = { nome: 'joão', sobrenome: 'Freitas' }
                   // Object B = { nome: 'Erick ', sobrenome: 'Freitas' }

//==============================================================================
