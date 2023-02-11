const car={
    engine:true,
    steering:true,
    speed:"slow"
};
let sportsCar=Object.create(car);
sportsCar.speed="fast";
//for-in loop is not reliable
for(props in sportsCar)
{
    console.log(props)
}
//for-of loop is reliable
for(props of Object.keys(car))
{
    console.log(props+":",sportsCar[props]);
}