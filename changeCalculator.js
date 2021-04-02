const calculateChange = function(total, cash) {
  let remainder = cash - total;
  let result = {};
  let changes = {
    'twentyDollar': 2000, 
    'tenDollar': 1000, 
    'fiveDollar': 500, 
    'twoDollar': 200, 
    'oneDollar': 100, 
    'quarter': 25, 
    'dime': 10, 
    'nickel': 5, 
    'penny': 1
  };
  for (const [key, value] of Object.entries(changes)) {
    if (remainder / value >= 1) {
      let times = Math.floor(remainder / value);
      remainder = remainder % value;
      result[key] = times;
    }
  }
  // verbose
  // let keys = Object.keys(changes);
  // let values = Object.values(changes);
  // for (let i = 0; i < keys.length; i++) {
  //   if (remainder / values[i] >= 1) {
  //     let times = Math.floor(remainder / values[i]);
  //     remainder = remainder % values[i];
  //     result[keys[i]] = times;
  //   }
  // }
  return result;
}

console.log(calculateChange(7500, 10000));
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));