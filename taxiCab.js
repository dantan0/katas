const blocksAway = function(directions) {
  let position = [0, 0];
  let directionPackage = [];
  let orientation;
  for (let i = 0; i < directions.length; i+=2) {
    directionPackage.push([directions[i], directions[i+1]])
  }
  for (let direction of directionPackage) {
    orientation = findOrientation(orientation, direction[0]);
    position = findPosition(orientation, position, direction[1]);
  }
  const result = {east: position[0], north: position[1]};
  return result;
}

const findOrientation = function(orientation, direction) {
  if (orientation === 'North') {
    if (direction === 'right') {
      return 'East';
    } else {
      return 'West';
    }
  } else if (orientation === 'South') {
    if (direction === 'right') {
      return 'West';
    } else {
      return 'East';
    }
  } else if (orientation === 'East') {
    if (direction === 'right') {
      return 'South';
    } else {
      return 'North';
    }
  } else if (orientation === 'West') {
    if (direction === 'right') {
      return 'North';
    } else {
      return 'South';
    }
  } else {
    // initially SouthWest (undefined)
    if (direction === 'right') {
      return 'East';
    } else {
      return 'North';
    }
  }
}

const findPosition = function(orientation, position, moveCount) {
  switch(orientation) {
  case 'North':
    position[1] += moveCount;
    break;
  case 'South':
    position[1] -= moveCount;
    break;
  case 'East':
    position[0] += moveCount;
    break;
  case 'West':
    position[0] -= moveCount;
    break;
  }
  return position;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));