


function createArrayOfFunctions(y:number) {
    let  arr = [];
    for(let i = 0; i<=y; i++) {
     arr[i] = function (x:number) { return x + i; }
 
    }
    
    return arr;
}

