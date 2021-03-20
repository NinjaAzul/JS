//Escreva uma Function que recebe 2 números e retorne o maior deles;

//==============================================================================

// 1° Resposta


// function higherNumber(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }

// console.log(higherNumber(2, 1));


//==============================================================================

//2° resposta

// function higherNumber(num1, num2) {
//   return num1 > num2 ? num1 : num2;
//   }
  
//   console.log(higherNumber(10, 11));
  
//==============================================================================

//3° resposta

const higherNumber = (num1, num2) => num1 > num2 ? num1 : num2;
  
  console.log(higherNumber(10, 11));

//==============================================================================