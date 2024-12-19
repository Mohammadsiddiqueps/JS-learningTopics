const decrement = function (a) {
  return a - 1;
}

const increment = function (a) {
  return a + 1;
}

const resetCounter = function (a) {
  return 0;
}

const counter = function () {
  let count = 0;

  return function (f) {
    count = f(count);

    return count;
  }
}
