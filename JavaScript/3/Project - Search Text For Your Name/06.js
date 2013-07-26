/*jshint multistr:true */
var text = "James James James";
var myName = "James";
var hits = [];
for (var i = 0; i < text.length; i++) {
    if (text[i] === "J") {
        for (var j = 0; i < + myName.length; i++) {
            hits.push("J");
        }
    }
}
if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}