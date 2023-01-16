/*
#1. Count Sub String

Write a JavaScript function to count the occurrence of a substring in a string.

Examples:
INPUT: count("The quick brown fox jumps over the lazy dog", 'the')
OUTPUT: 2
INPUT: count("The quick brown fox jumps over the lazy dog", 'fox')
OUTPUT: 1
 */

const count=function(str,substr)
{
    str=str.toLowerCase()
    const words=str.split(' ')
    let count =0
    for(let i=0;i<words.length;i++)
    {
        if(words[i]==substr.toLowerCase())
        {
            count +=1
        }
    }
    return count
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the'));