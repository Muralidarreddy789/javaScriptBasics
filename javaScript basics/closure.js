const secureBooking=function()
{
    let passengerCOunt=0
    return function()
    {
        passengerCOunt++;
        console.log(`${passengerCOunt} passengers`)
    }
}
const booker=secureBooking()
booker()
booker()
booker()