// Declaring Object +  Remove the variables and modify with the object 
let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    calcBMI : function() {
        BMI = this.weight/(this.height*this.height)
        if (BMI < 18.5){
            return "you are underweight: " + BMI
        }
        else if (BMI>=18.5 && BMI<=24.9) {
            return "you are Normal: "+ BMI
        } else if (BMI>=25.0 && BMI<= 29.9){
            return "you are Overweight: "+BMI
        }
        else{
            return "Obese: " + BMI
        }
    },
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
        return this.isEligibleToVote
    },
    calcBmi: function() {
    }
};
// Receive the values from input and assign to object properties
personProfile.firstName = prompt("Enter Your First Name");
personProfile.lastName = prompt("Enter Your Last Name");
personProfile.job = prompt("What is Your Profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.weight = prompt("Your Weight in Kg  ? ");
personProfile.height = prompt("Your Height in M  ? ");
let numberOfFamily = prompt("Number of Family  ? ");

//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}
// call age and check vote fun



// Adding Self Invoking Function Expression 
(function() {

    console.log("**************************************************************")
    console.log("Here is your Profile ")
    console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
    console.log("Profession : " + personProfile.job);
    console.log("Age : " + personProfile.age + " " + "years old");
    console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
    console.log("Family Members ");
    //Displaying the family member with foreach
    personProfile.familyMembers.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });
    // call bmi calculator 
    console.log(personProfile.ageCalc());
    console.log(personProfile.checkVote());
    console.log(personProfile.calcBMI());
    console.log("**************************************************************")

})();



