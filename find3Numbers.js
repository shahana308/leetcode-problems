// Javascript program to find a sorted
// sub-sequence of size 3

// A function to find a sorted
// sub-sequence of size 3
function find3Numbers(a) {
  let ans = [];
  let n = a.length;

  let p, q, r;

  // Iterating for the first element of the subsequence.
  for (let i = 0; i < n; i++) {
    p = a[i];

    // Iterating for the second element of the subsequence.
    for (let j = i + 1; j < n; j++) {
      q = a[j];

      if (p < q) {
        // Iterating for the third element of the subsequence.
        for (let k = j + 1; k < n; k++) {
          r = a[k];
          if (q < r) {
            ans[0] = p;
            ans[1] = q;
            ans[2] = r;
            console.log(ans);
          }
        }
      }
    }
  }
}

let arr = [12, 11, 10, 5, 6, 2, 30];
find3Numbers(arr);

// This code is contributed by avanitrachhadiya2155
