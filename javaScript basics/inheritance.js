var bird={
    canFly:true,
    hasWings:true,
    hasFeathers:true
};
var penguin=Object.create(bird);
penguin.canFly=false;
console.log(penguin);
console.log(penguin.hasWings);
console.log(penguin.hasFeathers);
console.log(penguin.canFly)