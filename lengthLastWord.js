var lengthOfLastWord = function (s) {
  var lastWord = s.trim().split(" ").slice(-1);
  //* split() method splits strings into a new array
  //* slice gives a new array
  console.log(lastWord);
  return lastWord[0].length;
};
