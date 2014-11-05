SVG Test
========

    style = document.createElement("style")
    style.innerHTML = require "./style"
    document.head.appendChild style

    paper = new Raphael(document.body, "100%", "100%")
    rect = paper.rect(20, 20, 20, 20).attr
      fill: '#F00'

    anim = Raphael.animation({transform: "r360"}, 1000).repeat(Infinity)
    rect.animate(anim)
