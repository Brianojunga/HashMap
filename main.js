import { hashTable } from "./hashMap.js";

const test = new hashTable()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')
test.set('apple', 'blue')






console.log(test.table.length)
console.log(test.remove('kite'))
console.log(test.length())
console.log(test.loadFactor)
test.clear()
console.log(test.get('apple'))
console.log(test.table.length)


