function cycle(array) {
  let index = -1;

  return function (element) {
    index++;

    if (index === array.length) {
      index = 0;
    }

    return [element, array[index]];
  }
}

const breakFastMenu = ["idly", "Aalu Porotta", "Masala dosa", "Poori"];
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "friday"];

const breakFast = cycle(breakFastMenu);
const mappedFood = weekDays.map(breakFast);

console.table(mappedFood, ["days", "food"]);

