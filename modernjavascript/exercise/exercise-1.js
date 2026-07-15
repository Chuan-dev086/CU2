// Q1
const numbers = [1, 2, 3, 4, 5];
const squareNumber = numbers.map((num) => num ** 2);
console.log(squareNumber);

//Q2
const greatNumber = numbers.filter((num) => num > 2);
console.log(greatNumber);

//Q3
numbers.forEach((numbers) => {
  console.log(numbers);
});

//Q4
// const numbers = [1, 2, 3, 4, 5, 6];

const numberDivisibleBy3 = numbers.find(num => num % 3 === 0);
console.log(numberDivisibleBy3);

//Q5

// const numbers = [1, 2, 3, 4, 5];

const chainFilterAndMap = numbers
.filter(num => num>2)
.map(num => num** 2) ;

console.log(chainFilterAndMap);
