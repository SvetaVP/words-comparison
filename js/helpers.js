function split(string, dividers) {
  const words = [];
  let wordIndex = 0;

  for (const letter of string) {
    if (includes(dividers, letter)) {
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

function includes(items, unit) {
  for (const item of items) {
    if (item === unit) {
      return true;
    }
  }

  return false;
}
