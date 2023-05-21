var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  console.log(s);
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man nam a"));
