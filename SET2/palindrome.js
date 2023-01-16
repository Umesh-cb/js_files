/*
#4. Is it a palindrome?
Have the function palindrome(str) accept a string argument, and return the boolean true if 
the argument is a palindrome(meaning that the string is the same forward as it is backward)
.Otherwise, return the boolean false.
NOTE - without using.reverse() method

Examples:
INPUT: palindrome("madam");
OUTPUT: true
INPUT: palindrome("javascript");
OUTPUT: false
 */

function palindrome(str)
{
    let revStr=''
    for(let i=str.length-1;i>=0;i--)
    {
        revStr += str[i]
    }

    const isPalindrome=(str===revStr)
    return isPalindrome
}


console.log(palindrome("javascript"));