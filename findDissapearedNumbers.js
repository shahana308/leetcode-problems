var findDisappearedNumbers = function (nums) {
  const output = [];
  for (let i = 1; i <= nums.length; i++) {
    if (nums.includes(i)) {
      continue;
    }
    output.push(i);
  }
  return output;
};
