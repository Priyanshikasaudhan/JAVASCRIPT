// //this keyword
// //create object
// const student={
//     name: "Prishu",
//     age:23,
//     Phy:88,
//     Che:96,
//     Eng:100,
//     getAvg(){
//         let avg = (this.Che+this.Eng+this.Phy) / 3;
//         console.log(`${this.name} is marks average ${avg}`);
//     }
// }
//  console.log(this);
//Try & Catch
// console.log("Hello Everyone")
// try{
//     console.log(a);
// }catch(err){
//     console.log("Not Defines");
//     console.log(err);
// }
// console.log("Hello");
// console.log("Welcome Back")
//Arrow Function(=>)
// const sum = (a,b) =>
//     {
//         console.log(a+b);
//     };
//     sum(3,4);
// //Power
// const pow = (a,b) =>{
//     return a**b;
// };
// console.log(pow(2,5))
// //Implicity arrow function
// const mul = (a,b) =>(
//     a*b
// );
// mul(4,5)
//SetTimeOut
// console.log("Hi there!");
// setTimeout( ()=> {
//     console.log("MMMUT Gorakhpur")
// },2000);
// console.log("Welcome");
// //SetInterval
// // setInterval( ()=> {
// //     console.log("Priyanshi Kasaudhan");
// // },2000)
// let id = setInterval( ()=> {
//     console.log("Priyanshi Kasaudhan");
// },2000)
//this with arrow and without arrow
// const student={
//     name:"Prishu",
//     age:24,
//     marks:99,
//     prop:this,
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () =>{
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1: function(){
//         setTimeout ( ()=>{
//             console.log(this) //print stuent
//         }, 2000)
//     },
//     getInfo2: function(){
//         setTimeout ( function()     {
//             console.log(this); //print window
//         }, 2000)
//     },
// };
//return square
// const func = (a) =>
//     a*a;

// console.log(func(4))
//Practice Ques
let id = setInterval( () =>{
    console.log("Hello World")
}, 2000);
setTimeout( () => {
    clearInterval(id);
    console.log("Clear interval ran")
}, 10000);