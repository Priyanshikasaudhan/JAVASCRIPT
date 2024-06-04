<<<<<<< HEAD
let todo = [];
let req = prompt("Please enter your request");
while(true){
    if(req == "quit")
        {
            console.log("quitted app");
            break;
        }
       else if(req == "list"){
            console.log("------------------------");
            for(let i=0;i<todo.length;i++){
                console.log(i,todo[i]);
            }
            console.log("-------------------------")
        }
        else if(req == "add"){
            let task = prompt("Please enter the task you want to add");
            todo.push(task);
            console.log("Added task");
        }else if(req == "delete"){
            let idx=   prompt("Please enter the task index");
            todo.splice(idx,1);
            console.log("deleted task");
        }else{
            console.log("wrong request")
        }
        req = prompt("Please enter your request");
=======
let todo = [];
let req = prompt("Please enter your request");
while(true){
    if(req == "quit")
        {
            console.log("quitted app");
            break;
        }
       else if(req == "list"){
            console.log("------------------------");
            for(let i=0;i<todo.length;i++){
                console.log(i,todo[i]);
            }
            console.log("-------------------------")
        }
        else if(req == "add"){
            let task = prompt("Please enter the task you want to add");
            todo.push(task);
            console.log("Added task");
        }else if(req == "delete"){
            let idx=   prompt("Please enter the task index");
            todo.splice(idx,1);
            console.log("deleted task");
        }else{
            console.log("wrong request")
        }
        req = prompt("Please enter your request");
>>>>>>> 32fa18da0a1e1992ab7ec5bd640a40163f7c187b
}