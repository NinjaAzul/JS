// CallBack Funtions

//Esse é o Problema

function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callBack) {
  setTimeout(() => {
    console.log("f1");
    if (callBack) callBack();
  }, rand());
}
function f2(callBack) {
  setTimeout(() => {
    console.log("f2");
    if (callBack) callBack();
  }, rand());
}
function f3(callBack) {
  setTimeout(() => {
    console.log("f3");
    if (callBack) callBack();
  }, rand());
}

f1(f1callBack);

function f1callBack() {
  f2(f2callBack);
}

function f2callBack() {
  f3(f3callBack);
}

function f3callBack() {
  console.log("Acabou");
}
//==============================================================================
