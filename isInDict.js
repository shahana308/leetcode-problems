class Dictionary {
  constructor(wordsArray) {
    const wordMap = wordsArray.reduce((a, word) => {
      a[word] = true;
      word.split("").forEach((element, i) => {
        let start = word.slice(0, i);
        let end = word.slice(i + 1);
        let partialWord = `${start}*${end}`;

        a[partialWord] = true;
      });

      return a;
    }, {});
    console.log(wordMap);
    this.dict = wordMap;
  }

  isInDict(word) {
    return !!this.dict[word];
  }
}

const test = new Dictionary(["cat", "bat", "don", "car"]);

console.log(test.isInDict("c*r")); // true
console.log(test.isInDict("ba*")); // true
console.log(test.isInDict("bat")); // true
console.log(test.isInDict("g*w")); // false

// ['cat', 'bat', 'don', 'c*r']
