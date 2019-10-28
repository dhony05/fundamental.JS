
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