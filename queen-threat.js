const generateBoard = function(queen1,queen2) {

  //fill an 8x8 array with zeroes and change the locations of the queens to ones
  let arr = Array(8).fill().map(() => Array(8).fill(0));
  arr[queen1[0]][queen1[1]] = 1;
  arr[queen2[0]][queen2[1]] = 1;

  //return the array
  return arr;
};

const queenThreat = function(board) {
  //declaring variables for the position of the first queen
  let row, column;

  //loop through the array until the first queen is found and save the position in the row and column variables
  loop1:
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        row = i;
        column = j;
        break loop1;
      }
    }
  }


  //check the row to see if it has two queens and return true if it does
  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] === 1 && i !== column) {
      return true;
    }
  }

  //check the column to see if it has two queens and return true if it does
  for (let i = 0; i < board.length; i++) {
    if (board[i][column] === 1 && i !== row) {
      return true;
    }
  }

  //check the diagonal going up right for two queens and return true if it does
  for (let i = row, j = column; i < board.length && j < board[i].length; i++, j++) {
    if (board[i][j] === 1 && (i !== row && j !== column)) {
      return true;
    }
  }

  //check the diagonal going down right for two queens and return true if it does
  for (let i = row, j = column; i >= 0 && j < board[i].length; i--, j++) {
    if (board[i][j] === 1 && (i !== row && j !== column)) {
      return true;
    }
  }

  //check the diagonal going down left for two queens and return true if it does
  for (let i = row, j = column; i < board.length && j >= 0; i++, j--) {
    if (board[i][j] === 1 && (i !== row && j !== column)) {
      return true;
    }
  }

  //check the diagonal goind up left for two queens and return true if it does
  for (let i = row, j = column; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1 && (i !== row && j !== column)) {
      return true;
    }
  }

  //otherwise return false
  return false;
};



//test cases
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
