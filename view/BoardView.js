//models
import { Board } from "../models/Board.js"
import { Bar } from "../models/Bar.js"

export class BoardView {

    /**
     *
     * @param {any} canvas
     * @param {Board} board
     */
    constructor(canvas, board) {
        this.canvas = canvas
        this.board = board
        this.canvas.width = board.width
        this.canvas.height = board.height
        this.context = canvas.getContext("2d")
        // this.context.fillStyle = "green"
        // this.context.fillRect(10, 10, this.canvas.width, 300)
    }

    drawElements = () => {
        for (let index = this.board.getElements().length - 1; index >= 0; index--) {
            const element = this.board.getElements()[index]

            this.draw(this.context, element)

        }
    }

    /**
     *
     * @param {any} ctx
     * @param {Bar} element
     */
    draw = (ctx, element) => {
        if(element === null ) {
            return false
        }

        switch (element.kind) {
            case "square":
                ctx.fillRect(
                    element.x,
                    element.y,
                    element.width,
                    element.height
                )
                break;

            default:
                break;
        }
    }
}