const marked = require('marked');

// TODO: these ends up setting the global marked options, may cause issues if
// people include this and also used there own marked stuff.
marked.setOptions({
  highlight(code, lang) {
    if (lang === 'nomnoml' || lang == 'noml') {
      return require('nomnoml').renderSvg(code);
    } else {
      return require('highlight.js').highlightAuto(code).value;

    }
  }
});

module.exports = function(content, callback) {
  if (typeof callback === 'function') {
    return marked(Content, callback);
  } else {
    return new Promise((resolve, reject) => {
      marked(content, (err, content) => {
        if (err) { reject(err); }
        else     { resolve(content); }
      });

    });
  }
};
