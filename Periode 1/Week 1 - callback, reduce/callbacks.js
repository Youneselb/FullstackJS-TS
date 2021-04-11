// Opgave 2) --> CALLBACKS

/*
a) Implement a function: myFilter(array, callback)that takes an array as the first 
   argument, and a callback as the second and returns a new (filtered) array
   according to the code provided in the callback (that is with the same behaviour
   as the original filter method).
*/

const numberArray = [1, 10, 20, 30, 40, 50, 60, 70];

function myfilter(array, callback) {
  let filteredArray = [];
  array.forEach((element) => {
    if (callback(element)) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
}

let newFilter = numberArray.filter((element) => {
    if (element > 40) {
        return element;
    }
});

console.log(newFilter);


/*
b) Implement a function: myMap(array, callback)that, provided an array and a callback, 
   provides the same functionality as calling the existing map method on an array.
*/

/*
b) Implement a function: myMap(array, callback)that, provided an array and a callback, 
   provides the same functionality as calling the existing map method on an array.
*/

let mapNumbers = [1,2,3,4,5,6,7,8,9,10];

function myMap(array, callback){
    return callback(array);
}

function mapped_callback(array){
    let temp = [];
    array.forEach( (number) =>{
    temp.push('*'+ number +'*');    
    })
return temp;
};


// Using/testing with the map-method.
let mapped_numbers = mapNumbers.map((number) =>{
    return '*'+ number +'*';
 
});

console.log(myMap(mapNumbers,mapped_callback)); 
console.log(mapped_numbers)

// 3) Prototype/property

Array.prototype.myFilter = function(callback){
    let temp = [];
    this.forEach(element =>{
     if (callback(element)) temp.push(element);
    });
    return temp;
};

Array.prototype.myMap = function(callback){
    let temp = [];
    this.forEach(element =>{
        if(callback(element)) temp.push(element);
    });
    return temp;
};

console.log(mapNumbers.myFilter((number) => (number < 5)));
console.log(mapNumbers.myMap((number) => (number > 5)));

