var maxSubArray = function (nums) {
  let sum = 0;
  let max = nums[0];
  for (let i = 0; i <= nums.length - 1; i++) {
    sum += nums[i];
    max = Math.max(sum, max);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
