const urlDecode = function(text) {
  let result = {};
  let stringArray = text.split('&');
  for (let string of stringArray) {
    objectString = string.split('=');
    result[objectString[0]] = objectString[1].replace(/%20/g, ' '); 
  }
  return result;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
console.log(urlDecode("math=3b1b&episode=covid%20modelling"));
