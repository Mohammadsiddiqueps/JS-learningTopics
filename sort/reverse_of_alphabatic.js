function reverseAlphabetic(string1, string2) {
  return string1 > string2 ? -1 : 1;
}

function sortReverse(array) {
  return array.sort(reverseAlphabetic);
}

const words = ["banana", "apple", "apple", "grape", "kiwi"];

console.log(sortReverse(words));
