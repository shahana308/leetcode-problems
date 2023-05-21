var twoSum = function (nums, target) {
  const map = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] in map) {
      return [map[nums[i]], i];
    }
    map[target - nums[i]] = i;
    // console.log(map);
  }
};
