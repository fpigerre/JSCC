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