/*
Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

colour_association([["white", "goodness"], ["blue", "tranquility"], ['green', 'natural']])
returns [{'white': "goodness"}, {'blue': "tranquility"}] 

 */

function colourAssociation(arr)
{
    const result =[]
    for(let i=0;i<arr.length;i++)
    {
        const obj={}
       const key= arr[i][0],value=arr[i][1]
      // const obj={key: value}
        //console.log(obj);
        obj[key]=value
        result.push(obj)

    }
    return result
}

//console.log(colourAssociation([['white','goodness'],['blue','tranquility']]));

function colorAssociationObj(arr)
{
    const result=[]
    
    for(let i=0;i<arr.length;i++)
    {
         const obj=arr[i]
        //console.log(obj);
        const arrKeys=Object.keys(obj);
        const arrValue=Object.values(obj)
        const arr1=[arrKeys[0],arrValue[0]]
        //console.log(Object.entries(obj));
       // const arr1=Object.entries(obj)
      result.push(arr1)
        
    }
   
    return result
}

console.log(colorAssociationObj([{'white':'goodness'},{'blue':'tranquility'}]));