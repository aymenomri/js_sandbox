let x;
const name = 'jhon';
const age = 32;



x = 'hello,my name is '+name+' and i am ' + age +' years old';
//template literals
x = `hello,my name is ${name} and i am ${age} years old`;

// string propreties and methods 
const s = new String('hello world');

x = typeof(s);
x = s.length;
// acces value by key
//x = s[1];
//x = s.__proto__;

x = s.toLowerCase();
x = s.toUpperCase();


x = s.indexOf('e');
x = s.charAt(0);


console.log(x);
