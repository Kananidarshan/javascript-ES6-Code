var person={
    fname:'Darshan',
    lname:'Kanani',
    phone:["oppo","sumsung","mi"],
    car:{                  // Nested Object
        car1:"BMW",
        car2:"FORD"
    }
    
}

console.log(person.car.car1);
console.log(person.car['car1']);

//Object with Array

console.log(person.phone[0]);
console.log(person.phone[1]);
console.log(person.phone[2]);
