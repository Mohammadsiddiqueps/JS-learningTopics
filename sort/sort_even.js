function sortValue(num1, num2) {
  if (num1 % 2 === num2 % 2) {
    return num1 - num2;
  }

  return num1 % 2 === 0 ? -1 : 1;
}

function sortOnEven(array) {
  return array.sort(sortValue);
}
  
console.log(sortOnEven([3, 2, 4, 1, 5, 6])); // [2, 4, 6, 1, 3, 5]
console.log(sortOnEven([])); // []
console.log(sortOnEven([2, 4, 6, 8])); // [2, 4, 6, 8]
console.log(sortOnEven([1, 3, 5, 7])); // [1, 3, 5, 7]
console.log(sortOnEven([2, 1, 3, 4])); // [2, 4, 1, 3]
