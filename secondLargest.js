const secondLargest = (arr) => {
  arr.sort((a, b) => b - a);
  return arr[1];
};

console.log(secondLargest([2, 1, 4, 3, 4, 5, 7, 1, 2, 3, 4, 9, 5]));

//* The Compare Function
//? The purpose of the compare function is to define an alternative sort order.

//? The compare function should return a negative, zero, or positive value, depending on the arguments:

//? function(a, b){return a - b}
// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative a is sorted before b.

// If the result is positive b is sorted before a.

// If the result is 0 no changes are done with the sort order of the two values.
