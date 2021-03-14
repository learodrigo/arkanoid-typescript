import { CanvasView } from './view/CanvasView'
import { Ball } from './sprites/Ball'
import { Brick } from './sprites/Brick'
import { Paddle } from './sprites/Paddle'

// Images
import PADDLE_IMAGE from './images/paddle.png'
import BALL_IMAGE from './images/ball.png'

// Level and colors
import {
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY
} from './setup'

// Helpers
import { createBricks } from './helpers'

// Setup
let gameOver = false
let score = 0

const setGameOver = (view: CanvasView) => {
    view.drawInfo('Game over!')
    gameOver = false
}

const setGameWin = (view: CanvasView) => {
    view.drawInfo('You won!')
    gameOver = false
}

// Main game
const gameLoop = (
    view: CanvasView,
    bricks: Brick[],
    paddle: Paddle,
    // ball: Ball
) => {
    view.clear()
    view.drawBricks(bricks)
    view.drawSprite(paddle)

    // Paddle edges
    if (
        (paddle.isMovingLeft && paddle.pos.x > 10) ||
        (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width - 10)
    ) {
        paddle.movePaddle()
    }

    requestAnimationFrame(() => gameLoop(view, bricks, paddle))
}

const startGame = (view: CanvasView) => {
    score = 0
    view.drawInfo('')
    view.drawScore(score)

    const bricks = createBricks()
    const paddle = new Paddle(
        PADDLE_SPEED,
        PADDLE_WIDTH,
        PADDLE_HEIGHT,
        {
            x: PADDLE_STARTX,
            y: view.canvas.height - PADDLE_HEIGHT - 10
        },
        PADDLE_IMAGE
    )

    gameLoop(view, bricks, paddle)
}

// Create view
const view = new CanvasView('#playField')
view.initStartButton(startGame)
