//Working With Try Cath!

// const soma = (x, y) => {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw new error("x e y precisam ser números");
//   }
//   return x + y;
// };

// try {
//   console.log(soma(2, "d"));
//   console.log(soma(2, 2));
// } catch (error) {
//   console.log(error);
// } finally{
//   //Sempre Executa
// }

//=============================================================================

const retornaHora = (data) => {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instancia de Date");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {}); // Return 03:24:53 hour:"2-digit" minute:"2-digit" hour12:false
};

try {
  const data = new Date("01-01-1997 12:58:12");
  const hora = retornaHora(1); //    throw new TypeError("Esperando instancia de Date");
  console.log(hora);
} catch {
  //tratar error
} finally {
  console.log("tenha um bom dia");
}

//===========================================================================
