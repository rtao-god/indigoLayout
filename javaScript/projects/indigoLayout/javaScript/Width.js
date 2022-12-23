

// меняем width containerAll при сжатии экрана. Зачем? - margin containerAll влияет на левый и правый отступ всего сайта.
// При сжатии экрана margin уменьшается и в какой-то момент значение становится нулем и content сайта примыкает к границам экрана.
// Чтобы вернуть обратно отступы надо уменьшить width containerAll примерно на 50px
    

let containerAll = document.getElementById("containerAll")

let marginLeft = parseInt(getComputedStyle(containerAll, null).marginLeft)

console.log("marginLeft: " + marginLeft)

let gethWidth = containerAll.offsetWidth
console.log("width: " + gethWidth)


if (marginLeft < 57 && screen > 1060) {    // 57 - примерно такой margin находится слишком близко к краю экрана.   1060 - примерно на таком разрешении экрана 213 не хватает, так что функция перестает работать


    let normalWidth = gethWidth - 50      // если условие выше вернет true, то это значит то, что width сейчас слишком большой для данного разрешения экрана. Примерно на 50 его надо уменьшить для получения нормального width
    console.log("normalWidth: " + normalWidth)

    let changeWidth = containerAll.style.width = normalWidth + "px"
    console.log("modified width: " + changeWidth)


    let marginLeft = parseInt(getComputedStyle(containerAll, null).marginLeft)
    console.log("marginLeft: " + marginLeft)

    let changeMarginRight = containerAll.style.marginRight = marginLeft + "px"
    let changeMarginLeft = containerAll.style.marginLeft = marginLeft + "px"

}
