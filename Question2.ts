



class init {
    capacity :number;
    cache: Map<number | undefined, number | undefined> = new Map<number | undefined, number | undefined>();
    keyScore: Map<number | undefined, number | undefined> = new Map<number | undefined, number | undefined>();
    ccWeight: number;
  
    constructor(capacity: number,ccWeight:number) {
       
        this.capacity =capacity
        this.ccWeight =ccWeight
    }
   

    get(key: number) {
           
           let d=new Date();
           
           if(this.cache.has(key)){
             this.ccWeight= this.keyScore[key]/Math.log(d.getTime());
             this.keyScore[key]=this.ccWeight
             return this.cache[key]
    }else{
        return -1
    }
}

        cache_full(){
            return this.cache.size === this.capacity
        
        }

         lastscore(){
            let i, arr =[];
            for (i in this.keyScore){
                arr.push(this.keyScore[i])
            }
           arr.sort()
           for (const [key,value] of Object.entries(this.keyScore)){
               if (value ==arr[0])
               return key
           }
        }
            
            
        

    put(key: number, value: number,weight:number): void {
        let least_score_key
            this.ccWeight =weight/-100
            if (!this.cache.has(key)){
                if(this.cache_full()){
                    least_score_key == this.lastscore()
                  
                    this.cache.delete(least_score_key)
                    this.keyScore[key]=this.ccWeight
                    this.cache[key] =value
                }else{
                    this.keyScore[key] =this.ccWeight
                    this.cache[key] =value
                }
            }
    }
}




