let student = {
    name: "first name ",
    email: "USER@GMAIL.COM",
    course : "javascript,react,node",
    marks : [45,78,60,90,33],
    hobbies : ["Music", "Cricket", "Reading"],
    address : ["keshod", "gujarat", "india"]
};

//string operations
let trimmed = student.name.trim();
console.log("Trimmed Name:", trimmed);

let lowercased = student.email.toLowerCase();
console.log("Lowercased Email:", lowercased);

let uppercased = student.email.toUpperCase();
console.log("Uppercased Email:", uppercased);
let courseincludes = student.course.includes("react");
console.log("Course includes:", courseincludes);

let courseindex = student.course.indexOf("node");
console.log("Index of 'node' in course:", courseindex);

let coursereplace = student.course.replace("javascript", "JS");
console.log("After Replace:", coursereplace);

let courseArray = student.course.split(",");
console.log("Course Array:", courseArray);

let lengthofname = student.name.length;
console.log("Length of Name:", lengthofname);

//array operations

let addhobby = student.hobbies.push("swimming");
console.log("After Adding Hobby:", student.hobbies);

let removehobby = student.hobbies.pop();
console.log("After Removing Hobby:", student.hobbies);

student.hobbies.unshift("drawing");
console.log("After Unshift Hobby:", student.hobbies);

let removedHobby = student.hobbies.shift();
console.log("After Shift Hobby:", student.hobbies);

let meargedhobbies = student.hobbies.concat(["dancing", "traveling"]);
console.log("After Merging Hobbies:", meargedhobbies);
