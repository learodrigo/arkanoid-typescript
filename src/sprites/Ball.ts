import { Vector } from '../types'

export class Ball {
    private speed: Vector
    private ballImage: HTMLImageElement = new Image()

    constructor(
        speed: number,
        private ballSize: number,
        private position: Vector,
        image: string
    ) {
        this.ballImage.src = image
        this.ballSize = ballSize
        this.position = position
        this.speed = {
            x: speed,
            y: -speed
        }
    }

    get width(): number {
        return this.ballSize
    }

    get height(): number {
        return this.ballSize
    }

    get pos(): Vector {
        return this.position
    }

    get image(): HTMLImageElement {
        return this.ballImage
    }

    changeXDirection(): void {
        this.speed.x *= -1
    }

    changeYDirection(): void {
        this.speed.y *= -1
    }

    moveBall(): void {
        this.pos.x += this.speed.x
        this.pos.y += this.speed.y
    }
}
