const greet= function(greeting)
{
    return function(name)
    {
        console.log(`${greeting} ${name}`)
    }
}
const greetings= greet("hey");
greetings("levi ackermann")
greet("let the")("demons take over the world")
const hi= (gre) => (nam)=>console.log(`${gre} ${nam}`)
hi('yami')("surpass your limits")