// write a function that takes up any number of args and adds them up

// ----- Old method -----
function add1() {
  const args = arguments;
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

// ----- New method (spread operator)-----
const add2 = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

console.log(add2(2, 3, 4, 2, 4, 4));
console.log(add2(1, 2));
