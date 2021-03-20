const fizzBuzz = (num1) => {
  const div3 = num1 % 3;
  const div5 = num1 % 5;

  if (typeof num1 !== "number") return num1;

  if (div3 === 0 && div5 === 0) return "FizzBuzz";

  if (div3 === 0) return "Fizz";

  if (div5 === 0) return "Buzz";

  return num1;
};

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}

console.log(fizzBuzz("Erick"));
