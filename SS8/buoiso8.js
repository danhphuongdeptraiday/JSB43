let myNameDiv = document.getElementById("myName");
myNameDiv.innerText = "Hihi";
myNameDiv.style.backgroundColor = "red";
myNameDiv.style.fontSize = "50px";
console.log(myNameDiv);

let listLi = document.getElementsByTagName("li");
console.log(listLi.length);
for (let i = 0; i < listLi.length; i++) {
  console.log(listLi[i].innerText);
}

// let n = Number(prompt("Nhập số lượng thẻ p muốn tạo "));
// for (let i = 1; i <= n; i++) {
//   let newElement = document.createElement("p");
//   let text = prompt("Enter some text in p element at position " + i);
//   newElement.innerText = text;
//   document.body.appendChild(newElement);
// }

// add event
let btn = document.getElementById("btn");
let inputText = document.getElementById("inputText");
btn.addEventListener("click", function () {
  console.log(inputText.value);
  inputText.value = "";
});

function sayHello() {
  console.log("Hello console");
}

sayHello();
