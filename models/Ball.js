//models
import { Board } from "./Board.js"
import { Bar } from "./Bar.js"

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
        this.width = this.radius * 2
        this.height = this.radius * 2
        this.speed_x = 3
        this.speed_y = 0
        this.kind = "circle"
        this.direction = 1
        this.bounceAngle = 0
        this.maxBounceAngle = Math.PI / 12
        this.speed = 3

        this.board.ball = this
    }


    move = () => {
        this.x += this.speed_x * this.direction //right 1 - left -1
        this.y += this.speed_y
    }

    /**
     * Reacciona a la coalision con una barra
     * @param {Bar} bar
     */
    collision(bar) {
        const relativeIntersectY = (bar.y +(bar.height / 2) - this.y)
        const normalizedIntersectY = relativeIntersectY / (bar.height / 2)


        this.bounceAngle = normalizedIntersectY * this.maxBounceAngle
        this.speed_y = this.speed * -Math.sin(this.bounceAngle)
        this.speed_x = this.speed * Math.cos(this.bounceAngle)

        if(
            this.x > (this.board.width / 2)
        ) {
            this.direction = -1
        } else {
            this.direction = 1
        }

    }
}