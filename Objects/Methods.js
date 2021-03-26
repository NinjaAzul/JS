//Metodos Uteis

//==============================================================================
console.log("################################");

const produto = { nome: "Caneca", preco: 1.8 };
const outraCoisa = { ...produto };

outraCoisa.nome = "Erick";
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);
console.log("################################");

//==============================================================================

const produto1 = { nome: "Caneca", preco: 1.8 };
const outraCoisa1 = { ...produto, material: "porcelana" };

outraCoisa.nome = "Erick";
outraCoisa.preco = 2.5;
console.log(produto1);
console.log(outraCoisa1);
console.log("################################");

//==============================================================================

const produto2 = { nome: "Caneca", preco: 1.8 };
const caneca = Object.assign({}, produto2);

outraCoisa.nome = "Erick";
outraCoisa.preco = 2.5;
console.log(produto2);
console.log(caneca);
console.log("################################");
//==============================================================================

const produto3 = { nome: "Caneca", preco: 1.8 };
const caneca1 = Object.assign({ tipoItem: "Plastico" }, produto2);

outraCoisa.nome = "Erick";
outraCoisa.preco = 2.5;
console.log(produto3);
console.log(caneca1);
console.log("################################");

//==============================================================================

const produto4 = { nome: "Caneca", preco: 1.8 };
const caneca2 = { nome: "Caneca", preco: 1.8 };

caneca2.nome = "Erick";
caneca2.preco = 2.5;
console.log(produto4);
console.log(caneca2);
console.log("################################");
//==============================================================================

const produto5 = { nome: "Caneca", preco: 1.8 };
Object.defineProperty(produto5, "nome", {
  writable: false,
  configurable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(produto5, "nome"));
produto.nome = "Dale";
console.log(produto5);
console.log("################################");

//==============================================================================

const produto6 = { nome: "Caneca", preco: 1.8 };
console.log(Object.values(produto6));
console.log("################################");

//==============================================================================

const produto7 = { nome: "Caneca", preco: 1.8 };
console.log(Object.entries(produto7));

for (let [chave, valor] of Object.entries(produto7)) {
  console.log(chave, valor);
}

console.log("################################");
