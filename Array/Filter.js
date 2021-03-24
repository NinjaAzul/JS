// Working With Filter

//==============================================================================

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, array) {
//   return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);
//==============================================================================

//Filter vai sempre retornar um array com a mesma quantidade de array ou menos,
//depende da checagem

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);

//==============================================================================

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter((valor, indice,array) => {
//   console.log(valor,indice,array);
//  return valor > 10;
// });
// console.log(numerosFiltrados);

//==============================================================================

const pessoas = [
  { nome: "erick", idade: 23 },
  { nome: "Vinicius", idade: 23 },
  { nome: "Lays", idade: 20 },
  { nome: "Cris", idade: 21 },
  { nome: "Miguel", idade: 22 },
  { nome: "Rosana", idade: 55 },
];

const pessoasComNomeGrande = pessoas.filter((pessoa) => {
  return pessoa.nome.length > 7;
});

console.log(pessoasComNomeGrande);

const pessoasComMaisde50 = pessoas.filter((pessoa) => {
  return pessoa.idade >= 50;
});

console.log(pessoasComMaisde50);

const pessoasComMaisde20 = pessoas.filter((pessoa) => {
  return pessoa.idade >= 20;
});

console.log(pessoasComMaisde20);


const pessoasTerminaComA = pessoas.filter((pessoa) => {
  return pessoa.nome.toLowerCase().endsWith('a');
});

console.log(pessoasTerminaComA);

const pessoasIniciaComE = pessoas.filter((pessoa) => {
  return pessoa.nome.toLowerCase().startsWith("e");
});

console.log(pessoasIniciaComE);
//==============================================================================
