/*
#8. Weight of strings

You are given two strings S1 and S2. You need to find weights of both strings and compar
e them. The weight of a string can be obtainedby adding individual weights of the characte
rs that make the string. The weight of individual characters are the position on which they
occur in the English alphabets table; for eg, a has weight 1, z has weight 26.

Output:
return 1 if the weight of the first string is greater, return 2 if the weight of the second string
is greater, return equal if the weights are equal.
Example:
INPUT: strWeight('batman', 'superman')
OUTPUT: 2
INPUT: strWeight('batman', 'manbat')
OUTPUT: 'equal'

*/

const strWeight=function(str1,str2)
{
    const alphabets='abcdefghijklmnopqrstuvwxyz'
    let str1Weight=0,str2Weight=0
    for(let i=0;i<=str1.length;i++)
    {
        str1=str1.toLowerCase()
        const char=str1[i]
        const weightChar=alphabets.indexOf(char)+1
        str1Weight +=weightChar
    }

    for(let i=0;i<=str2.length;i++)
    {
        str2=str2.toLowerCase()
        const char=str2[i]
        const weightChar=alphabets.indexOf(char)+1
        str2Weight +=weightChar
    }

    if(str1Weight>str2Weight)
    {
        return 1
    }
    else if(str1Weight<str2Weight)
    {
        return 2
    }
    else if(str1Weight==str2Weight)
    {
        return 'equal'
    }
}

console.log(strWeight('Umesh', 'Bothe'));