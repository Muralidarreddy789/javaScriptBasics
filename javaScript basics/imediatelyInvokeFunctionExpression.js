(function()
{
    console.log(`this function will never run again`)
})();
(()=> console.log(`this function will also never run again`))();
