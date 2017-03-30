const marked = require('marked');

// Async highlighting with pygmentize-bundled
marked.setOptions({
  highlight(code, lang) {
    if (lang === 'nomnoml') {
      return require('nomnoml').renderSvg(code);
    } else {
      return require('highlight.js').highlightAuto(code).value;

    }
  }
});

modules.export = marked;
