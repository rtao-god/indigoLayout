let stage = new createjs.Stage("demoCanvas")


createjs.Ticker.on("tick", tick)

function tick () {
    console.log("TICK !!!")
}
let circle = new createjs.Shape()
circle.graphics.beginFill("red").drawCircle(0, 0, 50)
circle.y = 100

circle.x = circle.x + 3;
if (circle.x > stage.width) { circle.x = 0 }



/*function tick (event) {
    circle.x += event.delta/1000*100

    console.log("total time: " + createjs.Ticker.getTime())
}*/

stage.addChild(circle)
stage.update()

/*
let stage = new createjs.Stage("demoCanvas")

let rect = new createjs.Shape()
rect.graphics.beginFill("red").drawRect(50, 0, 50, 50)

stage.addChild(rect)

stage.update()
*/

/*
let ss = createjs.spriteSheet({
    frames: {
        width:64,
        height: 32,
        numFrames: 19
    },
    animations: {run: [0, 25], jump: [25, 63, ["run"]]},
    images: []

})*/
