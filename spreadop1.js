const odd=[1,3,5];
const comb=[7,8,9, ...odd];
console.log(comb);//[ 7, 8, 9, 1, 3, 5 ]

//Constructing array literal

let initialChars=['A','B'];
let char=[...initialChars,'C','D'];
console.log(char);//[ 'A', 'B', 'C', 'D' ]

//Concatenating Arrays

let number=[1,2];
let morenumber=[3,4];
let allnumber=[...number,...morenumber];
console.log(allnumber);//[ 1, 2, 3, 4 ]

//Copying Arrays

let scores=[10,20,30];
let copied=[...scores];
console.log(copied);//[ 10, 20, 30 ]