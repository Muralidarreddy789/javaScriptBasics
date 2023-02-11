let addTax=(rate,value) => value+value*rate;
console.log(addTax(0.10,100))
let addVat=addTax.bind(null,0.23)
console.log(addVat(100))
console.log(addVat(30))