// Define quarter here.
var quarter = function (number) {
    return(number / 4);
}
//End of function Definition. Start of if/else
if (quarter(24) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}
