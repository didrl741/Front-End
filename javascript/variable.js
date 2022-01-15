'use strict';

console.log("Hello Worls!");

// 1. let
// 변수선언 : let (added in ES6)

let name = 'song';
console.log(name);
name = 'yang';
console.log(name);

{
    let n = 10;
}

//console.log(n);      c와 마찬가지로 지역변수는 밖에서 사용 불가.

// 2. var 
// : ES6 이전에 선언시 사용했던 단어.
// var hoisting : 선언 위치에 상관없이 선언문이라면 제일 위로 끌어올려주는 기능.
// var는 지역에서 선언해도 밖에서 쓸 수 있다.
age=4;
var age;


// 3. const
// : 값을 변경할 수 없는 변수. 주로 보안상의 이유로 사용.

const k = 10;
// k=20;        오류.



// 4. Variable types
// primitive , single item : number, string, boolean, null, undefined, symbol
// object, box container (여러 primitive를 담음)
// function, first-class function (인자나 return값으로도 가능하다는 의미)

// c나 다른언어는(저급언어) 숫자만 해도 int, long등 다양하게 메모리 크기를 할당하는데 반해
// JS는 고급언어라 number 하나로 통일한다.
// 심지어 number도 쓰지 않고 그냥 let n = 10; 하면 dynamic하게 알아서 number로 선언된다.

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1/0;
const nInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);          // console에서 출력해보자.
console.log(nInfinity);
console.log(nAn);

const num=10;
console.log(`value: ${num}, type: ${typeof num}`);

// string
const char = 'c';
const str = 'songtaingeng';
const greeting = 'hello' + str;
const hello = `hi ${str}`;      // template literals. 위 방식보다 편하다.
console.log(greeting);
console.log(hello);


// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canDo = true;
const test = 3 < 1;
console.log(test);


// null
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`);


// undefinde
let x;
console.log(`value : ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects. 우선순위를 주거나, 고유한 식별자가 필요할 때.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
// 같은 스트링이라도 각각 심볼로 작성했으면, 서로 다르다.

const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 == symbol4);
// 이렇게하면 같은 스트링일때 같게된다.

console.log(`value : ${symbol1.description}, type: ${typeof symbol1}`);



// 5. Dynamic typing (vs c : 정적 타이핑 : 변수 선언시 타입결정)
// : 선언시 타입을 결정하지 않고 프로그램이 동작할 때 할당된 값에 따라 타입이 변경될 수 있다.
let text = 'hello';
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type: ${typeof text}`);   // stirng '75' 가 됨.
text = '8' / '2';
console.log(`value : ${text}, type: ${typeof text}`);   // number가 됨.
// 이러한 특성때문에 현업에서는 위험할 수 있다 -> TypeScript의 탄생 배경.
// TS는 JS에 type이 더 얹어진 것이다.



// object
const ellie = {name: 'ellie', age:20};
ellie.age=21;       // ellie 자체는 잠겨있지만 ellie.age는 풀려있다고 한다.