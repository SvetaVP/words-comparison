"use strict";

const row = "ТорТ проГресс МИр МамА РАма Мир Торт СветА КонФета";
const words = split(row, " ");
console.log(getUniqueWords(words));

function getUniqueWords(words) {
  const uniqueWords = [];

  for (const word of words) {
    const lowerCaseWords = map(uniqueWords, (uniqueWord) =>
      uniqueWord.toLowerCase()
    );

    if (!includes(lowerCaseWords, word.toLowerCase())) {
      uniqueWords.push(word);
    }
  }

  return uniqueWords;
}

function split(string, separator) {
  const words = [];
  let wordIndex = 0;

  for (const letter of string) {
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

function map(items, action) {
  const result = [];

  for (const item of items) {
    const iterationResult = action(item);
    result.push(iterationResult);
  }

  return result;
}

function includes(object, item) {
  var index = object.length;
  while (index--) {
    if (object[index] === item) {
      return true;
    }
  }
  return false;
}
