// Điều kiện so sánh: ==, !=, <=, >=, &&, ||, ===;

let a = 10;
let b = "10";
let check = a === b;
console.log(check);

// let v = "l";
// switch (v) {
//   case "A":
//     console.log("A");
//   case "B":
//     console.log("B");
//     break;
//   case "C":
//     console.log("C");
//     break;
//   default:
//     console.log("Wrong");
// }

// Array trong JS:

// let school1 = "DTD";
// let school2 = "Vin";
// let school3 = "Nguyễn Trãi";

// let listSchool = ["DTD", "Vin", "Nguyễn Trãi"];
// //                  0      1        2

// listSchool[3] = "Ba Đình";
// listSchool.push("Hoàng Đạo Thúy");
// listSchool[listSchool.length] = "Nguyễn Chí Thanh";

// let t = listSchool.pop();
// console.log(t);
// listSchool.pop();
// console.log(listSchool);

// // Object đối tượng:
// // - Thuộc tính:
// // - Hành động, chức năng:

// let minhCrush = {
//   name: "Không có",
//   age: 16,
//   denyFlirt: function () {
//     console.log("Minh bị từ chối bỏi 1 bạn nữ k tồn tại");
//   },
//   crushFavor: ["Đọc sách", "Tập thể dục", "Ngủ"],
// };

// console.log(minhCrush.name);
// console.log(minhCrush.age);
// minhCrush.denyFlirt();
// console.log(minhCrush.crushFavor);

// For: dùng để lặp đi lặp 1 hành giống nhau nhiều lần

// for (let i = 10; i >= 0; i -= 2) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// Function: dùng để thực hiện 1 chức năng cụ thể nào đó
// 1. function k có đầu vào (ko parameter)
function sayHello() {
  console.log("Hello");
}

sayHello();

// 2. function có parameter:

function countPlus(a, b) {
  console.log("Tổng 2 số là : " + (a + b));
}

countPlus(10, 20);

function returnDemo(randomText) {
  return "Hello " + randomText;
}

// 1 2 3 4 5 6

console.log(returnDemo("Phương"));
