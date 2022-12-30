"use strict";

// EX1
// Create a two-dimensional array called matrix with at least three rows and three columns. Each element in the array should be a number.
// Write a function, sumOfColumns, that takes in a two-dimensional array and returns an array containing the sum of the values in each column of the input array.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//whats is the length of 2D array?
//it's the length of the outer array.
//for example:
// const matrix2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [7, 8, 9],
// ];
// matrix2.length = 4

// let a = [[1,2],[3,4],[6,7,8,9],[7],[1,2]]
// a.length = 5

// function sumOfColumns(arr) {
//   let columns = [];
//   console.log(arr);
//   // for columns
//   for (let i = 0; i < 3; i++) {
//     let sum = 0;
//     // (i=0)
//     // console.log(arr[0]) (i=0)
//     console.log(arr[0][0]); // arr[i=0][i=0]
//     console.log(arr[1][1]);
//     console.log(arr[2][2]);
//     // for rows
//     for (let j = 0; j < 3; j++) {
//       //   console.log(arr[j]);
//       // for (let j = 0; j < arr[i].length; j++) {
//       // arr[0] (i=0) => [1, 2, 3]
//       // [1, 2, 3].length = 3
//       // (j=0)
//       //   arr[j]:
//       // arr[0] = [1,2,3] // j=0
//       // arr[0][0] = 1 // j = 0, i = 0
//       sum += arr[j][i];
//       // (i = 0)
//       // sum = 0
//       // sum += arr[0,0] => 1 (#1)
//       // sum += arr[1,0] => 1 + 4 = 5 (#2)
//       // sum += arr[2,0] => 5 + 7 = 12 (#3)
//       // (i = 1)
//       // sum = 0

//       //  console.log(arr[j], `arr[${j}]`);
//       //   console.log(i + " i", j + " j");
//       //   console.log(arr[j][i], `arr[${j}][${i}]`);
//       sum += arr[j][i];
//       // (i=0, j=0): sum = 1
//     }
//     columns[i] = sum;
//     //Or we could use columns.push(sum)
//   }
//   return columns;
// }

// const columnSums = sumOfColumns(matrix);
// const columnSums = sumOfColumns([
//   [1, 2, 3],
//   [1, 2, 3],
// ]);
// console.log(columnSums);
// should print [12, 15, 18]
// // 1+ 4 + 7 = 12
// //2 + 5 + 8 = 15
// //3 + 6 + 9 = 18

// // EX4
// // The supplied array will contain both numeric and non-numeric characters. Return a new array where all numeric values are positioned at the beginning of the array, in ascending order. The non-numeric values must come after these, also ordered appropriately.
// function sortTheArray(array) {
//   console.log(array);
//   let temp = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = array.length - 1; j > i; j--) {
//       // (i = 0) (j = 5)
//       // (i = 0) (j = 4)
//       if (typeof array[i] == typeof array[j] && array[i] > array[j]) {
//         // (array[i] = 7 , array[j] = 2)
//         temp = array[i]; // temp = 7
//         array[i] = array[j]; // array[i] => 2 : array[i] = 2
//         array[j] = temp; // array[j] => 7 : array[i] = 7
//         console.log("normal swap");
//         console.log(array);
//       } else if (typeof array[i] == "string" && typeof array[j] == "number") {
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//         console.log("string swap");
//       }
//     }
//   }
//   return array;
// }
// console.log(sortTheArray(["a", "n", 5, 4, "b", 6, "a", "q", 7, 2]));

// EX5

// Imagine the supplied array is like a pack of cards. Write a function to shuffle this array into a completely new and entirely random order, much like shuffling a pack of cards.
// function shuffle(array) {
//   let temp;
//   for (i = 0; i < array.length; i++) {
//     for (j = array.length - 1; j >= 0; j--) {
//       if (array[i] * Math.random() > array[j] * Math.random()) {
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   return array;
// }
// console.log(shuffle([10, 12, 15, 1, 8, 900, 878]));

function shuffle(arr = []) {
  let newArr = [];
  let n = 0;
  console.log(arr);
  // random will be random index in the array
  let random = Math.floor(Math.random() * arr.length);
  while (arr.length > 0) {
    // random = 1 (index 1 in arr)
    console.log(random, "random");
    // newArr[n] = arr.splice(random, 2).pop(); //[2].pop() => 2
    // Or:
    // deletedValues = arr.splice(random, 1)[0]; // [2][0] = 2
    // Or:
    deletedValues = arr.splice(random, 1); // [2]
    newArr[n] = deletedValues[0]; // 2
    // console.log(arr, "arr");
    // newArr[n] = arr.splice(random, 1).pop();
    // שולפים את איבר במיקום 1 מהמערך המקורי
    // ומוחקים אותו
    random = Math.floor(Math.random() * arr.length);
    n++;
  }
  return newArr;
}
console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));
