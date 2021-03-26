//Working With Getters Setters js

//Working With Object Define Propriety.js

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  let estoquePrivate = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    configurable: false, //configuravel exe Delete
    get: () => {
      return estoquePrivate;
    },
    set: (valor) => {
      if (typeof valor !== "number") {
        throw new TypeError("Invalid Value");
      }
      estoquePrivate = valor;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    },
  };
}

// produto = new Produto("Camiseta", 20, 3);
// //console.log(produto);
// console.log(produto.estoque);
// produto.estoque = 5000;
// console.log(produto.estoque);

const p2 = criaProduto("Camiseta");
p2.nome = "qualquer coisa";
console.log(p2.nome);
