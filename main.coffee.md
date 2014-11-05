SVG Test
========

    {width, height} = require "./pixie"

    style = document.createElement("style")
    style.innerHTML = require "./style"
    document.head.appendChild style

    paper = new Raphael(document.body, "100%", "100%")
    rect = paper.rect(0, 0, 50, 50).attr
      fill: '#F00'

    lines = 25
    [0...3*lines].forEach (n) ->
      m = width/lines
      line = paper.path( ["M", n * m - width, height, "L", width/2, height/2 ] )

    anim = Raphael.animation({transform: "r360"}, 10000).repeat(Infinity)
    rect.animate(anim)
