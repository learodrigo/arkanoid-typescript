import { Vector } from '../types'

export class Brick {
    private brickImage: HTMLImageElement = new Image()

    constructor(
        private brickEnergy: number,
        private brickHeight: number,
        private brickWidth: number,
        private position: Vector,
        image: string
    ) {
        this.brickEnergy = brickEnergy
        this.brickHeight = brickHeight
        this.brickImage.src = image
        this.brickWidth = brickWidth
        this.position = position
    }

    // Getters
    get energy(): number {
        return this.brickEnergy
    }

    get height(): number {
        return this.brickHeight
    }

    get image(): HTMLImageElement {
        return this.brickImage
    }

    get pos(): Vector {
        return this.position
    }

    get width(): number {
        return this.brickWidth
    }

    // Setters
    set energy(energy: number) {
        this.brickEnergy = energy
    }
}
