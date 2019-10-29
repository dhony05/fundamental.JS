
let dinner = {
    bills: [128, 48, 268,180 , 42],
    tip: function calcTip(){
        let tips = [];
        let each;
        for (let index = 0; index < this.bills.length; index++) {
            const element = this.bills[index];
            if(element < 50){
                 each = (0.2 * element);
                 tips.push(each);
                
            }else if((element> 50) &&(element< 200)){
                 each = (0.15* element);
                 tips.push(each);
            } else if(element > 200){
                each = (0.1 *element);
                tips.push(each);

            }

            
        }
     //c    console.log(tips);
        return tips;
    },
    paidAmound: function calcAmount(){
        let amount = [];
        for (let index = 0; index < this.tip().length; index++) {
            const element = this.tip()[index];
            amount.push(element + this.bills[index])
        }
        return amount;

    }
}
console.log( "dinner bills " + dinner.bills);

console.log( "dinner tips " + dinner.tip());

console.log("dinner total pay " + dinner.paidAmound());



// Mark Family
let mDinner = {
    bills: [77, 375, 110,45],
    tip: function calcTip(){
        let tips = [];
        let each;
        for (let index = 0; index < this.bills.length; index++) {
            const element = this.bills[index];
            if(element < 100){
                 each = (0.2 * element);
                 tips.push(each);
                
            }else if((element> 100) &&(element< 300)){
                 each = (0.1* element);
                 tips.push(each);
            } else if(element > 300){
                each = (0.25 *element);
                tips.push(each);

            }

            
        }
     //c    console.log(tips);
        return tips;
    },
    paidAmound: function calcAmount(){
        let amount = [];
        for (let index = 0; index < this.tip().length; index++) {
            const element = this.tip()[index];
            amount.push(element + this.bills[index])
        }
        return amount;

    }
}
console.log( "Mark Family dinner bills " + mDinner.bills);

console.log( "Mark Family dinner tips " + mDinner.tip());

console.log("Mark Family dinner total pay " + mDinner.paidAmound());


function calAverageTip(tip){
    let result = 0;
    for (let index = 0; index < tip.length; index++) {
        const element = tip[index];
        result += element;
        

        
    }
    result /= tip.length
    //console.log(tip.length);
    
    return result;
}

calAverageTip(dinner.tip());
console.log(calAverageTip(dinner.tip()) < calAverageTip(mDinner.tip()))
// JavaScript is weird


