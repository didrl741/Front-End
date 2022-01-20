'use strict';

// Promise is a JS object for asynchronous operation.
// 비동기적인 것을 수행할 때 콜백함수 대신에 사용.
// State, Producer/Consumer 개념이 중요.

// State: promise가 만들어져서 우리가 지정한 일을 수행중일 때 = pending.
//        일을 다 수행했을 때 = fulfilled       파일을 찾을수 없거나 거부될 때 = rejected

// Producer VS Consumer

// 1. Producer
// promise를 만드는 순간 executer(callback함수)가 바로 실행.
// 선택적인 상황에서만 실행시키고 싶은 코드는 사용 주의!(버튼같은거)
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files,,)
    console.log('doing something');
    setTimeout(()=>{
        //resolve('ellie');
        reject(new Error('no network..'));
    },2000);
});    


// 2. Consumer: then, catch, finally
// .then의 리턴값이 promise라 .catch 바로 붙일 수 있음.
promise
.then(value => {       // resolve의 인자 ellie가 value로 전달됨.
    console.log(value);
})
.catch(error => {        // reject의 인자 error가 전달됨.
    console.log(error);
})
.finally(()=> {
    console.log('finally');     // 성공하든 실패하든 실행.
});


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1),1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(num-1),1000);
    });
})
.then(num=>console.log(num));       // 5


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve(`${hen} => 알`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve(`${egg} => 후라이`), 1000);
    });

getHen()
.then(hen => getEgg(hen))       // .then(getEgg) 라고써도됨.
.then(egg => cook(egg))
.then(meal => console.log(meal));

// ... 다음에 다시 봐야겠다.