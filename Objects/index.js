//Working With Objects


function create(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

const pessoa1 = create("Erick", "Freitas ", 23);

const pessoa2 = create("Erick", "Freitas ", 23);

const pessoa3 = create("Erick", "Freitas ", 23);

console.log(pessoa1.idade);
