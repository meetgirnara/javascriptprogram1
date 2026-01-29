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

let courseIncludesReact = courseArray.includes("React");
console.log("Course array includes React:", courseIncludesReact);

let jsIndex = courseArray.indexOf("JS");
console.log("Index of JS in course array:", jsIndex);

let firstTwoMarks = student.marks.slice(0, 2);
console.log("First two marks:", firstTwoMarks);

let failedIndex = student.marks.findIndex(mark => mark < 40);
if (failedIndex !== -1) {
    student.marks.splice(failedIndex, 1);
}

console.log("Marks after removing first failed mark:", student.marks);
 
let hobbiesString = student.hobbies.join(", ");
console.log("Hobbies String:", hobbiesString);

// ARRAY ITERATION METHODS
let bonusMarks = student.marks.map(mark => mark + 5);
console.log("Marks after adding bonus:", bonusMarks);

let passedMarks = student.marks.filter(mark => mark >= 40);
console.log("Passed Marks:", passedMarks);
 
let highMark = student.marks.find(mark => mark > 80);
console.log("First mark above 80:", highMark);

console.log("Student Hobbies:");
student.hobbies.forEach(hobby => console.log(hobby));

let sortedMarks = [...student.marks].sort((a, b) => a - b);
console.log("Sorted Marks (Ascending):", sortedMarks);

let reversedHobbies = [...student.hobbies].reverse();
console.log("Reversed Hobbies:", reversedHobbies);

let flattenedAddress = student.address.flat();
console.log("Flattened Address:", flattenedAddress);

// OBJECT HANDLING
let allPassed = student.marks.every(mark => mark >= 40);
student.result = allPassed ? "pass" : "fail";
console.log("Student Result:", student.result);

console.log("Final Student Object:", student);