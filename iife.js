let count = 1;
let a = () => {
    return new Promise((resolve,  reject) => {
        
        setTimeout(()=>{
            resolve(`${count} : resolved!`);
            count++;
        },2000)
        
    })
}


(async () =>{
    let b = await a()
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
})();