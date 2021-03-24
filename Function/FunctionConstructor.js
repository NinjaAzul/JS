// Working Constructor Functions And Factory

function Pessoa(nome, sobrenome) {
  //Methods Pivate
  const id = 123456;
  const metodoInterno = function () {

  };
  //Methods Public
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + " : sou um método");
  };
}

const pessoa = new Pessoa("Erick", "Freitas");
pessoa.metodo();
