const spiralMatrix = (size) => {
  const spiral = Array(size)
    .fill()
    .map(() => Array(0));

  const totalNumbers = size ** 2;
  let currentNumber = 1;
  let topLeft = 0;
  let bottomRight = size - 1;

  while (currentNumber <= totalNumbers) {
    for (let x = topLeft; x <= bottomRight; x += 1) {
      spiral[topLeft][x] = currentNumber;
      currentNumber += 1;
    }

    for (let y = topLeft + 1; y <= bottomRight; y += 1) {
      spiral[y][bottomRight] = currentNumber;
      currentNumber += 1;
    }

    for (let x = bottomRight - 1; x >= topLeft; x -= 1) {
      spiral[bottomRight][x] = currentNumber;
      currentNumber += 1;
    }

    for (let y = bottomRight - 1; y >= topLeft + 1; y -= 1) {
      spiral[y][topLeft] = currentNumber;
      currentNumber += 1;
    }

    topLeft += 1;
    bottomRight -= 1;
  }

  return spiral;
};

const __in = [0, 1, 2, 3, 4, 5];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: spiralMatrix(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
