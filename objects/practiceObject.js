

/********
* Objects and properties
with object we define key - value pairs
* the order doesnt matter
********/
// this syntax is called Object literal
var jonh =
{
  fullName : 'Juan Lopez',
  bithYear : 1995,
  family:['Juanito','Dany','Daniela'],
  isMarried: false,
  job: 'programmer'
};

console.log(jonh.fullName);
console.log(jonh.family);


// another way to create an object in JS.
// using the new Object() syntax

var dhony = new Object();
dhony.currentJob = 'Programmer';
dhony.name = 'Donelys';
dhony.lastname = 'Familia';
dhony.isMarried = false;

console.log(dhony);
