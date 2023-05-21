const arrayOfObjects = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if ("name" in arr[i]) {
      result.push(arr[i].name);
    }
  }

  return result;
};

console.log(
  arrayOfObjects([
    {
      name: "John",
    },
    {
      a: 2,
    },
    {
      name: "Doe",
    },
  ])
);
