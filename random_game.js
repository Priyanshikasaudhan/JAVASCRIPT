let max = prompt("Enter the max number");
let random = Math.floor(Math.random() *max) +1;
let guess = prompt("Guess the number");
while(true){
    if(guess == "quit"){
        console.log("you quit the game!!");
        break;
    }if(guess == random){
        console.log("You are right!,congrats!! random number was", random);
        break;
    }else if(guess<random){
        guess = prompt("hints: you guess was to small. please try again");
    }else{
        guess = prompt("hints: you guess was to large. please try again");
    }
}