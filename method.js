// string method in JavaScript
// length ()
// trim ()
// toUpperCase()
// toLowerCase()
// includes()
// indexOf()
// slice()
// substring()
// replace()
// concat()
// split()

let str = " Hello, Meet Girnara ! .";
console.log( str);
console.log(str.length); // length

let trimtext = str.trim();
console.log("Trimmed() : ",trimtext); // trim

let upperstr = str.toUpperCase();
console.log("Uppercase() : ", upperstr); // toUpperCase()

let lowerstr = str.toLowerCase();
console.log("Lowercase() : ", lowerstr); // toLowerCase()

let includesText = str.includes("Meet");
console.log("Includes() : ", includesText); // includes()

let index = str.indexOf("Girnara");
console.log("IndexOf() : ", index); // indexOf()

let slicedStr = str.slice(7, 12);
console.log("Sliced() : ", slicedStr); // slice()

let substringStr = str.substring(7, 12);
console.log("Substring() : ", substringStr); // substring()

let replacedStr = str.replace("Meet", "Gujju");
console.log("Replaced() : ", replacedStr); // replace()

let concatStr = str.concat(" Have a nice day!");
console.log("Concatenated() : ", concatStr); // concat()

let splitStr = str.split(" ");
console.log("Split() : ", splitStr); // split()