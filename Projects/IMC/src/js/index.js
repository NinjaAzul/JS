function meuEscopo() {
  const form = document.querySelector("form");

  //const pessoas = [];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    //Pega os dados do FrontEnd//
    const inputPeso = event.target.querySelector(".peso");
    const inputAltura = event.target.querySelector(".altura");
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
      setResultado("Peso Invalido", false);
      return;
    }

    if (!altura) {
      setResultado("Altura Invalida", false);
      return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
  });

  function getNivelImc(imc) {
    const nivel = [
      "Abaixo do peso",
      "Peso normal",
      "Sobrapeso",
      "Obesidade grau 1",
      "Obesidade grau 2",
      "Obesidade grau 3",
    ];
    //if diferenciado do JS "if (imc >= 39.9) return nivel[5];"
    if (imc >= 39.9) {
      return nivel[5];
     }
    if (imc >= 34.9){
      return nivel[4];
    } 
    if (imc >= 29.9) {
      return nivel[3];
    }
    if (imc >= 24.9){
      return nivel[2];
    }
    if (imc >= 18.5) {
      return nivel[1];
    }
    if (imc < 18.5) {
      return nivel[0];  
    }
  }

  function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return Number(imc.toFixed(2));
  }

  function criaParagrafo() {
    const p = document.createElement("p");
    return p;
  }

  function setResultado(msg, isValid) {
    const resultado = document.querySelector(".result");
    resultado.innerHTML = "";
    const p = criaParagrafo();

    if (isValid){
     p.classList.add("success"); 
    } else{
      p.classList.add("error")
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
  }
}

meuEscopo();
