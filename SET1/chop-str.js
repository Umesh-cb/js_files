/*
#7. Chop a string
Write a JavaScript function to chop a string into chunks of a given length.

Example:
INPUT: stringChop('resource',2)
OUTPUT: [ "re", "so", "ur", "ce"]
INPUT: stringChop('dcresource',3)
OUTPUT: ["dcr", "eso", "urc", "e"]
*/

function stringChop(str,n)
{
    const result =[]
    for(let i=0;i<str.length;i+=n)
    {
       const choppedstr= str.slice(i,i+n)
     //  console.log(choppedstr);
       result.push(choppedstr)
    }
    return result
}

console.log(stringChop('deresource',3));