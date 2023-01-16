/*
#5. Count the Number of Vowels
Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string.

Example:
INPUT: countVowels('The quick brown fox')
OUTPUT: 5
INPUT: countVowels(‘javascript is awesome')
OUTPUT: 8
*/

const str='bangalore' 
const vowels=['a','e','i','o','u']
let count=0;
for(let i=0;i<str.length;i++)
{
    if(vowels.includes(str[i]))
    {
        count +=1
    }
}
console.log('The given STring is : '+str)
console.log(`The number of times vowels present in the string '${str}' is : ${count}`)