/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  let leftSum = 0;
  let rightSum = 0;
  let answer = [];
  nums.forEach((d) => (rightSum += d));
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    let sum = Math.abs(rightSum - leftSum);
    answer.push(sum);
    leftSum += nums[i];
  }
  return answer;
};
