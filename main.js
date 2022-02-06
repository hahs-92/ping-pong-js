console.log("hi world")

const $canvas = document.querySelector("#canvas")

class Board {
    playing = false
    game_over = false
    bars = []
    ball = null
    width
    height

    constructor(width,height) {
        this.width = width
        this.height = height
    }

    getElements() {
        const elements = this.bars
        elements.push(this.ball)
        return elements
    }
}


class BoardView {
    constructor(canvas, board) {
        this.canvas = canvas
        this.canvas.width = board.width
        this.canvas.height = board.height
        this.context = canvas.getContext("2d")
        // this.context.fillStyle = "green"
        // this.context.fillRect(10, 10, this.canvas.width, 300)
    }
}


function main() {
    const board = new Board(800, 400)
    const boardView = new BoardView($canvas, board)
}

main()