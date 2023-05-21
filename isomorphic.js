var isIsomorphic = function (s, t) {
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map1.has(s[i])) {
      map1.set(s[i], t[i]);
    }
    if (!map2.has(t[i])) {
      map2.set(t[i], s[i]);
    }
    if (t[i] !== map1.get(s[i]) || s[i] !== map2.get(t[i])) {
      return false;
    }
  }
  return true;
};
