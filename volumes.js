const PI = 3.14159;

const sphereVolume = function(radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  return (height / 3) * PI * Math.pow(radius, 2);
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  let total = 0;
  for (let solid of solids) {
    switch(solid.type) {
    case 'sphere':
      total += sphereVolume(solid.radius);
      break;
    case 'cone':
      total += coneVolume(solid.radius, solid.height);
      break;
    case 'prism':
      total += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return total;
}

// 1. test total volume with the duck example
const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

// 2. test total volume with prism and cone
const bluePrism = {
  type: 'prism',
  height: 10,
  width: 5,
  depth: 5
}

const yellowCone = {
  type: 'cone',
  radius: 5,
  height: 10
}

const conishPrism = [bluePrism, yellowCone];

console.log(prismVolume(bluePrism.height, bluePrism.width, bluePrism.depth));
console.log(coneVolume(yellowCone.radius, yellowCone.height));
console.log(totalVolume(conishPrism));
