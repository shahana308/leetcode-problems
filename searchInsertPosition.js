var searchInsert = function (nums, target) {
  let j = nums.length - 1;
  let indexIncrement = 0;
  let index = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === target) {
      indexIncrement = i;
      break;
    }
    if (nums[j] === target) {
      indexIncrement = j;
      break;
    }
    j--;
    if (target > nums[i]) {
      index++;
    }
  }
  return indexIncrement === 0 ? index : indexIncrement;
};
