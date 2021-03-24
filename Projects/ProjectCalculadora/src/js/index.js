// Working Factory Functions

function createCalculator() {

  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),
    btnDel: document.querySelector(".btn-del"),

    start() {
      this.clickButton();
      this.pressKey();
    },

    //Botoes clicados no Teclado
    pressKey() {
      document.addEventListener("keyup", (e) => {

        if (e.key === "Enter") this.Makeaccount();
      });
    },
    //Botoes clicados no FrontEnd
    clickButton() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        //console.log(el);

        if (el.classList.contains("btn-num"))
          this.buttonForDisplay(el.innerText);

        if (el.classList.contains("btn-clear")) this.clearDisplay();

        if (el.classList.contains("btn-del")) this.deleteText();

        if (el.classList.contains("btn-eq")) this.Makeaccount();
      });
    },
    deleteText() {
      this.display.value = this.display.value.slice(0, -1);
    },
    buttonForDisplay(valueInnerText) {
      this.display.value += valueInnerText;
    },
    clearDisplay() {
      this.display.value = "";
    },
    Makeaccount() {
      let count = this.display.value;

      try {
        count = eval(count);
        this.display.focus();
        if (!count) {
          alert("Conta Invalida");
          this.display.focus();
          return;
        }

        this.display.value = String(count);
      } catch (e) {
        alert("Conta Invalida");
        this.display.focus();
      }
    },
  };
}

const Calculator = createCalculator();
Calculator.start();
