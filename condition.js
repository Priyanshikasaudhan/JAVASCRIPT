let color = "red";
if(color == "green"){
    console.log("Go away");
}
if(color == "red"){
    console.log("Stop!");
}
if(color == "yellow"){
    console.log("Slow Down");
}
// console.log("Follow please road light");
//popcone price
let size = "XL";
if(size ===  "XL"){
    console.log("Price is Rs. 350");
}
else if(size === "L"){
    console.log("Price id Rs. 200");
}else if(size === "M")
{
    console.log("Price is RS. 100.");
}else if(size === "M"){
    console.log("Price is RS. 50");
}
// Good String
let string = "spple";
if(string.charAt(0) == "a" && string.length >3){
    console.log("Good String.")
}
else{
    console.log("Not Good String.")
}
//Switch Statement
let col = "red"
switch(col){
    case "red":
        console.log("Stop");
        break;
        case "yellow":
            console.log("Slow down");
            break;
            default:
                console.log("Broken Light");
}