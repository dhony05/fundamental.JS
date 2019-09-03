/******************************/
// Another loops is the While which only have the condition
let dhony = ['Donelys', 'Familia', '90\'s  kidd', 'programmer','gamer'];
let count= 0;
while(count < dhony.length) // a condition ,this will end when it reaches the array length
{
  if(count %2 == 1)
  { // this will check for the odd position in the array and will print it
    console.log(dhony[count])
     // this will increment the the next index
  }
  count ++;
}
