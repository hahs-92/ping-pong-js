//models
import { Bar } from "./Bar.js"
import { Ball } from "./Ball.js"

export class Board {

    /**
     *
     * @param {number} width
     * @param {number} height
     */
    constructor(width,height) {
        this.width = width
        this.height = height
        this.playing = false
        this.game_over = false

        /** @type{Ball} */
        this.ball = null

        /** @type{Bar[]} */
        this.bars = []
    }

    getElements() {
        /**@type{*} */
        const elements = this.bars
        elements.push(this.ball)
        return elements
    }
}