// 속성 알아내기
const link = document.querySelector("a");
const href = link.getAttribute("href");
console.log(href);

// 속성 바꾸기
link.setAttribute("href", "https://github.com/");


// 브라우저 정보
const ver = navigator.userAgent;
console.log(ver);

// IE로 접속하면 오류메시지 띄우기

// ver에 trident라는 문자가 있는지 탐색.
const isIE = /trident/i.test(ver);
console.log(isIE);

if (isIE) {
    alert("익스플로러는 지원하지 않습니다. 다른 브라우저를 사용하세요");
}