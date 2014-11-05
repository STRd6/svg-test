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
      "content": "SVG Test\n========\n\n    {width, height} = require \"./pixie\"\n\n    style = document.createElement(\"style\")\n    style.innerHTML = require \"./style\"\n    document.head.appendChild style\n\n    paper = new Raphael(document.body, \"100%\", \"100%\")\n    rect = paper.rect(0, 0, 50, 50).attr\n      fill: '#F00'\n\n    lines = 25\n    [0...3*lines].forEach (n) ->\n      m = width/lines\n      line = paper.path( [\"M\", n * m - width, height, \"L\", width/2, height/2 ] )\n\n    anim = Raphael.animation({transform: \"r360\"}, 10000).repeat(Infinity)\n    rect.animate(anim)\n",
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
      "content": "(function() {\n  var anim, height, lines, paper, rect, style, width, _i, _ref, _ref1, _results;\n\n  _ref = require(\"./pixie\"), width = _ref.width, height = _ref.height;\n\n  style = document.createElement(\"style\");\n\n  style.innerHTML = require(\"./style\");\n\n  document.head.appendChild(style);\n\n  paper = new Raphael(document.body, \"100%\", \"100%\");\n\n  rect = paper.rect(0, 0, 50, 50).attr({\n    fill: '#F00'\n  });\n\n  lines = 25;\n\n  (function() {\n    _results = [];\n    for (var _i = 0, _ref1 = 3 * lines; 0 <= _ref1 ? _i < _ref1 : _i > _ref1; 0 <= _ref1 ? _i++ : _i--){ _results.push(_i); }\n    return _results;\n  }).apply(this).forEach(function(n) {\n    var line, m;\n    m = width / lines;\n    return line = paper.path([\"M\", n * m - width, height, \"L\", width / 2, height / 2]);\n  });\n\n  anim = Raphael.animation({\n    transform: \"r360\"\n  }, 10000).repeat(Infinity);\n\n  rect.animate(anim);\n\n}).call(this);\n",
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