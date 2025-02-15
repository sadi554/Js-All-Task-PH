function calculateGrade(marks) {
    let grade = "";

    if (marks >= 90 && marks <= 100) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    return `Your grade is: ${grade}`;
}
console.log(calculateGrade(95));
