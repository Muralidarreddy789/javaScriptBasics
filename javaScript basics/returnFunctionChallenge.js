const tax=function(rate)
{
    return function(value)
    {
        console.log(value+value*rate)
    }
}
let taxVAT=tax(0.23)
taxVAT(100)
taxVAT(23)