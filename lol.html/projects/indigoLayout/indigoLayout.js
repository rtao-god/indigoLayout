let date = new Date ().toLocaleDateString()
let timeHeader = document.getElementById("timeHeader").innerHTML = date

$(".h1").css ({
    "margin" : "50px 0 0 0",
    "font-family" : "PT Sans Narrow, arial, sans-serif",
    "font-size" : "19px",
    "width" : "70%",
    "color" : "#111",
    "font-height" : "27px;"
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

// замена старого тега html на новый при этом сохранив все свойства css
// function replaceTag( element, newTag )
// {
//     var elementNew = document.createElement( newTag );
//     elementNew.innerHTML = element.innerHTML;

//     Array.prototype.forEach.call( element.attributes, function( attr ) {
//         elementNew.setAttribute( attr.name, attr.value );
//     });

//     element.parentNode.insertBefore( elementNew, element );
//     element.parentNode.removeChild( element );
//     return elementNew;
// }

let screen = document.documentElement.clientWidth
console.log("screen: " + screen)

document.querySelectorAll(".tagPExample").forEach((element) => {

    if ( screen < 771 ) { 
        element.style.marginLeft = "30px"
       
    } 
})

document.querySelectorAll(".h1").forEach((element) => {

    if ( screen < 771 ) { 
        element.style.width = "100%"
       
    } 
})



// меняем width containerAll при сжатии экрана. Зачем? - margin containerAll влияет на левый и правый отступ всего сайта. 
// При сжатии экрана margin уменьшается и в какой-то момент значение становится нулем и content сайта примыкает к границам экрана. 
// Чтобы вернуть обратно отступы надо уменьшить width containerAll примерно на 50px


let containerAll = document.getElementById("containerAll")

let marginLeft = parseInt(getComputedStyle(containerAll, null).marginLeft)

console.log("marginLeft: " + marginLeft)

let gethWidth = containerAll.offsetWidth 
console.log("width: " + gethWidth)


if (marginLeft < 57 && screen > 1060 ) {    // 57 - примерно такой margin находится слишком близко к краю экрана. 1060 - примерно на таком разрешении экрана 213 не хватает, так что функция перестает работать 
    
    
    let normalWidth = gethWidth - 50      // если условие выше вернет true, то это значит то, что width сейчас слишком большой для данного разрешения экрана. Примерно на 50 его надо уменьшить для получения нормального width
    console.log("normalWidth: " + normalWidth)

    let changeWidth = containerAll.style.width = normalWidth + "px"                                        
    console.log("modified width: " + changeWidth)
        

    let marginLeft = parseInt(getComputedStyle(containerAll, null).marginLeft)
    console.log("marginLeft: " + marginLeft)

    let changeMarginRight = containerAll.style.marginRight = marginLeft + "px" 
    let changeMarginLeft = containerAll.style.marginLeft = marginLeft + "px" 

}

function topBarDropFunction () {
        
    $("#dropTopBar").css ({
        "height" : "100%",
        "width" : "100%",
        "float" : "none",
        "margin-left" : "0",    
    })

    $("#topBar").css ({
        "align-items" : "none",
        "display" : "block",
        "width" : "100%",
        "height" : "100%",
    })

    $("#box2Drop a").css ({
        "flex-wrap" : "wrap",
        "align-content" : "center",
        "justify-content" :  "flex-start",
        "padding-left" : "15px",
        "padding" : "10px",
        "display" : "flex",
        "height" : "30px",
        "border-bottom-width" : "1px",
        "background" : "url(photo/rightarrow.png) 98% 48% no-repeat",
    })

    $("#box1").css ({
        "width" : "95%",
    })

    if(screen < 607) {
        $("#box1").css ({
            "width" : "94%",
        })
    }

    if(screen < 501) {
        $("#box1").css ({
            "width" : "92%",
        })
    }

    if(screen < 405) {
        $("#box1").css ({
            "width" : "91%",
        })
    }

    if(screen < 405) {
        $("#dropTopBar").css({
            "margin-left" : "25%"
        })
    }

    if(screen < 501) {
        $("#box2Drop a").css ({
            "background" : "url(photo/rightarrow.png) 95% 48% no-repeat"
        })
    
        $("#dropTopBar").css ({
            "margin-left" : "1%"
        })
    }
    
}

$("#arrowTopBar").click(function () {
    $("#box2Drop").slideToggle(".active")

    $("#box2Drop").css ({
        "display" : "block"
    })

    $("#arrowTopBar").css({
        "transform" : "rotate(0.5turn)"
    })  
})

if(screen < 405) {
    $("#dropTopBar").css({
        "margin-left" : "25%"
    })
}

$("#arrowTopBar").css({
    "transform" : "rotate(1turn)"
})












