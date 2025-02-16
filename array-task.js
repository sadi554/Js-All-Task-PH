//Declare an array:

const fruits = ["Apple", "Banana", "lichie", "Mango", "Jack-fruit"];
console.log(fruits[3]);
fruits[2] = "Jambura";
console.log(fruits);

//Add or remove elements

const array = ["India", "jaflong", "sylhet"];
array.push("coxs-bazar");
console.log(array);
array.push("comilla", "gazipur");
console.log(array);
array.pop();
console.log(array);

//Checking array membership with includes

const Books = ["SPL", "OOP", "Java"];

console.log(Books.includes("javascript"));
console.log(Books.includes("Java"));

//Checking if its an array

const apps = ["fb", "insta", "whatsapp"];
const age = 56;
let books = "[0]";
let array = [];

console.log(Array.isArray(apps));
console.log(Array.isArray(age));
console.log(Array.isArray(books));
console.log(Array.isArray(array));

//Combining Arrays

let friends = ["karim", "rahim"];
let ages = [12, 56];
let array = friends.concat(ages);
console.log(array);
