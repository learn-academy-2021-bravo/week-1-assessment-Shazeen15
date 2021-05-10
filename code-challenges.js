// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35;
var temp2 = 350;
var temp3 = 212;

// const boilingPoint = (temp) => {
//   if (temp === 212) {
//     return `${temp} is at boiling point`;
//   } else if (temp > 212) {
//     return `${temp} is above boiling point`;
//   } else if (temp < 212) {
//     return `${temp} is below boiling point`;
//   } else {
//     return `${temp} not valid`;
//   }
// };

// console.log(boilingPoint(temp1));
// console.log(boilingPoint(temp2));
// console.log(boilingPoint(temp3));

// --------------------2) Create a function that takes in an array of numbers and returns an array with each number multiplied by 5.
// Use the test variable provided below. Expected output: [15, 35, 0, 30, -45]

// var myNumbers1 = [3, 7, 0, 6, -9];
// const multBy5 = (numarray) => {
//   let byFive = [];
//   for (let i = 0; i < numarray.length; i++) {
//     byFive.push(numarray[i] * 5);
//   }
//   return byFive;
// };

// console.log(multBy5(myNumbers1));

// --------------------3) Create a function that takes in an array of numbers and returns an array containing only the odd numbers.
// Use the test variable provided below. Expected output: [-7, 9, 13]

// var myNumbers2 = [8, -7, 0, 6, 2, 9, 13];
// const isOdd = (numarray) => {
//   let oddNums = [];
//   for (let i = 0; i < myNumbers2.length; i++) {
//     if (numarray[i] % 2 !== 0) {
//       oddNums.push(numarray[i]);
//     }
//   }
//   return oddNums;
// };
// console.log(isOdd(myNumbers2));

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent";
var stringWithVowels2 = "ILoveJavaScript";
// const vowels = ["a", "e", "i", "o", "u"];

// const noVowels = (str, array) => {
//   let lowerCaseStr = str.toLowerCase();
//   let noVow = "";
//   for (let i = 0; i < lowerCaseStr.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (lowerCaseStr[i] !== array[j]) {
//         // noVow += lowerCaseStr[i];
//         console.log(array[j]);
//       }
//     }
//   }
//   return noVow;
// };

const noVowels = (str) => {
  let lowerCaseStr = str.toLowerCase();
  let noVow = "";
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (
      lowerCaseStr[i] !== "a" &&
      lowerCaseStr[i] !== "e" &&
      lowerCaseStr[i] !== "i" &&
      lowerCaseStr[i] !== "o" &&
      lowerCaseStr[i] !== "u"
    ) {
      noVow += lowerCaseStr[i];
    }
  }
  return noVow;
};
// console.log(noVowels(stringWithVowels1));
// console.log(noVowels(stringWithVowels1, vowels));

// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user if the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"
// Hint: There is an operator in JavaScript called typeof :)

var refactorTester1 = true;
var refactorTester2 = 42;
var refactorTester3 = "IAmACodingMaster";
// console.log(typeof refactorTester3);

const noVows2 = (str) => {
  let lowerStr = typeof str === "string" ? str.toLowerCase() : str;
  let noVow = "";
  if (typeof lowerStr === "string") {
    for (let i = 0; i < lowerStr.length; i++) {
      // let loweCaseStr = str[i].toLowerCase();
      let loweCaseStr = lowerStr[i];
      if (
        loweCaseStr !== "a" &&
        loweCaseStr !== "e" &&
        loweCaseStr !== "i" &&
        loweCaseStr !== "o" &&
        loweCaseStr !== "u"
      ) {
        noVow += loweCaseStr;
      }
    }
  } else {
    return `${str} is not a string`;
  }

  return noVow;
};
console.log(noVows2(refactorTester3));
console.log(noVows2(refactorTester1));
