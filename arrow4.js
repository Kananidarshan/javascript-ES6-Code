// No Argument , Return Type

function add(){
    return 1+3;
}
console.log(add());

let sum=()=>10+20;
console.log(sum());

//using turnary oparetor...

let age=5;

let show=(age < 18)? () => console.log(`Invalid age`) :()=>console.log(`Valid age`);

show();