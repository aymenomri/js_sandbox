let val;

//number to string
val=String(5);
val=String(5+1);
//let convert a boolean to a string
val=String(true);
//data to string
val=String(new Date());
// array to string
val=String([1,2,3,4,5]);
//toString()
val=(5).toString();
val=(true).toString();

// turning string to number

val = Number('15');
// bool to number
val=Number(true);
val=Number(false);
val=Number(null);
val=Number('hello');
val=Number([1,2,3,4,5]);
val=parseInt('100.3');
val=parseFloat('100.30');

// // output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));
// coercion
const val1=String(5);
const val2=7;
const sum = val1+val2;
console.log(sum);
console.log(typeof (sum));

