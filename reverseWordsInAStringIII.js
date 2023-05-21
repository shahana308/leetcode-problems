//* https://leetcode.com/problems/reverse-words-in-a-string-iii/

// Given a string s, reverse the order of characters in each word within a sentence while
// still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const wordSwap = (words) => {
    let word = words.split("");
    let j = word.length - 1;
    for (let i = 0; i <= word.length / 2; i++) {
      if (i < j) {
        let temp = word[i];
        word[i] = word[j];
        word[j] = temp;
        j--;
      }
    }
    return word.join("");
  };
  return s
    .split(" ")
    .map((x) => wordSwap(x))
    .join(" ");
};
