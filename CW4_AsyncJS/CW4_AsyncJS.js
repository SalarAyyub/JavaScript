const birthdayCake = (isCasseySick, cakes) => {
    return new Promise ((resolve, reject) => {
        if(isCasseySick == 1)
        {
            setTimeout(()=>{
                resolve(cakes)
            }, 2000)
        }
        else
        {
            reject(console.log("😔"))
        }
    })
}

birthdayCake(true,7)
.then((cakes)=>
{
console.log("We have",cakes,"cakes.🍰")
})
.catch(()=>
{
   console.log("😔")
})
.finally(()=>{
    console.log("So many brackets above were a bit confusing 😅 but nonetheless the cakes are ready.😄")
})