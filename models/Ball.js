//models
import { Board } from "./Board.js"


export class Ball {
    /**
     *
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {Board} board
     */
    constructor(x, y, radius, board) {
        this.x = x
        this.y = y
        this.board = board
        this.radius = radius
        this.speed_x = 3
        this.speed_y = 0
        this.kind = "circle"
        this.direction = 1

        this.board.ball = this
    }

    move = () => {
        this.x += this.speed_x * this.direction //right 1 - left -1
        this.y += this.speed_y
    }
}