const trainer={
    fname:"Darshan",
    gender:"Male",
    mobile:9327613010
};

/*Javascript Extract  Without ES6
let fname=trainer.fname;
let gender=trainer.gender;
let mobile=trainer.mobile;

console.log(fname,gender,mobile);*/

//With ES6 Extrecting properties

const { fname,gender,mobile } = trainer;
console.log(fname,gender,mobile);