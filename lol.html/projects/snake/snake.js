let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

const foodImg = new Image()
foodImg.src = 'food.png'

const field = new Image()
field.src = 'field.png'

const cell = 32

let score = 0


let food = {
    x: Math.floor(Math.random() * 17 + 1 ) * cell,
    y: Math.floor(Math.random() * 15 + 3 ) * cell
}

let snake = []
snake[0] = {
    x: 9 * cell,
    y: 10 * cell
}


document.addEventListener("keydown", direction)

let dir

function direction (event) {
    if (event.keyCode == 37 && dir != 'right')
        dir = 'left'
    else if (event.keyCode == 38 && dir != 'down')
        dir = 'up'
    else if (event.keyCode == 39 && dir != 'left')
        dir = 'right'
    else if (event.keyCode == 40 && dir != 'up')
        dir = 'down'
}

function eatTail (head, arr) {
    for(let i = 0; i < arr.length; i++) {
        if(head.x == arr[i].x && head.y == arr[i].y)
            clearInterval(game)
    }
}

function drawGame () {
    ctx.drawImage(field, 0, 0)
    ctx.drawImage(foodImg, food.x, food.y)

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? 'green' : 'red'
        ctx.fillRect(snake[i].x, snake[i].y, cell, cell)
    }

        ctx.fillStyle = 'white'
        ctx.font = '50px Arial'
        ctx.fillText(score, cell * 2.5, cell * 1.7)

        let snakeX = snake[0].x
        let snakeY = snake[0].y

        if(snakeX < cell || snakeX > cell * 17 ||
        snakeY < 3 * cell || snakeY > cell * 17 )
            clearInterval(game)
        if(snakeX == food.x && snakeY == food.y) {
            score++
            food = {
                x: Math.floor(Math.random() * 17 + 1 ) * cell,
                y: Math.floor(Math.random() * 15 + 3 ) * cell
            }
        } else {
            snake.pop()
        }

        if (dir == 'left') snakeX -= cell
        if (dir == 'right') snakeX += cell
        if (dir == 'up') snakeY -= cell
        if (dir == 'down') snakeY += cell


        let newHead = {
            x: snakeX,
            y: snakeY
        }

         eatTail(newHead, snake)

        snake.unshift(newHead)

   }

let game = setInterval(drawGame, 100)



