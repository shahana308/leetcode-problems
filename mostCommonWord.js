var mostCommonWord = function (paragraph, banned) {
  const array = paragraph
    .replace(/[.?,\/#!'$%\^&\*;:{}=\-_`~()]/g, "       ")
    .toLowerCase()
    .split(" ")
    .filter(function (item) {
      if (!banned.includes(item)) return item;
    });
  const aCount = new Map(
    [...new Set(array)].map((x) => [x, array.filter((y) => y === x).length])
  );

  let max = 0;
  let maxKey = "";
  for (const [key, value] of aCount.entries()) {
    if (max < value) {
      max = value;
      maxKey = key;
    }
  }

  console.log(max, maxKey);
  return maxKey;
};
