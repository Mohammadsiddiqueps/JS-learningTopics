const isVowel = function (char) {
  return "aeiou".includes(char.toLowerCase());
}

function countVowels(string) {
  const [...stringArray] = string;

  return stringArray.filter(isVowel).length;
}

function vowelCount(a, b) {
  return countVowels(a) - countVowels(b);
}

function sortOnVowelCount(array) {
  return array.sort(vowelCount);
}

const words = ["apple", "banana", "kiwi", "grape"];

console.log(sortOnVowelCount(words));
