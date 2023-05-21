const stringIncludes = (string, word) => {
  return string.toLowerCase().includes(word.toLowerCase());
};

console.log(stringIncludes("i drove to New York with my friend", "new"));
