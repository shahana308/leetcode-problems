// IS PRIME
function sieve(n) {
  let sieve = new Array(n).fill(1);
  sieve[0] = 0;
  sieve[1] = 0;
  let i = 2;
  while (i * i <= n) {
    if (sieve[i]) {
      k = i * i;
      while (k <= n) {
        console.log(k);
        sieve[k] = 0;
        k += i;
      }
    }
    i += 1;
  }
  let arr = [];
  for (let p = 4; p <= n; p++) {
    if (sieve[p]) {
      //   console.log(p);
      arr.push(p);
    }
  }
  return arr;
}
console.log(sieve(10));
