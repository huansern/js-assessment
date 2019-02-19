exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let counter = {
        id: 0,
        count: () => {
            console.log(start++);
            if(start <= end) {
                counter.id = setTimeout(counter.count, 100)
            }
            return counter;
        },
        cancel: () => clearTimeout(counter.id)
    };
    return counter.count();
  }
};
