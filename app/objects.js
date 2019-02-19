exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let result = [];
    for(let [key, value] of Object.entries(obj)) {
        if(obj.hasOwnProperty(key)) {
            result.push(key + ': ' + value);
        }
    }
    return result;
  }
};
