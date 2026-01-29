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
