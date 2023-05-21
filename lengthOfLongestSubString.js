var lengthOfLongestSubstring = function (s) {
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    arrayAdd = [];
    for (var j = i; j < s.length; j++) {
      if (!arrayAdd.includes(s[j])) {
        arrayAdd.push(s[j]);
      } else {
        break;
      }
    }
    length = Math.max(length, arrayAdd.length);
  }
  return length;
};
