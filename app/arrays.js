exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((total, current) => total + current);
  },

  remove: function(arr, item) {
    return arr.filter(entry => entry !== item );
  },

  removeWithoutCopy: function(arr, item) {
    let index = 0;
    while(index < arr.length) {
        if (arr[index] === item) {
            arr.splice(index, 1);
        } else {
            index++;
        }
    }
    return arr;
  },

  append: function(arr, item) {
    return [...arr, item];
  },

  truncate: function(arr) {
    return arr.slice(0, -1);
  },

  prepend: function(arr, item) {
    return [item, ...arr];
  },

  curtail: function(arr) {
    return arr.slice(1);
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    return [...arr.slice(0, index), item, ...arr.slice(index)];
  },

  count: function(arr, item) {
    return arr.filter(entry => entry === item).length;
  },

  duplicates: function(arr) {
    let dupes = [];
    for(let index = 0; index < arr.length - 1; index++) {
        if ((arr.slice(index + 1).indexOf(arr[index]) !== -1)
            && (dupes.indexOf(arr[index]) === -1)) {
            dupes.push(arr[index]);
        }
    }
    return dupes;
  },

  square: function(arr) {
    return arr.map(entry => entry * entry);
  },

  findAllOccurrences: function(arr, target) {
    return (arr.map((entry, index) => (entry === target) ? index : -1)).filter(entry => entry !== -1);
  }
};
