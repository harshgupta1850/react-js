// sort U>UK>R>H>K
const cityList  = [
    {
        name : 'Chandausi',
        type : 'U' 
    },
    {
        name : 'Bhajoi',
        type : 'U'
    },
    {
        name : 'Manglore',
        type: 'K'
    },
    {
        name : 'Banglore',
        type : 'K' 
    },
    {
        name : 'Shimla',
        type : 'H'
    },
    {
        name : 'Solan',
        type: 'H'
    },
    {
        name : 'Kota',
        type : 'R' 
    },
    {
        name : 'Mysore',
        type : 'K'
    },
    {
        name : 'Nainital',
        type: 'UK'
    },
]

const cityMapper = {
    U: 1,
    UK : 2,
    R : 3,
    H : 4,
    K : 5
}

export const sortCities = cityList.sort((a,b)=> cityMapper[a.type]-cityMapper[b.type])
// console.log(sortCities)