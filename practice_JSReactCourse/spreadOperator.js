
const numbers = [1,2,3];
const newNumbers = [...numbers,4,5,6];

console.log(numbers);
console.log(newNumbers);


//safelly copy arrays  and objects 


const person = {
    name:'Don'
};

const newPerson = {
    ...person,
    age: 28
};

console.log(newPerson)


const filter  = (...args) =>{
    return args.filter(el => el === 1);
}


console.log(filter(1,3,1,5));