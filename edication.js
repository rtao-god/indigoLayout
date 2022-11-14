
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
 
document.querySelector('#box1').onmousemove = function (event) {

    event = event || window.event

    console.log(event)

    document.querySelector('.x').innerHTML = event.offsetX
    

}
box3.onmousemove = function (event1) {

    event1 = event1 || window.event1
    document.querySelector('.y').innerHTML = event1.offsetY
}




// function getPosition (e) {
//     let x = y = 0

//     if (!e) {
//         let e = window.event
//     }

//     if (e.pageX || e.pageY ) {
//          x = e.pageX
//          y = e.pageY
//     }
// }

$(box3).css({
    "color" : "violet"
})































