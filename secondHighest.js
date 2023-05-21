/** @format */

var secondHighest = function (s) {
  const max2 = [...new Set(s.replace(/[^0-9]/g, "").split(""))].sort(
    (a, b) => b - a
  );
  return max2.length < 2 ? -1 : max2[1];
};
