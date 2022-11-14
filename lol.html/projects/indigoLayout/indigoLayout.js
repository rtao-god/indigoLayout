$(".h1").css({
    "margin" : "50px 0 0 0",
    "font-family" : "Arial",
    "font-size" : "25px",
    "width" : "75%",
    "color" : "black"
})

$(".textP").css({
    "font-family" : "Arial",
    "font-size" : "17px",
    "margin" : "20px 0 20px 20px",
    "width" : "90%"
})

$(".tagPreExample").css({
    "color" : "purple",
    "font-size" : "15px"
})



let date = new Date ().toLocaleDateString()

let timeHeader = document.getElementById("timeHeader").innerHTML = date


$("#viloletHrLeft").onmousemove = function(event) {
    event = event || window.event

    console.log(event)

    
}

$("#blackHrRight").onmousemove = function(event) {

}




