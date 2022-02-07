//models
import { Board } from './models/Board.js'
import { Bar } from './models/Bar.js'
import { Ball } from './models/Ball.js'
//view
import { BoardView } from './view/BoardView.js'

//elements dom
const $canvas = document.querySelector("#canvas")

//instancias
const board = new Board(800, 400)
const boardView = new BoardView($canvas, board)

//estas barras y ball se autoasignan a board en su constructor
const bar = new Bar(20, 100, 40, 100, board);
const bar2 = new Bar(735, 100, 40, 100, board);
const ball = new Ball(350, 100, 10, board)




window.document.addEventListener("keydown", (ev) => {
    ev.preventDefault()

    switch (ev.code) {
        case "KeyS":
            bar.down()
            break;
        case "ArrowDown":
            bar2.down()
            break;
        case "KeyW":
            bar.up()
            break;
        case "ArrowUp":
            bar2.up()
            break;
        default:
           break;
    }

    // console.log(bar.toString())
    console.log("" + bar)
})


window.requestAnimationFrame(main)

function main() {
    window.requestAnimationFrame(main)

    boardView.play()
}

// main()