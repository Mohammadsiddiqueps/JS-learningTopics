// function oddSort(array) {
//   return array.sort(function (a, b) {
//     if (a % 2 !== b % 2) {
//       return a % 2 === 0 ? 1 : -1;
//     }

//     return b - a;
//   });
// }

// console.log(oddSort([10, 3, 8, 7, 2, 6]));


console.log([1, -2, 2, -1].sort(function (a, b) {
  if (Math.abs(a) === Math.abs(b)) {
    return a - b;
  }
  return Math.abs(b) - Math.abs(a);
}))