
let screen = document.documentElement.clientWidth

document.querySelectorAll(".tagPExample").forEach((element) => {

    if (screen < 771) {
        element.style.marginLeft = "30px"
    }
})

document.querySelectorAll(".h1").forEach((element) => {

    if (screen < 771) {
        element.style.width = "100%"
    }
})
