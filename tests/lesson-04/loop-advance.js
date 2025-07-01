//for in : 
// 1.lặp các thuộc tính trong object 
//2. truy cập imdex - trong array [1] -- truy cập đến index -1

let product = {
banana : 20,
apple :15,
orrange : 11}
for (let properties in product) {
    console.log(properties)
    }

//cách khác dùng dấu chấm hoặc ngoặc vuông
console.log (product.banana);
console.log(product["banana"]);

// cách khác
for (let properties in product) {
    console.log(product[properties])
};