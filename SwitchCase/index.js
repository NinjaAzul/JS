//Working With Swich Case

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
  let dayOfWeetText;

  switch (dayWeek) {
    case 0:
      dayOfWeetText = diaSemanaArray[0];
      return dayOfWeetText;
    case 1:
      dayOfWeetText = diaSemanaArray[1];
      return dayOfWeetText;

    case 2:
      diaSemanaArray[2];
      return dayOfWeetText;

    case 3:
      dayOfWeetText = diaSemanaArray[3];
      return dayOfWeetText;

    case 4:
      dayOfWeetText = diaSemanaArray[4];
      return dayOfWeetText;

    case 5:
      dayOfWeetText = diaSemanaArray[5];
      return dayOfWeetText;

    case 6:
      dayOfWeetText = diaSemanaArray[6];
      return dayOfWeetText;

    default:
      dayOfWeetText = diaSemanaArray[7];
  }
}


const data = new Date();
const diaSemana = data.getDay();

console.log(getDayOfWeek(diaSemana));
