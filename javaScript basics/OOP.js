//oops approach to calculate the bill of the shoes
let purchase1={
    shoes:100,
    stateTax:1.2,
    totalPrice:function()
    {
        var calculation=this.shoes*this.stateTax;
        console.log(calculation);
    }

}
purchase1.totalPrice();
//functional programming
let shoes=100;
let stateTax=1.2;
function totalPrice(shoes,tax)
{
    console.log(shoes*tax);
}
totalPrice(shoes,stateTax)