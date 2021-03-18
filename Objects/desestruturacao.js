// const pessoa = {
//   nome: "Erick",
//   sobrenome: "Freitas",
//   idade: 23,
//   endereço: {
//     rua: "Bandeirantes",
//     numero: 855,
//     bairro: "Jardim Revista",
//     cep: "08694-180",
//   },
// };

// const {nome: n = "", sobrenome} = pessoa

// console.log(n, sobrenome);

//===========================================================================

// const pessoa = {
//   nome: "Erick",
//   sobrenome: "Freitas",
//   idade: 23,
//   endereco: {
//     rua: "Bandeirantes",
//     numero: 855,
//     bairro: "Jardim Revista",
//     cep: "08694-180",
//   },
// };

// const {
//   endereco: { rua: r = 12345, numero,bairro,cep },endereco
// } = pessoa;

// console.log(r, numero, bairro, endereco);

//===========================================================================
//===========================================================================

const pessoa = {
  nome: "Erick",
  sobrenome: "Freitas",
  idade: 23,
  endereco: {
    rua: "Bandeirantes",
    numero: 855,
    bairro: "Jardim Revista",
    cep: "08694-180",
  },
};

const { nome, sobrenome, ...rest } = pessoa;

console.log(nome, sobrenome, rest);

// ===========================================================================
