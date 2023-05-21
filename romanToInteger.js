const romanToInteger = (s) => {
  let result = 0;
  let mapper = new Map();

  mapper.set("I", 1);
  mapper.set("V", 5);
  mapper.set("X", 10);
  mapper.set("L", 50);
  mapper.set("C", 100);
  mapper.set("D", 500);
  mapper.set("M", 1000);

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i + 1] && mapper.get(s[i + 1]) > mapper.get(s[i])) {
      result -= mapper.get(s[i]);
      continue;
    }
    result += mapper.get(s[i]);
  }
  return result;
};

console.log(romanToInteger("IV"));
