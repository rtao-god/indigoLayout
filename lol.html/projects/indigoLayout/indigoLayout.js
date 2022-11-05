$(".h1").css({
    "margin" : "50px 0 0 0",
    "font-family" : "Arial",
    "font-size" : "25px",
    "width" : "79%"

})

$(".textP").css({
    "font-family" : "Arial",
    "font-size" : "17px",
    "margin" : "20px 0 20px 20px",
    "width" : "79%"
})



let date = new Date ().toLocaleDateString()

let timeHeader = document.getElementById("timeHeader").innerHTML = date

