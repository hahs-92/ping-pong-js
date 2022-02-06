//models
import { Board } from "./Board.js"

export class Bar {

    /**
     *
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {Board} board
     */
    constructor(x, y, width, height, board){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.board = board
        this.board.bars.push(this)
        this.kind = "rectangle"
        this.speed = 10
    }

    down = () => {
        this.y += this.speed
    }

    up = () => {
        this.y += this.speed
    }

    toString = () => {
        return `x: ${this.x} y: ${this.y}`
    }
}