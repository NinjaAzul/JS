// FunctionFactory

function createPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    //Geter vira uma variavel
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },

    fala: function (assunto) {
      return `${this.nome} está ${assunto}`;
    },
    peso: 60,
    altura: 1.65,
    get imc() {
      const indice = this.peso / this.altura;
      return indice.toFixed(2);
    },
  };
}

const P1 = createPessoa("Erick", "Freitas");
console.log(P1.fala("Falando Sobre JS"));
console.log(P1.imc);
console.log(P1.nomeCompleto);
P1.nomeCompleto = "Erick Freitas";
