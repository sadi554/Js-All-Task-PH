function calculateBMI(weight, height) {
    let bmi = weight / (height * 2); // BMI formula

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    return `Your BMI is ${bmi.toFixed(
        2
    )}, and you are classified as: ${category}`;
}

console.log(calculateBMI(50, 1.75));
