async function mintPromise(){
    return new Promise((resolve,reject)=>{
        mint();
        resolve();
    });    
}

function minter(){
    result = mintPromise().then(response => console.log("done"));
}

