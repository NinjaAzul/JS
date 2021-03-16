//Working With Objects
const pessoa = {
  nome: "Erick",
  nobrenome: "Freitas",
  idade: 23,

  fala() {
    console.log(
      `O ${this.nome} está falando, "Fala DEV" e minha idade atual é ${this.idade}`
    );
  },

  incrementalIdade() {
    this.idade++;
  },
};

pessoa.fala();
pessoa.incrementalIdade();
pessoa.fala();
