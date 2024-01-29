let user={
    fname:"Darshan",
    lname:"Kanani",
    Age:21,
    Contect:9327613010
}
//javascript object print
console.log(user);

//Convert js to JSON

let mydata=JSON.stringify(user);

//print JSON Data
console.log(mydata);

//JSON Object Convert to JavaScript

let a=JSON.parse(mydata);
console.log(a);