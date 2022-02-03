
const box = document.querySelector(".box");

// css 연동
box.style.width = "10%";
box.style.height = "300px";
box.style.backgroundColor = "hotpink";
box.style.transform = "rotate(20deg)";
box.style.transition = "0.5s";

box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "aqua";
});

box.addEventListener("mouseleave", (e) => {
    e.currentTarget.style.backgroundColor = "hotpink";
});



// 클릭 이벤트 연동
const link = document.querySelector(".naver");

link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("클릭함");
});



// 반복되는 요소에 이벤트 한꺼번에 연결, 문자에 변수 삽입
let num = 0;
const list = document.querySelectorAll(".list a");
for (let el of list) {
    el.addEventListener("click", e => {
        e.preventDefault();
        num++;
        e.currentTarget.innerText = `${num} 숫자바뀜!`;
    });
};



// 박스 회전
let deg = 0;
const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    deg++;
    box.style.transform = `rotate(${deg * 5}deg)`;
})