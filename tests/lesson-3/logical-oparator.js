let a =true;
let b = false;
if (a&&b) {console.log("cả 2 vế của mệnh đề đều dúng")};
if (a||b) {console.log(" 1 trong 2 vế đúng")};
if (a!=b) {console.log("đảo ngược lại giá trị của mệnh đề")};

const newA = !a;
const newB = !!b;
console.log(newA);
console.log(newB);