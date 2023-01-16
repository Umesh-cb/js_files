/*

*/

const findNotBookedTables= function (arr)
{
    const result=[]
    for(let i=0;i<arguments.length;i++)
    {
        console.log(arr[i])
       if( arr[i]=='not Booked')
       {
            result.push(i)
       }
    }
    return result
}

console.log(findNotBookedTables(['not Booked','booked','booked','not Booked','not Booked']));
