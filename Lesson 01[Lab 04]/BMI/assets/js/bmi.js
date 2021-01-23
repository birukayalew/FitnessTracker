var height;
var weight;
var BMI;
var ans;
height = prompt("Enter your height in meter: ")
weight = prompt("Enter your weight in: ")
let calcBmi = (height,weight) =>{
    BMI = weight/(height*height)
    if (BMI < 18.5){
        return "you are underweight: " + BMI
    }
    else if (BMI>=18.5 && BMI<=24.9) {
        return "you are Normal: "+ BMI
    } else if (BMI>=25.0 && BMI<= 29.9){
        return "you are Overweight: "+BMI
    }
    else if(BMI>=30){
        return "Obese: " + BMI
    }
    else{
        return "wrong input"
    }
}
(function (){
    console.log(calcBmi(height,weight));
    
})();