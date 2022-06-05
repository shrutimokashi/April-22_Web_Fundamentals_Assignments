//Write a program to print Nth prime number

let n = parseInt(prompt('Enter the number:'));
const getNthPrime = (num) => {
  let count = 0;
  for (let i = 2; i < 1000; i++) {
    if (i % 2 !== 0) ++count;
    if (count === num) {
      return i;
    }
  }
}

console.log(getNthPrime(5));