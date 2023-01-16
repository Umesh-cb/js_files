/**
 #5. Swap key value in an object
Write a function called swapKeyAndValue, which accepts an object and a key.
The function should return a new object with the given key and its value flipped, and all the
 other key/value pairs unchanged.

Examples:
const instructor = { name: 'Elie', job: 'Instructor' }
INPUT: swapKeyAndValue(instructor, 'name')
OUTPUT: {Elie: 'name', job: "Instructor"}
INPUT: swapKeyAndValue(instructor, 'job')
OUTPUT: {name: "Elie", Instructor: 'job'}

 */

function swapKeyAndValue(obj,keyToBeSwaped)
{
    const value=obj[keyToBeSwaped]
    const result={}
    for(let key in obj)
    {
        if(key==keyToBeSwaped)
        {
            result[value]=keyToBeSwaped
        }
        else
        {
            result[key]=obj[key]
        }
    }
    return result
}
const instructor = { name: 'Elie', job: 'Instructor' }
console.log(swapKeyAndValue(instructor, 'job'));