const letterChanges = (str) => {
  let output = "";
  let vowels = "aeiou";
  for (let index = 0; index < str.length; index++) {
    // console.log(str[index]);
    if (str[index] === "z") {
      output += "a";
      console.log(str[index]);
    } else {
      if (vowels.includes(String.fromCharCode(str.charCodeAt(index) + 1))) {
        output += String.fromCharCode(str.charCodeAt(index) + 1).toUpperCase();
      } else {
        output += String.fromCharCode(str.charCodeAt(index) + 1);
      }
    }
  }
  return output;
};
console.log(letterChanges("abcdefghijklmnoz"));

// function LetterChanges(str) {

//     return str
//       .replace(/[a-zA-Z]/g, (x) =>  String.fromCharCode(x.charCodeAt(0)+1))
//       .replace(/[aeiou]/g, (v) => v.toUpperCase());
//   }
