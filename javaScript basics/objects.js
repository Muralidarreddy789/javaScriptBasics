let amazon={};
amazon.tv=200;
amazon.mobile=300;
amazon.laptop=400;
console.log(amazon);
//second method of declaring object
let flip={
    tv:100,
    mobile:200,
    laptop:300
};
console.log(flip);
//method of assigning values to the objects bracket notation
let myn={};
myn["tv"]=50;
myn["mobile"]=100;
myn["laptop"]=150;
let arrFun=["tv","mobile","laptop"];
for(let i=0;i<arrFun.length;i++)
{
    console.log(myn[arrFun[i]]);
}