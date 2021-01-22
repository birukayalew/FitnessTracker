var firstName; 
var lastName; 
var age; 
var job;
var birthYear; 
let familyMember = new Array();
let numberOfFamily;
let index=0; 
let tempAge;
let isEligibleToVote;        
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?")
age = prompt("Enter Your Age");
birthYear = prompt("Enter Your Birth Year");
console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");



//checking eligiblity
let eligible = () => {
    tempAge = parseInt(age);
// check Eligibility 
    if (tempAge >= 18) {
        isEligibleToVote = true;
    } 
    else {
        isEligibleToVote = false;
    }
    return isEligibleToVote
    
};
console.log("Is Eligible to Vote : " + eligible());


//family membership

let family = () => {
    
    numberOfFamily = prompt("Number of Family  ? ");
    //Receiving the family number 
    for (let i = 0; i < parseInt(numberOfFamily); i++) {
        familyMember[i] = prompt("Your Family  Members " + (i + 1));
    }
    familyMember.forEach(function(member) {
        console.log("Family Member  " + (index + 1) + " : " + member);
        index++;
     });
} 
console.log(family());


//age calculator function
function ageCalc(birthYear)
{
    return "Your age is: "+ new Date().getFullYear()-birthYear;
}
console.log(ageCalc(birthYear));






