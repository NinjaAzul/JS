//Working With Generator Functions // Run code node FunctionGenerator.js

//==============================================================================

// function* generator1() {
//   //Codigo...
//   yield "Valor 1";
//   //Codigo...
//   yield "Valor 2";
//   //Codigo...
//   yield "Valor 3";
// }

// const g1 = generator1();
// console.log(g1.next().value); // Valor 1
// console.log(g1.next().value); // Valor 2
// console.log(g1.next().value); // Valor 3

//==============================================================================

function* generator1() {
  //Codigo...
  yield "Valor 1";
  //Codigo...
  yield "Valor 2";
  //Codigo...
  yield "Valor 3";
}

const g1 = generator1();
for (let val of g1) {
  console.log(val); // Valor 1, Valor 2, Valor 3
}

//==============================================================================
//Looping
function* generator2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g2 = generator2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

//==============================================================================

function* generator3() {
  yield 0;
  yield 1;
  yield 2;
}

function* generator4() {
  yield* generator3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = generator4();
for (let val of g4) {
  console.log(val); // Valor 1, Valor 2, Valor 3
}

//==============================================================================

function* generator5() {
  yield function () {
    console.log("Vim do Yield 1");
  };
  yield function () {
    console.log("Vim do Yield 2");
  };
  yield function () {
    console.log("Vim do Yield 3");
  };
  yield function () {
    console.log("Vim do Yield 4");
  };
}

const g5 = generator5();
const function1 = (g5.next().value);
const function2 = (g5.next().value);

function1(); //Vim do Yield 1
function2(); //Vim do Yield 2

//==============================================================================