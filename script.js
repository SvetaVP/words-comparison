"use strict";

const row = "ТорТ проГресс МИр МамА РАма Мир Торт СветА КонФета";
const lowerCaseString = row.toLowerCase();
const wordArray = split(lowerCaseString, " ");

function unique(array) {
  const uniqueWords = [];

  for (let item of array) {
    if (!uniqueWords.includes(item)) {
      uniqueWords.push(item);
    }
  }

  return uniqueWords;
}

function split(string, separator) {
  const words = [];
  let wordIndex = 0;

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    if (letter === separator) {
      wordIndex++;
      continue;
    }

    if (words[wordIndex]) {
      words[wordIndex] = words[wordIndex] + letter;
    } else {
      words[wordIndex] = letter;
    }
  }

  return words;
}

console.log(unique(wordArray));

// this is not the latest version, I am still thinking how to optimize it
