const validParanthesis = (s) => {
  const map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else if (map.get(stack.pop()) !== s[i]) {
      return false;
    }
  }
  return stack.length === 0 ? true : false;
};

console.log(validParanthesis("[]{}()"));
