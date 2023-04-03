// create some array
const numbers = [43,55,69,66,78,14,];
const numbers2 = new Array(22,44,56,21);
const fruit = ['aple','banana','orange','pear'];
const mixed = [22,'hello',true,undefined,null,{a:1,b:1},new Date()];



console.log(numbers2);
console.log(mixed);

let val;

//get array length
val = numbers.length;
//check if he is array
val = Array.isArray(numbers);
//get single value
val = numbers[5];
val = numbers[0];
numbers [2] = 100;

// find the index of value

//val = numbers.indexOf(14);
// mutating arrays 
//add to the end of array
//numbers.push(15);
//add on to front 
//numbers.unshift(50);
// take off from end 
//numbers.pop();
//take of from the front 
//numbers.shift();
// splice value
//numbers.splice(0,2);
//reverse array
// numbers.reverse();
// //concatenate array
// val = numbers.concat(numbers2.reverse());
// // sorting array

// val = fruit.sort();
// val = numbers.sort();
// // use the "compare function"
// // croissant
// val = numbers.sort(function(x,y){
//     return x-y
// })
// // decroissant 
// val = numbers.sort(function(x,y){
//     return y-x
// })

//find
function under50 (num) {
    return num <50;
}
val = numbers.find(under50);



console.log(numbers);
console.log(val);