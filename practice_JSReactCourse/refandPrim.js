
const person = {
    name: 'Don'
};


const secondPerson = person;

console.log(secondPerson);

person.name = 'Alex';

console.log(secondPerson);