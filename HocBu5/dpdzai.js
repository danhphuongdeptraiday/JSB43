// Điều kiện so sánh: ==, !=, <, >, >=, <=, &&, ||

// let a = 20;
// let b = 10;
// let c = "Phương";
// let d = "Phương";
// let check1 = c == d;
// console.log(check1);
// let check2 = a >= b;
// console.log(check2);

// let finalCheck = check1 || check2;
// console.log("Final Check = " + finalCheck);

// nếu thì:  if, else , nếu cái đúng thì xảy ra cái kia
// let crushCuaAn = "Hihi";

// if (crushCuaAn == "Hiền") {
//   console.log("Crush thứ 1 của An");
// } else if (crushCuaAn == "Ngân") {
//   console.log("Crush thứ 2 của An");
// } else {
//   console.log("Đây không phải là người An từng thích");
// }

// array: Dùng đề lưu nhiều giá trị trong 1 biến:
// Các phần tử trong mảng đếm từ con số 0;
let faver1 = "Movie";
let faver2 = "Music";
let faver3 = "Basketball";

let listFavors = ["Movie", "Music", "Basketball"];
//                   0        1          2
// Cách thêm phần tử mới vào trong mảng:
// listFavors.push("Code");
// listFavors.push("Study");
// listFavors[5] = "Hihi";
// listFavors[6] = 10;
// listFavors.pop();
// listFavors.pop();

// console.log(listFavors);
// console.log(listFavors[3]);

let t = 0;
t = t + 1;
t += 1;
t++;
// console.log(t);

// let c = "";
// c = c + 1;
// c = c + 2;
// c = c + 3;
// c = c + 4;
// console.log(c);

// for (let i = 1; i <= 10; i++) {
//   c = c + i + " ";
// }

// console.log(c);

// let a = Number(prompt("Enter số thứ 1 ? "));
// let b = Number(prompt("Enter số thứ 2 ? "));

// let g = 0;
// // g = g + 1; // g = 1;
// // g = g + 2; // g = 2;
// // g = g + 3; //
// for (let i = a; i <= b; i++) {
//   g = g + i;
//   console.log("Tại vòng thứ " + i + " thì g = " + g);
// }
// console.log(g);

let n = Number(prompt("Nhập số bạn tính giai thừa: "));
let k = 1;
for (let i = 1; i <= n; i++) {
  k = k * i;
}

console.log(k);
