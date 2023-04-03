const person = {
    firstName : 'steve',
    lastName : 'smith',
    age : 42,
    email : 'steve@aol.com',
    hobbies :['music','sports'],
    adress :{
        city :'miami',
        state : 'fl'
    },
    getbirthYear : function()
    { return 2023 - this.age ;}

};
let val ;
val= person;
//get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.adress.city;
val = person['adress']['city'];
val = person.getbirthYear();




console.log(val);

const people = [
{name : 'jhon',age : 30},
{name : 'mike' ,age : 23}
];
