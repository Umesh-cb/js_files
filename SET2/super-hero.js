/*
#7. Super Hero Powers

Write a function to display the powers of the given super hero

Examples:
const superHeroes = [
 {
 "name": "Molecule Man",
 "age": 29,
 "secretIdentity": "Dan Jukes",
 "powers": [
 "Radiation resistance",
 "Turning tiny",
 "Radiation blast"
 ]
 },
 {
 "name": "Madame Uppercut",
 "age": 39,
 "secretIdentity": "Jane Wilson",
 "powers": [
 "Million tonne punch",
 "Damage resistance",
 "Superhuman reflexes"
 ]
 }
]
INPUT: superPower(superHeroes, 'Molecule Man')
OUTPUT: 'Radiation resistance, Turning tiny, Radiation blast'
*/

function superPower(superHeros,heroName)
{
    let powers=''
  for(let i=0;i<superHeros.length;i++)
  {
    const superHero=superHeros[i]
    
    const values=Object.values(superHero)
    if(values.includes(heroName))
    {
        powers+= superHero['powers']
    }
  
  }
  return powers
}

const superHeroes = [
    {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
    "Radiation resistance",
    "Turning tiny",
    "Radiation blast"
    ]
    },
    {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
    "Million tonne punch",
    "Damage resistance",
    "Superhuman reflexes"
    ]
    }
   ]
   console.log(superPower(superHeroes, 'Madame Uppercut'));