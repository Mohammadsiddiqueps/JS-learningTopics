  const sumOf = function () {
    let sum = 0;

    return function (element) {
      sum += element;

      return sum;
    }
  }

console.log([1, 2, 3, 4, 5].map(sumOf()));
