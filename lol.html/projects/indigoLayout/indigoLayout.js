$(".h1").css ({
    "margin" : "50px 0 0 0",
    "font-family" : "PT Sans Narrow, arial, sans-serif;",
    "font-size" : "21px",
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
console.log(screen)

document.querySelectorAll(".tagPExample").forEach((element) => {

    if ( screen < 771 ) { 
        element.style.marginLeft = "30px"
        console.log(element)
    } 
})

document.querySelectorAll(".h1").forEach((element) => {

    if ( screen < 771 ) { 
        element.style.width = "100%"
        console.log(element)
    } 
})

// меняем width containerAll при сжатии экрана. Зачем? - margin containerAll влияет на левый и правый отступ всего сайта. 
// При сжатии экрана margin уменьшается и в какой-то момент значение становится нулем и content сайта примыкает к границам экрана. Чтобы вернуть обратно отступы надо уменьшить width containerAll
// margina, которое можно изменить при помощи width containerAll (при изменении width меняется margin). Но мы не можем
// просто задавать всегда одно и то же значение width, так как на каждом сжатии экрана нужен разный width, но примерно - 213

let containerAll = document.getElementById("containerAll")
console.log(containerAll)


let getMargin = window.getComputedStyle(containerAll).margin // получаем все значения margin, но нам нужно только второе значение
console.log("margin: " + getMargin)

let secondValueMargin = getMargin.split("px") // получаем массив с нужным нам значением margin без px (нужен second)
console.log("marginSecond: " + secondValueMargin)


let gethWidth = window.getComputedStyle(containerAll).width // получаем значение width + px
console.log("width: " + gethWidth)

let width_Without_Px = gethWidth.split("px") // get массив без px
console.log("widthSecond: " + width_Without_Px)


if (secondValueMargin[1] < 57 ) {    // 57 - примерно такой margin находится слишком близко к краю экрана

    let normalWidth = width_Without_Px[0] - 213      // если условие выше вернет true, то это значит то, что width сейчас слишком большой для данного разрешения экрана. Примерно на 213 его надо уменьшить для получения нормального width
                                                    
        console.log(normalWidth)


        let changeMargin = containerAll.style.margin = "0 auto"

        console.log(changeMargin)
        

        let changeWidth = containerAll.style.width = normalWidth + "px"    // меняем ширину на нормальную. Не забываем добавить на конце "px"


    
}








let date = new Date ().toLocaleDateString()
let timeHeader = document.getElementById("timeHeader").innerHTML = date

let views = document.querySelector(".views")