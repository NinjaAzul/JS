//Working With Objects

function create(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

const pessoa1 = create("Erick", "Freitas ", 23);

const pessoa2 = create("Lays", "Aguiar ", 21);

const pessoa3 = create("Vinicius", "Mendes ", 19);

const pessoa4 = create("Cris", "Assis ", 22);

console.log(pessoa1.idade);
console.log(pessoa2.idade);
console.log(pessoa3.idade);
console.log(pessoa4.idade);

