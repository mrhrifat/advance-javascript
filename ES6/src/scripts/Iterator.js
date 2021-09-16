// 151 - Iterator

/*

01) Iterator is an object
02) Iterator can be done if the object is iterable
03) Array, String is iterable
04) Object is not iterable
05) Iterator hold data is closure
06) Iterator can start and stop anywhere when Iterator is running
07) Every has two method 
    01) Next
    02) Done

*/

let arr = [1, 2, 3, 4, 5]

for (let x of arr) {
    console.log(x)
}

// Create Iterator
let createIterator = collection => {
    let i = 0
    return {
        next() {
            return {
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}
let r1 = createIterator(arr)
console.log(r1.next())
console.log(r1.next())
console.log(r1.next())
console.log(r1.next())
console.log(r1.next())
console.log(r1.next())
console.log(r1.next())