const firstName ='aymen';
const lastName = 'omri';
const age = 36;
const str = 'hello there my name is brad';
const tags = 'web design,web development,programing';


let val;
val = firstName + lastName;
// concatenation

val = firstName+ ' ' + lastName;
// appending
val ='brad';
val += ' traversy';
val = 'hello, my name is ' +  firstName + ' and i am ' + age + ' years '; 
//escaping 
val = 'that\'s awesome, i can\'t wait' ;
val = firstName.length;

// concat()
val = firstName.concat(' ',lastName);
//change case 

val = firstName.toLocaleUpperCase();
val = lastName.toLocaleLowerCase();

val = firstName[0];
//indexOf() 
val = firstName.indexOf('a');
val = firstName.lastIndexOf('y');

// charAt ()
val=firstName.charAt('1');

// get last char
val = firstName.charAt(firstName.length-1);
//substring()
val = firstName.substring(0,4);
//slice 

val = val = firstName.slice(0,4);
val = val = firstName.slice(-1);
// split()
val = str.split(' ');
val = tags.split(',');
//replace

val = str.replace('brad','jack');
// includes 
val = str.includes('brad');

 

console.log(val);