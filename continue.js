//skip odd numbers

// for (let i = 1; i <= 40; i++) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
// }

for (let i = 55; i <= 85; i += 2) {
    console.log(i);
    if (i % 5 === 1) {
        continue;
    }
}
