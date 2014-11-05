window["STRd6/svg-test:master"]({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2014 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n\n",
      "mode": "100644",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "content": "svg-test\n========\n\nTesting svgs\n",
      "mode": "100644",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "content": "SVG Test\n========\n\n    TAU = 2 * Math.PI\n\n    expr = (rate) ->\n      Math.log(1-Math.random())/(-rate)\n\n    {width, height} = require \"./pixie\"\n\n    style = document.createElement(\"style\")\n    style.innerHTML = require \"./style\"\n    document.head.appendChild style\n\n    paper = new Raphael(document.body, \"100%\", \"100%\")\n\n    lineColor = 'rgba(128, 128, 226, 0.5)'\n\n    drawPerspective = ->\n      lines = 25\n      [0...3*lines].forEach (n) ->\n        m = width/lines\n        line = paper.path( [\"M\", n * m - width, height, \"L\", width/2, height/2 ] )\n\n    initialPoints = [\n      [200, 200]\n      [700, 350]\n      [450, 500]\n    ]\n    \n    movementFns = [\n      (t) ->\n        [osc(t, 10) * 10, osc(t, 19, TAU/4) * 15]\n      (t) ->\n        [osc(t, 7) * 5, osc(t, 17, TAU/4) * 15]\n      (t) ->\n        [osc(t, 11) * 20, osc(t, 21, TAU/4) * 15]\n    ]\n\n    points = []\n\n    drawLines = ->\n      points.forEach (p, i) ->\n        if i is 0\n          drawLine(p, points[points.length-1])\n        else\n          drawLine(p, points[i-1])\n\n    drawLine = ([x1, y1], [x2, y2]) ->\n      # (y2 - y1)x - (x2 - x1)y = (x1y2 - x2y1)\n\n      dy = y2 - y1\n      dx = x2 - x1\n\n      crossProduct = x1 * y2 - x2 * y1\n\n      y1 = (crossProduct/-dx)\n      y2 = (crossProduct - width * dy)/(-dx)\n\n      paper.path [\"M\", 0, y1, \"L\", width, y2]\n      .attr\n        stroke: lineColor\n\n    drawCircles = ->\n      points.forEach ([x, y]) ->\n        paper.circle x, y, 50\n        .attr\n          fill: \"rgba(255, 0, 0, 0.75)\"\n          stroke: \"none\"\n\n    osc = (t, period, phi=0) ->\n      Math.sin TAU * t / period + phi\n\n    update = (t) ->\n      initialPoints.forEach ([x, y], i) ->\n        [fx, fy] = movementFns[i](t)\n        points[i] = [fx + x, fy + y]\n\n    draw = ->\n      paper.clear()\n      drawCircles()\n      drawLines()\n\n    t = 0\n\n    animate = ->\n      requestAnimationFrame animate\n      update(t)\n      draw()\n      t += 1/60\n\n    requestAnimationFrame animate\n\n    followers = []\n",
      "mode": "100644"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "content": "remoteDependencies: [\n  \"https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min.js\"\n]\nwidth: 960\nheight: 540\n",
      "mode": "100644"
    },
    "style.styl": {
      "path": "style.styl",
      "content": "html\n  height: 100%\n\nbody\n  height: 100%\n  margin: 0\n  overflow: hidden\n",
      "mode": "100644"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var TAU, animate, draw, drawCircles, drawLine, drawLines, drawPerspective, expr, followers, height, initialPoints, lineColor, movementFns, osc, paper, points, style, t, update, width, _ref;\n\n  TAU = 2 * Math.PI;\n\n  expr = function(rate) {\n    return Math.log(1 - Math.random()) / (-rate);\n  };\n\n  _ref = require(\"./pixie\"), width = _ref.width, height = _ref.height;\n\n  style = document.createElement(\"style\");\n\n  style.innerHTML = require(\"./style\");\n\n  document.head.appendChild(style);\n\n  paper = new Raphael(document.body, \"100%\", \"100%\");\n\n  lineColor = 'rgba(128, 128, 226, 0.5)';\n\n  drawPerspective = function() {\n    var lines, _i, _ref1, _results;\n    lines = 25;\n    return (function() {\n      _results = [];\n      for (var _i = 0, _ref1 = 3 * lines; 0 <= _ref1 ? _i < _ref1 : _i > _ref1; 0 <= _ref1 ? _i++ : _i--){ _results.push(_i); }\n      return _results;\n    }).apply(this).forEach(function(n) {\n      var line, m;\n      m = width / lines;\n      return line = paper.path([\"M\", n * m - width, height, \"L\", width / 2, height / 2]);\n    });\n  };\n\n  initialPoints = [[200, 200], [700, 350], [450, 500]];\n\n  movementFns = [\n    function(t) {\n      return [osc(t, 10) * 10, osc(t, 19, TAU / 4) * 15];\n    }, function(t) {\n      return [osc(t, 7) * 5, osc(t, 17, TAU / 4) * 15];\n    }, function(t) {\n      return [osc(t, 11) * 20, osc(t, 21, TAU / 4) * 15];\n    }\n  ];\n\n  points = [];\n\n  drawLines = function() {\n    return points.forEach(function(p, i) {\n      if (i === 0) {\n        return drawLine(p, points[points.length - 1]);\n      } else {\n        return drawLine(p, points[i - 1]);\n      }\n    });\n  };\n\n  drawLine = function(_arg, _arg1) {\n    var crossProduct, dx, dy, x1, x2, y1, y2;\n    x1 = _arg[0], y1 = _arg[1];\n    x2 = _arg1[0], y2 = _arg1[1];\n    dy = y2 - y1;\n    dx = x2 - x1;\n    crossProduct = x1 * y2 - x2 * y1;\n    y1 = crossProduct / -dx;\n    y2 = (crossProduct - width * dy) / (-dx);\n    return paper.path([\"M\", 0, y1, \"L\", width, y2]).attr({\n      stroke: lineColor\n    });\n  };\n\n  drawCircles = function() {\n    return points.forEach(function(_arg) {\n      var x, y;\n      x = _arg[0], y = _arg[1];\n      return paper.circle(x, y, 50).attr({\n        fill: \"rgba(255, 0, 0, 0.75)\",\n        stroke: \"none\"\n      });\n    });\n  };\n\n  osc = function(t, period, phi) {\n    if (phi == null) {\n      phi = 0;\n    }\n    return Math.sin(TAU * t / period + phi);\n  };\n\n  update = function(t) {\n    return initialPoints.forEach(function(_arg, i) {\n      var fx, fy, x, y, _ref1;\n      x = _arg[0], y = _arg[1];\n      _ref1 = movementFns[i](t), fx = _ref1[0], fy = _ref1[1];\n      return points[i] = [fx + x, fy + y];\n    });\n  };\n\n  draw = function() {\n    paper.clear();\n    drawCircles();\n    return drawLines();\n  };\n\n  t = 0;\n\n  animate = function() {\n    requestAnimationFrame(animate);\n    update(t);\n    draw();\n    return t += 1 / 60;\n  };\n\n  requestAnimationFrame(animate);\n\n  followers = [];\n\n}).call(this);\n",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"remoteDependencies\":[\"https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min.js\"],\"width\":960,\"height\":540};",
      "type": "blob"
    },
    "style": {
      "path": "style",
      "content": "module.exports = \"html {\\n  height: 100%;\\n}\\n\\nbody {\\n  height: 100%;\\n  margin: 0;\\n  overflow: hidden;\\n}\";",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://www.danielx.net/editor/"
  },
  "entryPoint": "main",
  "remoteDependencies": [
    "https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.2/raphael-min.js"
  ],
  "repository": {
    "branch": "master",
    "default_branch": "master",
    "full_name": "STRd6/svg-test",
    "homepage": null,
    "description": "Testing svgs",
    "html_url": "https://github.com/STRd6/svg-test",
    "url": "https://api.github.com/repos/STRd6/svg-test",
    "publishBranch": "gh-pages"
  },
  "dependencies": {}
});