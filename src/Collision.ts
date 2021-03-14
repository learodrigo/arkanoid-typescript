import { Ball } from './sprites/Ball'
import { Brick } from './sprites/Brick'
import { CanvasView } from './view/CanvasView'
import { Paddle } from './sprites/Paddle'

export class Collision {
    checkBallCollision(ball: Ball, paddle: Paddle, view: CanvasView): void {
        // Ball paddle collision
        if (
            ball.pos.x + ball.width > paddle.pos.x &&
            ball.pos.x < paddle.pos.x + paddle.width &&
            ball.pos.y + ball.height === paddle.pos.y
        ) {
            ball.changeYDirection()
        }

        // Walls collision
        if (ball.pos.x > view.canvas.width - ball.width || ball.pos.x < 0) {
            ball.changeXDirection()
        }

        // Roof collision
        if (ball.pos.y < 0) {
            ball.changeYDirection()
        }
    }

    isCollidingBrick(ball: Ball, brick: Brick): boolean {
        return (
            ball.pos.x < brick.pos.x + brick.width &&
            ball.pos.x + ball.width > brick.pos.x &&
            ball.pos.y < brick.pos.y + brick.height &&
            ball.pos.y + ball.height > brick.pos.y
        )
    }

    isCollidingBricks(ball: Ball, bricks: Brick[]): boolean {
        let colliding = false

        bricks.forEach((brick, i) => {
            if (this.isCollidingBrick(ball, brick)) {
                ball.changeYDirection()

                brick.energy === 1 ? bricks.splice(i, 1) : --brick.energy

                colliding = true
            }
        })

        return colliding
    }
}
