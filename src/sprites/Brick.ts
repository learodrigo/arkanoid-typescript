import { Vector } from '../types'

export class Brick {
    private brickImage: HTMLImageElement = new Image()

    constructor(
        image: string,
        private position: Vector,
        private brickWidth: number,
        private brickHeight: number,
        private brickEnergy: number,
    ) {
        this.brickImage.src = image
        this.position = position
        this.brickWidth = brickWidth
        this.brickHeight = brickHeight
        this.brickEnergy = brickEnergy
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
