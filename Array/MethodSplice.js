//Working Splice

// console.log(nomes);
// console.log(dadosDeletados);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NaN);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.EPSILON);

const nomes = ["Erick", "Lays", "Vinicius", "Cris", "Julia"];

//nomes.splice(indice,delete,eleme1,eleme2,eleme3 )

const dadosDeletados = nomes.splice(3, 1, "L");

//same Push const dadosDeletados = nomes.splice(nomes.length, 0 , "Erick");

//Same POP const dadosDeletados = nomes.splice(-1, 1);

//Same Shift const dadosDeletados = nomes.splice(0, 1);
