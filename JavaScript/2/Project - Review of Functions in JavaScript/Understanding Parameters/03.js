var cube = function(x) {
    return x * x * x;
};

// The cube function works fine with a number...
console.log(cube(5));

// ...but if it's called with a string, it returns NaN!
console.log(cube("test"));