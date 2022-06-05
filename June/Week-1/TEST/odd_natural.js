//Write a program to display the n terms of odd natural number and their sum.

let sum =0;
let n = parseInt(prompt('Input number of terms is:'));
function oddNaturalNumbers() {
    for(i = 1; i<=n; i++) {
        sum+=2*i-1;
    }
    console.log(sum);

}
oddNaturalNumbers()





