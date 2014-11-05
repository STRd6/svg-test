SVG Test
========

    TAU = 2 * Math.PI

    expr = (rate) ->
      Math.log(1-Math.random())/(-rate)

    {width, height} = require "./pixie"

    style = document.createElement("style")
    style.innerHTML = require "./style"
    document.head.appendChild style

    paper = new Raphael(document.body, "100%", "100%")

    lineColor = 'rgba(128, 128, 226, 0.5)'

    drawPerspective = ->
      lines = 25
      [0...3*lines].forEach (n) ->
        m = width/lines
        line = paper.path( ["M", n * m - width, height, "L", width/2, height/2 ] )

    initialPoints = [
      [200, 200]
      [700, 350]
      [450, 500]
    ]
    
    movementFns = [
      (t) ->
        [osc(t, 10) * 10, osc(t, 19, TAU/4) * 15]
      (t) ->
        [osc(t, 7) * 5, osc(t, 17, TAU/4) * 15]
      (t) ->
        [osc(t, 11) * 20, osc(t, 21, TAU/4) * 15]
    ]

    points = []
    lines = []

    updateLines = ->
      lines = points.map (p, i) ->
        if i is 0
          line(p, points[points.length-1])
        else
          line(p, points[i-1])

    line = ([x1, y1], [x2, y2]) ->
      # (y2 - y1)x - (x2 - x1)y = (x1y2 - x2y1)

      dy = y2 - y1
      dx = x2 - x1

      crossProduct = x1 * y2 - x2 * y1

      y1 = (crossProduct/-dx)
      y2 = (crossProduct - width * dy)/(-dx)

      [0, y1, width, y2]

    drawLines = ->
      lines.forEach ([x1, y1, x2, y2]) ->
        paper.path ["M", x1, y1, "L", x2, y2]
        .attr
          stroke: lineColor

    drawCircles = ->
      points.forEach ([x, y]) ->
        paper.circle x, y, 50
        .attr
          fill: "rgba(255, 0, 0, 0.75)"
          stroke: "none"

    osc = (t, period, phi=0) ->
      Math.sin TAU * t / period + phi

    tracks = []
    PATH_TIME = 10

    [0..2].forEach (i) ->
      track = tracks[i] = []
      rate = 0.12

      addBall = ->
        track.push
          t: 0
          color: "rgba(0, 0, 255, 0.75)"

        setTimeout addBall, expr(rate) * 1000
      setTimeout addBall, expr(rate) * 1000

    update = (t) ->
      initialPoints.forEach ([x, y], i) ->
        [fx, fy] = movementFns[i](t)
        points[i] = [fx + x, fy + y]

      updateLines()

      tracks.forEach (track) ->
        track.forEach (ball) ->
          ball.t += dt

        track = track.filter ({t}) ->
          t < PATH_TIME

    drawBalls = ->
      tracks.forEach (track, i) ->
        track.forEach (ball) ->
          drawBall ball, i

    lerp = (a, b, t) ->
      a + (b - a) * t

    pointAt = ([x1, y1, x2, y2], t) ->
      [lerp(x1, x2, t), lerp(y1, y2, t)]

    drawBall = (ball, i) ->
      [x, y] = pointAt(lines[i], ball.t/PATH_TIME)
      
      paper.circle x, y, 20
      .attr
        fill: "rgba(0, 255, 255, 0.75)"
        stroke: "none"

    draw = ->
      paper.clear()
      drawCircles()
      drawLines()
      drawBalls()

    t = 0
    dt = 1/60

    animate = ->
      requestAnimationFrame animate
      update(t)
      draw()
      t += dt

    requestAnimationFrame animate
