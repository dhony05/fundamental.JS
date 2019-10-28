

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


// you can even enter fuctions inside objects 
let dhonyObject  = 
{
  firstName :"Donelys",
  lastName  : "Familia",
  birthYear : 1994,
  isMarried :false,
  gender    : "M",
  calcAge   : function(birthYear){
    return 2019 - this.birthYear;
  },
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
  

};

console.log(dhonyObject.fullName() + " is " +  dhonyObject.calcAge() + " years old.")


