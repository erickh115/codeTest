

function isSubset(letter:string[],ans:string[]){
let n=letter.length;
let m=ans.length;

let map ={}
letter.forEach(i =>map[i]=false)

ans.forEach(i=>map[i] ===false && (map[i]= true))

let jsonArray =Object.keys(map).map(k=>({name:k,matched:map[k]}))
console.log(jsonArray)
let bool =0
 for (let i = 0 ; i< jsonArray.length;i++){
  
     if(jsonArray[i].matched == true){
         bool +=1
     }
 
 }

  if (n -m > 0 ){
      if(m ==bool){
        console.log(true)
      }else{
          console.log(false)
      }
  }else{
      if(n ==bool){
          console.log(true)
      }else{
          console.log(false)
      }
  }
}

isSubset(["A","B","C","D","E"],["A","B","C"])
isSubset(["A","B","C","D","E"],["A","D","Z"])
isSubset(["A","D","E"],["A","B","D","E"])