//divisible 10
// let value = prompt("Enter any number: ");
// if(value%10 == 0){
//     console.log("Good")
// }else{
//     console.log("Bad");
// }
//task2
// let Name = prompt("Enter your name: ");
// let age = prompt("Enter your age: ");
// let print = Name +" "+ "is" +" "+ age +" " + "years old.";
// alert(print); 
//task3
// let number =  1;
// switch(number){
//     case 1:
//         console.log("January,February,March");
//         // console.log("February");
//         // console.log("March");
//         break;
//     case 2:
//         console.log("April");
//         console.log("May");
//         console.log("June");
//         break;
//     case 3:
//         console.log("July");
//         console.log("August");
//         console.log("September");
//         break;
//     case 4:
//         console.log("October");
//         console.log("November");
//         console.log("December");
//         break;
//     default:
//         console.log("Please enter in range value.") 
// }
//task4
// let Name = "applew";
// if((Name.charAt(0)=="A" || Name.charAt(0) == "a") && Name.length>5){
//     console.log("Golden");
// }else{
//     console.log("Not Golden.")
// }
//task 5
// let a=12;
// let b=34;
// let c=22;
// if(a>b){
//     if(a>c){
//         console.log(`The largest value is a= ${a}`);
//     }else{
//         console.log(`The largest value is c= ${c}`);
//     }
// }else{
//     if(b>c){
//         console.log(`The largest value is b= ${b}`);
//     }else{
//         console.log(`The largest value is c= ${c}`);
//     }
// }
//task6
let a=233;
let b=333;
if((a%10) == (b%10)){
    console.log("number have the same last digit which is",a%10);
}else{
    console.log("number don't have the same last digit.");
}