function main(array) {
  let maxRes = 0;
  let maxSum = 0;
  for (let i = 0; i < array.length; i++) {
    let vision = visionCount(array, i);
    if (vision > maxSum) {
      maxSum = vision;
      maxRes = array[i] === 1 ? 1 : 0;
    }
  }
  console.log(maxRes);
  console.log(maxSum);
}

function visionCount(array, index) {
  let number = array[index];
  let leftcounter = index;
  let rightcounter = index;
  let counter = 1;
  let sum = 0;

  while (counter <= number && leftcounter > 0) {
    sum = sum + array[--leftcounter];
    counter++;
  }

  counter = 1;
  while (counter <= number && rightcounter < array.length - 1) {
    sum = sum + array[++rightcounter];
    counter++;
  }

  return sum;
}

main([3, 4, 9, 1, 5]);
