function meuEscopo() {
  // form.onsubmit = function (event) {
  //  event.preventDefault() //Tira o padrão

  const form = document.querySelector("form");
  const resultado = document.querySelector(".resultado");
  const pessoas = [];

  function recebeEventoForm(event) {
    event.preventDefault(); //Padrão off

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);

    resultado.innerHTML +=
      `<p> ${nome.value}  ${sobrenome.value}  <span class="peso"> ${peso.value} </<span>  <span class="altura">  ${altura.value} </span> </p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
