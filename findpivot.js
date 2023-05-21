const pivotIndex = (nums) => {
  let rightCount = 0;
  let leftCount = 0;
  nums.forEach((d) => (rightCount += d));
  for (let i = 0; i < nums.length; i++) {
    rightCount -= nums[i];
    if (leftCount === rightCount) {
      return i;
    }
    leftCount += nums[i];
  }
  return -1;
};
