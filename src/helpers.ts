import { Brick } from './sprites/Brick'

import {
    BRICK_ENERGY,
    BRICK_IMAGES,
    BRICK_HEIGHT,
    BRICK_PADDING,
    BRICK_WIDTH,
    LEVEL,
    STAGE_COLS,
    STAGE_PADDING
} from './setup'

export const createBricks = (): Brick[] => {
    return LEVEL.reduce((acc, ele, i) => {
        if (ele === 0) return acc

        const col = i % STAGE_COLS
        const row = Math.floor((i + 1) / STAGE_COLS)

        const x = STAGE_PADDING + col * (BRICK_WIDTH  + BRICK_PADDING)
        const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING)

        return [
            ...acc,
            new Brick(
                BRICK_IMAGES[ele],
                { x, y },
                BRICK_WIDTH,
                BRICK_HEIGHT,
                BRICK_ENERGY[ele]
            )
        ]
    }, [] as Brick[])
}
