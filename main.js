//models
import { Board } from './models/Board.js'
import { Bar } from './models/Bar.js'
//view
import { BoardView } from './view/BoardView.js'

const $canvas = document.querySelector("#canvas")



function main() {
    const board = new Board(800, 400)
    const boardView = new BoardView($canvas, board)

    //estas barras se autoasignan a board en su constructor
    const bar = new Bar(20, 100, 40, 100, board);
    const bar2 = new Bar(735, 100, 40, 100, board);

    boardView.drawElements()
}

main()