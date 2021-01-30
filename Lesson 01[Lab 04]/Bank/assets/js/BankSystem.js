//total number of users
let Users={
    "Biruk":10002345,
    "Abeni":10003445,
    "Btotal":0,
    "Atotal":0,
    
}
let deposit = () =>{
    let name=prompt("Enter your name:")
    let money=prompt("Enter the amount of money:")
    if(name.toLowerCase()==="biruk"){
        Users.Btotal=Users.Btotal+Number(money);
    }
    else if(name.toLowerCase()==="abeni"){
        Users.Atotal=Users.total+Number(money);
    }
    return "You have successfully deposited";

} 
let withdraw = () => {
    let name=prompt("Enter your name:")
    let money=prompt("Enter the amount of money you withdraw:")
    if (name.toLowerCase()==="biruk"){
        Users.Btotal=Users.Btotal-Number(money)
    }
    else if(name.toLowerCase()==="abeni"){
        Users.Atotal=Users.Atotal-Number(money)
    }
    return "you withdraw :" + money + "birr.";
} 
let Balance = () => {
    let name=prompt("Enter your name:")
    if (name.toLowerCase()==="biruk"){
        return "Your balance is: "+Users.Btotal;
    }
    else if(name.toLowerCase()==="abeni"){
        return "Your balance is: "+Users.Atotal;
    }
}
let transfer = () => {
    let name=prompt("Enter your name:")
    let to= prompt("To whom are you transfering?")
    let money=prompt("How much money do you want to transfer?")
    if (name.toLowerCase()==="biruk"){
        if (to.toLowerCase()==="abeni"){
            Users.Atotal=Users.Atotal+Number(money)
        }
        return "You have transfered: "+ money + "birr to Abeni."
    }
    else if(name.toLowerCase()==="abeni"){
        if (to.toLowerCase()==="biruk"){
            Users.Btotal=Users.Btotal+Number(money)
        }
        return "You have transfered: "+ money + "birr to Biruk."
    }
    

    
}

while(true){
    let front=prompt("Hello, What do you want to do?: 'd/t/b/w/q'")
    if (front==="q"){
        break;
    }
    else{
        if(front==="d"){
            console.log(deposit())
        }
        else if(front==="b"){
            console.log(Balance())
        }
        else if(front==="w"){
            console.log(withdraw());
        }
        else if (front==="t"){
            console.log(transfer())
        }
    }
    
}