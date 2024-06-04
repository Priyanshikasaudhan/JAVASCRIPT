//objects literals
const student = {
    name: "Priyanshi",
    agr:24,
    marks:97.4,
    city:"Ayodhya"
};
console.log(student);
//update
student.city="Mumbai";
console.log(student)
//add
student.gender = "Female";
console.log(student);
//change
student.marks="A";
console.log(student);
//delete
delete student.marks;
console.log(student)
// const item={
//     price:1000.8,
//     discount:50,
//     colors : ["red","blue"]
// };
// console.log(item);
// const post={
//     username:"@Prishu",
//     content:"#This is my first post",
//     like:1650,
//     reposts:5,
//     tag:["@Prishu","@Princess" ,"@sriyas"]
// };
// const obj ={
//     1:"a",
//     2:"b",
//     null:"c",
//     undefined:"d",
//     true:"e"
// };console.log(obj);
//Random between 1 - 100
// let ran = Math.random();
// console.log("Print random number b/w 0 to 1");
// console.log(ran);
// let bet = ran*100;
// console.log("Print random number between 0 to 100 ");
// console.log(bet);
// let convert = Math.floor(bet);
// console.log("print Integer value");
// console.log(convert);
// let sum = convert+1;
// console.log("Add 1 for print 100 value")
// console.log(sum);
// random between 1 to 5
let ran = Math.random();
console.log("Print random number b/w 0 to 1");
console.log(ran);
let bet = ran*5;
console.log("Print random number between 0 to 5 ");
console.log(bet);
let convert = Math.floor(bet);
console.log("print Integer value");
console.log(convert);
let sum = convert+1;
console.log("Add 1 for print 5 value")
console.log(sum);

