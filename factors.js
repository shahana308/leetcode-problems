function get_factors(n) {
  let factors = new Array(n).fill(0);
  let i = 2;

  while (i * i <= n) {
    if (factors[i] == 0) {
      let k = i * i;
      while (k <= n) {
        if (factors[k] == 0) {
          factors[k] = i;
          k += i;
        }
      }
    }

    i += 1;
  }
  return factors;
}
console.log(get_factors(100));
