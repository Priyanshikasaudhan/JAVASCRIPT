// function Hello(){
//     console.log("Hello!!!")
// }
// Hello();
// function PrintRandomName(){
//     let name=prompt("Enter your Name:");
//     console.log(name);
// }
// PrintRandomName();
// function Adult(){
//     let age = prompt("Enter your age:");
//     if(age>=18){
//         console.log("Adult")
//     }else{
//         console.log("Not adult");
//     }
// }
// Adult();
// function Print1ton(){
//     let n = prompt("Enter the value");
//     for(let i=1;i<=n;i++){
//         console.log(i);
//     }
// }
// Print1ton();
// function Random(){
//     let ran = prompt("Enter the any number");
//     let bet = Math.random()*7;
//     let int = Math.floor(bet);
//     console.log(int);
// }
// Random();
// function print(name,age){
//     console.log(`${name}'s is age ${age}`);
// }
// print("Prishu",23)
// function for avg of 3 number
// function Avg(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(`Avrerage of 3 Number ${avg}`)
// }
// Avg(2,5,4);
// //Print TAble
// function TAble(n){

//     for(let i=n;i<=n*10;i+=n){
//         console.log(i);
//     }
// }
// TAble(5)
//Print sum of n
// function Sum(n){
//     let sum =0; 
//     for(let i=1;i<=n;i++){
//         sum += i;
//     }
//     return sum;
// }
// let s = Sum(10);
// console.log(`Sum = ${s}`);
// let str = ["Hello" ,"Hi" ,"WElcome","!"];
// function concate(str){
//     let result = "";
//     for(let i=0;i<str.length;i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concate(str)); 
//function scope
// let sum = 23;//Global Scope
// function Sum(a,b){
//      let sum = a+b;//Function Scope
//     console.log(sum);
// }
// Sum(1,2);
// console.log(sum);
// Block Scope
// {
//     let a=24;
//     const b= 23;
//     console.log(a);
// console.log(b);
// }
// console.log(a);
// console.log(b);
//Loxical Scope
// function OuterFun(){
//     let x=23;
//     let y= 234;
//     function InnerFun(){
//         console.log(x);
//         console.log(y);
//     }
//     InnerFun();
// }
// OuterFun();
//Hositing
// function OuterFun(){
//     function InnerFun(){
//                 console.log(x);
//                 console.log(y);
//             }
//         let x=23;
//         let y= 234
//         InnerFun();
// }
// OuterFun();
//Practice
// let greet = "Hello!";
// function ChangeGreet(){
//     let greet = "Namaste!";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
//     innerGreet();
// }
// console.log(greet);
// ChangeGreet();
//function Expressions
// let name ="Priynashi";
// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(1,2));
// //Another Example
// let st = function(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// st("Prishu",23,12);
//Higher Order Function
// function MultiGreet(Func,count){
//     for(let i=1;i<=count;i++){
//         Func();
//     }
// }
// let greet = function(){
//     console.log("Hello!");
// }
// MultiGreet(greet,200);
// MultiGreet(function(){console.log("Namaste!")},50);
// MultiGreet(greet(),23); //it's wrong.
//Odd Function
// let odd = function(n){
//     console.log(!(n%2 == 0));
// }
// let even = function(n){
//     console.log(n%2 == 0);
// }
// function OddOrEven(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2 == 0));
//         }
//         return odd;
//     }else if(request == "even"){
//         let even = function(n){
//             console.log(n%2 == 0);
//         }
//         return even;    
//     }else{
//         console.log("wrong request");
//     }
// }
// let request = "odd"
//Normal Calculaor Function
// const Calculator = {
//     num: 555,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     },
//     div: function(a,b){
//         return a/b;
//     },
//     mod: function(a,b){
//         return a%b;
//     }
// };
//Method Shorthand
const cal = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};