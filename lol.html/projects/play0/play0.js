/*let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')*/

/*ctx.fillStyle = "red"
ctx.fillRect(50, 50, 50, 50)
ctx.clearRect(50, 50, 25, 25)
ctx.clearRect(80, 80, 25, 25)

ctx.strokeStyle = "blue"
ctx.strokeRect(0, 0, 50, 50)


ctx.beginPath()*/


$(".button").click(function () {
    move('.text')
        .set('color','red')
        .sub('width', '50px')
        .set('margin-left', '100px')
        .duration('5s')
        .translate(100, 500)
        .add('margin-left', 200)
        .x(500)
        .y(500)
        .rotate(350)
        .skew(50, 10)
    .end()

})









