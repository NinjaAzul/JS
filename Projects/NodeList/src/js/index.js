const paragrafos = document.querySelector(".praragrafos");

const styleBody = getComputedStyle(document.body);

const backgroundBody = styleBody.backgroundColor;

const ps = paragrafos.querySelectorAll("p"); //Cria uma NodeList

for (let p of ps) {
  p.style.backgroundColor = backgroundBody;
  p.style.color = '#fff'
}
