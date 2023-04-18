function sum (numbers) {
  let total = numbers.reduce((ac, val) => {
    console.log(val.isNumber)
    ac+= Number(val)
    console.log(ac)
  }, 0)
  return total
};

sum([1, 5.2, 4, 0, -1])