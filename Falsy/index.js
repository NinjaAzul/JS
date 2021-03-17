// Um valor falsy é um valor que se traduz em falso quando avaliado em um contexto Boolean.

if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if (document.all) [1]


//  Em JavaScript, um valor verdadeiro é um valor considerado verdadeiro quando
//  encontrado em um contexto booleano. Todos os valores são verdadeiros, a menos 
//  que sejam definidos como falsos (ou seja, exceto para falso, 0, -0, 0n, "", 
//  nulo, indefinido e NaN).

if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

// Na ciência da computação, um Booleano é um tipo de dados lógico que pode ter apenas o
// valores verdadeiros ou falsos. Por exemplo, em JavaScript, as condicionais booleanas são frequentemente
//  usado para decidir quais seções de código executar (como em instruções if)
//   ou repetir (como em loops for).

/* JavaScript if statement */
if (boolean conditional) {
  // code to execute if the conditional is true
}

if (boolean conditional) {
 console.log("boolean conditional resolved to true");
} else {
 console.log("boolean conditional resolved to false");
}

/* JavaScript for loop */
for (control variable; boolean conditional; counter) {
 // code to execute repeatedly if the conditional is true
}

for (var i=0; i < 4; i++) {
 console.log("I print only when the boolean conditional is true");
}