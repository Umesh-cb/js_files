/*#8. Capitalize Words
Write a JavaScript function to capitalize each word in the string.

Example:
INPUT: capitalizeWords('js string exercises')
OUTPUT: "Js String Exercises
*/



function capitalizeWords(str)
{
    const arr=str.split(' ')
    let newString=''
    for(let i=0;i<arr.length;i++)
    {
       let str1= arr[i]
      const char=str1.charAt(0)
      const charUpper=char.toUpperCase()
      str1=str1.replace(char,charUpper)
        newString=newString+str1+' '
    }
    return newString.trim()
}

console.log(capitalizeWords('js string exercis'))
//console.log(capitalizeWords('dct academy banglore'))