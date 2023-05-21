/***************************************************************************************
 *                                                                                      *
 *                  CODERBYTE BEGINNER CHALLENGE                                        *
 *                                                                                      *
 *  Vowel Count                                                                         *
 *  Using the JavaScript language, have the function VowelCount(str) take the str       *
 *  string parameter being passed and return the number of vowels the string contains   *
 *  (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this       *
 *  challenge.                                                                          *
 *                                                                                      *
 *  SOLUTION                                                                            *
 *  I will be using two for loops that will be nested. I will be searching thru all     *
 *  entries in my vowel array in the outter loop and searching through each letter      *
 *  in the string in the inner loop. I will be comparing each vowel to every letter     *
 *  in the string. If it matches then I will be incrememting by total by 1.
 *                                                                                      *
 *  Steps for solution                                                                  *
 *    1) create my vowel arrray.                                                        *
 *    2) Initialize tot to zero.                                                        *
 *    3) Loop through each vowel and compare to each letter in string                   *
 *    4) If match then increment tot by 1                                               *
 *    5) Return tot as answer                                                           *
 *                                                                                      *
 ***************************************************************************************/
function VowelCount(str) {
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[aieou]/.test(str[i].toLowerCase())) {
      vowelCount++;
    }
  }
  return vowelCount;
}
console.log(VowelCount("All cows eat grass"));
