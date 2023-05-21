const letterCapitalise = (str) => {
  let arr = str.split(" ");
  let output = arr.map((item) => item[0].toUpperCase() + item.slice(1));
  console.log(output.join(" "));
};

letterCapitalise("At the top of Burj Khalifa");
