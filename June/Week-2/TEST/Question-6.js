
//Find the nth largest element in a sorted array 

let arr = [11, 55, 30, 12, 0, 87, 23, 100, 39, 96, 41];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);