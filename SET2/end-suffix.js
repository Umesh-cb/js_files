/*
#5. String end with suffix

Write a JavaScript function check if a string ends with the specified suffix.

Examples:
INPUT: string_endsWith('JS PHP PYTHON', 'PYTHON' )
OUTPUT: true
INPUT: string_endsWith('JS PHP PYTHON', ')' )
OUTPUT: false
 */

function stringEndsWith(str,suffix)
{
    const strArray=str.split(' ')
    let isEndsith=false
    isEndsith=(strArray[strArray.length-1]===suffix)

    return isEndsith

}
console.log(stringEndsWith('JS PHP PYTHON', ')' ));