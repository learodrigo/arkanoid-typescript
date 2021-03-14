import { Vector } from '../types'

export class Paddle {
    private paddleImage: HTMLImageElement = new Image()
    private moveLeft: boolean
    private moveRight: boolean

    constructor(
        private speed: number,
        private paddleWidth: number,
        private paddleHeight: number,
        private position: Vector,
        image: string
    ) {
        this.speed = speed
        this.paddleWidth = paddleWidth
        this.paddleHeight = paddleHeight
        this.position = position
        this.moveLeft = false
        this.moveRight = false
        this.paddleImage.src = image

        document.addEventListener('keydown', this.handleKeyDown)
        document.addEventListener('keyup', this.handleKeyUp)
    }

    get image(): HTMLImageElement {
        return this.paddleImage
    }

    get isMovingLeft(): boolean {
        return this.moveLeft
    }

    get isMovingRight(): boolean {
        return this.moveRight
    }

    get height(): number {
        return this.paddleHeight
    }

    get pos(): Vector {
        return this.position
    }

    get width(): number {
        return this.paddleWidth
    }

    handleKeyDown = (e: KeyboardEvent): void => {
        if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') this.moveLeft = true
        if (e.code === 'ArrowRight' || e.key === 'ArrowRight') this.moveRight = true
    }

    handleKeyUp = (e: KeyboardEvent): void => {
        if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') this.moveLeft = false
        if (e.code === 'ArrowRight' || e.key === 'ArrowRight') this.moveRight = false
    }

    movePaddle(): void {
        if (this.moveLeft)  this.pos.x -= this.speed
        if (this.moveRight) this.pos.x += this.speed
    }
}
