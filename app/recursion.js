exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    let f = x => (x <= 2) ? 1 : (f(x - 2) + f(x - 1));
    return f(n);
  },

  validParentheses: function(n) {

  }
};
