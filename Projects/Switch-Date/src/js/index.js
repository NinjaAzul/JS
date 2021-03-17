function meuEscopo() {
  const date = document.querySelector(".date");
  const data = new Date();
  const dataBrasil = formataData(data);
  date.innerHTML = dataBrasil;

  //Recarrga a pagina a cada 1 sig
  
  setTimeout(function(){
    window.location.reload(1);
 }, 1000);


  function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }

  function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1); //0 - 11
    const ano = zeroEsquerda(data.getFullYear());
    const horas = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());
    const diaSemanaTexto = getDayOfWeek(data.getDay());
    const MesAnoTexto = getMonthText(data.getMonth());

    function getDayOfWeek(dayWeek) {
      //0 domingo - sabado 6
      const diaSemanaArray = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sabado",
        "Desculpe algo deu errado...",
      ];

      let WeekText = diaSemanaArray[dayWeek];

      return WeekText;

      // switch (dayWeek) {
      //   case 0:
      //     WeekText = diaSemanaArray[0];
      //     return WeekText;
      //   case 1:
      //     WeekText = diaSemanaArray[1];
      //     return WeekText;

      //   case 2:
      //     WeekText =  diaSemanaArray[2];
      //     return WeekText;

      //   case 3:
      //     WeekText = diaSemanaArray[3];
      //     return WeekText;

      //   case 4:
      //     WeekText = diaSemanaArray[4];
      //     return WeekText;

      //   case 5:
      //     WeekText = diaSemanaArray[5];
      //     return WeekText;

      //   case 6:
      //     WeekText = diaSemanaArray[6];
      //     return WeekText;

      //   default:
      //     WeekText = diaSemanaArray[7];
      // }
    }

    function getMonthText(monthY) {
      //0 - 11 Mês
      const monthArray = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "	Setembro",
        "	Outubro",
        "Novembro",
        "	Dezembro",
        "Desculpe algo deu errado...",
      ];
      let monthText = monthArray[monthY] ;

      return monthText;

      // switch (monthY) {
      //   case 0:
      //     monthText = monthArray[0];
      //     return monthText;
      //   case 1:
      //     monthText = monthArray[1];
      //     return monthText;

      //   case 2:
      //     monthText = monthArray[2];
      //     return monthText;

      //   case 3:
      //     monthText = monthArray[3];
      //     return monthText;

      //   case 4:
      //     monthText = monthArray[4];
      //     return monthText;

      //   case 5:
      //     monthText = monthArray[5];
      //     return monthText;

      //   case 6:
      //     monthText = monthArray[6];
      //     return monthText;

      //     case 7:
      //       monthText = monthArray[7];
      //       return monthText;
      //     case 8:
      //       monthText = monthArray[8];
      //       return monthText;
  
      //     case 9:
      //       monthText = monthArray[9];
      //       return monthText;
  
      //     case 10:
      //       monthText = monthArray[10];
      //       return monthText;
  
      //     case 11:
      //       monthText = monthArray[11];
      //       return monthText;
  
      //   default:
      //     monthText = monthArray[12];
      //     return monthText
      // }
    }

   
    return ` ${diaSemanaTexto}, ${dia} de ${MesAnoTexto} de ${ano} ${horas}:${minutos}:${segundos}`;
  }
}

meuEscopo();
