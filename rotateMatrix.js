//* https://leetcode.com/problems/rotate-image/

var rotate = function (matrix) {
  matrix.reverse();
  console.log(matrix);

  console.log(matrix[1][0]);

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      // console.log((JSON.stringify(matrix)).split("],[").join("]\n[")); //helps to visualize matrix in console
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
};
