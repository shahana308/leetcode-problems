var addBinary = function (a, b) {
  const decimalOfA = `0b${a}`;
  const decimalOfB = `0b${b}`;

  const sum = BigInt(decimalOfA) + BigInt(decimalOfB);
  return sum.toString(2);
};
