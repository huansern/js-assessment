exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return x => str + ', ' + x;
  },

  makeClosures: function(arr, fn) {
    return arr.map(x => (y => x * x));
  },

  partial: function(fn, str1, str2) {
    return s => fn(str1, str2, s);
  },

  useArguments: function() {
    return [...arguments].reduce((total, current) => total + current);
  },

  callIt: function(fn) {
    fn.apply(null, [...arguments].slice(1));
  },

  partialUsingArguments: function(fn) {
    let args = [...arguments].slice(1);
    return function() {
        return fn.call(null, ...args, ...arguments);
    }
  },

  curryIt: function(fn) {

  }
};
