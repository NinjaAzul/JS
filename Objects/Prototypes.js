//Working With Prototypes

//==============================================================================

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = () => this.nome + " " + this.sobrenome;

//instância
const pessoa1 = new Pessoa("Lays", "Aguiar");
const pessoa2 = new Pessoa("Erick", "F");

console.dir(pessoa1);
console.dir(pessoa2);

//==============================================================================

const ObjA = {
  chaveA: "A",
};
const ObjB = {
  chaveB: "B",
};

const ObjC = new Object();
ObjC.ChaveC = "C";

Object.setPrototypeOf(ObjB, ObjA); //B - A
Object.setPrototypeOf(ObjC, ObjB);
console.log(ObjC.chaveB);
//==============================================================================

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const produto = new Produto("Camiseta", 40);
produto.desconto(100);
console.log(produto);

//Literal
const p2 = {
  nome: "Caneca",
  preco: 15,
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

console.log(p2);

const p3 = Object.create(Produto.prototype,{
  preco: {
    configurable:true,
    writable:true,
    enumerable:true,
    value: 113,
  },
  tamanho: {
    configurable:true,
    writable:true,
    enumerable:true,
    value: 42,
  }
});

p3.aumento(100);
console.log(p3);

//==============================================================================

