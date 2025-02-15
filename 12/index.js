/*Разработайте класс Sudoku. Класс создает игровое поле 9х9 (двумерный 
массив). В классе Sudoku должны быть реализованы методы проверяющие 
столбцы, строки и квадраты на повторение цифр. В консоль необходимо 
выводить номер ошибочного столбца, строки, квадрата. Кроме того, должны 
быть методы:*/

class Sudoku {
    constructor(board = null) {
        this.board = board || this.createEmptyBoard();
        this.size = 9;
        this.blockSize = 3;
    }

    createEmptyBoard() {
        return Array.from({ length: this.size }, () => Array(this.size).fill(0));
    }
    
    checkBoard() {
        for (let i = 0; i < this.size; i++) {
            if (this.checkRow(i)) {
                console.log(`Ошибка в строке: ${i + 1}`);
            }
            if (this.checkColumn(i)) {
                console.log(`Ошибка в столбце: ${i + 1}`);
            }
            if (this.checkBlock(i)) {
                console.log(`Ошибка в квадрате: ${i + 1}`);
            }
        }
    }

    checkRow(row) {
        const seen = new Set();
        for (let i = 0; i < this.size; i++) {
            const num = this.board[row][i];
            if (num !== 0 && seen.has(num)) return true; 
            seen.add(num);
        }
        return false; 
    }
 
    checkColumn(col) {
        const seen = new Set();
        for (let i = 0; i < this.size; i++) {
            const num = this.board[i][col];
            if (num !== 0 && seen.has(num)) return true; 
            seen.add(num);
        }
        return false; 
    }

    checkBlock(blockIndex) {
        const seen = new Set();
        const startRow = Math.floor(blockIndex / this.blockSize) * this.blockSize;
        const startCol = (blockIndex % this.blockSize) * this.blockSize;

        for (let i = startRow; i < startRow + this.blockSize; i++) {
            for (let j = startCol; j < startCol + this.blockSize; j++) {
                const num = this.board[i][j];
                if (num !== 0 && seen.has(num)) return true; 
                seen.add(num);
            }
        }
        return false;
    }

    generateSolvedBoard() {
        const fillBoard = () => {
          for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
              if (this.board[row][col] === 0) { 
                for (let num = 1; num <= this.size; num++) {
                  if (this.isValid(num, row, col)) {
                    this.board[row][col] = num; 
                    if (fillBoard()) {
                      return true; 
                    }
                    this.board[row][col] = 0; 
                  }
                }
                return false; 
              }
            }
          }
          return true; 
        };
    
        fillBoard();
        return this.board; 
      }
    
    isValid(num, row, col) {
        for (let i = 0; i < this.size; i++) {
            if (this.board[row][i] === num) return false;
        }
    
        for (let i = 0; i < this.size; i++) {
            if (this.board[i][col] === num) return false;
        }
    
        
        const startRow = Math.floor(row / this.blockSize) * this.blockSize;
        const startCol = Math.floor(col / this.blockSize) * this.blockSize;
    
        for (let r = 0; r < this.blockSize; r++) {
            for (let c = 0; c < this.blockSize; c++) {
                if (this.board[startRow + r][startCol + c] === num) return false;
            }
        }
      
        return true; 
    }
    printBoard() {
        for (let row = 0; row < this.size; row++) {
            let rowString = ""; // Инициализируем строку для текущей строки
             if (row % this.blockSize === 0 && row !== 0) {
               console.log("- - - - - - - - - - - -");
             }
           for (let col = 0; col < this.size; col++) {
                if (col % this.blockSize === 0 && col !== 0) {
                   rowString += "| ";
                }
                rowString += (this.board[row][col] === 0 ? ". " : this.board[row][col] + " ");
           }
           console.log(rowString); // Выводим строку для текущей строки
        }
    }
}

const board = [
    [3, 7, 2,     0, 0, 4,     9, 0, 0],
    [3, 0, 4,     0, 8, 9,     1, 0, 0],
    [8, 1, 9,     0, 0, 6,     2, 5, 4],
    
    [7, 0, 1,     0, 0, 0,     0, 9, 5],
    [9, 0, 0,     0, 0, 2,     0, 7, 0],
    [0, 0, 0,     8, 0, 7,     0, 1, 2],

    [4, 0, 5,     0, 0, 1,     6, 2, 0],
    [2, 3, 7,     0, 0, 0,     5, 0, 1],
    [0, 0, 0,     0, 2, 5,     7, 0, 0],
];

const sudoku = new Sudoku(board);
sudoku.checkBoard(); 
sudoku.printBoard();

const solvedBoard = sudoku.generateSolvedBoard();
console.log("\nРешенная доска:");
sudoku.printBoard(); 
