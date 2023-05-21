function QuestionsMarks(str) {
  var string = str.match(/[0-9]|[?]/gi).join("");
  // console.log(string)
  var array = string.match(/[0-9]|[?]{1,}/gi);
  // console.log(array)
  let count = 0;
  for (var i = 0; i < array.length - 1; i++) {
    if (parseInt(array[i]) + parseInt(array[i + 2]) === 10) {
      if (array[i + 1].includes("?") && array[i + 1].length === 3) {
        continue;
      }
      return false;
    }
  }
  return true;
}

// keep this function call here
console.log(QuestionsMarks(readline()));

// NOT FULLY DONE
