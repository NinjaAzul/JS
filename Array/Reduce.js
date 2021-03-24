// Working With Reduce

//==============================================================================

//Map vai sempre o tamanho do array Original

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const totalDePares = numeros.reduce((acumulador, valor, indice, array) => {
  return (acumulador += valor);
}, 0);
console.log(totalDePares); //return 236

//==============================================================================

const pessoas = [
  { nome: "erick", idade: 23 },
  { nome: "Vinicius", idade: 23 },
  { nome: "Lays", idade: 20 },
  { nome: "Cris", idade: 21 },
  { nome: "Miguel", idade: 22 },
  { nome: "Rosana", idade: 55 },
];

const pessoasMaisVelhas = pessoas.reduce((acumulador, pessoa) => {
  acumulador += pessoa.idade;
  return acumulador;
}, 0);

console.log(pessoasMaisVelhas); //return 164

//==============================================================================
