// let smallImg = document.getElementsByClassName("oldimg");
// for(let i=0;i<smallImg.length;i++){
//     // console.dir(smallImg[i].className);
//     smallImg[i].src="woodmart-jewelry-wordpress-theme.webp"
//     console.log(`value is ${i} changed.`)
// }
// console.dir(document.querySelector("h1"));
// let heading =  document.querySelector("h1");
// console.dir(heading.style);
// console.log(heading.style);
// heading.style.color="Yellow";
// heading.style.backgroundColor="green";
// let link = document.querySelectorAll(".box a")
//     for (let i = 0; i < link.length; i++) {
//         link[i].style.color = "black";
        
//     }
// let h = document.querySelector("h1");
// console.dir(h.classList);
// console.log(h.classList.add("abc"));
// let newP = document.createElement('p');
// console.dir(newP);
// newP.innerText ="Hello, I am a new  p.";
// let body = document.querySelector('body');
// body.appendChild(newP);
// let box = document.querySelector('.box');
// box.appendChild(newP);
// let btn = document.createElement('button');
// btn.innerText="Click me!!";
// box.appendChild(btn); 
// newP.append("this is a new text.");
// let p = document.querySelector('p');
// p.insertAdjacentElement('beforebegin',btn);
// p.insertAdjacentElement('afterbegin',btn);
// p.insertAdjacentElement('afterend',btn);
// btn.remove();
//Practice
// let o = document.createElement("p");
// o.innerText = "Hey I'm red!";
// document.querySelector("body ").append(o);
// o.classList.add("red");
// let h3 = document.createElement("h3");
// h3.innerText = "I'm blue h3!!";
// document.querySelector("body").append(h3);
// h3.classList.add("blue");
// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let p2 = document.createElement("P");
// h1.innerText = "I'm in a div";
// p2.innerText = "Me To!!";
// div.append(h1);
// div.append(p2);
// div.classList.add("box");
// document.querySelector("body").append(h1);
// document.querySelector("body").append(p2);
//DOM EVETS
// let btn = document.querySelector("button");
// console.dir(btn);
let btns = document.querySelectorAll("button");
for(btn of btns){
    // btn.onclick = Hello;
    // btn.onclick=Name;
    // btn.onmouseenter = function () {
    //     console.log("you clicked a button")
    // }
    // btn.addEventListener("click", Hello);
    // btn.addEventListener("click", Name);
    btn.addEventListener("dblclick", function (){
        console.log("You double clicked.")
    });
}
//First Method
// btn.onclick = function() {
//     alert("Button was clicked")
// };
//Other Method
function Hello(){
    alert("Welcome to home!")
};
function Name(){
    alert("Priyanshi Kasaudhan.")
}
// btn.onclick = Hello;