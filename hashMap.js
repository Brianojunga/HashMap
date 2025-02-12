function hash(key, length){
    let hashCode = 0

    const primeNumber = 31;
    for(let i = 0; i < key.length; i++){
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % length
    }
    return hashCode
}


export class hashTable{
    constructor(){
        this.capacity = 16,
        this.numberOfElements = 0,
        this.table = new Array(this.capacity)
    }

    get loadFactor(){
        return this.numberOfElements / this.capacity
    }

    resize() {
        this.capacity = this.capacity * 2;
        const newTable = new Array(this.capacity);
    
        this.table.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const index = hash(key, newTable.length);
                    if (!newTable[index]) {
                        newTable[index] = [[key, value]];
                    } else {
                        newTable[index].push([key, value]);
                    }
                });
            }
        });
    
        this.table = newTable;
    }

    set(key, value){
         if(this.loadFactor > 0.75){
           this.resize()
        }

        const index = hash(key, this.table.length);
        if(!this.table[index]){
            this.table[index] = [[key, value]]
            this.numberOfElements++
        }else{
           const itemPresent = this.table[index].find(item => item[0] === key);
           if(itemPresent){
             itemPresent[1] = value
           }else{
            this.table[index].push([key, value])
            this.numberOfElements++
           }
        }  
    }


    get(key){
        const index = hash(key, this.table.length)
        if(!this.table[index]) return null
        const itemPresent = this.table[index].find(item => item[0] === key)
        return !itemPresent ? null :  itemPresent[1]
    }
          

    has(key){
        const index = hash(key, this.table.length);
        if(!this.table[index]) return false
        const itemPresent = this.table[index].find(item => item[0] === key);
        return (!itemPresent) ?  false : true
    }

    remove(key){
        const index = hash(key, this.table.length);
        if(!this.table[index]) return false
       for (let item of this.table[index]){
            if(item[0] === key){
                const findIndex =  this.table[index].findIndex(item => item[0] == key)
                this.table[index].splice(findIndex, 1)
                this.numberOfElements--
                return true
        }}
       return false
    }

    length(){
        return this.numberOfElements
    }

    clear(){
        this.capacity = 16;
        this.table = new Array(this.capacity);
        this.numberOfElements = 0
    }
    arraywith(i){
        const array = [];
        this.table.forEach(item => item.forEach(item => array.push(item[i])))
        return array
    }
    
    keys(){
      return this.arraywith(0)
    }

    values(){
        return this.arraywith(1)
    }

    entries(){
        const entriesArray = [];
        this.table.forEach(item => {item.forEach(item => entriesArray.push(item))})
        return entriesArray
    }
}
