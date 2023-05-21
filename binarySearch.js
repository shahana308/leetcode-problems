var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    console.log(left, right);
    let mid = Math.floor((left + right) / 2);
    let midVal = nums[mid];
    if (midVal === target) {
      return mid;
    } else if (midVal > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
