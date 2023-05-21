const reducer = (array) => {
  const result = array.reduce((a, word) => {
    a[word] = word;
    return a;
  }, {});
  return result;
};

console.log(reducer(["John", "Doe", "Mary"]));
