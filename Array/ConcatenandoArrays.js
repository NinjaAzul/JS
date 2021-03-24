//Concatenação Arrays

//==============================================================================

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = array1.concat(array2, [7, 8, 9], "Erick");

// console.log(array3); //Return [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Erick' ]

//==============================================================================

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2,...[7,8,9],"Erick"]; //Return [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Erick' ]

console.log(array3); //Return [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Erick' ]
