//Parâmetros de Funções

//==============================================================================
// arguments sustenta todos parametros
// function funcao() {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total);
// }
// funcao(1, 1, 1, 2, 6, 2, 3, 3, 4, 4);

//==============================================================================

// function funcao(a, b, c, d, e, f, g, h, i) {
//   console.log(a, b, c, d, e, f); //return 1 2 3 undefined undefined undefined
// }

// funcao(1, 2, 3);

//============================================================================

//Valores Padrões
// function funcao(a = 0, b = 0, c = 10) {
//   console.log(a + b + c);
// }

// funcao(10, undefined,2);

//============================================================================

// function funcao({ nome, sobrenome, idade }) {
//   console.log(nome, sobrenome, idade);
// }

// let obj = { nome: "Erick", sobrenome: "Freitas", idade: 23 }; //return Erick Freitas 23
// funcao(obj);

//============================================================================

// function funcao([Valor1, Valor2, Valor3]) {
//   console.log(Valor1, Valor2, Valor3);
// }

// let obj = ["Erick", "Freitas", 23]; //return Erick Freitas 23
// funcao(obj);

//============================================================================

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}

conta("+", 0, 20, 40, 50, 60);
//============================================================================
