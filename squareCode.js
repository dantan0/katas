const squareCode = function(message) {
  let trimmedMessage = message.replace(/ /g, '');
  let messageLength = trimmedMessage.length;
  let columnNumber = Math.ceil(Math.sqrt(messageLength));
  let rowNumber = Math.ceil(messageLength / columnNumber);
  let result = '';
  for (let i = 0; i < columnNumber; i++) {
    let temp = '';
    for (let j = 0; j < rowNumber; j++) {
      if (trimmedMessage[i+j*columnNumber]) {
        temp += trimmedMessage[i+j*columnNumber];
      }
    }
    result += temp + ' ';
  }
  return result;
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));