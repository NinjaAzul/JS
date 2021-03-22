//Declarações de Funçoes

//==============================================================================

const dado = function () {
  console.log("Dado");
};

function executaFunction(funcao) {
  funcao();
}

executaFunction(dado);

//==============================================================================

const arrowFunction = () => {
  console.log("Sou uma Arrow Function");
};

arrowFunction();

//==============================================================================

const objFunction = {
  falar() {
    console.log("Estou Falando");
  },
};

objFunction.falar();
