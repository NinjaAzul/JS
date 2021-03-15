let VarA = "A";
let VarB = "B";
let VarC = "C";

const VarATemp = VarA;

//VarA = VarB;
//VarB = VarC;
//VarC = VarA;

[VarA, VarB, VarC] = [VarB, VarC, VarA];

console.log(VarA);
console.log(VarB);
console.log(VarC);
/*
console.log(VarA);
console.log(VarB);
console.log(VarATemp);
*/



