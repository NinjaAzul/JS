// Escopo Léxico

//==============================================================================

const nome = "Luis";

function falNome() {
  console.log(nome);
}
falNome();

function useFalaNome() {
  const nome = "Lays";
  falNome();
}

useFalaNome();
//==============================================================================

//==============================================================================