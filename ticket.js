const age = 15;
const ticket = 800;

if (age < 10) {
    console.log("Children entry free.");
} else if (age >= 15) {
    //50% discount
    const discount = (ticket * 50) / 100;
    const payAmount = ticket - discount;
    console.log(payAmount);
} else if (age >= 60) {
    //15% discount
    const discount = (ticket * 15) / 100;
    const payAmount = ticket - discount;
    console.log(payAmount);
} else if (age <= 50) {
    const payAmount = ticket;
    console.log(payAmount);
} else {
    console.log(ticket);
}
