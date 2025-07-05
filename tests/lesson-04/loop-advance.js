//for in :
// 1.lặp các thuộc tính trong object
//2. truy cập imdex - trong array [1] -- truy cập đến index -1

let product = {
banana : 20,
apple :15,
orrange : 11}
/*
// In ra các thuộc tính
for (let properties in product) {
    console.log(properties)
    }


//cách khác dùng dấu chấm hoặc ngoặc vuông  => In ra giá trị của từng thuộc tính
 console.log (product.banana);
console.log(product["banana"]);

*/
// In toàn bộ giá trị của các thuộc tinh
for (let properties in product) {
  console.log(product[properties])
 };
// tại sao không dùng dấu .chấm > hệ thống hểu là dấu. là truy xuất 1 giá trị của 1 thuộct ính

// ## 1. forEach : truy cập vào index
/*
 array_tên.forEach((value, index) {
 // code here
})
 */

const fruits = ["banana", "orange", "apple"];
//  fruits.forEach((value) =>{
// console.log(value)
//  });

 // in ra index
 fruits.forEach((value, index) =>{
    console.log (`trái cây ở vị trí ${index} là ${value}`)
 });

 // For ... off
 /*
 for (const value of array) {
 //code here
 }
  */
const colors = ["blue", "back", "red"];
for (const nameColor of colors) {
    console.log(nameColor)
};
