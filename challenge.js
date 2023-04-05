//  solution 1:
let x;
x = 'developer';

y = x.charAt(0).toUpperCase()+ x.substring(1);


//solution 2 :

y = x[0].toUpperCase() + x.substring(1);

// solution 3 :

y = `${x[0].toUpperCase()}${x.substring(1)}`;

// solution 3 with using slice

y = x[0].toUpperCase() + x.slice(1);

console.log(y);