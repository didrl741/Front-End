'use strict';

// 1. Function
// performs 'a' task or calculate a value (한가지의 일만 시키자)
// functions is "object" in JS!
// naming : verb (doSomething)

function printHello()
{
    console.log('hello!');
}

printHello();


function log(message)   // parameter type : later in TS
{
    console.log(message);
}

log('hihi!');
log(3);     // automatically changed to string.
            // but this can be confusing in business.


// 2. Parameter
// premitive para : passed by value
// object para :    passed by reference

function callByValue(num) {     // value
    num=13;
}
let n = 10;
callByValue(n);
console.log(n);

function changeName(obj)        // ref
{
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6)

function showMessage(message, from) {      // unless assigned, assigned to 
    console.log(`${message} by ${from}`);   // undefined
}
showMessage('Hi!');

function showMessage2(message, from='unknown') {    // can assign default
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!');


// 4. Rest parameter (added in ES6)

function printAll(...args) {    // carryed with form of array
    for(let i=0; i<args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'songyanggi');

function printAll2(...args) {    
    for( const arg of args ) {
        console.log(arg);
    }
}
printAll2('dream', 'coding', 'songyanggi');

function printAll3(...args) {   
    args.forEach( (arg) => console.log(arg) );
}
printAll3('dream', 'coding', 'songyanggi');


// 5. Retrun a value
function sum(a, b) {
    return a+b;
}
const result = sum(1,2);
console.log(`sum = ${sum(1,2)}`);


// 6. Early return, early exit

//bad
function upgradeUser(user) {
    if(user.point > 10) {
        // long logic...
    }
}

//good
function upgradeUser2(user) { 
    if(user.point <= 10) {
        return;
    }
    //long logic...
}


// 7. Function expression

// a function declaration can be called earlier than it is defined (hoisted)
console.log(sum2(1,2));
function sum2(a, b) {
    return a+b;
}
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function.
    console.log('print!');
}
print();

const print2 = function ppp() { // named function. it is used when recursive..
                                // or debug.
    console.log('ppp');
}

const printAgain=print;
printAgain();


// 8. Callback function using function expresstion
// : 함수를 인자로 넘겨서, 상황이 맞으면 그 함수 호출하는것.
function randomQuiz(answer, printYes, printNo) {
    if(answer==='love you') {
        printYes();
    }
    else {
        printNo();
    }
}


// 9. Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');
const addadd = (a,b) => a+b;

// when more complicated,
const simpleMult = (a,b) => {
    // do something more
    return a*b;
}   // 이 경우 return 써 줘야 함.


// 10. IIFE : Immediately Invoked Function Expression (선언과동시에실행)
(function hello() {
    console.log('IIFE');
}) ();


// Quiz
function calcul(command, a, b)
{
    if(command === '*') {
        return a*b;
    }
}

console.log(calcul('*', 2, 3));