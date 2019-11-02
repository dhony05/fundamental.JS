
//function declaration
calculateAge(1990);

function calculateAge(year){
    console.log(2019- year);

}



//function expression

//retirement(1950);

var retirement = function(year){
    console.log(65 - (2019- year));
}

retirement(1990 );


// variables
// code scan for variables declarations 

console.log(age);
var age = 25;
console.log(age);

function foo(){
  //  console.log(age);

    var age = 65;
    console.log(age);

}
foo();
console.log(age);



var a = 'Hello';
first();

function first(){
    var b = 'Hi';
    second();

    function second(){
        var c = 'Hey!'
        third();

        // function third(){
        //     var d = 'John';
        //     console.log(b);
        // }
    }
}

function third(){
    var d = 'John';
    console.log(a + d);
}

// this function cannot access to var 



//console.log(this);

// calculateAge(1990);

// function calculateAge(year){
//     console.log(2019- year);
//     console.log(this);
    
// }


// this keyword point to the current object

var amir = {
    name: 'Amir',
    yearOfBirth:1990,
    calculateAge: function(){
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        // function innnerFunction(){
        //     console.log(this);

        // }
        // innnerFunction();
    }
}
amir.calculateAge(); 


var mike = {
    name: 'Mike',
    yearOfBirth:1984
};


//method borrowing
// taking a method from other object

mike.calculateAge = amir.calculateAge;
mike.calculateAge();