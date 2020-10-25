"use strict";

const row = "ТорТ проГресс МамА РАма Мир Торт СветА КонФета";

const lowerCaseString = row.toLowerCase();

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

console.log(split(lowerCaseString, " "));
