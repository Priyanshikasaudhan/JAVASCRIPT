//trim()
let msg = "    Hello    ";
console.log(msg.trim());
//touppercase(),tolowercase()
let Name = "Priyanshi";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
//indexOf()
let str = "Ilovecoding";
console.log(str.indexOf("od"));
//method chainig
let str1 = "    Prishu kkkk     ";
console.log(str1.trim().toUpperCase());
//slice()
let s="ILoveCoding";
console.log(s.slice(-3));
//replace
console.log(s.replace("Love","Do"));
//repeat
console.log(s.repeat(3));
//practice Q.
let write = "   Help!    ";
console.log(write.trim().toUpperCase());
//practice Q2.
let string = "ApnaCollege";
console.log(string.slice(4,9));
console.log(string.indexOf("na"));
console.log(string.replace("Apna","Our"));
//practice Q3.
// let str2 = "College";
console.log(string.slice(4).replace("l","t").replace("l","t"));
//ARRAY
let students = ["Priyanshi","Sanskrati","Prishu"];
console.log(students);
// let len = students[2][3];
let len = students[0].length;
console.log(len);
//push pop shift unshift
let cars=["bmw","xuv","verna","sport i10"];
console.log(cars);
cars.push("began");
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift("began");
console.log(cars);
cars.shift();
console.log(cars); 
//practics Q.
let months = ["january","july","march","august"];
console.log(months);
months.shift();
months.shift();
console.log(months);
months.unshift("june");
months.unshift("july");
console.log(months);
//splice
months.splice(0,2,"july","june");
console.log("After splice method: ",months);
//tic-toc
let game = [["X",null,"O"],[null,"X",null],["O",null,"X "]];
console.log(game)
game[0][1] = "O";
