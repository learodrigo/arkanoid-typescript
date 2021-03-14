// Types
import { BRICK_IMAGES } from '~/setup'
import { Ball } from '../sprites/Ball'
import { Brick } from '../sprites/Brick'
import { Paddle } from '../sprites/Paddle'

export class CanvasView {
    private context: CanvasRenderingContext2D | null
    private info: HTMLObjectElement | null
    private scoreDisplay: HTMLObjectElement | null
    private start: HTMLObjectElement | null

    canvas: HTMLCanvasElement

    constructor(canvasName: string) {
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement
        this.context = this.canvas.getContext('2d')

        this.info = document.querySelector('#info')
        this.scoreDisplay = document.querySelector('#score')
        this.start = document.querySelector('#start')
    }

    clear(): void {
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    initStartButton(startFunction: (view: CanvasView) => void): void {
        this.start?.addEventListener('click', () => startFunction(this))
    }

    drawScore(score: number): void {
        if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString()
    }

    drawInfo(text: string): void {
        if (this.info) this.info.innerHTML = text
    }

    drawSprite(element: Brick | Paddle | Ball): void {
        if (!element) return

        this.context?.drawImage(
            element.image,
            element.pos.x,
            element.pos.y,
            element.width,
            element.height
        )
    }

    drawBricks(bricks: Brick[]): void {
        bricks.forEach(brick => this.drawSprite(brick))
    }
}
