//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    usingCall();
    usingApply();
    usingBind();


});

//Brad Person Object 
const Brad = {
    firstName: "Brad",
    lastName: "Bansely",
    fullName: function(ui_place, message) {

        ui_place.innerHTML = `${message} ${this.firstName} ${this.lastName}`;

    }
}

function usingCall() {

    //Cerscy Person Object 
    const Cerscy = {
        firstName: "Cerscy ",
        lastName: "Lanster",
    }

    //1. Borrow fullName using call
    Brad.fullName.call(Cerscy,call_demo,"Hi I am,");
    // let last = Brad.lastName.call(Cerscy,lastName);
    //2. Pass call_demo[as ui_place] , Hi I am ,[message]

}

function usingApply() {

    //Jon Person Object 
    const Jon = {
        firstName: "Jon",
        lastName: "Snow",
    }

    //1. Borrow fullName using apply
    Brad.fullName.apply(Jon,[apply_demo,"Hi I am,"]);
    //2. Pass apply_demo[as ui_place] and Hi I am ,[as message] as array


}

function usingBind() {

    //Daenerys Person Object 
    const Daenerys = {
        firstName: "Daenerys",
        lastName: "Targaryen",
    }
    //1. Borrow fullName using bind
    let newFun = Brad.fullName.bind(Daenerys,bind_demo,"Hi I am,");
    newFun();
    //2. Pass bind_demo[as ui_place] , Hi I am ,[as message]


}