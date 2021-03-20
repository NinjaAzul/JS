//Working With SetInterval and setTimeout.

//setInterval roda o codigo apartir do intervalo que tu configurar

//setTimeout só executa 1 vez

function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR");
}

const timer = setInterval(function funcaoDoInterval() {
  console.log(mostraHora());
}, 1000);

// setTimeout(function () {
//   clearInterval(timer);
// }, 3000);

// //setTimeout(function(){
// console.log("Depois de 5 Seg");
// },5000)