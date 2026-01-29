// Object is the collection of  any type of data

const person = {
    firstName: "Meet",
    lastName: "Girnara",
    age: 20,
    city: "india",
    greet: function() {
        console.log("Hello , " + this.firstName + " " + this.lastName);
    }
}

// access values from object
console.log(person.firstName);

//adding or modifying the data of object
person.job = "Developer";
person.salary = 21000;
person.city = "keshod";
console.log(person);

//deleting the data from object
delete person.salary;
delete person.city;
console.log(person);

//nested object
const student = {
    name: "Meet",
    age: 20,
    address: {
        street: "123 Main St",
        city: "keshod",
        country: "India"
    },
    subjects: ["JS", "HTML", "CSS"]
}
console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

//

const user ={
    name : "Meet",
    role : "Admin",
    designation : "Developer",
    age : 20,
    address : "keshod"
}
const{ name , role , designation} = user;
console.log(name );
console.log(role );
console.log(designation );

const{name :profilename, age : profileage, address : profileaddress} = user;
console.log(profilename);
console.log(profileage);
console.log(profileaddress);

const array = [1,2,3,4,5];
const moreElements = [...array ,6,7,8,9,10];
console.log(moreElements);

const originalArray = [1,2,3,4,5];
const copiedArray = [...originalArray];
console.log(copiedArray);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const mergeArray = [...arr1, ...arr2];
console.log(mergeArray);

// spread opt. in object

const user1 = {
    name : "Meet",
    role : "Admin"
}

console.log(user1);
const newObj = {
    ...user1, designation : "Developer",
    age : 20
};
console.log(newObj);

//copy object
const user2 = {
    name : "Meet",
    role : "Admin"
}

const copiedObj = {...user2};
console.log("copiedObj ",copiedObj);

//merge object
const obj1 = {
    name : "Meet",
    role : "Admin",
    age : 20,
}

const obj2 = {
    designation : "Developer",
    age : 25
}

const obj3 = {...obj1, ...obj2};
console.log("mergedObj", obj3);

