const urlEncode = function(text) {
  let trimmed = text.trim();
  let result = '';
  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i] === ' ') {
      result += '%20';
    } else {
      result += trimmed[i];
    }
  }
  return result;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode('I know about this   kind of thing'));