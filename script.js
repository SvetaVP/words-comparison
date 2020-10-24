'use strict';

const row = 'ТорТ,проГресс,МамА,РАма,Мир,Торт,СветА,КонФета';

function split (string, separator) {
    const lowerCaseString = string.toLowerCase();
    const words = [];
    let wordIndex = 0;

    for (let i = 0; i < lowerCaseString.length; i++) {
        let letter = lowerCaseString[i];
    
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

console.log(split (row, ','));