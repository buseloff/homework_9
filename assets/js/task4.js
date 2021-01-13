"use strict";
/*Задание 4. Заполнить квадратную матрицу * согласно шаблону на рисунке.
 */
//Создание квадратной матрицы целых случайных чисел из заданного размера матрицы и диапазона чисел.
let sizeOfSqureMatrix = 6;
let rangeOfRandom = 10;
let squareMatrix = [];

function getSquareMatrixOfrandomInteger(sizeOfSqureMatrix, rangeOfRandom) {
  let squareMatrix = [];
  for (let i = 0; i < sizeOfSqureMatrix; i++) {
    squareMatrix[i] = [];
    for (let j = 0; j < sizeOfSqureMatrix; j++) {
      squareMatrix[i][j] = parseInt(Math.random() * rangeOfRandom);
    }
  }
  return squareMatrix;
}

function makeZeroElements_1(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_2(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = i; j < size; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_3(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  return squareMatrix;
}
function makeZeroElements_4(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = size - i - 1; j < size; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_5(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = i; j < size - i; j++) {
      squareMatrix[i][j] = "*";
      squareMatrix[size - 1 - i][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_6(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = 0; j <= i; j++) {
      squareMatrix[i][j] = "*";
      squareMatrix[i][size - 1 - j] = "*";
      squareMatrix[size - i - 1][j] = "*";
      squareMatrix[size - i - 1][size - 1 - j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_7(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = 0; j <= i; j++) {
      squareMatrix[i][j] = "*";
      squareMatrix[size - i - 1][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_8(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = 0; j <= i; j++) {
      squareMatrix[i][size - 1 - j] = "*";
      squareMatrix[size - i - 1][size - 1 - j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_9(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = i; j < size - i; j++) {
      squareMatrix[size - 1 - i][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_10(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = i; j < size - i; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_11(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = 0; j < size - i; j++) {
      squareMatrix[i][j] = "*";
      squareMatrix[size - i - 1][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_12(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = i; j < size; j++) {
      squareMatrix[i][j] = "*";
      squareMatrix[size - i - 1][j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_13(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = 0; j <= i; j++) {
      squareMatrix[i][size - 1 - j] = "*";
      squareMatrix[size - i - 1][size - 1 - j] = "*";
    }
  }
  return squareMatrix;
}

function makeZeroElements_14(squareMatrix) {
  let size = squareMatrix.length;
  for (let i = 0; i < size; i++) {
    for (let j = size - i - 1; j < size; j++) {
      squareMatrix[i][j] = "*";
    }
  }
  for (let i = 0; i < Math.round(size / 2); i++) {
    for (let j = 0; j <= i; j++) {
      squareMatrix[i][j] = "*";
      squareMatrix[size - i - 1][j] = "*";
    }
  }
  return squareMatrix;
}

//Функция вывода 2 мерной матрицы
function showMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
  return "";
}

//Вызов функций

console.log("1___________________________________________");
console.log(
  showMatrix(makeZeroElements_1(getSquareMatrixOfrandomInteger(7, 10)))
);

console.log("2_______________________________");
console.log(
  showMatrix(makeZeroElements_2(getSquareMatrixOfrandomInteger(7, 10)))
);

console.log("3_______________________________");
console.log(
  showMatrix(makeZeroElements_3(getSquareMatrixOfrandomInteger(7, 10)))
);

console.log("4_______________________________");
console.log(
  showMatrix(makeZeroElements_4(getSquareMatrixOfrandomInteger(7, 10)))
);
console.log("5_______________________________");
console.log(
  showMatrix(makeZeroElements_5(getSquareMatrixOfrandomInteger(7, 10)))
);

console.log("6_______________________________");
console.log(
  showMatrix(makeZeroElements_6(getSquareMatrixOfrandomInteger(7, 10)))
);

console.log("7_______________________________");
console.log(
  showMatrix(makeZeroElements_7(getSquareMatrixOfrandomInteger(7, 10)))
);

console.log("8_______________________________");
console.log(
  showMatrix(makeZeroElements_8(getSquareMatrixOfrandomInteger(7, 10)))
);

console.log("9_______________________________");
console.log(
  showMatrix(makeZeroElements_9(getSquareMatrixOfrandomInteger(7, 10)))
);

console.log("10_______________________________");
console.log(
  showMatrix(makeZeroElements_10(getSquareMatrixOfrandomInteger(7, 10)))
);

console.log("11_______________________________");
console.log(
  showMatrix(makeZeroElements_11(getSquareMatrixOfrandomInteger(7, 10)))
);
console.log("12_______________________________");
console.log(
  showMatrix(makeZeroElements_12(getSquareMatrixOfrandomInteger(7, 10)))
);

console.log("13_______________________________");
console.log(
  showMatrix(makeZeroElements_13(getSquareMatrixOfrandomInteger(7, 10)))
);

console.log("14_______________________________");
console.log(
  showMatrix(makeZeroElements_14(getSquareMatrixOfrandomInteger(7, 10)))
);
