const generateBoard = function(whiteQueen, blackQueen) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      if ((whiteQueen[0] === i && whiteQueen[1] === j) || (blackQueen[0] === i && blackQueen[1] === j)) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    board.push(row);
  }
  return board;
}

const queenThreat = function(generatedBoard) {
  // two pass
  // first pass to get the white and black queens
  let positions = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (generatedBoard[i][j] == 1) {
        positions.push([i,j])
      }
    }
  }
  
  // if they align horizontally or vertically
  if ((positions[0][0] === positions[1][0]) || (positions[0][1] === positions[1][1])) {
    return true;
  }

  // diagonal relatively below
  let j1 = positions[0][1];
  let j2 = positions[0][1];
  for (let i = positions[0][0] + 1; i < 8; i++) {
    j1 += 1;
    j2 -= 1;
    //console.log('j1', i, j1);
    //console.log('j2', i, j2);
    if (i === positions[1][0] && j1 === positions[1][1]) {
      return true;
    } 
    if (i === positions[1][0] && j2 === positions[1][1]) {
      return true;
    }
  }

  // diagonal relatively above
  let j3 = positions[0][1];
  let j4 = positions[0][1];
  for (let i = positions[0][0] - 1; i >= 0; i--) {
    j3 += 1;
    j4 -= 1;
    //console.log('j3', i, j3);
    //console.log('j4', i, j4);
    if (i === positions[1][0] && j3 === positions[1][1]) {
      return true;
    }
    if (i === positions[1][0] && j4 === positions[1][1]) {
      return true;
    }
  }
  return false;
}

// let whiteQueen = [1, 4];
// let blackQueen = [3, 6];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

let whiteQueen = [4, 2];
let blackQueen = [6, 3];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));