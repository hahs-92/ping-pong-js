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


document.addEventListener("keydown", (ev) => {

    switch (ev.code) {
        case "KeyS":
            ev.preventDefault()
            bar.down()
            break;
        case "ArrowDown":
            ev.preventDefault()
            bar2.down()
            break;
        case "KeyW":
            ev.preventDefault()
            bar.up()
            break;
        case "ArrowUp":
            ev.preventDefault()
            bar2.up()
            break;
        case "Escape":
        case "Space":
            ev.preventDefault()
            board.playing = !board.playing
        default:
           break;
    }
})

boardView.drawElements()
window.requestAnimationFrame(main)

function main() {
    window.requestAnimationFrame(main)

    boardView.play()
}
