const elementos = [
  { tag: "p", texto: "Teste1 " },
  { tag: "P", texto: "teste2" },
  { tag: "P", texto: "teste3" },
  { tag: "P", texto: "Qualquer Texto" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let  textoCriado = document.createTextNode(texto);
  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}

container.appendChild(div); //cria uma div

