//* https://leetcode.com/problems/merge-intervals/submissions/

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]); //sort interval base on the start

  // we take the first item of the sorted intervals as part of the result
  let result = [intervals[0]];

  let index = 0; // result index

  // i start at 1 because we pushed sorted intervals[0] to result already
  for (let i = 1; i < intervals.length; i++) {
    // if the start of the intervals[i] is smaller than the last digit of the last item in result
    // we know there is an overlap
    if (intervals[i][0] <= result[index][1]) {
      // update the last digit of the last item in result
      result[index][1] = Math.max(intervals[i][1], result[index][1]);
      // result[index][1] = (result[index][1]);
    } else {
      //if no overlap, push intervals[i] to result, update result index
      result.push(intervals[i]);
      index++;
    }
  }
  return result;
};
