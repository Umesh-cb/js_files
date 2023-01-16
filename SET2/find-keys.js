/*
Write a function called keys, which accepts an object and returns an array of all of the key
s in the object. Do not use the built in Object.keys() function!

Examples:
const obj = { d: 1, c: 2, t: 3 }
INPUT: keys(obj)
OUTPUT: ['d', 'c', 't']
const obj2 = { first: 'Matt', last: 'Lane' }
INPUT: keys(obj)
OUTPUT: ['first', 'last']
const obj3 = {}
INPUT: keys(obj)
OUTPUT: []
 */

const keys=function(obj)
{
    const objKeys=[]
    for(let key in obj)
    {
        objKeys.push(key)
    }
    return objKeys
}

console.log(keys({ first: 'Matt', last: 'Lane' }));