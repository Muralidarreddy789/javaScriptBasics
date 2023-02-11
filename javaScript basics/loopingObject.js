const openhrs={
    thu:{
        open:9,
        close:10
    },
    fri:{
        open:2,
        close:5
    }
}
for(const [day,{open,close}] of Object.entries(openhrs))
{
    console.log(day,open,close)
}