const makeCase = function(input, format) {
  if (Array.isArray(format)) {
    for (let style of format) {
      input = applyStyle(input, style);
    }
  } else {
    input = applyStyle(input, format)
  }
  return input;
}

const upperLower = function(input, format) {
  let splittedString = input.split(' ');
  let result = '';
  for(let string of splittedString) {
    if (format === 'upper') {
      result += string.toUpperCase();
    } else {
      result += string.toLowerCase();
    }
    result += ' '
  }
  return result.trim();
}

console.log('upper: ' + upperLower('this is a string', 'upper'));
console.log('lower: ' + upperLower('THIS IS a string', 'lower'));

const vowelConsonant = function(input, format) {
  let splittedString = input.split(' ');
  let result = '';
  for (let string of splittedString) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      let letter = string[i];
      if (format === 'vowel') {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
          newString += letter.toUpperCase();
        } else {
          newString += letter;
        }
      } else {
        // consonant
        if (letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u') {
          newString += letter.toUpperCase();
        } else {
          newString += letter;
        }
      }
    }
    result += newString + ' ';
  }
  return result.trim();
}

console.log('vowel: ' +vowelConsonant('this is a string', 'vowel'));
console.log('consonant: ' + vowelConsonant('this is a string', 'consonant'));

const title = function(input) {
  let splittedString = input.split(' ');
  let result = '';
  for (let string of splittedString) {
    let temp = string.charAt(0).toUpperCase() + string.slice(1);
    result += temp + ' ';
  }
  return result.trim();
}

console.log('title :' + title('this is a string'));

const camelPascal = function(input, format) {
  let splittedString = input.split(' ');
  let result = '';
  for (let string of splittedString) {
    if (format === 'camel' && result === '') {
      result += string;
    } else {
      let temp = string.charAt(0).toUpperCase() + string.slice(1);
      result += temp;
    }
  }
  return result;
}

console.log('camel: ' + camelPascal('this is a string', 'camel'));
console.log('pascal: ' + camelPascal('this is a string', 'pascal'));

const snakeKebab = function(input, format) {
  let splittedString = input.split(' ');
  let result = '';
  for (let string of splittedString) {
    if (result === '') {
      result += string;
      continue;
    }
    if (format === 'snake') {
      result += '_' + string;
    } else {
      result += '-' + string;
    }
  }
  return result;
}

console.log('snake: ' + snakeKebab('this is a string', 'snake'));
console.log('kebab: ' + snakeKebab('this is a string', 'kebab'));


const applyStyle = function(input, format) {
  switch(format) {
  case 'upper':
    return upperLower(input, 'upper');
  case 'lower':
    return upperLower(input, 'lower');
  case 'vowel':
    return vowelConsonant(input, 'vowel');
  case 'consonant':
    return vowelConsonant(input, 'consonant');
  case 'camel':
    return camelPascal(input, 'camel');
  case 'pascal':
    return camelPascal(input, 'pascal');
  case 'snake':
    return snakeKebab(input, 'snake');
  case 'kebab':
    return snakeKebab(input, 'kebab');
  case 'title':
    return snakeKebab(input, 'title');
  }
}

// integration test
console.log(makeCase('this is a string', ['upper', 'snake']));
console.log(makeCase('this is a string', ['vowel', 'kebab']));
console.log(makeCase('this is a string', ['consonant', 'camel']));
console.log(makeCase('THIS Is a string', ['lower', 'camel']));

// test single input
console.log(makeCase('this is a string', 'upper'));
console.log(makeCase('this is a string', 'kebab'));

// wouldnt work because first order operation turn it into a single string
// console.log(makeCase('this is a string', ['camel', 'snake']));