let add = () => {
    let total=0
    while (true){
        let num1=prompt("Enter q when you are done:");
        if (num1==="q" || num1===null){
            break;
        }
        else{
            total=total+Number(num1)
        }
    }
    return "sum: "+total
}
let sub=  () => {
    let count=0;
    let total=0;
    while (true){
        let num1=prompt("Enter q when you are done:");
        if (num1==="q" || num1===null){
            break;
        }
        else{
            if(count===0){
                total=Number(num1);
            }
            else{
                total=total-Number(num1);
            }
        }
        count++;
    }
    return "sub: "+total
}
let mul = () => {
    let total=1
    while (true){
        let num1=prompt("Enter q when you are done:");
        if (num1==="q" || num1===null){
            break;
        }
        else{
            total=total*Number(num1)
        }
    }
    return 'mul:'+ total
}
let division = () => {
    let count=0;
    let total=0;
    while (true){
        let num1=prompt("Enter q when you are done:");
        if (num1==="q" || num1===null){
            break;
        }
        else{
            if(count===0){
                total=Number(num1);
            }
            else{
                if (Number(num1)===0){
                    return "Undefined"
                }
                else{
                total=total/Number(num1);
                }
            }
        }
        count++;
    }
    return 'div:'+total.toFixed(2)
}
function max() {
    let count=0;
    let maximum=0;
    while (true){
        let num1=prompt("Enter q when you are done:");
        if (num1==="q" || num1===null){
            break;
        }
        else{
            if(count===0){
                maximum=Number(num1);
            }
            else{
                if(Number(num1)>maximum){
                    maximum=Number(num1)
                }
                
                
            }
        }
        count++;
    }
    return 'max:'+maximum
}
function min() {
    let count=0;
    let minimum=0;
    while (true){
        let num1=prompt("Enter q when you are done:");
        if (num1==="q" || num1===null){
            break;
        }
        else{
            if(count===0){
                minimum=Number(num1);
            }
            else{
                if(Number(num1)<minimum){
                    minimum=Number(num1)
                }
                
                
            }
        }
        count++;
    }
    return 'min:'+minimum
}
function average() {
    let count=0
    let total=0
    while (true){
        let num1=prompt("Enter q when you are done:");
        if (num1==="q" || num1===null){
            break;
        }
        else{
            total=total+Number(num1);
            count+=1
        }
    }
    return 'average:'+total/count
}
function square() {
    let num1=prompt("Enter the number:")
    return 'square:'+Number(num1)*Number(num1)
}

let service = prompt("Choose operation from here: '+ - / * Mx Mi Av Sq quit'")
while(service!='quit'){
if (service==="+"){
    console.log(add());
}
else if(service==="-"){
    console.log(sub());
}
else if (service==="*"){
    console.log(mul());
}
else if(service==="/"){
    console.log(division());
}
else if(service==="Mx"){
    console.log(max());
}
else if(service==="Mi"){
    console.log(min());
}
else if(service==="Av"){
    console.log(average());
}
else if(service==="Sq"){
    console.log(square());
}
service = prompt("Choose operation from here: '+ - / * Mx Mi Av Sq quit'")
}