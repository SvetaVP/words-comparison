"use strict";

const row = 'ТорТ проГресс МамА РАма Мир Торт СветА КонФета';

const lowerCaseRow = row.toLowerCase();

const words = [];

let word = 0;

for ( let i = 0; i < lowerCaseRow.length; i++) {
    let letter = lowerCaseRow[i];

    if (letter == ' ') {
        word++;
        continue;
    } else {
        words[word] ? words[word] += letter : words[word] = letter;
    }
}

console.log(words);