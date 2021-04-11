//a) Use join to create a single string from all, with names: comma-, space. and  # - separated.

var all = ["Lars", "Peter", "Jan", "Bo"];

console.log("All: " + all);
console.log("Comma: " + all.join(","));
console.log("Space: " + all.join(" "));
console.log("Pound: " + all.join("#"));


var all= ["Lars", "Peter", "Jan", "Bo"];
joined_all = all.join(', # ');
console.log(joined_all);

//b) Create a reducer function that will return the sum (105) of all values in numbers

var numbers = [2, 3, 67, 33];

let sum = numbers.reduce((total, num) => total + num);

console.log(sum);