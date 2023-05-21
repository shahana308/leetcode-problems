const simpleSymbols = (str) => {
  if (/[a-z]/.test(str[0] || /[a-z]/.test(str[str.length - 1]))) return false;
  let arr = str.split("");
  for (let i = 0; i <= arr.length - 2; i++) {
    if (/[a-z]/.test(arr[i + 1])) {
      if (arr[i] === "+" && arr[i + 2] === "+") {
        continue;
      } else {
        console.log(arr[i] + arr[i + 1] + arr[i + 2]);
        return false;
      }
    }
  }
  return true;
};
console.log(simpleSymbols("f++d+"));
