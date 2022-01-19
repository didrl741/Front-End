'use strict';

// JavaScript is synchronous (동기적)
// : Excute the code block 'by order' after hoisting.
// hoisting: var, function declaration이 처음에 제일 위로.

// 복습 : callback func : '전달해준 함수를 나중에 너가 불러줘'

// asynchronous: 언제 그 코드가 실행될지 모르는 것.
console.log('1');
setTimeout(function() { // setTimeout이라는 함수 안에 인자로 우리가 만든 함수를 전달
                    // '내 함수를 나중에 불러줘' = call back func!
    console.log('2');
},1000);
console.log('3');


// Synchronous callback
function printImmediately(print) {  // hoisting 될 예정.
    print();
}
printImmediately(()=> console.log('Synchronous callback'));


// Asynchronous callback
function printWithDelay(print, timeout) {   // hoisting 될 예정.
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('Asynchronous callback'), 2000);



// Callback Hell example
class UserStorage {
    loginUser(id, pw, onSuccess, onError) {
        setTimeout(()=> {
            if(
                (id === 'ellie' && pw==='dream') ||
                (id === 'coder' && pw==='academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if(user==='ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your ID');
const pw = prompt('enter your PW');
userStorage.loginUser(
    id,
    pw,
    (user)=> {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            }, 
            error => {
                console.log('error');
            }
    );
},
    error => {
        console.log(error);
    }
);