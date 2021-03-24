// Working With Map

//==============================================================================

//Map vai sempre o tamanho do array Original

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosMapeados = numeros.map((numeros) => {
  return numeros * 2;
});
console.log(numerosMapeados); //return 10, 100, 160,  2,  4,  6, 10,  16,  14, 22, 30, 44,54

//==============================================================================

const pessoas = [
  { nome: "erick", idade: 23 },
  { nome: "Vinicius", idade: 23 },
  { nome: "Lays", idade: 20 },
  { nome: "Cris", idade: 21 },
  { nome: "Miguel", idade: 22 },
  { nome: "Rosana", idade: 55 },
];

const pessoasMapeadas = pessoas.map((pessoa) => {
  return pessoa;
});

console.log(pessoasMapeadas);

const nomes = pessoas.map((pessoa) => {
  return pessoa.nome;
});

console.log(nomes);

const idades = pessoas.map((pessoa) => {
  return pessoa.idade;
});

console.log(idades);

const comId = pessoas.map((pessoa, indice) => {
  return pessoa;
});

console.log(comId);


const comIdObj = pessoas.map((pessoa, indice) => {
  const newObject = {...pessoa};
  newObject.id = indice + 1 + Date.now();
  return newObject;
});

console.log(comIdObj);

//==============================================================================
