//Working With Object Define Propriety.js

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: false, //mostra a chave
    value: estoque, //valor
    writable: false, //não edita dado
    configurable: false, //configuravel Delete
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, //mostra a chave
      value: nome, //valor
      writable: false, //não edita dado
      configurable: false, //configuravel Delete
    },
    preco: {
      enumerable: true, //mostra a chave
      value: preco, //valor
      writable: false, //não edita dado
      configurable: false, //configuravel Delete
    },
  });
}  

produto = new Produto("Camiseta", 20, 3);
console.log(produto);

console.log(Object.keys(produto)); //Return [ 'nome', 'preco', 'estoque' ]
