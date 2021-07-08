var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const doubleNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(doubleNumbers);

//Filter - Create a new array by keeping the items that return true.

const newNumbers = numbers.filter(function (num) {
  return num > 10;
});

console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

const NewReduce = numbers.reduce(function (accumulator, currentNumber) {
  return (accumulator += currentNumber);
});
console.log(NewReduce);

//Find - find the first item that matches from an array.

const findNumber = numbers.find(function (n) {
  return n > 10;
});
console.log(findNumber);

//FindIndex - find the index of the first item that matches.

const finIndexNumber = numbers.findIndex(function (i) {
  return i === 2;
});
console.log(finIndexNumber);

import emojipedia from "./emojipedia";

const findstring = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(findstring);

// fat arrow function

const fatnum = numbers.map((x) => {
  return x * x;
});

console.log(fatnum);

//or short version

const fatnumshort = numbers.map((x) => x * x);
console.log(fatnumshort);
