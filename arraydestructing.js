var color=["Red","Green","Yellow"];

//Destructing Assignment
var[color1,color2,color3]= color;

console.log(color1);
console.log(color2);
console.log(color3);
console.log("------------------------------");

//destricting Assign

var colors=["Red","Green","Yellow","purpel","Violet","Blue","Indigo"];

var [a,b,...args]=colors;

console.log(a);
console.log(b);
console.log(args);

