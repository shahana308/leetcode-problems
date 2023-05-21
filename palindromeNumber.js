var isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = parseInt(x / 10);
    console.log(`x = ${x}`);
    console.log(`revertedNumber = ${revertedNumber}`);
  }
  return x == revertedNumber || x == parseInt(revertedNumber / 10);
};
