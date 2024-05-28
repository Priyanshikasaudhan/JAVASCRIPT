// let smallImg = document.getElementsByClassName("oldimg");
// for(let i=0;i<smallImg.length;i++){
//     // console.dir(smallImg[i].className);
//     smallImg[i].src="woodmart-jewelry-wordpress-theme.webp"
//     console.log(`value is ${i} changed.`)
// }
// console.dir(document.querySelector("h1"));
let heading =  document.querySelector("h1");
console.dir(heading.style);
console.log(heading.style);
heading.style.color="Yellow";
heading.style.backgroundColor="green";
let link = document.querySelectorAll(".box a")
    for (let i = 0; i < link.length; i++) {
        link[i].style.color = "black";
        
    }
let h = document.querySelector("h1");
console.dir(h.classList);
console.log(h.classList.add("abc"));
