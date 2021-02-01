let num = new Array();
const inputs = document.querySelector('#input');
let buttons = document.querySelectorAll("#btns");
const ce = document.querySelector('#ce')
const equal = document.querySelector('#evaluate')
const ac = document.querySelector('#ac')
const rads = document.querySelector('#radical')
const squ = document.querySelector('#square')
rads.addEventListener('click',radfun)
squ.addEventListener('click',squfun)
ce.addEventListener('click',remove)
ac.addEventListener('click',allclear)
equal.addEventListener('click',calculate)

function radfun(){
    let result = calculate()
    console.log(result)
    inputs.value = (Math.sqrt(Number(result))).toString()
}
function squfun(){
    inputs.value=(Number(inputs.value)*Number(inputs.value)).toString()
}
function remove(){
   let changed = inputs.value.substring(0,inputs.value.length-1);
   inputs.value=changed
}
function allclear(){
    inputs.value=""
}
buttons.forEach(but => {
    but.addEventListener('click', event => {
         let entry = event.target.innerText;
         inputs.value+=entry
    });
 
 });





 function calculate(){
    let curr = ""
    let final = new Array()
    index=0
    let ans = 0
    while (index<inputs.value.length){
        if (inputs.value.charAt(index) =="+" || inputs.value.charAt(index) =="-" || inputs.value.charAt(index) =="*" || inputs.value.charAt(index) =="/") {

            final.push(curr)
            final.push(inputs.value.charAt(index))
            curr=""
        }
        else{
            curr+=inputs.value.charAt(index)
        }
        index+=1
    }
    final.push(curr)
    index=0
    while(index<final.length-1){
        
       let num1 = final[index]
       let op = final[index+1]
       let num2 = final[index+2]
       if (op==="+"){
           ans = Number(num1) + Number(num2)
       }
       else if (op==="-"){
           ans = Number(num1) - Number(num2)
       }
       else if (op==="/"){
           if (Number(num2)===0){
               ans = "Undefined"
           }else{
               ans = Number(num1) / Number(num2)
           }
           
       }
       else if(op==="*"){
           ans = Number(num1) * Number(num2)
       }
       index+=2
       final[index]=ans.toString()
       
        
    }
    inputs.value=final[final.length-1]
    return final[final.length-1]
}