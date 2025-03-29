console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("No i am done from you")
    }
    else{
        setTimeout(() => {
            console.log('I am done keeop your asss out from here');
            resolve("Ankush")
        }, 2000);
    }

    console.log(a);
    
})

prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
    
})


