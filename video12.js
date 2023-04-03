//console.log ("i will succeed incha'allah");
/*insertion
d'un 
HTML*/
const name = 'jhon';
const age = 31;
const job = 'web developer';
const city = 'Miami';

let html1;


// without template string (es5)
html1 = '<ul><li>Name: ' + name + '</li><li>Age: ' + age 
+'</li><li>Job: ' + job +'</li><li>City: ' + city + '</li></ul>'
 
html1 = '<ul>' +
      '<li>Name: ' + name + '</li>'+
      '<li>Age: ' + age + '</li> '+ 
      '<li>Job: ' + job + '</li>'+
      '<li>City: ' + city + '</li>'+ 
      '</ul>' ;
function hello () {return 'hello';}
      //with template strings (es6)

      html1=`
      <ul>
      <li>Name : ${name}</li>
      <li>Age : ${age}</li>
      <li>Job : ${job}</li>
      <li>City : ${city}</li>
      <li>${2+2}</li>
      <li>${hello()}</li>
      <li>${age>30 ? 'over 30' : 'under 30'}</li>
      </ul>
      `
      ;
         



document.body.innerHTML = html1;