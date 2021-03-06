exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    return ('00000000' + num.toString(2)).slice(-8);
  },

  multiply: function(a, b) {
    return a * b;
  }
};
