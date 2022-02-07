//models
import { Board } from "../models/Board.js"


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
    }

    drawElements = () => {
        for (let index = this.board.getElements().length - 1; index >= 0; index--) {
            const element = this.board.getElements()[index]

            this.draw(element)
        }
    }


    draw = (element) => {
        // if(element === null ) {
        //     return false
        // }
        switch (element.kind) {
            case "rectangle":
                this.context.fillRect(
                    element.x,
                    element.y,
                    element.width,
                    element.height
                )
                break;
            case "circle":
                this.context.beginPath()
                this.context.arc(
                    element.x,
                    element.y,
                    element.radius,
                    0,
                    7
                )
                this.context.fill()
                this.context.closePath()
                break
            default:
                break;
        }
    }

    clean = () => {
        this.context.clearRect(0, 0,this.board.width, this.board.height)
    }

    play = () => {
        this.clean()
        this.drawElements()
    }
}