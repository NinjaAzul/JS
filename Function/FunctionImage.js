//Portrait = Vertical || empé

// Landscape = Horizontal == Paisagem

//const ePaisagem = (height, width) => height > width  // Return True e False

const ePaisagem = (height, width) => height > width ? "Portrait" : "Landscape";

console.log(ePaisagem(1920, 1080));
