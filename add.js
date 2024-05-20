let a = 2;
let b = 3;
let sum =  a+b;
let mul =  a*b;
document.getElementById("demo").innerHTML = sum;
document.getElementById("mul").innerHTML = mul;
// Concat
let s = "ABC";
let u = "DEF";
let result = s.concat(u);
document.getElementById("str").innerHTML = result;
// JOIN
// let names = ["prishu" , "priyanshi" , "sriyas"];
let names = ["I'm" , "Ayodhya."]
// let res = names.join();
let res = names.join("  from ")
document.getElementById("join").innerHTML = res;
// Slice
const arr = ["P" , "Q" , "R" , "S"];
const r = arr.slice(1,3);
const y = arr.slice(-4,-1);
document.getElementById("slice").innerHTML = r;
document.getElementById("slice").innerHTML = y;
// Splice
const fruits = ["A" , "B" , "C" , "D" , "E" , "F"];
  fruits.splice(2,1,"Prishu");
document.getElementById("splice").innerHTML = fruits;
// spliced
const f = ["A" , "C" , "D" , "E" , "G"];
const q = f.toSpliced(2,0,"Sriyas");
document.getElementById("spliced").innerHTML = q;

