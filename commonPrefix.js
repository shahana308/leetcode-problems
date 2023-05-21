const commonPrefix = (arr) => {
  let prefix = "";
  if (arr.length === 0) return prefix;
  for (let i = 0; i < arr[0].length; i++) {
    let character = arr[0][i];
    for (let j = 0; j < arr.length; j++) {
      if (character !== arr[j][i]) {
        return prefix;
        // console.log(arr[i][j], arr[i + 1][j]);
      }
    }
    prefix += character;
  }
  return prefix;
};

console.log(commonPrefix(["flower", "flow", "flight"]));
