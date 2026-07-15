// Exercise 2

const books = [
  { title: "The Great Gatsby", Author: "F.Scott Fitzgerald", ratings: 5 },
  { title: "To Kill a Mocking Bird", Author: "Harper.Lee", ratings: 4.5 },
  { title: "1984", Author: "George Orwell", ratings: 4.7 },
  { title: "The Catcher In The Rye", Author: "J.D.Salinger", ratings: 4 },
  { title: "Moby Dick", Author: "Herman Melville", ratings: 3.5 },
];
//Q1
const bookRateFour = books.filter((books) => books.ratings > 4);

console.log(bookRateFour);

//Q2
const booksTitle = books.map((books) => books.title);

console.log(booksTitle);

//Q3
const books1984 = books.find((books) => books.title == 1984);
console.log(books1984);

//Q4
const descendingSortedBooks = books.sort(
  (low, high) => high.ratings - low.ratings,
);
console.log(descendingSortedBooks);

//Q5
const highRateBooks = books
  .sort((low, high) => high.ratings - low.ratings)
  .map((books) => books.title);

console.log(highRateBooks[0]);
