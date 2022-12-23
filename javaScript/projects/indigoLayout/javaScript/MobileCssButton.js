document.getElementById("box2Drop").classList.toggle("activeArrow")

if ($("#arrowTopBar")) {

    $("#arrowTopBar").css({
        "transform": "rotate(0turn)"
    })

}

function topBarDropFunction() {

    $("#arrowTopBar").css({
        "transform": "rotate(0.5turn)"
    })

    $("#dropTopBar").css({
        "height": "100%",
        "width": "100%",
        "float": "none",
        "margin-left": "0",
    })

    $("#topBar").css({
        "align-items": "none",
        "display": "block",
        "width": "100%",
        "height": "100%",
    })

    $("#box2Drop a").css({
        "flex-wrap": "wrap",
        "align-content": "center",
        "justify-content": "flex-start",
        "padding-left": "15px",
        "padding": "10px",
        "display": "flex",
        "height": "30px",
        "border-bottom-width": "1px",
        "background": "url(photo/arrow/rightarrow.png) 98% 48% no-repeat",
    })

    $("#box1").css({
        "width": "95%",
    })

    if (screen < 607) {
        $("#box1").css({
            "width": "94%",
        })
    }

    if (screen < 501) {
        $("#box1").css({
            "width": "92%",
        })
    }

    if (screen < 405) {
        $("#box1").css({
            "width": "91%",
        })
    }

    if (screen < 405) {
        $("#dropTopBar").css({
            "margin-left": "25%"
        })
    }

    if (screen < 501) {
        $("#box2Drop a").css({
            "background": "url(photo/arrow/rightarrow.png) 95% 48% no-repeat"
        })

        $("#dropTopBar").css({
            "margin-left": "1%"
        })
    }

}

$("#arrowTopBar").click(function () {
    $("#box2Drop").slideToggle(".active")

    $("#box2Drop").css({
        "display": "block"
    })

    $("#arrowTopBar").css({
        "transform": "rotate(0.5turn)"
    })
})

if (screen < 405) {
    $("#dropTopBar").css({
        "margin-left": "25%"
    })
}


function dropLinkMenuFunction() {

    $("#linkMenuDropLi").slideToggle(".active")

    $("#linkMenuDropLi").css({
        "display": "block",
        "list-style-type": "none"
    })

    document.getElementById("menuDropArrow").innerHTML = ("Свернуть меню")

}