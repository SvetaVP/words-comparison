"use strict";

const row = "ТорТ,проГресс МИр!МамА,РАма.Мир,Торт?СветА&КонФета";
const separators = [".", ",", " ", "!", "&", "?"];
const words = split(row, separators);
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
