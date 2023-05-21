// https://www.youtube.com/watch?v=lo8n0ivbhog

/**
 * @param {string} s
 * @return {string}
 */

/*
   even number of palinrome
   a  b  b  a
   ^ 
            ^   
   odd number of palinrome
   a  b  a
         ^ 
   ^ 
*/
var longestPalindrome = function (s) {
  if (s.length < 1 || s === null) return "";
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let oddPalindromicString = expandFromCenter(s, i, i);
    let evenPalindromicString = expandFromCenter(s, i - 1, i);
    console.log(i + " " + "even" + " " + evenPalindromicString);
    console.log(i + " " + "odd" + " " + oddPalindromicString);

    if (oddPalindromicString.length > longest.length) {
      longest = oddPalindromicString;
    }
    if (evenPalindromicString.length > longest.length) {
      longest = evenPalindromicString;
    }
  }
  return longest;
};
var expandFromCenter = (s, left, right) => {
  let i = 0;
  while (s[left - i] && s[left - i] === s[right + i]) {
    i++;
  }
  i--;
  return s.slice(left - i, right + i + 1);
};
