/*
#6. Alternate Capitalization
Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
and return as shown below. Index 0 will be considered even.
The input will be a lowercase string with no spaces.

Examples:
INPUT: capitalize("abcdef")
OUTPUT: ['AbCdEf', 'aBcDeF']
INPUT: capitalize('dct')
OUTPUT: ['DcT','dCt']

*/

function capitalize(word)
{
    let evenCapt='', oddCapt=''
    for(let i=0;i<word.length;i++)
    {
        if(i%2==0)
        {
            evenCapt+= word[i].toUpperCase()
            oddCapt+=word[i]
        }
        else if(i%2!==0)
        {
            evenCapt+=word[i]
            oddCapt+=word[i].toUpperCase()
        }
    }
    return [evenCapt,oddCapt]
}

console.log(capitalize('abcdfe'));