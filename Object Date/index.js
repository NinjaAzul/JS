//Working Object Date

//==============================================================================

// const data = new Date();

// console.log(data.toString()); //Wed Mar 17 2021 10:38:51 GMT-0300 (Horário Padrão de Brasília)

//==============================================================================

// const data = new Date(0);

// console.log(data.toString()); // return Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília)

//==============================================================================

// const TresHoras = 60 * 60  * 3 * 1000; // return 3 hrs
// const umDia = 60 * 60  * 24 * 1000;
// const data = new Date(0 + TresHoras + umDia); // return Fri Jan 02 1970 00:00:00 GMT-0300 (Horário Padrão de Brasília)

// console.log(data.toString());

//==============================================================================

// const data = new Date(2021, 3, 20, 15, 14, 27); //   a, m , d, h , M, s, ms  //  2021, 0-11 , 31-28 , 23 , 59 , 59 , 997.
//                                                                                       //0 - 11 Messes
// console.log(data.toString());

//==============================================================================

// const data = new Date('2021-03-17 20:20:59'); //

// console.log(data.toString());

//==============================================================================

// const data = new Date(1615989892680); //2021-03-17T14:04:52.680Z
// const data2 = new Date(1615990178667);

// console.log("Dia", data.getDate());
// console.log("Mês", data.getMonth() + 1); //0 - 11
// console.log("Ano", data.getFullYear());
// console.log("Hora", data.getHours());
// console.log("Min", data.getMinutes());
// console.log("Seg", data.getSeconds());
// console.log("Milli", data.getMilliseconds());
// console.log("Day", data.getDay()); // 0 - Domingo , 6 - Sábado

// console.log("Dia da Semana", data.getTime()); //console.log(Date.now()); // Data em Milliseconds
// console.log("Time Zone", data.getTimezoneOffset());
// console.log(data);

//==============================================================================


function zeroEsquerda (num){
  return num >= 10 ? num :  `0${num}`
}

function formataData(data) {
  const dia = zeroEsquerda(data.getDate());
  const mes = zeroEsquerda(data.getMonth() + 1) ; //0 - 11
  const ano = zeroEsquerda(data.getFullYear());
  const horas = zeroEsquerda(data.getHours());
  const minutos = zeroEsquerda(data.getMinutes());
  const segundos = zeroEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`
}

const data = new Date();

const dataBrasil = formataData(data);

console.log(dataBrasil);