$(".h1").css({
    "margin-top" : "100px",
    "font-family" : "Arial"
})

$(".textP").css({
    "font-family" : "Arial",
    "font-size" : "20px",
    "margin" : "20px"
})



let date = new Date (Date.getFullYear, Date.getMonth)

let timeHeader = document.getElementById("timeHeader").innerHTML = date

