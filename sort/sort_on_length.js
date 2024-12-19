function getAlphaOrder(string1, string2) {
  if (string1 > string2) {
    return 1;
  }
  if (string1 < string2) {
    return -1;
  }
  return 0;
}

function getOrder(string1, string2) {
  if (string1.length  === string2.length) {
    return getAlphaOrder(string1, string2);
  }

  return string1.length - string2.length;
}

function orderOnLength(array){
  return array.sort(getOrder);
}

const words = ["AAAAA","apple", "banana", "kiwi","aaaaa", "cherry", "grape"];

console.log(orderOnLength(words));