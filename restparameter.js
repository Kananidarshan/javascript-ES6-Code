let myfun=function(...args){
    console.log(args);
}
myfun(30);
myfun(10,20,30);

function demo(...abc){
    console.log(abc);

    console.log(abc[0]);
    console.log(abc[1]);
}
demo(10,20);

function demo1(...xyz){
    for(var i=0;i<xyz.length;i++){
        console.log(xyz[i]);
    }
}
demo1(10,20,30,40,50);