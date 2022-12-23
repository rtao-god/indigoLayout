
// let originalText0 = $("#box2Drop a")

// let smallText0 = originalText0.html().toLowerCase()

// originalText0.html(smallText0)



// let originalText1 = $("#linkMenuDropLi")

// let smallText1 = originalText1.html().toLowerCase()

// originalText1.html(smallText1)


let textHtml = [$("#box2Drop a")]
// console.log(textHtml)

let textOriginal = $("#box2Drop a").text()

let letters = textOriginal.split(". ")

for (let i in letters) {
    letters[i] = letters[i].toLowerCase()
}

for (let i in letters) {
    letters[i] = letters[i][0].toUpperCase() + letters[i].substr(1)
}


for (let i in letters) {

    for (let g in textHtml) {

        textHtml[g].innerHTML = letters[i]
        textHtml[g].html(letters[i])

        $("#box2Drop a").innerHTML = letters[i]
        $("#box2Drop a").html(letters[i])

       
        console.log(letters)
        console.log(letters[i])
        console.log(textHtml)
        console.log(textHtml[g])
        
    }
}


// console.log(letters)

