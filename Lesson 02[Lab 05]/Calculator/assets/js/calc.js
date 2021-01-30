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





    