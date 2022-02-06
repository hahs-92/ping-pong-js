//models
// import { Bar } from "./Bar"

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
        this.ball = null
        this.bars = []
    }

    getElements() {
        const elements = this.bars
        elements.push(this.ball)
        return elements
    }
}