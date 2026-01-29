//array methods in javascript
//length()
//push()
//pop()
//shift()
//unshift()
//concat()
//includes()
//indexOf()
//slice()
//splice()
//join()
//delete()
//map()
//filter()
//find()
//forEach()
//sort()
//reverse()
//flat()

let arr = [10, 20, 30, 40, 50];
console.log("Default Array:", arr);

console.log("Length of Array:", arr.length);
arr.push(60);
console.log("After Push(60):", arr);

arr.pop();
console.log("After Pop():", arr);

arr.shift();
console.log("After Shift():", arr);

arr.unshift(10);
console.log("After Unshift(10):", arr);

let newarr = [60, 70, 80];
let concatarr = arr.concat(newarr);
console.log("default Array:", arr);
console.log("After Concat:", concatarr);

console.log("Includes 30:", arr.includes(30));

console.log("Index of 40:", arr.indexOf(40));

let slicedArr = arr.slice(1, 4);
console.log("Sliced Array (1,4):", slicedArr);

arr.splice(2, 1, 25);
console.log("After Splice(2,1,25):", arr);

console.log("Join Array with '-':", arr.join('-'));

delete arr[2];
console.log("After Delete arr[2]:", arr);

//

console.log("Array iteration methods:");
let numberArr = [1, 2, 3, 4, 5];

console.log("Map :", numberArr.map(x => x * 2));
console.log("after map old array:", numberArr);

console.log("Filter :", numberArr.filter(x => x > 2));
console.log("after filter old array:", numberArr);

console.log("Find :", numberArr.find(x => x > 1));
console.log("after find old array:", numberArr);

console.log("ForEach :");
numberArr.forEach((x => console.log(x)));
console.log("after forEach old array:", numberArr);

let sortArr = [5, 3, 8, 1, 2];
console.log("Sort():", sortArr.sort());

console.log("Reverse():", sortArr.reverse());

let nestedArr = [1, [2, 3], [4, 5]];
console.log("Default Nested Array:", nestedArr);
console.log("Flat():", nestedArr.flat());

//array destructuring

let array = [10, 20, 30, 40 , 50];
const [a, b, c] = array;
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

let array1 = [10, 20, 30, 40];
const [x, , z] = array1;
console.log("x:", x);
console.log("z:", z);

// rest operator
const num1 = [1, 2, 3, 4, 5];
const [first, ...rest] = num1;
console.log("first:", first);
console.log("rest:", rest);