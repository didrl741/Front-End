
const wrap = document.querySelector(".wrap");
const box = wrap.querySelector("article");

// 이런식으로 스타일을 직접 건들면 우선순위 문제로 나중에 문제발생 가능.
// wrap.addEventListener("click", () => {
//     box.style.background = "red";
// });


// css에 style 미리 지정해두고, 클래스를 추가하자.
// 결과적으로 <section class="wrap on"> 이 됨.

// wrap.addEventListener("click", () => {
//     let isOn = wrap.classList.contains("on");

//     if (isOn) {
//         wrap.classList.remove("on");
//     }
//     else {
//         wrap.classList.add("on");
//     }
// })


// 최종버전. 있으면 제거, 없으면 추가.
wrap.addEventListener("click", () => {
    wrap.classList.toggle("on");
});
