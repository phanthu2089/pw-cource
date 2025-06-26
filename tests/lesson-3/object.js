//khai báo Oject Student có 2 thuộc tính

let Student = { // Student : là tên đối tượng viết hoa chữ đầu
    name: "Thu", // thuộc tính là 'Name' gán dấu : cho giá trị
    country: "HN",
    adresss: {  // Object lồng nhau
        country: "VN",
        province: "HN"
    },
    phoneNumber: 1234
}
// console.log(Student);
// console.log(Student.name);
// console.log(Student.adresss.country);
console.log(Student["phoneNumber"]);
// gán lại biến
Student.phoneNumber = 334;
console.log(Student.phoneNumber);
