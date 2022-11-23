$(".h1").css ({
    "margin" : "50px 0 0 0",
    "font-family" : "Arial",
    "font-size" : "25px",
    "width" : "70%",
    "color" : "black"
}) 

$(".textP").css ({
    "font-family" : "Arial",
    "font-size" : "14px",
    "margin" : "20px 0 20px 0px",
    "width" : "90%"
})

$(".tagPExample").css ({
    "color" : "purple",
    "font-size" : "20px",
    "margin-left" : "230px",
})  

$("#textResult").css ({
    "margin-bottom" : "150px"
})


function replaceTag( element, newTag )
{
    var elementNew = document.createElement( newTag );
    elementNew.innerHTML = element.innerHTML;

    Array.prototype.forEach.call( element.attributes, function( attr ) {
        elementNew.setAttribute( attr.name, attr.value );
    });

    element.parentNode.insertBefore( elementNew, element );
    element.parentNode.removeChild( element );
    return elementNew;
}

let screen = document.documentElement.clientWidth
console.log(screen)

document.querySelectorAll(".tagPExample").forEach((element) => {

    if ( screen < 771 ) { 
        element.style.marginLeft = "30px"
        console.log(element)
    } 
})






    


let date = new Date ().toLocaleDateString()
let timeHeader = document.getElementById("timeHeader").innerHTML = date

let views = document.querySelector(".views")