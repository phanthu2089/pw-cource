//continue
// for (let i = 1; i<=5; i++) {
//     if(i%2===0) {
//         continue;
//     }
//     console.log(i)
// };
// for (let j = 3; j<=5; j++) {
//     if(j%2===0) {
//         break;
//     }
//     console.log(j)
// };

const numbers = [11,13, 22, 33];
for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] % 2 === 0) {

        break;
    }
    console.log(numbers[n]);
}
