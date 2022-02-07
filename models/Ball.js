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
        this.speed_x = 0
        this.speed_y = 3
        this.kind = "circle"

        board.ball = this
    }
}