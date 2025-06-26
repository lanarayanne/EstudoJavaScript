import Player from "./Player.js";
import Cell from "./Cell.js";
import TicTacToe from "./TicTacToe.js"
import Winner from "../4mation/scripts/Winner.js";


class Interface {
    constructor(){
        this.game == null;
    }

    registerEvents(){
        this.init(); //chama init
        let start = document.getElementById("start"); //procura o botão de start
        start.onclick = this.init.bind(this); // quando clicar em um botão, chama o init do objeto atual (this),      
    }

    init(){
        let value = "X";
        this.game = new TicTacToe(value === "X" ? Player.PLAYER1 : Player.PLAYER2);
        let table = this.game.getBoard();
        let tbody = document.querySelector("tbody");
        tbody.innerHTML = "";

        for(let i=0; i<table.length; i++){
            let tr = document.createElement("tr");
            for (let j=0; j<table[i].length; j++){
                let td = document.createElement("td");
                // td.onclick= this.play.bind(this);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        this.changeMessage();
    }

    coordinades(cell){
        return new Cell (cell.parentNode.rowIndex, cell.parentNode.cellIndex);
    }

    setMensage(message){
        const p = document.getElementById("message");
        p.textContent = message;

    }

    changeMessage(){
        const winner = this.game.endOfGame();
        
        if (winner !== Winner.NONE){
            let finalMessage = "Game Over";

            if (winner === Winner.PLAYER1){
                finalMessage = "X Wins"
            }
            if (winner === Winner.PLAYER2){
                finalMessage = "O Wins"
            }
        }

        this.setMensage(this.finalMessage);
        return;
    }

}

let gui = new Interface();
gui.registerEvents();

gui.game.move({x:0, y:0});

gui.game.move({x:0, y:1});

gui.game.move({x:0, y:2});

gui.game.move({x:1, y:0});

gui.game.move({x:1, y:1});

gui.game.move({x:1, y:2});

gui.game.move({x:2, y:1});

gui.game.move({x:2, y:2});

gui.game.move({x:2, y:0});
