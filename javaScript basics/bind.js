const lafthansa=
{
    airline:'lafthansa',
    iataCode:'LH',
    bookings:[],
    book(flight,name)
    {
        console.log(`${name} booked a seat on ${this.airline} flight ${flight}`)
    }
}
const eurowing=
{
    airline:'eurowing',
    iataCode:'EW',
    bookings:[],
}
let book=lafthansa.book;
let bookEw=book.bind(eurowing);
bookEw('EW123','chada mutha muralidar reddy',);
