// const bookings=[]
// const createBooking= function(flightNum,numPassengers=1,price=199*numPassengers){
//     const booking={
//         flightNum,
//         numPassengers,
//         price
//     };
//     console.log(booking)
//     bookings.push(booking)

// }
// createBooking('LH123',4)
const flight='LH234'
const murali={
    nam:'chada mutha muralidar reddy',
    passport:23457923
}
const checkIn = function(Num,passenger)
{
    Num='LH239'
    passenger.nam='Mr.'+passenger.nam
    if(passenger.passport === 23457923)
    {
        console.log('Checked in')
    }
    else{
        console.log('Wrong passport')
    }

}
checkIn(flight,murali)
console.log(flight)
console.log(murali.nam)