const subjects = ["Mathematics", "Biology", "Chemistry", "Physics", "Bangla"];
var Mathematics = parseFloat("75.25");
var Biology = 65;
var Chemistry = 80;
var Physics = parseFloat("35.45");
var Bangla = parseFloat("99.5");
const totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
console.log(totalMarks);

let average = totalMarks / subjects.length;
console.log(`\nThe average marks of the student is: ${average.toFixed(2)}`);
