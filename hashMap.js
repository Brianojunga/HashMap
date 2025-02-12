function hash(key, length){
    let hashCode = 0

    const primeNumber = 31;
    for(let i = 0; i < key.length; i++){
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % length
    }
    return hashCode
}

function arraywith(i){
    const keysArray = [];
        for (let items of this.table){
            items.forEach(item => keysArray.push(item[i]))
        }
        return keysArray
}


class hashTable{
    constructor(){
        this.capacity = 3,
        this.numberOfElements = 0,
        this.table = new Array(this.capacity)
    }

    get loadFactor(){
        return this.numberOfElements / this.capacity
    }



    set(key, value){
        const index = hash(key, this.table.length);
        if(!this.table[index]){
            this.table[index] = [[key, value]]
            this.numberOfElements++
        }else{
            //check if the key is present in that index and update the value
           const itemPresent = this.table[index].find(item => item[0] === key);
           if(itemPresent){
             itemPresent[1] = value
           }else{
            //if item is not present then push it to the table in that index
            this.table[index].push([key, value])
            this.numberOfElements++
           }
        }
        
    }

    get(key){
        const index = hash(key, this.table.length)
        const itemPresent = this.table[index].find(item => item[0] === key)
        return (!this.table[index] || !itemPresent) ? null :  itemPresent[1]
    }
          

    has(key){
        const index = hash(key, this.table.length);
        const itemPresent = this.table[index].find(item => item[0] === key);
        return (!this.table[index] || !itemPresent) ?  false : true
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
        this.table = new Array(this.capacity);
        this.numberOfElements = 0
    }
    arraywith(i){
        const array = [];
            for (let items of this.table){
                items.forEach(item => array.push(item[i]))
            }
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
            for (let items of this.table){
                items.forEach(item => entriesArray.push(item))
            }
        return entriesArray
    }
}


const hashMap = new hashTable()
hashMap.set('Ojoules', "ken");
hashMap.set('busuch', 'hallow');
hashMap.set('busuch', 'Jek');
hashMap.set('bob', "ojay")
hashMap.set('ken', "bob")
console.log(hashMap.remove('ken'))
console.log(hashMap.get('ken'))
console.log(hashMap.keys())
console.log(hashMap.table)
console.log(hashMap.length())
console.log(hashMap.loadFactor)
