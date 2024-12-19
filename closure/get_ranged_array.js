function getLimit(limit) {
  return function (number) {
    return number <= limit;
  }
}

function incrementOp(fun) {
  return function (number) {
    return fun(number);
  }
}

function square(number) {
  return (number * number);
}

function Add2(number) {
  return number + 2;
}

function getRangedArray(limit, operation, inc) {
  let index = 1;

  const rangeArray = [];
  const limit1000 = getLimit(limit);
  const increment = incrementOp(inc)

  while (limit1000(index)) {
    rangeArray.push(operation(index));
    index = increment(index);
  }

  return rangeArray;
}

console.log(getRangedArray(100, square, Add2));