function sum(x=5,y=5){
    return x+y;
}

console.log(sum(2,1));
console.log(sum(9));
console.log(sum());

//Passing Parameter as Default Values

function sum1(x=1,y=x,z=x+y){
    console.log(x+y+z);
}
sum1();