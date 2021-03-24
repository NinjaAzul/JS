// Working With Filter, Map , Reduce

//==============================================================================

//Map vai sempre o tamanho do array Original

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFilterPares = numeros.filter((numero) => {
  return numero % 2 === 0;
});

const numerosMapDobro = numerosFilterPares.map((numero) => {
  return numero * 2;
});

const numeroReduceSomaTotalPares = numerosMapDobro.reduce((cont, numero) => {
  return (cont += numero);
});

console.log(numeroReduceSomaTotalPares); //return 324

//==============================================================================


//Map vai sempre o tamanho do array Original

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeroTotalParesEmDobro = numeros.filter((numero) => {
  return numero % 2 === 0;
}).map((numero) => {
  return numero * 2;
}).reduce((cont, numero) => {
  return (cont += numero);
});

console.log(numeroTotalParesEmDobro); //return 324


//==============================================================================

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeroTotalParesEmDobro = numeros
.filter(numero =>  numero % 2 === 0)
.map(numero =>  numero * 2)
.reduce((cont, numero) => cont += numero);

console.log(numeroTotalParesEmDobro); //return 324