// dot notation(.)

let person={
    firstName:'Darshan',
    lastName:'Kanani'
};

console.log(person.firstName);
console.log(person.lastName);

//Array-like notation

let kdm={
    fname:'vishal',
    lname:'ramani'
};

console.log(kdm['fname']);
console.log(kdm['lname']);

//cheaking if property exits

console.log('fname' in kdm);
console.log('lname' in kdm);

//Adding a new property to an object

kdm.age=21;
console.log(kdm.age);

//Modifying the value of a property

kdm.fname='Khushi'
console.log(kdm.fname);

//Deleting a property of an object

delete kdm.fname;
console.log(kdm.fname);