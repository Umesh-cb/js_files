
/*
#2. If you can't sleep, just count sheeps!!
Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3
sheep..."

Example:
INPUT: countSheep(3)
OUTPUT: "1 sheep...2 sheep...3 sheep…"
INPUT: countSheep(5)
OUTPUT: "1 sheep...2 sheep...3 sheep...4 sheep...5 sheep..."

*/
function countSheep(count)
{
    let sheepString=''
    for(let i=1;i<=count;i++)
    {
        sheepString += `${i} sheep... `

    }
    return sheepString
}

console.log(countSheep(5))