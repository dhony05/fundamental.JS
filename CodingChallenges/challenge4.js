

let mark = {
    fullName: "Mark Ruffalo",
    mass: 79,
    height: 2,
    bmi: function getBMI(){
       return this.mass/(this.height *this.height)
    }

}

let jon = {
    fullName: "Jon Snow",
    mass: 60,
    height:  1.5,
    bmi: function getBMI(){
        return this.mass/(this.height *this.height)

    }



}
ComparingBMI(mark,jon);

function ComparingBMI(m,j){
    if(j.bmi() > m.bmi()){
        console.log(j.fullName + " has the highest BIM, " +"with "+ j.bmi())
    }else if(jon.bmi() < mark.bmi()){
        console.log(m.fullName + " has the highest BIM, " +"with "+ m.bmi())

    }else{
        console.log(m.fullName + " and "+ j.fullName +" have the same BMI");
        //console.log(jon.bmi());
    }
}