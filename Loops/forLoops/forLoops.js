let dhony = ['Donelys', 'Familia', '90\'s ',90,' kidd', 'programmer','gamer',1990];
/******************************/
/* for loops, for loops in Js wors as the same in Java
*/

for (let i = 0; i < 10; i++)
{
  console.log(i);
}
/******************************/
for (var i = 0; i < dhony.length; i++)
{  ///console.log(dhony[i]);
  if(i % 2  == 0)
  {
console.log(dhony[i]); // this will check the even idexes and will print it out
}
}

/******************************/

/*
* using Continue  and break Statements
*/

for (let i = 0; i < dhony.length; i++) {
  if(typeof(dhony[i]) != 'number' ) continue;
  //this will check  if the type it not equal to a number , continues otherwise
  console.log(dhony[i] + ' is  a number');
}
/***************************/
for (let i = 0; i < dhony.length; i++) {
  if(typeof(dhony[i]) != 'string' ) break;
  // this will check if  the type is equal not equal to string to break
  console.log(dhony[i] + ' is breaking');
}


/*********
* for loop backwards
**********/

for (let i = dhony.length-1; i>= 0;  i--) {
  console.log(dhony[i] + ' backwards');
}
