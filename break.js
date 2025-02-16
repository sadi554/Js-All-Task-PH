//for loop
// for (let i = 1; i <= 200; i++) {
//     console.log("loooping", i);
//     if (i >= 100) {
//         break;
//     }
// }

// console.log("Thamo ebar vai onek hoise::");

//while loop

// let i = 1;
// let sum = 0;
// while (i <= 200) {
//     console.log("loooping:", i);
//     sum = sum + i;
//     console.log(sum);

//     if (sum >= 100) {
//         break;
//     }
//     i++;
// }
// console.log("tham vai tham:");

//Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for (let i = 1; i >= 100; i++) {
    console.log(i);
    if (Math.sqrt(i * i)) {
        break;
    }
}
