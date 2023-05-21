var findDuplicates = function (nums) {
  const numbers = new Set();
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    if (!numbers.has(nums[i])) {
      numbers.add(nums[i]);
    } else {
      output.push(nums[i]);
    }
  }
  return output;
};
