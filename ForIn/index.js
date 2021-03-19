// const frutasArray = ["Uva", "Melão", "Maça"];

// for (let indice in frutasArray) {
//   console.log(frutasArray[indice]); // return Uva Melâo Maça
// }

//========================================================================

const pessoa = {
  nome: "Erick",
  sobrenome: "Freitas",
  idade: 23,
};

for (let chave in pessoa){
  //console.log(chave) //nome,  sobrenome, idade
  console.log(pessoa[chave]);
}
// return Erick
//        Freitas
//        23
