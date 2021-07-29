// kintamieji

var newBlock = $(".btn");
var width = $("#b-width");
var height = $("#b-height");
var playground = $(".playground");
var color = $("select");


newBlock.click(function () {
    plotis = width.val();
    aukstis = height.val();
    spalva = color.val();
    naujasBlokelis = document.createElement("div");
    naujasBlokelis.classList.add("trinti");
    naujasBlokelis.style.width = plotis + "px";
    naujasBlokelis.style.height = aukstis + "px";
    naujasBlokelis.style.background = spalva;
    playground.append(naujasBlokelis);
})

playground.click(function (e) {
    if (e.target.classList.contains("trinti")) {
        e.target.classList.add("disapear");
    }
})