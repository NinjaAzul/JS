
//Working With Recursive Functions.js
// Tem um limite
function recusive(max){
  console.log(max);
  if (max > 10){
   return;
  }
  max++;
  
  recusive(max);
}

recusive(0);