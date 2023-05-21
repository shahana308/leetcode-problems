var isHappy = function (n) {
  let counter = 0;
  const inner = () => {
    n = n
      .toString()
      .split("")
      .reduce((a, b) => a + b * b, 0);
    console.log("N " + n);
    if (n != 1 && counter < 20) {
      console.log("counter " + counter);
      counter++;
      inner(n);
    }
    if (counter === 20) return false;
    return true;
  };
  return inner();
};
