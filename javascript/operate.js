
//1. String concat
console.log('my' + 'dog');
console.log('1'+2);
console.log(`string literals :
...
 1+2 = ${1+2}`);
console.log('ellie\'s book');
console.log("yanngg\n book");

console.log(2**3);      // 2의 3제곱
// ++, --, +=, >=, ||, &&, switch, while, for 등 c와 같다.



// Equality
const stringFive = '5';
const numberFive = 5;

// == : loose equality, with type conversion
console.log(stringFive == numberFive);          // true
console.log(stringFive != numberFive);

// === : strict equality, no type conversion. 이걸 더 추천.
console.log(stringFive === numberFive);          // false
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);      // 서로다른 ref
console.log(ellie1 === ellie2);     // 똑같은 타입이든 아니든 ref이 다르기때문에..
console.log(ellie1 === ellie3);

console.log(0 == false);
console.log(0 === false);
console.log(''== false);
console.log(''=== false);
console.log(null == undefined);
console.log(null === undefined);



// If
const n=10;

if(n===20)
{
    console.log("hi");
}
else if(n===30)
{
    console.log("hello");
}
else
{
    console.log("bye");
}


// Ternary operator
console.log(n===10? 'yes' : 'no');