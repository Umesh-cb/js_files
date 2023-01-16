/**
 #3. Check object property
Write a function called check object to check wheather the property is present in the given object

Examples:
INPUT: checkObject({'name':'gokul','city':'bangalore'},'name')
OUTPUT: true
INPUT: checkObject({'name':'gokul','city':'bangalore'},'age')
OUTPUT: false
 */

const checkObject=function(obj,property)
{
    return obj.hasOwnProperty(property)
    
}
console.log(checkObject({'name':'gokul','city':'bangalore'},'age'));