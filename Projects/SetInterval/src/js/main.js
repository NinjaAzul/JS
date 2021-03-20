function meuRelogio() {
  function getHourWithSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      timeZone: "UTC",
    });
  }

  const timer = document.querySelector(".timer");

  let segundos = 0;
  let relogio;

  function iniciRelogio() {
    relogio = setInterval(function () {
      segundos++;
      timer.innerHTML = getHourWithSeconds(segundos);
    }, 1000);
  }

  timer.classList.add("pausado");

  document.addEventListener("click", function (e) {
    const el = e.target;
    if (el.classList.contains("iniciar")) {
      timer.classList.remove("pausado");
      clearInterval(relogio);
      iniciRelogio();
    }

    if (el.classList.contains("pausar")) {
      timer.classList.add("pausado");
      clearInterval(relogio);
    }

    if (el.classList.contains("zerar")) {
      timer.classList.add("pausado");
      clearInterval(relogio);
      timer.innerHTML = "00:00:00";
      segundos = 0;
    }
  });
}

meuRelogio();
