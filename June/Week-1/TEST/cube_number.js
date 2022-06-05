//Write a program to display the cube of the number upto given an integer.

let n = parseInt(prompt('Enter the number:'))
function cubeOfNumbers() {
    for (let i = 1; i <= 5; i++) {
      let result = i * i * i;
      console.log(result);
    }
  }

  cubeOfNumbers(6);
