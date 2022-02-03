
// querySelector: 단일 요소만 선택.
const item = document.querySelector(".wrap article");
console.log(item);

// querySelectorAll: 요소를 모두 선택 (배열로 반환)
const items = document.querySelectorAll(".wrap article");
console.log(items);

for (let item of items) {
    console.log(item);
}



// index 얻으려면 아래와 같이.
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}



console.log("부모 요소에서 자식 선택");
const list = document.querySelector(".list");
const items2 = list.children;

console.log(items2);
console.log(items2[1]);



console.log("자식 요소에서 부모 선택");
const child = document.querySelector(".item3");
console.log(child.parentElement);



console.log("형제 요소 선택");
const child2 = document.querySelector(".item2");
console.log(child2.previousElementSibling);
console.log(child2.nextElementSibling);



console.log("특정이름을 갖는 가장 가까운 부모 찾기");
const child3 = document.querySelector(".link")
// main이름을 가진 가장 가까운 부모.
console.log(child3.closest("main"));