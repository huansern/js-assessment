exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let result = '', lastChar = '', count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== lastChar) {
            lastChar = str[i];
            result += lastChar;
            count = 1;
        } else {
            if(count < amount) {
                result += lastChar;
            }
            count++;
        }
    }
    return result;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
