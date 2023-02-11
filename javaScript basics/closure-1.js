let j;
let f=function()
{
    const a=23
    j=function()
    {
        console.log(a*2);
    }
}
let k= function()
{
    const b=777;
    j=function()
    {
        console.log(2*b)
    }
}
f()
k()
j()