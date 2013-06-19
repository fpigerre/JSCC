var volume = function (w, l, h) {
    var area = w * l;
    return area * h;
};

 var area = 36;
console.log("Inside the function, area is 6");
console.log("The volume is " + volume(2, 3, 4));
console.log("Outside the function, area is " + area);