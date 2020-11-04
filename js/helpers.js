function split(string) {
  const words = [];
  let wordIndex = 0;

  for (const letter of string) {
    if (letter === " " || letter === ",") {
      // this is not last version, I think how to make better
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
