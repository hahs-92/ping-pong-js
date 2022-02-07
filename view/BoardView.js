//models
import { Board } from "../models/Board.js"
import { Bar } from "../models/Bar.js"
import { Ball } from "../models/Ball.js"

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
        if(!this.board.playing) {
            return false
        }

        this.clean()
        this.drawElements()
        this.checkCollisions()
        this.board.ball.move()
    }

    checkCollisions = () => {
        for (let index = this.board.bars.length; index >= 0; index--) {
            const bar = this.board.bars[index]

            if(this.hit(bar, this.board.ball)) {
                this.board.ball.collision(bar)
            }
        }
    }

    /**
     * Determina si la barra colliciona con la bola
     * @param {Bar} bar
     * @param {Ball} ball
     * @returns { boolean}
     */
    hit(bar, ball) {

        let hit = false
        //coaliciones horizontales
        if(
            ball.x + ball.width >= bar?.x &&
            ball.x < bar?.x + bar.width
        ) {
            //coaliciones verticales
            if(
                ball.y + ball.height >= bar.y &&
                ball.y < bar.y + bar.height
            ) {
                hit = true
            }
        }

        //coalicion de bar con ball
        if(
            ball.x <= bar?.x &&
            ball.x + ball.width >= bar?.x + bar.width
        ) {
            if(
                ball.y <= bar.y &&
                ball.y + ball.height >= bar.y + bar.height
            ) {
                hit = true
            }
        }

        //coalciones de ball con bar
        if(
            bar?.x <= ball.y &&
            bar?.x + bar.width >= ball.x + ball.width
        ) {
            if(
                bar?.y <= ball.y &&
                bar?.y + bar.height >= ball.y + ball.height
            ) {
                hit = true
            }
        }

        return hit
    }
}