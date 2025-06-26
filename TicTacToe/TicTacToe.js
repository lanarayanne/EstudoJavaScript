// import Player from "./Player";
// import Cell from "./Cell";
import Winner from "../4mation/scripts/Winner.js";
import CellState from "./CellState.js";
import Player from "./Player.js";

export default class TicTacToe {
    constructor(player) {
        this.turn = player;
        this.rows = 3;
        this.cols = 3;
        this.board = [];

        for (let i = 0; i < this.rows; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.board[i][j] = CellState.EMPTY;
            }
        }

        console.log(this.board);
    }

    getBoard() {
        return this.board;
    }

    getTurn() {
        return this.turn;
    }

    inLimit(value, limit) {
        return (value >= 0 && value < limit);
    }

    onBoard({ x, y }) {
        return (this.inLimit(x, this.rows) && this.inLimit(y, this.cols)); //so retorna true se x e y forem true
    }

    move(cell) {
        let { x, y } = cell;
        if (!this.onBoard(cell)) {
            throw new Error("Cell is not on board");
        }
        if (this.board[x][y] !== CellState.EMPTY) {
            throw new Error("Cell is not empty");
        }

        if (this.turn === Player.PLAYER1) {
            this.board[x][y] = CellState.PLAYER1;
            this.turn = Player.PLAYER2;
        } else {
            this.board[x][y] = CellState.PLAYER2;
            this.turn = Player.PLAYER1;
        }
        console.log(this.endOfGame());
        return this.endOfGame();
    }

    endOfGame() {
        const row = this.rows;
        const col = this.cols;
        const board = this.board;
        let emptyCells = 0;
     
        for (let i = 0; i < board.length; i++) {

            for (let j = 0; j < board[i].length; j++) {
                const player = board[i][j];

                if (player === CellState.EMPTY) {
                    emptyCells++;
                    continue;
                }

                if (j + 2 < col) {
                    if (board[i][j] === player &&
                        board[i][j + 1] === player &&
                        board[i][j + 2] === player) {
                        return player === CellState.PLAYER1 ? Winner.PLAYER1 : Winner.PLAYER2;
                    }
                }

                if (i + 2 < row) {
                    if (board[i][j] === player &&
                        board[i + 1][j] === player &&
                        board[i + 2][j] === player) {
                        return player === CellState.PLAYER1 ? Winner.PLAYER1 : Winner.PLAYER2;
                    }
                }

                if (i + 2 < row && j + 2 < col) {
                    if (board[i][j] === player &&
                        board[i + 1][j + 1] === player &&
                        board[i + 2][j + 2] === player) {
                        return player === CellState.PLAYER1 ? Winner.PLAYER1 : Winner.PLAYER2;
                    }
                }

                if (i - 2 >= 0 && j + 2 < col) {
                    if (board[i][j] === player &&
                        board[i - 1][j + 1] === player &&
                        board[i - 2][j + 2] === player) {
                        return player === CellState.PLAYER1 ? Winner.PLAYER1 : Winner.PLAYER2;
                    }
                }
            }
        }

        if(emptyCells === 0){
            return Winner.NONE;
        }

    }




}
